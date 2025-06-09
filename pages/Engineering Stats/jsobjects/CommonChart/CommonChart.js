export default {
	getCommonChart(bg, c) {
		return Chart.getChart(Common.getData(), bg, c);
	},
	getCriticalChart(bg, c) {
		return Chart.getChart(CommonCritical.getData(), bg, c);
	},
	getHighChart(bg, c) {
		return Chart.getChart(CommonHigh.getData(), bg, c);
	},
}