export default {
	getLineChart() {
		const weeks = this.getWeeks();
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
					data: Utils.getMonths()
				},
				yAxis: {
					type: 'value'
				},
				series: [
					{
						name: 'No. of Issues',
						type: 'line',
						data: this.getIssueCount(Common.getData()),
						smooth: true
					},
					{
						name: '# Enterprise',
						type: 'line',
						data: this.getIssueCount((Enterprise.getData())),
						smooth: true
					},
					{
						name: '# Business',
						type: 'line',
						data: this.getIssueCount((Business.getData())),
						smooth: true
					},
				]
			}
		)
	},
	getWeeks() {
		const data = Common.getData().map(d => d.week);
		return [...new Set(data)];
	},
	// getMonths() {
		// let startDate = moment(filter_from.formattedDate);
		// let endDate = moment(filter_to.formattedDate);
		// let betweenMonths = [];
// 
		// if (startDate < endDate){
			 // let date = startDate.startOf('month');
// 
			 // while (date < endDate.endOf('month')) {
					// betweenMonths.push(moment(date).format);
					// date.add(1,'month');
			 // }
		// }
		// return betweenMonths;
	// },
	getIssueCount(data) {
		const weeks = Utils.getMonths();
		let y = [];
		let mapping = {};
		console.log({data});
		data.forEach(d => {
			const mnth = moment(d.week).format('MMM, YY')
			mapping[mnth] = [...(mapping[mnth] ?? []), d];
		});
		weeks.forEach(k => {
			const count = Utils.count(mapping[k] || []);
			y.push(count);
		});
		return y;
	},
}