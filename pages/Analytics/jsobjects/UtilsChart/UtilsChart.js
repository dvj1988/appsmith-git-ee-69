export default {
	DATE_FORMAT: "MMM DD, YY",
	getWeeks() {
		moment.updateLocale('en', {
			week : {
				dow : 1,
			}
		})
		let startDate = moment(filter_from.formattedDate);
		let endDate = moment(filter_to.formattedDate);
		let weeks = [];

		if (startDate < endDate){
			let date = startDate.startOf('week');

			while (date < endDate.endOf('week')) {
				weeks.push(moment(date).format(this.DATE_FORMAT));
				date.add(1,'week');
			}
		}
		return weeks;
	},
	getWeeksFromData(data) {
		data = data.map(d => d.week);
		return [...new Set(data)];
	},
	getIssueChartValues(data) {
		let mapping = {};
		data.forEach(d => {
			const week = moment(d.week).format(this.DATE_FORMAT);
			mapping[week] = [...(mapping[week] ?? []), d];
		});
		const weeks = this.getWeeks(data);
		// console.log({ mapping, weeks });
		let y = [];
		weeks.forEach(k => {
			const count = UtilsData.count(mapping[k] || []);
			y.push(count || 0);
		});
		return y;
	},
	getIssueTimingValues(data, t = 1) {
		let mapping = {}
		data.forEach(d => {
			const week = moment(d.week).format(this.DATE_FORMAT);
			mapping[week] = [...(mapping[week] ?? []), d];
		});
		const weeks = this.getWeeks();
		let y = [];
		weeks.forEach(k => {
			const count = UtilsData.avg(mapping[k] || [], t);
			y.push(count || 0);
		});
		return y;
	},
	getChart(series, yAxis) {
		return (
			{
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					top: 5,
					left: -5,
					align: "left"
				},
				grid: {
					left: '0%',
					right: '1%',
					bottom: '3%',
					top: '20%',
					containLabel: true,
				},
				xAxis: {
					type: 'category',
					data: this.getWeeks()
				},
				yAxis,
				series,
			}
		)
	},
	getSeriesObject(data, name, yAxisIndex = 0) {
		return ({
			name,
			type: 'line',
			data,
			yAxisIndex,
		})
	},
	getAxisObject(name, position) {
		return ({
			type: 'value',
			name,
			position,
		})
	}
}
