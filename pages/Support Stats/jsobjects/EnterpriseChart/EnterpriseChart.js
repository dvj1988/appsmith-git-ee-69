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
	getMediumChart(bg, c) {
		return Chart.getChart(EnterpriseMedium.getData(), bg, c);
	},
	getNormalChart(bg, c) {
		return Chart.getChart(EnterpriseNormal.getData(), bg, c);
	},
	getLowChart(bg, c) {
		return Chart.getChart(EnterpriseLow.getData(), bg, c);
	},
}