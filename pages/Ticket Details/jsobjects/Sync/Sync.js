export default {
	async syncTicket() {
		const origin = Ticket_Details.data[0].origin;
		const id = Ticket_Details.data[0].zid;

		if (origin === "ZENDESK") {
			showAlert("Syncing Zendesk Ticket !")
			await Zendesk_License_Sync.run({ id });
			await setTimeout(async () => {
				await Zendesk_Ticket_Sync.run({ id });
				await setTimeout(OnLoad.main, 5000)
			}, 5000);
		} else {
			showAlert("Syncing Front Ticket !")
			await Front_License_Sync.run({ id });
			await setTimeout(async () => {
				await Front_Ticket_Sync.run({ id });
				await setTimeout(OnLoad.main, 5000)
			}, 5000);
		}
	}
}