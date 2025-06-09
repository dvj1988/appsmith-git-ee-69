export default {
	async updateDailyReport() {
		const selected = data_table_all.selectedRowIndex;
		await Ticket_Update_Daily_Reported.run({ 
			isDailyReported: ticket_daily_reported.isSwitchedOn,
			isBlocked: ticket_blocked.isSwitchedOn,
			isPendingCall: ticket_pending_call.isSwitchedOn
		});
		await Ticket_List.run()
		data_table_all.setSelectedRowIndex(selected);
	},
	async onDailyFilterSwitch() {
		if (filter_daily_reported.isSwitchedOn) {
			await Ticket_Cleanup_Daily_Reported.run()
		}
		await Ticket_List.run()
	},
	debug() {
		return Object.entries(Ticket_List.data[8])
	},
	generateReport() {
		const paidTiers = [
			"business_edition",
			"trial_enterprise",
			"enterprise_edition",
			"trial_business"
		]
		// We monitor paid and free issues in separate lists
		const sortByStatus = (a,b) => {
			return this.IssueStatus[a.status]?.value - this.IssueStatus[b.status]?.value
		}
		const paidIssues = Ticket_List.data.filter(issue => paidTiers.includes(issue.support_level))
																				.sort(sortByStatus)
		
		const freeIssues = Ticket_List.data.filter(issue => !paidTiers.includes(issue.support_level))
																				.sort(sortByStatus)
		const todaysDate = moment().format('MMM DD, YYYY')
		const paidTitle = 'BE/EE Issues'
		const freeTitle = 'Community Issues'

		const displayIssues = (issueList, asHtml = true) => {
			const blockedIssues = issueList.filter(issue => issue.isblocked)
			const unblockedIssues = issueList.filter(issue => !issue.isblocked)
			const listIssues = (list) => {
				return list.map((issue, i) => {
					const { 
						severity, 
						requester_name, 
						requester_email, 
						origin,
						slack_thread, 
						status,
						pendingcall,
						l2owner 
					} = issue
					// Discord users don't have an email but we have the username in requester_name.
					const source = origin.toLowerCase() === "discord" ? requester_name : requester_email
					const tier = this.IssueTier[severity]
					const issueStatus = this.IssueStatus[pendingcall ? "Pending Call" : status]
					const duration = this.getDuration(issue)
					
					let subject = issue.subject
					// An ITAC issue threw a wrench into the works with a slack link in the subject
					// that broke the way I'm making slack links. Scrubbing slack links from subjects
					// for now.
					subject = subject.replace(/<(https?:\/\/[^|]+)\|([^>]+)>?/g, '$1')
					// Sometimes the subject is too long. We'll trim it for now, but this should be improved.
					if (subject.length > 62) {
						subject = subject.substring(0, 62).trim() + "..."
					}

					return asHtml ? `<b>${i+1}. ${tier?.icon} ${source}:</b> <a href="${slack_thread}">${subject}</a><br>
				<ul>
					<li><b>Current Status:</b> ${issueStatus?.icon} ${issueStatus?.displayName}</li>
					<li><b>L2:</b> ${l2owner ? '<@' + l2owner + '>' : 'No response from L2'}</li>
					<li>Pending for ${duration}</li>
				</ul>`
					: `*${i+1}. ${tier?.icon} ${source}:* <${slack_thread}|${subject}>
	- *Current Status:* ${issueStatus?.icon} ${issueStatus?.displayName}
	- *L2:* ${l2owner ? '<@' + l2owner + '>' : 'No response from L2'}
	- Pending for ${duration}`
				}).join(asHtml ? '<br><br>' : '\n\n')
			}

			let issueDisplay = asHtml ? '<b>====== Blocked</b><br><br>' : '*====== Blocked*\n\n'
			issueDisplay += listIssues(blockedIssues)

			issueDisplay += asHtml ? '<b>====== Unblocked</b><br><br>' : '\n\n*====== Unblocked*\n\n'
			issueDisplay += listIssues(unblockedIssues)

			return issueDisplay
		}

		let reportPreview = `<b>Daily Update - Enterprise/Critical queries</b><br>
Date: ${todaysDate}`

		if (paidIssues.length) {
			reportPreview += `<br><br><b>${paidTitle}:</b><br>
${displayIssues(paidIssues)}`
		}

		if (freeIssues.length) {
			reportPreview += `<br><br><b>${freeTitle}:</b><br>
${displayIssues(freeIssues)}`
		}

		let report = `*Daily Update - Enterprise/Critical queries*
Date: ${todaysDate}`
		if (paidIssues.length) {
			report += `\n\n*${paidTitle}:*
${displayIssues(paidIssues, false)}`
		}

		if (freeIssues.length) {
			report += `\n\n*${freeTitle}:*
${displayIssues(freeIssues, false)}`
		}
		return {
			asHTML: reportPreview,
			asMarkdown: report
		}
	},
	IssueStatus: {
		'Pending on L1': {
			icon: '🔴',
			value: 0,
			name: 'Pending on L1',
			displayName: 'Pending on A-Force'
		},
		'Pending on L2': {
			icon: '🔴',
			value: 0,
			name: 'Pending on L2',
			displayName: 'Pending on A-Force'
		},
		'Pending Call': {
			icon: '☎️',
			value: 1,
			name: 'Pending on Customer',
			displayName: 'Pending Call'
		},
		'Pending on Customer': {
			icon: '🧑‍💻',
			value: 2,
			name: 'Pending on Customer',
			displayName: 'Pending on Customer'
		},
		'On-hold': {
			icon: '💤',
			value: 3,
			name: 'On-hold',
			displayName: 'On-hold'
		},
		'Inactive': {
			icon: '🛏',
			value: 4,
			name: 'Inactive',
			displayName: 'Inactive'
		},
		'Resolved': {
			icon: '✅',
			value: 5,
			name: 'Resolved',
			displayName: 'Resolved'
		}
	},
	IssueTier: {
		critical: { icon: '1️⃣', value: 0, name: 'T1' },
		high: { icon: '2️⃣', value: 1, name: 'T2' },
		medium: { icon: '3️⃣', value: 2, name: 'T3' },
		normal: { icon: '4️⃣', value: 3, name: 'T4' },
		low: { icon: '5️⃣', value: 4, name: 'T5' }
	},
	formatDuration(duration) {
		return duration
			.replace(/a(\s+)/, '1$1')
			.replace(/^.*(minute[s]?|hour[s]?|few).*/, '1 day')
		// .replace(/\sday[s]?/, 'd')
		// .replace(/\smonth[s]?/, 'M')
	},
	getDuration(issue) {
		return this.formatDuration(moment(issue.created_at).fromNow(true))
	},
	async postDailyReport() {
		await slack_post_to_aforce.run()
	}
}