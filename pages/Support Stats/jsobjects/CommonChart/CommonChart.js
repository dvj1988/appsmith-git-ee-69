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
	getMediumChart(bg, c) {
		return Chart.getChart(CommonMedium.getData(), bg, c);
	},
	getNormalChart(bg, c) {
		return Chart.getChart(CommonNormal.getData(), bg, c);
	},
	getLowChart(bg, c) {
		return Chart.getChart(CommonLow.getData(), bg, c);
	},
}