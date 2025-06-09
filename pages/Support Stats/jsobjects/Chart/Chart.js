export default {
	getLineChart(x, y, bg, c) {
		return (
			{
				xAxis: {
					type: 'category',
					data: x
				},
				grid: {
					left: '1%',
					right: '2%',
					bottom: '10%',
					top: '10%',
					containLabel: true
				},
				backgroundColor: bg,
				tooltip: {
					trigger: 'axis'
				},
				yAxis: {
					type: 'value'
				},
				color: [
					c,
				],
				series: [
					{
						data: y,
						type: 'line',
						smooth: false
					}
				]
			}
		)
	},
	getWeeks() {
		const data = Common.getData().map(d => d.week);
		return [...new Set(data)];
	},
	getChart(data, bg, c) {
		let mapping = {};
		console.log({data});
		data.forEach(d => {
			mapping[d.week] = [...(mapping[d.week] ?? []), d];
		});
		console.log({ mapping })
		const weeks = this.getWeeks();
		let x = [];
		let y = [];
		weeks.forEach(k => {
			const count = Utils.count(mapping[k] || []);
			x.push(moment(k).format('MMM DD, YY'));
			y.push(count);
		});

		return this.getLineChart(x, y, bg, c);
	},
	get(data, bg, c) {
		// data = ResolutionChart.getEnterpriseData();
		let mapping = {}
		data.forEach(d => {
			mapping[d.week] = [...(mapping[d.week] ?? []), d];
		});
		console.log({ mapping })
		const weeks = this.getWeeks();
		let x = [];
		let y = [];
		weeks.forEach(k => {
			const count = Utils.avg(mapping[k] || []);
			x.push(moment(k).format('MMM DD, YY'));
			y.push(count);
		});
		return this.getLineChart(x, y, bg, c);
		// return mapping;
	}
}