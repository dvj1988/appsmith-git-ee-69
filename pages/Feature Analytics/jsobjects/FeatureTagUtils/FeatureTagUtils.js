export default {
	myVar1: [],
	featureTagLookup: {},
	getFeatureTagOptions() {
		return Feature_Tags.data.map(ft => ({
			name: ft.name,
			id: ft.zendesk,
		}));
	},
	getIdByTagName(name) {
		return Feature_Tags.data.find(dt => dt.name == name)?.zendesk || null;
	},
	getReportedOnSlackTickets() {
		return `slack_thread != ''`;
	},
	async populateTagLookup() {
		await Feature_Tags.run();
		for (const tag of Feature_Tags.data) {
			this.featureTagLookup[tag.zendesk] = tag.name
		}
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
	getDateFilters() {
		if (filter_from.selectedDate && filter_to.selectedDate) {
			return `created_at > '${filter_from.selectedDate}' and created_at < '${filter_to.selectedDate}'`;		
		}

		return "";
	},
	getSelectedFeatureCountItem () {
		const selectedTagName = [FeatureTagPie.selectedDataPoint?.x];
		if (selectedTagName) {
			return this.filterFromTagDataUpdated(selectedTagName);
		}
		return "";
	},
		getTags() {
		const selected = filter_ticket_tags.selectedOptionLabels;
		return this.filterFromTagDataUpdated(selected);
	},
	getRelatedFeatureFilters() {
		let conditions = [
			this.getDateFilters(),
			this.getReportedOnSlackTickets(),
			this.getTags()
		];
		if (FeatureTagPie.selectedDataPoint?.x) {
			conditions.push(this.getSelectedFeatureCountItem())
		}
		conditions = conditions.filter(s => !!s);
		if (conditions.length > 0) {
			return "WHERE (" + conditions.join(') and (') + ")";
		} else {
			return "";
		}
	},
	getFilters() {
		let conditions = [
			this.getDateFilters(),
			this.getReportedOnSlackTickets(),
		];
		// Tag Selected, hence don't consider the dropdown tag only filter by selected tag
		// if(Feature_Tags_Count.selectedRow?.feature_tags) {
		// conditions.push(this.getSelectedFeatureCountItem())
		// }
		// else {
		conditions.push(this.getTags())
		// }
		conditions = conditions.filter(s => !!s);
		if (conditions.length > 0) {
			return "WHERE (" + conditions.join(') and (') + ")";
		} else {
			return "";
		}
	}
}