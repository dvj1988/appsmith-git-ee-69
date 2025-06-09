export default {
	getZendeskTags() {
		return DB_Feature_Tags.data.map(ft => ({ id: ft.id, zd: Libs.getGithubTagValue(ft.name) })).slice(0,372);
}