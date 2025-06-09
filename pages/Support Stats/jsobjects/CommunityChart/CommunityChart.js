export default {
	getCommonChart(bg, c) {
		return Chart.getChart(Community.getData(), bg, c);
	},
	getCriticalChart(bg, c) {
		return Chart.getChart(CommunityCritical.getData(), bg, c);
	},
	getHighChart(bg, c) {
		return Chart.getChart(CommunityHigh.getData(), bg, c);
	},
}