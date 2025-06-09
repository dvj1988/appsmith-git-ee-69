export default {
	count(data) {
		let arr = data.map(x => x.count)
		return arr.reduce(
			(accumulator, currentValue) => accumulator + currentValue,
			0,
		);
	},
	avg(data, d = 1) {
		let arrAvg = data.map(x => x.count * x.avg);
		let arrCount = data.map(x => x.count);
		let count = arrCount.reduce(
			(accumulator, currentValue) => accumulator + currentValue,
			0,
		);
		let total = arrAvg.reduce(
			(accumulator, currentValue) => accumulator + currentValue,
			0,
		);
		return parseFloat((total/(count * 60 * d)).toFixed(2)) ?? 0;
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
	}
}