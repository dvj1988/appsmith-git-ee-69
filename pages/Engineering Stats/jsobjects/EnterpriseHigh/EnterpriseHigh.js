export default {
	getData() {
		const data = Utils.getEnterpriseIssues(Utils.getHighIssues(get_stats.data));
		return data;
	},
	getCount() {
		const data = this.getData();
		return Utils.count(data);
	},
	getResolvedCount() {
		const data = Utils.getResolvedIssues(this.getData());
		return Utils.count(data);
	},
	getAforceCount() {
		const data = Utils.getAforceIssues(this.getData());
		return Utils.count(data);
	},
	getPendingCount() {
		const data = Utils.getPendingOnCustomersIssues(this.getData());
		return Utils.count(data);
	},
}