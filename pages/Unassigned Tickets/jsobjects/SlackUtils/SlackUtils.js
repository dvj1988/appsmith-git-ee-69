export default {
	getSlackUsers() {
		return slack_get_users.data.members.filter(mm => !mm.deleted && !mm.is_bot && mm.real_name != "Slackbot").map(user => ({
			name: user.real_name || user.name,
			id: user.id
		}));
	},
}