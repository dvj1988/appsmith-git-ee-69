export default {
	async loadData() {
		await Product_Analytics.run();
		await Ticket_List.run();
	}
}