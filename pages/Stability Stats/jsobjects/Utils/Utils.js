export default {
	count(data) {
		let arr = data.map(x => x.count)
		return arr.reduce(
			(accumulator, currentValue) => accumulator + currentValue,
			0,
		);
	},
	getCriticalIssues(data) {
		return data.filter(x => x.severity === "critical");
	},
	getHighIssues(data) {
		return data.filter(x => x.severity === "high");
	},
	getEnterpriseIssues(data) {
		return data.filter(x => x.support_level === "enterprise_edition" || x.support_level === "trial_enterprise");
	},
	getBusinessIssues(data) {
		return data.filter(x => x.support_level === "business_edition" || x.support_level === "trial_business");
	},
	getCommunityIssues(data) {
		return data.filter(x => x.support_level === "community" || x.support_level === null || x.support_level === "");
	},
	getResolvedIssues(data) {
		return data.filter(x => x.status === "Resolved" || x.status === "Inactive" || x.status === "Ignore");
	},
	getAforceIssues(data) {
		return data.filter(x => x.status === "Pending on L1" || x.status === "Pending on L2");
	},
	getPendingOnCustomersIssues(data) {
		return data.filter(x => x.status === "Pending on Customer" || x.status === "In-progress");
	},
	getMonths() {
		let startDate = moment(filter_from.formattedDate);
		let endDate = moment(filter_to.formattedDate);
		let betweenMonths = [];

		if (startDate < endDate){
			 let date = startDate.startOf('month');

			 while (date < endDate.endOf('month')) {
					betweenMonths.push(moment(date).format('MMM, YY'));
					date.add(1,'month');
			 }
		}
		return betweenMonths;
	}
}