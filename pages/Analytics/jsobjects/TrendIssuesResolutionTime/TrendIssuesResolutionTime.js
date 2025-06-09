export default {
	getIssueChart() {
		let data = Data_Resolution.getIssues();
		const issuesData = UtilsChart.getSeriesObject(UtilsChart.getIssueTimingValues(data, 24), '# Issues');
		const yx = UtilsChart.getAxisObject('Days', 'left');

		let in_data = Data_Resolution.in_getIssues();
		const in_issuesData = UtilsChart.getSeriesObject(UtilsChart.getIssueTimingValues(in_data, 24), '# Slack');

		return UtilsChart.getChart([issuesData, in_issuesData], [yx]);
	},
	getCriticalIssueChart() {
		let data = Data_Resolution.getCriticalIssues();
		const issuesData = UtilsChart.getSeriesObject(UtilsChart.getIssueTimingValues(data, 24), '# Issues');
		const yx = UtilsChart.getAxisObject('Days', 'left');

		let in_data = Data_Resolution.in_getCriticalIssues();
		const in_issuesData = UtilsChart.getSeriesObject(UtilsChart.getIssueTimingValues(in_data, 24), '# Slack');

		return UtilsChart.getChart([issuesData, in_issuesData], [yx]);
	},
	getHighIssueChart() {
		let data = Data_Resolution.getHighIssues();
		const issuesData = UtilsChart.getSeriesObject(UtilsChart.getIssueTimingValues(data, 24), '# Issues');
		const yx = UtilsChart.getAxisObject('Days', 'left');

		let in_data = Data_Resolution.in_getHighIssues();
		const in_issuesData = UtilsChart.getSeriesObject(UtilsChart.getIssueTimingValues(in_data, 24), '# Slack');

		return UtilsChart.getChart([issuesData, in_issuesData], [yx]);
	},
}