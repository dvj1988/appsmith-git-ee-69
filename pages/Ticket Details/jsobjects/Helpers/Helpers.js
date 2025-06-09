export default {
	OriginalURLs: {
		ZENDESK: "https://appsmith3239.zendesk.com/agent/tickets/",
		INTERCOM: "https://app.frontapp.com/open/",
		DISCORD: "https://app.frontapp.com/open/"
	},
	getOriginalUrl() {
		const origin = Ticket_Details.data[0].origin;
		const zid = Ticket_Details.data[0].zid;
		
		return this.OriginalURLs[origin] + `${zid}`;
	}
}