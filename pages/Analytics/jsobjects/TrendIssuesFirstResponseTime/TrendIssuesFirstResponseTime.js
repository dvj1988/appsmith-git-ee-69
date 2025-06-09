export default {
	getIssueChart() {
		let data = Data_FirstResponse.getIssues();
		const issuesData = UtilsChart.getSeriesObject(UtilsChart.getIssueTimingValues(data), '# Issues');
		const yx = UtilsChart.getAxisObject('Hours', 'left');

		let in_data = Data_FirstResponse.in_getIssues();
		const in_issuesData = UtilsChart.getSeriesObject(UtilsChart.getIssueTimingValues(in_data), '# Slack');

		return UtilsChart.getChart([issuesData, in_issuesData], [yx]);
	},
	getCriticalIssueChart() {
		let data = Data_FirstResponse.getCriticalIssues();
		const issuesData = UtilsChart.getSeriesObject(UtilsChart.getIssueTimingValues(data), '# Issues');
		const yx = UtilsChart.getAxisObject('Hours', 'left');

		let in_data = Data_FirstResponse.in_getCriticalIssues();
		const in_issuesData = UtilsChart.getSeriesObject(UtilsChart.getIssueTimingValues(in_data), '# Slack');

		return UtilsChart.getChart([issuesData, in_issuesData], [yx]);
	},
	getHighIssueChart() {
		let data = Data_FirstResponse.getHighIssues();
		const issuesData = UtilsChart.getSeriesObject(UtilsChart.getIssueTimingValues(data), '# Issues');
		const yx = UtilsChart.getAxisObject('Hours', 'left');

		let in_data = Data_FirstResponse.in_getHighIssues();
		const in_issuesData = UtilsChart.getSeriesObject(UtilsChart.getIssueTimingValues(in_data), '# Slack');

		return UtilsChart.getChart([issuesData, in_issuesData], [yx]);
	},
}