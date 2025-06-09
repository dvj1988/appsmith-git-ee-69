export default {
	getIssuesCount() {
  	const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.getIssuesCount();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.getIssuesCount();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.getIssuesCount();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.getIssuesCount();
	},
	getResolvedCount() {
	  const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.getResolvedCount();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.getResolvedCount();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.getResolvedCount();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.getResolvedCount();
	},
	getAforceCount() {
	  const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.getAforceCount();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.getAforceCount();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.getAforceCount();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.getAforceCount();
	},
	getPendingCount() {
	  const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.getPendingCount();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.getPendingCount();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.getPendingCount();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.getPendingCount();
	},

	getCriticalIssueCount() {
	  const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.getCriticalIssueCount();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.getCriticalIssueCount();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.getCriticalIssueCount();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.getCriticalIssueCount();
	},
	getCriticalResolvedCount() {
	  const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.getCriticalResolvedCount();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.getCriticalResolvedCount();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.getCriticalResolvedCount();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.getCriticalResolvedCount();
	},
	getCriticalAforceCount() {
	  const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.getCriticalAforceCount();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.getCriticalAforceCount();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.getCriticalAforceCount();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.getCriticalAforceCount();
	},
	getCriticalPendingCount() {
	  const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.getCriticalPendingCount();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.getCriticalPendingCount();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.getCriticalPendingCount();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.getCriticalPendingCount();
	},

	getHighIssueCount() {
	  const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.getHighIssueCount();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.getHighIssueCount();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.getHighIssueCount();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.getHighIssueCount();
	},
	getHighResolvedCount() {
	  const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.getHighResolvedCount();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.getHighResolvedCount();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.getHighResolvedCount();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.getHighResolvedCount();
	},
	getHighAforceCount() {
	  const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.getHighAforceCount();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.getHighAforceCount();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.getHighAforceCount();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.getHighAforceCount();
	},
	getHighPendingCount() {
	  const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.getHighPendingCount();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.getHighPendingCount();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.getHighPendingCount();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.getHighPendingCount();
	},

	in_getIssuesCount() {
	  const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.in_getIssuesCount();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.in_getIssuesCount();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.in_getIssuesCount();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.in_getIssuesCount();
	},
	in_getResolvedCount() {
	  const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.in_getResolvedCount();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.in_getResolvedCount();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.in_getResolvedCount();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.in_getResolvedCount();
	},
	in_getAforceCount() {
	  const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.in_getAforceCount();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.in_getAforceCount();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.in_getAforceCount();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.in_getAforceCount();
	},
	in_getPendingCount() {
	  const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.in_getPendingCount();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.in_getPendingCount();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.in_getPendingCount();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.in_getPendingCount();
	},

	in_getCriticalIssueCount() {
	  const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.in_getCriticalIssueCount();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.in_getCriticalIssueCount();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.in_getCriticalIssueCount();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.in_getCriticalIssueCount();
	},
	in_getCriticalResolvedCount() {
	  const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.in_getCriticalResolvedCount();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.in_getCriticalResolvedCount();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.in_getCriticalResolvedCount();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.in_getCriticalResolvedCount();
	},
	in_getCriticalAforceCount() {
	  const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.in_getCriticalAforceCount();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.in_getCriticalAforceCount();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.in_getCriticalAforceCount();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.in_getCriticalAforceCount();
	},
	in_getCriticalPendingCount() {
	  const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.in_getCriticalPendingCount();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.in_getCriticalPendingCount();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.in_getCriticalPendingCount();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.in_getCriticalPendingCount();
	},

	in_getHighIssueCount() {
	  const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.in_getHighIssueCount();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.in_getHighIssueCount();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.in_getHighIssueCount();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.in_getHighIssueCount();
	},
	in_getHighResolvedCount() {
	  const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.in_getHighResolvedCount();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.in_getHighResolvedCount();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.in_getHighResolvedCount();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.in_getHighResolvedCount();
	},
	in_getHighAforceCount() {
	  const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.in_getHighAforceCount();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.in_getHighAforceCount();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.in_getHighAforceCount();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.in_getHighAforceCount();
	},
	in_getHighPendingCount() {
	  const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.in_getHighPendingCount();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.in_getHighPendingCount();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.in_getHighPendingCount();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.in_getHighPendingCount();
	},
}