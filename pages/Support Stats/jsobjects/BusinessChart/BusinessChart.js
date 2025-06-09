export default {
	getCommonChart(bg, c) {
		return Chart.getChart(Business.getData(), bg, c);
	},
	getCriticalChart(bg, c) {
		return Chart.getChart(BusinessCritical.getData(), bg, c);
	},
	getHighChart(bg, c) {
		return Chart.getChart(BusinessHigh.getData(), bg, c);
	},
}