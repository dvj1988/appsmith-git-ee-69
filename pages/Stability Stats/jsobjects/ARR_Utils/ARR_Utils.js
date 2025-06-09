export default {
	getDomain(mail) {
		const ft = mail.split('@')[1];
		if (ft == 'appsmith.com') {
			return 'needs revision';
		} else if (ft != 'gmail.com' && ft != 'outlook.com' && ft != 'unknown.com') {
			return ft
		}  else {
			return mail;
		}
	},
	getAmountByMonth() {
		const data = get_stats.data;
		let amounts = {};
		let monthlyData = {};
		data.forEach(dt => {
			const mth = moment(dt.week).format('MMM, YY');
			monthlyData[mth] = [
				...(monthlyData[mth] || []),
				this.getDomain(dt.requester_email)
			]
		});
		// return monthlyData;
		const months = Object.keys(monthlyData);
		const amtByMail = Onload.getAmounts();
		for (let i = 0; i < months.length; i++) {
			let mails = monthlyData[months[i]];
			mails = new Set(mails);
			mails = [...mails];
			let amt = 0;
			for (let j = 0; j < mails.length; j++) {
				amt += amtByMail[mails[j]]?.[0] ?? 0
			}
			amounts[months[i]] = Math.round(amt);
		}
		return amounts;
	}
}