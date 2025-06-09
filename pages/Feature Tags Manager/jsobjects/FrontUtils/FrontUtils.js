export default {
	async getStatuses() {
		const parent = "tag_34noss";
		const data = await Front_Feature_Tags_By_Parent.run({ id: parent });
		let statuses = data._results;
		return statuses.map(st => {
			return ({
				id: st.id,
				name: st.name
			})
		});
	}
}