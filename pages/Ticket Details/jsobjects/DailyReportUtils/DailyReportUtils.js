export default {
	async updateDailyReport() {
		await Ticket_Update_Daily_Reported.run({ state: reported_daily.isSwitchedOn });
		OnLoad.main();
	},
	shouldBeReported() {
		const { support_level, severity, status } = Ticket_Details.data[0]

		const supportConstraints = [
			"business_edition",
			"trial_enterprise",
			"enterprise_edition",
			"trial_business"
		]

		const severityConstraints = [
			"critical",
			"high"
		]

		const statusConstraints = [
			"In-progress",
			"New",
			"Pending on Customer",
			"Pending on L2",
			"Pending on L1"
		]
		
		const isHighSeverity = severityConstraints.includes(severity)
		const isInProgress = statusConstraints.includes(status)
		const isPaidUser = supportConstraints.includes(support_level)

		return isHighSeverity && isInProgress && isPaidUser
	},
	util() {
		return Jim_Telescope.data.map(item => item.status)
	}
}