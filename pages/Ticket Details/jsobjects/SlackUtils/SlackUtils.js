export default {
	getSlackUsers() {
		return slack_get_users.data.members.filter(mm => !mm.deleted && !mm.is_bot).map(user => ({
			name: user.real_name || user.name,
			id: user.id
		}));
	},
	getSlackUserGroups() {
		return slack_get_groups.data.usergroups.map(user => ({
			name: user.name,
			id: user.id
		}));
	},
	getSlackL1Owners() {
		return [
			{
				name: "Amelia",
				id: "U035SFJHW3A"
			},
			{
				name: "Jimmy",
				id: "U035XMTN1H9"
			},
			{
				name: "Pranav",
				id: "U021JMQNQ3W"
			}
		];
	},
	getSlackThreadMessage() {
		const mentions = (
			slack_l2_owners.selectedOptionValues.length > 0 ? ('\n*L2 Owner:* <!subteam^' + slack_l2_owners.selectedOptionValues.join('> <!subteam^') + '>\n') : ''
		) + (
			slack_l1_owners.selectedOptionValues.length > 0 ? ('*Owner:* <@' + slack_l1_owners.selectedOptionValues.join('> <@') + '>\n') : ''
		) + (
			slack_cc.selectedOptionValues.length > 0 ? ('*CC:* <@' + slack_cc.selectedOptionValues.join('> <@') + '>') : ''
		)
		return slack_thread_text.text + mentions;
	},
	async setRelatedFeatures() {
		const { id } = Ticket_Details.data[0]
		if (!id) return
		const { response } = await related_features_ai.run()
		await Ticket_UpdateRelatedFeatures.run({
			features: response,
			id
		})
	},
	async createSlackThread() {
		await this.setRelatedFeatures()
		let { channel, ts } = await slack_post_thread.run();
		if (channel && ts) {
			console.log({ channel, ts })
			const url = `https://theappsmith.slack.com/archives/${channel}/p` + ts.split('.').join('');
			const resp = await Ticket_Update_Slack_URL.run({ url });
			console.log(resp)
			showAlert('Created A Slack Thread', "success");
			if (slack_reported_daily.isSwitchedOn) {
				await Ticket_Update_Daily_Reported.run({ state: slack_reported_daily.isSwitchedOn })
			}
			OnLoad.main();
			TicketUtils.syncMetaDataOnZendesk();
		}
	},
	async updateSlackThread() {
		await this.setRelatedFeatures()
		const url = input_slack_thread.text;
		const resp = await Ticket_Update_Slack_URL.run({ url });
		console.log(resp)
		showAlert('Updated A Slack Thread', "success");
		OnLoad.main();
		TicketUtils.syncMetaDataOnZendesk();
	},
	getTicketOwners() {
		const scenariosMap = {};
		Ticket_Product_Areas.data.forEach(ff => {
			scenariosMap[ff.scenario] = ff.slack_owner_id;
		})
		const selected = product_area.selectedOptionValues.map(ff => scenariosMap[ff]);
		const unique = selected.filter((value, index, array) => array.indexOf(value) === index);
		return unique;
	}
}