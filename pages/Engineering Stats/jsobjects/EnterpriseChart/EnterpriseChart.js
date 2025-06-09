export default {
	getCommonChart(bg, c) {
		return Chart.getChart(Enterprise.getData(), bg, c);
	},
	getCriticalChart(bg, c) {
		return Chart.getChart(EnterpriseCritical.getData(), bg, c);
	},
	getHighChart(bg, c) {
		return Chart.getChart(EnterpriseHigh.getData(), bg, c);
	},
}