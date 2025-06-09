export default {
	getFeatureTagOptions() {
		return Feature_Tags.data.map(ft => ({
			name: ft.name,
			id: ft.zendesk,
		}));
	},
	getFeatureTagFilters() {
		if (!filter_ticket_tags.selectedOptionValues.length) {
			return ''
		}
		return `AND (${this.getTags()})`
	},
	getGithubTagValue(name) {
		return 'gh_' + name.split(' ').join('_').split('&').join('').toLowerCase();
	},
	getTags() {
		const selected = filter_ticket_tags.selectedOptionLabels;
		let expanded = [...selected];
		const mappings = Pod_Mappings.data.runners[0].issue.labels;
		selected.forEach(ll => {
			if (!mappings[ll]) {
				return
			}
			expanded = [...expanded, ...mappings[ll].conditions.map(c => c.label)];
		});
		let filters = expanded.map(e => this.getGithubTagValue(e));
		let conds = (filters.length > 0 ? filters.map(s => `feature_tags ilike '%${s}%'`): []);
		return conds.join(' or ');
	},
	async onFeatureTagChange() {
		await Product_Analytics.run()
		await Table1.setSelectedRowIndex(-1)
		await Ticket_List.run()
	}
}