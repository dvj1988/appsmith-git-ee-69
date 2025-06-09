export default {
	licenses: {},
	amounts: {},
	async main() {
		let licenses = {};
		let data = await get_requester_emails.run();
		data = data.map(dt => dt.requester_email);
		let searchStrings = [];
		data.forEach(dt => {
			const ft = dt.split('@')[1];
			if (ft == 'appsmith.com') {
				// skip
			} else if (ft != 'gmail.com' && ft != 'outlook.com' && ft != 'unknown.com') {
				searchStrings.push(ft)
			}  else {
				searchStrings.push(dt);
			}
		});
		
		for (let i = 0; i < searchStrings.length; i++) {
			let list = [];
			let st = searchStrings[i];
			let lisc = await Fetch_Licenses.run({ st });
			list = [...lisc.data.data];
			licenses[st] = list.filter(m => m.licenseStatus != 'EXPIRED');
		}
		// return licenses;
		this.licenses = licenses;
		
		let amounts = {};
		for(let j = 0; j < searchStrings.length; j++) {
			const st = searchStrings[j];
			amounts[st] = [];
			let business = licenses[st].filter(m => m.licensePlan == 'BUSINESS').map(m => m?.subscription?.customerId);
			let enterprise = licenses[st].filter(m => m.licensePlan != 'BUSINESS').map(m => m?.subscription?.customerId);
			
			for(let i = 0; i < business.length; i++) {
				let bamt = await business_get_amount_by_id.run({ ids: "'" + business[i] + "'"});
				bamt = bamt.map(b => (b.amount * 12)/100)
				if (bamt.length > 0) {
					amounts[st] = [...bamt];
				}
			}
			for(let i = 0; i < enterprise.length; i++) {
				let eamt = await enterprise_get_amount_by_id.run({ ids: "'" + enterprise[i] + "'"});
				eamt = eamt.map(e => parseFloat(e.amount))
				if (eamt.length > 0) {
					amounts[st] = [...amounts[st], ...eamt];
				}
			}
		}
		this.amounts = amounts;
		return amounts;
	},
	getDate() {
		return new Date(filter_from.formattedDate) / 1000;
	},
	getLicenses() {
		return this.licenses;
	},
	getAmounts() {
		return this.amounts;
	}
}