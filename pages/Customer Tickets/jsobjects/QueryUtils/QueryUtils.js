export default {
	fetchData() {
		resetWidget('data_table_all', true);
		Ticket_List.run();
	},
	async refreshData() {
		setInterval(this.fetchData(), 30000);
	},
}