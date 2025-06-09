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
	getMediumIssues(data) {
		return data.filter(x => x.severity === "medium");
	},
	getLowIssues(data) {
		return data.filter(x => x.severity === "low");
	},
	getNormalIssues(data) {
		return data.filter(x => x.severity === "normal");
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
	getResolvedCount(d) {
		const data = this.getResolvedIssues(d);
		return this.count(data);
	},
	getAforceCount(d) {
		const data = this.getAforceIssues(d);
		return this.count(data);
	},
	getPendingCount(d) {
		const data = this.getPendingOnCustomersIssues(d);
		return this.count(data);
	}
}