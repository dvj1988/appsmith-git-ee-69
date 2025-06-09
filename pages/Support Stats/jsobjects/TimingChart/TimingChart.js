export default {
	getTimingChart(data, bg, c, d = 1) {
		// data = ResolutionChart.getEnterpriseData();
		let mapping = {}
		data.forEach(d => {
			mapping[d.week] = [...(mapping[d.week] ?? []), d];
		});
		console.log({ mapping })
		const weeks = Chart.getWeeks();
		let x = [];
		let y = [];
		weeks.forEach(k => {
			const count = Utils.avg(mapping[k] || [], d);
			x.push(moment(k).format('MMM DD, YY'));
			y.push(count || 0);
		});
		return Chart.getLineChart(x, y, bg, c);
		// return mapping;
	}
}