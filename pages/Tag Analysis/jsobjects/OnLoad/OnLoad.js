export default {
	async loadData() {
		await Promise.all([
			Ticket_List.run(),	 
			Tag_Analytics.run()
		])
	}
}