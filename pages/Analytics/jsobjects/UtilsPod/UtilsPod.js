export default {
	mapPodToScenario() {
		const data = get_pod_mappings.data;
		const mapping = {};
		data.forEach(dt => {
			mapping[dt.slack_owner_id] = [...(mapping[dt.slack_owner_id] || []), dt.scenario];
		});
		return mapping;
	},
	mapPodToName() {
		const data = slack_get_groups.data.usergroups;
		const mapping = {};
		data.forEach(dt => {
			mapping[dt.id] = dt.name;
		});
		return mapping;
	},
	getPodsMapping () {
		const pts = this.mapPodToScenario();
		const podNames = this.mapPodToName();
		
		return Object.keys(pts).map(k => ({
			key: podNames[k],
			value: k,
		}))
	},
	getScenarioCondition() {
		try {
			const pts = this.mapPodToScenario();
			const fil = pod_filter.selectedOptionValue;
			const product_areas = pts[fil];
			if (Array.isArray(product_areas) && product_areas.length == 0) {
				return 'and (' + product_areas.map(pa => `product_area = '${pa}'`).join(' or ') + ") and product_area is not null and product_area <> ''";
			} else {
				return '';
			}
		} catch (e) {
			return '';
		}
	}
}