export default {
	statusColors: {
		"New": "#DA70D6",
		"Pending on L1": "#FFC0CB",
		"Pending on L2": "#FFDAB9",
		"Pending on Customer": "#87CEFA",
		"In-progress": "#ADD8E6",
		"Reminder 1": "#ADD8E6",
		"Reminder 2": "#ADD8E6",
		"Inactive": "#D3D3D3",
		"On-hold": "#8B4513",
		"Resolved": "#90EE90",
		"Ignore": "#A9A9A9"
	},
	severityColors: {
    "emergency": "#8B008B",
    "critical": "#FF4500",
    "high": "#FFA500",
    "medium": "#FFFF00",
    "normal": "#B0E0E6",
    "low": "#B0E0E6"
  },
	impacted_env: 9584261238556,
	get_impacted_env() {
		const env = Ticket_Fields.data.ticket_fields.find(fd => fd.id === this.impacted_env);
		return env.custom_field_options;
	},
	issue_type: 9584543842844,
	get_issue_type() {
		const issue_type = Ticket_Fields.data.ticket_fields.find(fd => fd.id === this.issue_type);
		return issue_type.custom_field_options;
	},
	issue_context: 9584453461532,
	get_issue_context() {
		const issue_context = Ticket_Fields.data.ticket_fields.find(fd => fd.id === this.issue_context);
		return issue_context.custom_field_options;
	},
	get_tag_options() {
		return get_feature_tags.data.map(ft => ({
			label: ft.name,
			value: ft.zendesk,
		}))
	},
	async updateTicket() {
		await Ticket_Update_Metadata.run();
		OnLoad.main();
		this.syncMetaDataOnZendesk()
	},
	async updateTicketStatus(tier, severity, status) {
		tier = tier ? TicketConstants.tiers[tier] : false;
		await Ticket_Update_Status.run({
			tier, severity, status
		});
		OnLoad.main();
		this.syncMetaDataOnZendesk();
	},
	async syncMetaDataOnZendesk() {
		if(Ticket_Details.data[0].origin === "ZENDESK") {
			Zendesk_Metadata_Sync.run();
		} else {
			Front_Metadata_Sync.run();
		}
	},
	async getGithubIssues(create = false) {
		if (OnLoad.custId && create && (NewIssue?.data?.html_url || github_issue?.text)) {
			Link_Github_Issue.run({ issue: NewIssue?.data?.html_url ?? github_issue?.text });
		}
		let issues = await get_github_issues.run()
		console.log("ISSUES", issues);
		issues = issues[0].github_issues?.split(", ").map(i => ({
			issue: i
		}));
		await storeValue('githubIssues', issues, false);
		return issues;
	},
	async deleteGithubIssue(id) {
		let issues = appsmith.store.githubIssues;
		issues.splice(id, 1);
		await storeValue('githubIssues', issues, false);
		update_github_issues.run({ issues: issues.map(i => i.issue).join(", ") }).then(() => {
			this.getGithubIssues();
		});
	},
	async addCustomerToGithubIssue() {
		const id = github_issue.text.split("/").reverse()[0]
		await getIssues.run({ id });
		updateIssue.run({
    	id
  	});
  	resetWidget("github_issue", true);
	}
}