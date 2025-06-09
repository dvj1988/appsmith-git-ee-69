export default {
	getIssues() {
		const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.getIssues();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.getIssues();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.getIssues();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.getIssues();
	},
	in_getIssues() {
		const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.in_getIssues();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.in_getIssues();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.in_getIssues();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.in_getIssues();
	},
	getCriticalIssues() {
		const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.getCriticalIssues();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.getCriticalIssues();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.getCriticalIssues();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.getCriticalIssues();
	},
	in_getCriticalIssues() {
		const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.in_getCriticalIssues();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.in_getCriticalIssues();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.in_getCriticalIssues();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.in_getCriticalIssues();
	},
	getHighIssues() {
		const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.getHighIssues();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.getHighIssues();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.getHighIssues();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.getHighIssues();
	},
	in_getHighIssues() {
		const selected = ReportOptions.selectedOptionValue;
  	if (CONSTANTS.reportOptions.ALL == selected) return MetricsAll.in_getHighIssues();
  	if (CONSTANTS.reportOptions.COMMUNITY == selected) return MetricsCommunity.in_getHighIssues();
  	if (CONSTANTS.reportOptions.BUSINESS == selected) return MetricsBusiness.in_getHighIssues();
  	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return MetricsEnterprise.in_getHighIssues();
	},
}