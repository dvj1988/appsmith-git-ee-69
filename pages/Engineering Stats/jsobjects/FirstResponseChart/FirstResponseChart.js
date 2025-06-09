export default {
	getEnterpriseCommonChart(bg, c) {
		const data = Utils.getEnterpriseIssues(get_first_response_time.data);
		return TimingChart.getTimingChart(data, bg, c);
	},
	getEnterpriseCriticalChart(bg, c) {
		const data = Utils.getEnterpriseIssues(Utils.getCriticalIssues(get_first_response_time.data));
		return TimingChart.getTimingChart(data, bg, c);
	},
	getEnterpriseHighChart(bg, c) {
		const data = Utils.getEnterpriseIssues(Utils.getHighIssues(get_first_response_time.data));
		return TimingChart.getTimingChart(data, bg, c);
	},
	getBusinessCommonChart(bg, c) {
		const data = Utils.getBusinessIssues(get_first_response_time.data);
		return TimingChart.getTimingChart(data, bg, c);
	},
	getBusinessCriticalChart(bg, c) {
		const data = Utils.getBusinessIssues(Utils.getCriticalIssues(get_first_response_time.data));
		return TimingChart.getTimingChart(data, bg, c);
	},
	getBusinessHighChart(bg, c) {
		const data = Utils.getBusinessIssues(Utils.getHighIssues(get_first_response_time.data));
		return TimingChart.getTimingChart(data, bg, c);
	},
	getCommunityCommonChart(bg, c) {
		const data = Utils.getCommunityIssues(get_first_response_time.data);
		return TimingChart.getTimingChart(data, bg, c);
	},
	getCommunityCriticalChart(bg, c) {
		const data = Utils.getCommunityIssues(Utils.getCriticalIssues(get_first_response_time.data));
		return TimingChart.getTimingChart(data, bg, c);
	},
	getCommunityHighChart(bg, c) {
		const data = Utils.getCommunityIssues(Utils.getHighIssues(get_first_response_time.data));
		return TimingChart.getTimingChart(data, bg, c);
	},
	getCommonChart(bg, c) {
		const data = get_first_response_time.data;
		return TimingChart.getTimingChart(data, bg, c);
	},
	getCommonCriticalChart(bg, c) {
		const data = Utils.getCriticalIssues(get_first_response_time.data);
		return TimingChart.getTimingChart(data, bg, c);
	},
	getCommonHighChart(bg, c) {
		const data = Utils.getHighIssues(get_first_response_time.data);
		return TimingChart.getTimingChart(data, bg, c);
	},
}