export default {
	getEnterpriseCommonChart(bg, c) {
		const data = Utils.getEnterpriseIssues(get_resolution_time.data);
		return TimingChart.getTimingChart(data, bg, c, 24);
	},
	getEnterpriseCriticalChart(bg, c) {
		const data = Utils.getEnterpriseIssues(Utils.getCriticalIssues(get_resolution_time.data));
		return TimingChart.getTimingChart(data, bg, c, 24);
	},
	getEnterpriseHighChart(bg, c) {
		const data = Utils.getEnterpriseIssues(Utils.getHighIssues(get_resolution_time.data));
		return TimingChart.getTimingChart(data, bg, c, 24);
	},
	getBusinessCommonChart(bg, c) {
		const data = Utils.getBusinessIssues(get_resolution_time.data);
		return TimingChart.getTimingChart(data, bg, c, 24);
	},
	getBusinessCriticalChart(bg, c) {
		const data = Utils.getBusinessIssues(Utils.getCriticalIssues(get_resolution_time.data));
		return TimingChart.getTimingChart(data, bg, c, 24);
	},
	getBusinessHighChart(bg, c) {
		const data = Utils.getBusinessIssues(Utils.getHighIssues(get_resolution_time.data));
		return TimingChart.getTimingChart(data, bg, c, 24);
	},
	getCommunityCommonChart(bg, c) {
		const data = Utils.getCommunityIssues(get_resolution_time.data);
		return TimingChart.getTimingChart(data, bg, c, 24);
	},
	getCommunityCriticalChart(bg, c) {
		const data = Utils.getCommunityIssues(Utils.getCriticalIssues(get_resolution_time.data));
		return TimingChart.getTimingChart(data, bg, c, 24);
	},
	getCommunityHighChart(bg, c) {
		const data = Utils.getCommunityIssues(Utils.getHighIssues(get_resolution_time.data));
		return TimingChart.getTimingChart(data, bg, c, 24);
	},
	getCommonChart(bg, c) {
		const data = get_resolution_time.data;
		return TimingChart.getTimingChart(data, bg, c, 24);
	},
	getCommonCriticalChart(bg, c) {
		const data = Utils.getCriticalIssues(get_resolution_time.data);
		return TimingChart.getTimingChart(data, bg, c, 24);
	},
	getCommonHighChart(bg, c) {
		const data = Utils.getHighIssues(get_resolution_time.data);
		return TimingChart.getTimingChart(data, bg, c, 24);
	},
}