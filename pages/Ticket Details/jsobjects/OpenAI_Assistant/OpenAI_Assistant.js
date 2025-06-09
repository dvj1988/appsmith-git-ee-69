export default {
	interval: null,
	async getRunStatus (thread_id, run_id) {
		if (!this.interval) return;
		const { status } = await GetRunStatus.run({ thread_id , run_id });
		console.log("Assistant Status -", { status, interval: this.interval });
		if (status == "cancelled" || status == "failed" || status == "completed" || status == "expired") {
			clearInterval(this.interval);
			this.interval = null;
			
			this.getThreadMessages(thread_id);
		}
	},
	async getThreadMessages (thread_id) {
		return await GetThreadMessages.run({ thread_id });
	},
	async createThreadAndRun() {
		return await CreateThreadAndRun.run();
	},
	async main () {
		console.log("Generating Suggestions");
		console.log(Ticket_Details.data);
		const { id, thread_id } = await this.createThreadAndRun();
		this.interval = await setInterval(this.getRunStatus, 10000, thread_id, id);
		return this.interval
	},
	getMessage() {
		return GetThreadMessages.data.data.find(dt => dt.role == "assistant")?.content[0].text.value;
	}
}