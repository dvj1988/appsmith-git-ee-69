export default {
	featureTagLookup: {},
	async populateTagLookup() {
		await Feature_Tags.run();
		for (const tag of Feature_Tags.data) {
			this.featureTagLookup[tag.zendesk] = tag.name
		}
	},
	getDateFilters() {
		if (filter_from.selectedDate && filter_to.selectedDate) {
			return `created_at > '${filter_from.selectedDate}' and created_at < '${filter_to.selectedDate}'`;		
		}

		return "";
	},
	getSelectedFeatureCountItem () {
		const selectedTagName = [Feature_Tags_Count.selectedRow?.feature_tags];
		if (selectedTagName) {
			return this.filterFromTagDataUpdated(selectedTagName);
		}
		return "";
	},
	getFeatureTagOptions() {
		return Feature_Tags.data.map(ft => ({
			name: ft.name,
			id: ft.zendesk,
		}));
	},
	getIdByTagName(name) {
		return Feature_Tags.data.find(dt => dt.name == name)?.zendesk || null;
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
	filterFromTagData(selectedTag) {
		let expanded = [...selectedTag];
		const mappings = PodMappingsData.data?.runners?.[0]?.issue?.labels || [];
		selectedTag.forEach(ll => {
			if (!mappings[ll]) {
				return
			}
			expanded = [...expanded, ...mappings[ll].conditions.map(c => c.label)];
		});
		let filters = expanded.map(e => this.getGithubTagValue(e));
		let conds = (filters.length > 0 ? filters.map(s => `feature_tags ilike '%${s}%'`): []);
		return conds.join(' or ');
	},
	filterFromTagDataUpdated(selectedTag) {
		let expanded = [...selectedTag];
		const mappings = PodMappingsData.data?.runners?.[0]?.issue?.labels || [];
		selectedTag.forEach(ll => {
			if (!mappings[ll]) {
				return
			}
			expanded = [...expanded, ...mappings[ll].conditions.map(c => c.label)];
		});
		expanded.forEach(ll => {
			if (!mappings[ll]) {
				return
			}
			expanded = [...expanded, ...mappings[ll].conditions.map(c => c.label)];
		});
		// return expanded;
		let filters = expanded.map(e => FeatureTagUtils.getIdByTagName(e)).filter(tg => !!tg);
		let conds = (filters.length > 0 ? filters.map(s => `feature_tags ilike '%${s}%'`): []);
		return conds.join(' or ');
	},
	getReportedOnSlackTickets() {
		console.log("INVOKED")
		if(slack_reported.isSwitchedOn) {
			console.log("here")
			return `slack_thread != ''`;
		}
		return "";
	},
	getTags() {
		const selected = filter_ticket_tags.selectedOptionLabels;
		return this.filterFromTagDataUpdated(selected);
	},

	async onFeatureTagChange() {
		OnLoad.loadData();
		resetWidget('data_table_all', true);
		await Feature_Tags_Count.setSelectedRowIndex(-1);
	},
	getFilters() {
		let conditions = [
			this.getDateFilters(),
			this.getReportedOnSlackTickets(),
		];
		// Tag Selected, hence don't consider the dropdown tag only filter by selected tag
		if(Feature_Tags_Count.selectedRow?.feature_tags) {
			conditions.push(this.getSelectedFeatureCountItem())
		}
		else {
			conditions.push(this.getTags())
		}
		conditions = conditions.filter(s => !!s);
		if (conditions.length > 0) {
			return "WHERE (" + conditions.join(') and (') + ")";
		} else {
			return "";
		}
	},
	debug() {
		return this.featureTagLookup
	}
}