export default {
	getIssues: () => UtilsData.getBusinessIssues(MetricsAll.getIssues()),
	getCriticalIssues: () => UtilsData.getCriticalIssues(this.getIssues()),
	getHighIssues: () => UtilsData.getHighIssues(this.getIssues()),

	getIssuesCount: () => UtilsData.count(this.getIssues()),
	getResolvedCount: () => UtilsData.getResolvedCount(this.getIssues()),
	getAforceCount: () => UtilsData.getAforceCount(this.getIssues()),
	getPendingCount: () => UtilsData.getPendingCount(this.getIssues()),

	getCriticalIssueCount: () => UtilsData.count(this.getCriticalIssues()),
	getCriticalResolvedCount: () => UtilsData.getResolvedCount(this.getCriticalIssues()),
	getCriticalAforceCount: () => UtilsData.getAforceCount(this.getCriticalIssues()),
	getCriticalPendingCount: () => UtilsData.getPendingCount(this.getCriticalIssues()),

	getHighIssueCount: () => UtilsData.count(this.getHighIssues()),
	getHighResolvedCount: () => UtilsData.getResolvedCount(this.getHighIssues()),
	getHighAforceCount: () => UtilsData.getAforceCount(this.getHighIssues()),
	getHighPendingCount: () => UtilsData.getPendingCount(this.getHighIssues()),
	
	in_getIssues: () => UtilsData.getBusinessIssues(MetricsAll.in_getIssues()),
	in_getCriticalIssues: () => UtilsData.getCriticalIssues(this.in_getIssues()),
	in_getHighIssues: () => UtilsData.getHighIssues(this.in_getIssues()),

	in_getIssuesCount: () => UtilsData.count(this.in_getIssues()),
	in_getResolvedCount: () => UtilsData.getResolvedCount(this.in_getIssues()),
	in_getAforceCount: () => UtilsData.getAforceCount(this.in_getIssues()),
	in_getPendingCount: () => UtilsData.getPendingCount(this.in_getIssues()),

	in_getCriticalIssueCount: () => UtilsData.count(this.in_getCriticalIssues()),
	in_getCriticalResolvedCount: () => UtilsData.getResolvedCount(this.in_getCriticalIssues()),
	in_getCriticalAforceCount: () => UtilsData.getAforceCount(this.in_getCriticalIssues()),
	in_getCriticalPendingCount: () => UtilsData.getPendingCount(this.in_getCriticalIssues()),

	in_getHighIssueCount: () => UtilsData.count(this.in_getHighIssues()),
	in_getHighResolvedCount: () => UtilsData.getResolvedCount(this.in_getHighIssues()),
	in_getHighAforceCount: () => UtilsData.getAforceCount(this.in_getHighIssues()),
	in_getHighPendingCount: () => UtilsData.getPendingCount(this.in_getHighIssues()),
}
