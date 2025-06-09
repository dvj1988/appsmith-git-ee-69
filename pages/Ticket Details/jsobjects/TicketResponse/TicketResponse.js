export default {
	async respondToTickets() {
		if(Ticket_Details.data[0].origin === "ZENDESK") {
			if (this.isInternalNote()) {
				await Zendesk_Ticket_RespondInternal.run();
			}
			else {
				await Zendesk_Ticket_Respond.run();
			}
		} else {
			if (this.isInternalNote()) {
				await Front_Ticket_Respond_Internal.run();
			}
			else {
				await Front_Ticket_Respond.run();
			}
		}
		await resetWidget("input_response");
		await setTimeout(OnLoad.main, 5000);
	},
	isInternalNote() {
		return internal_note.isSwitchedOn;
	}
}