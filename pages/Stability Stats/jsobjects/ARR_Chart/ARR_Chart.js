export default {
	getLineChart() {
		const data = ARR_Utils.getAmountByMonth();
		const months = Utils.getMonths();
		return (
			{
				tooltip: {
					trigger: 'axis'
				},
				color: [
					"#ef4444",
					"#a855f7",
					"#3b5af7"
				],
				grid: {
					left: '3%',
					right: '4%',
					bottom: '6%',
					top: '7%',
					containLabel: true
				},
				xAxis: {
					type: 'category',
					boundaryGap: true,
					data: months
				},
				yAxis: {
					type: 'value'
				},
				series: [
					{
						name: '$$',
						type: 'line',
						data: months.map(m => data[m] ?? 0),
						smooth: true
					},
				]
			}
		)
	},
}