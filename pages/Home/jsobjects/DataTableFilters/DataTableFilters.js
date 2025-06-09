export default {
	getStatus() {
		let appliedStatus = filter_ticket_status.selectedOptionValues;
		let na = appliedStatus.find(s => s == 'N/A');
		console.log({ na })
		if (na) {
			na = [
				`status is null`,
				`status = ''`
			]
		} else {
			na = []
		}
		appliedStatus = appliedStatus.filter(s => s != 'N/A');
		let conds = (appliedStatus.length > 0 ? appliedStatus.map(s => `status = '${s}'`) : []);
		return conds.concat(na).join(' or ')
	},
	getSeverity() {
		let filters = filter_ticket_severity.selectedOptionValues;
		let na = filters.find(s => s == 'n/a');
		console.log({ na })
		if (na) {
			na = [
				`severity is null`,
				`severity = ''`
			]
		} else {
			na = []
		}
		filters = filters.filter(s => s != 'N/A');
		let conds = (filters.length > 0 ? filters.map(s => `severity = '${s}'`) : []);
		return conds.concat(na).join(' or ')
	},
	getSupportTier() {
		let filters = filter_ticket_support_level.selectedOptionValues;
		let na = filters.find(s => s == 'n/a');
		console.log({ na })
		if (na) {
			na = [
				`support_level is null`,
				`support_level = ''`
			]
		} else {
			na = []
		}
		filters = filters.filter(s => s != 'N/A');
		let conds = (filters.length > 0 ? filters.map(s => `support_level = '${s}'`) : []);
		return conds.concat(na).join(' or ')
	},
	getGithubTagValue(name) {
		return 'gh_' + name.split(' ').join('_').split('&').join('').toLowerCase();
	},
	getTags() {
		// let filters = filter_ticket_tags.selectedOptionValues;

		const selected = filter_ticket_tags.selectedOptionLabels;
		let expanded = [...selected];
		const mappings = Pod_Mappings.data.runners[0].issue.labels;
		selected.forEach(ll => {
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
	getProductAreas() {
		const selected = filter_ticket_product_areas.selectedOptionValue;
		if (selected) {
			return `product_area ilike '%${selected}%'`
		}
		return '';
	},
	getDailyReports() {
		const selected = filter_daily_reported.isSwitchedOn;
		return selected ? `(isdailyreported = true)` : '';
	},
	// case insensitive word matching for subject, description and feature_tags 
	getSearch() {
		return (search_bar.text.length > 0 ? `subject ~* '\\y${search_bar.text}\\y' or description ~* '\\y${search_bar.text}\\y' or feature_tags ~* '\\y${search_bar.text}\\y'` : '');
	},
	getL2Owner() {
		const selected = filter_ticket_L2_Owner.selectedOptionValue;
		if (selected) {
			return `l2owner ilike '%${selected}%'`
		}
		return '';
	},
	getFilters() {
		const conditions = [
			this.getSeverity(),
			this.getStatus(),
			this.getSupportTier(),
			this.getTags(),
			this.getSearch(),
			this.getProductAreas(),
			this.getDailyReports(),
			this.getL2Owner()
		].filter(s => !!s);
		if (conditions.length > 0) {
			return "WHERE (" + conditions.join(') and (') + ")";
		} else {
			return "";
		}
	}
}