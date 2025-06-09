export default {
	getIssues: () => Utils.getEnterpriseIssues(MetricsAll.getIssues()),
	getCriticalIssues: () => Utils.getCriticalIssues(this.getIssues()),
	getHighIssues: () => Utils.getHighIssues(this.getIssues()),

	getIssuesCount: () => Utils.count(this.getIssues()),
	getResolvedCount: () => Utils.getResolvedCount(this.getIssues()),
	getAforceCount: () => Utils.getAforceCount(this.getIssues()),
	getPendingCount: () => Utils.getPendingCount(this.getIssues()),

	getCriticalIssueCount: () => Utils.count(this.getCriticalIssues()),
	getCriticalResolvedCount: () => Utils.getResolvedCount(this.getCriticalIssues()),
	getCriticalAforceCount: () => Utils.getAforceCount(this.getCriticalIssues()),
	getCriticalPendingCount: () => Utils.getPendingCount(this.getCriticalIssues()),

	getHighIssueCount: () => Utils.count(this.getHighIssues()),
	getHighResolvedCount: () => Utils.getResolvedCount(this.getHighIssues()),
	getHighAforceCount: () => Utils.getAforceCount(this.getHighIssues()),
	getHighPendingCount: () => Utils.getPendingCount(this.getHighIssues()),
}
