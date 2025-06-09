export default {
	getIssueChart() {
		let data = Data_IssuesCount.getIssues();
		const issuesData = UtilsChart.getSeriesObject(UtilsChart.getIssueChartValues(data), '# Issues');
		const yx = UtilsChart.getAxisObject('# Issues', 'left');

		let in_data = Data_IssuesCount.in_getIssues();
		const in_issuesData = UtilsChart.getSeriesObject(UtilsChart.getIssueChartValues(in_data), '# Slack');

		return UtilsChart.getChart([issuesData, in_issuesData], [yx]);
	},
	getCriticalIssueChart() {
		let data = Data_IssuesCount.getCriticalIssues();
		const issuesData = UtilsChart.getSeriesObject(UtilsChart.getIssueChartValues(data), '# Issues');
		const yx = UtilsChart.getAxisObject('# Issues', 'left');

		let in_data = Data_IssuesCount.in_getCriticalIssues();
		const in_issuesData = UtilsChart.getSeriesObject(UtilsChart.getIssueChartValues(in_data), '# Slack');

		return UtilsChart.getChart([issuesData, in_issuesData], [yx]);
	},
	getHighIssueChart() {
		let data = Data_IssuesCount.getHighIssues();
		const issuesData = UtilsChart.getSeriesObject(UtilsChart.getIssueChartValues(data), '# Issues');
		const yx = UtilsChart.getAxisObject('# Issues', 'left');

		let in_data = Data_IssuesCount.in_getHighIssues();
		const in_issuesData = UtilsChart.getSeriesObject(UtilsChart.getIssueChartValues(in_data), '# Slack');

		return UtilsChart.getChart([issuesData, in_issuesData], [yx]);
	},
}