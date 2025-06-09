export default {
	getFeatureTagOptions() {
		return Feature_Tags.data.map(ft => ({
			name: ft.name,
			id: ft.zendesk,
		}));
	},
	getIdByTagName(name) {
		return Feature_Tags.data.find(dt => dt.name == name)?.zendesk || null;
	}
}