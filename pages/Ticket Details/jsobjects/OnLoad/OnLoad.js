export default {
	tickedIdCheck(){
		if(!(appsmith.URL.queryParams.id || appsmith.URL.queryParams.zid)){
			showModal(TicketIdInValidModal.name)
		}
	},
	async main() {
		const id = appsmith.URL.queryParams.id;
		const zid = appsmith.URL.queryParams.zid;
		let filter = false;
		if (!!id) {
			filter = `id = '${id}'`;
		} else if(!!zid) {
			filter = `zid = '${zid}'`;
		}
		if (filter) {
			const resp = await Ticket_Details.run({ filter });
			this.fetchLicenses(resp[0]);
			if (!CreateThreadAndRun.data) {
				OpenAI_Assistant.main();
			}
			
			TicketUtils.getGithubIssues();
		}
	},
	licenses: [],
	custId: null,
	async fetchLicenses(data) {
		this.licenses = [];
		let searchStrings = [];
		let email = data?.requester_email;
		let domain = email?.split('@').reverse()[0];
		if (domain === "gmail.com") {
			searchStrings = [
				email				
			]
			domain = email;
		} else if (domain === "appsmith.com" || email === domain) {
			email = undefined;
			domain = undefined;
		} else {
			searchStrings = [
				email,
				domain
			]
		}
		
		console.log({ searchStrings })
		let results = [];
		try {
			for (let i = 0; i < searchStrings.length; i++) {
				const st = searchStrings[i];
				const st_lice = await Fetch_Licenses.run({ st });
				const filtered = st_lice?.data?.data.filter(li => li.licenseStatus === "ACTIVE" || li.licenseStatus === "IN_GRACE_PERIOD");
				results = [...results, ...filtered];
			}
			
			results = results.filter(d => d.licenseStatus === "ACTIVE" || d.licenseStatus === "IN_GRACE_PERIOD")
		} catch (e) {
			console.log(e)
		}
		this.licenses = results;
		const custId = results?.[0]?.["subscription"]?.["customerId"];
		if (custId) {
			this.custId = custId;
		}
	}
}