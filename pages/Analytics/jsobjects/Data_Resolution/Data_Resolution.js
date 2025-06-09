export default {
 	rt_getIssues: () => get_resolution_time.data,
	rt_getCriticalIssues: () => UtilsData.getCriticalIssues(this.rt_getIssues()),
	rt_getHighIssues: () => UtilsData.getHighIssues(this.rt_getIssues()),
	
	in_rt_getIssues: () => in_get_resolution_time.data,
  in_rt_getCriticalIssues: () => UtilsData.getCriticalIssues(this.in_rt_getIssues()),
  in_rt_getHighIssues: () => UtilsData.getHighIssues(this.in_rt_getIssues()),
  
  rt_getEnterpriseIssues: () => UtilsData.getEnterpriseIssues(this.rt_getIssues()),
  rt_getCriticalEnterpriseIssues: () => UtilsData.getEnterpriseIssues(this.rt_getCriticalIssues()),
  rt_getHighEnterpriseIssues: () => UtilsData.getEnterpriseIssues(this.rt_getHighIssues()),
  
  in_rt_getEnterpriseIssues: () => UtilsData.getEnterpriseIssues(this.in_rt_getIssues()),
  in_rt_getCriticalEnterpriseIssues: () => UtilsData.getEnterpriseIssues(this.in_rt_getCriticalIssues()),
  in_rt_getHighEnterpriseIssues: () => UtilsData.getEnterpriseIssues(this.in_rt_getHighIssues()),
  
  rt_getBusinessIssues: () => UtilsData.getBusinessIssues(this.rt_getIssues()),
  rt_getCriticalBusinessIssues: () => UtilsData.getBusinessIssues(this.rt_getCriticalIssues()),
  rt_getHighBusinessIssues: () => UtilsData.getBusinessIssues(this.rt_getHighIssues()),
  
  in_rt_getBusinessIssues: () => UtilsData.getBusinessIssues(this.in_rt_getIssues()),
  in_rt_getCriticalBusinessIssues: () => UtilsData.getBusinessIssues(this.in_rt_getCriticalIssues()),
  in_rt_getHighBusinessIssues: () => UtilsData.getBusinessIssues(this.in_rt_getHighIssues()),
  
  rt_getCommunityIssues: () => UtilsData.getCommunityIssues(this.rt_getIssues()),
  rt_getCriticalCommunityIssues: () => UtilsData.getCommunityIssues(this.rt_getCriticalIssues()),
  rt_getHighCommunityIssues: () => UtilsData.getCommunityIssues(this.rt_getHighIssues()),
  
  in_rt_getCommunityIssues: () => UtilsData.getCommunityIssues(this.in_rt_getIssues()),
  in_rt_getCriticalCommunityIssues: () => UtilsData.getCommunityIssues(this.in_rt_getCriticalIssues()),
  in_rt_getHighCommunityIssues: () => UtilsData.getCommunityIssues(this.in_rt_getHighIssues()),
  
 	getIssues() {
		const selected = ReportOptions.selectedOptionValue;
   	if (CONSTANTS.reportOptions.ALL == selected) return this.rt_getIssues();
   	if (CONSTANTS.reportOptions.COMMUNITY == selected) return this.rt_getCommunityIssues();
   	if (CONSTANTS.reportOptions.BUSINESS == selected) return this.rt_getBusinessIssues();
   	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return this.rt_getEnterpriseIssues();
	},
	in_getIssues() {
		const selected = ReportOptions.selectedOptionValue;
   	if (CONSTANTS.reportOptions.ALL == selected) return this.in_rt_getIssues();
   	if (CONSTANTS.reportOptions.COMMUNITY == selected) return this.in_rt_getCommunityIssues();
   	if (CONSTANTS.reportOptions.BUSINESS == selected) return this.in_rt_getBusinessIssues();
   	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return this.in_rt_getEnterpriseIssues();
	},
	getCriticalIssues() {
		const selected = ReportOptions.selectedOptionValue;
   	if (CONSTANTS.reportOptions.ALL == selected) return this.rt_getCriticalIssues();
   	if (CONSTANTS.reportOptions.COMMUNITY == selected) return this.rt_getCriticalCommunityIssues();
   	if (CONSTANTS.reportOptions.BUSINESS == selected) return this.rt_getCriticalBusinessIssues();
   	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return this.rt_getCriticalEnterpriseIssues();
	},
	in_getCriticalIssues() {
		const selected = ReportOptions.selectedOptionValue;
   	if (CONSTANTS.reportOptions.ALL == selected) return this.in_rt_getCriticalIssues();
   	if (CONSTANTS.reportOptions.COMMUNITY == selected) return this.in_rt_getCriticalCommunityIssues();
   	if (CONSTANTS.reportOptions.BUSINESS == selected) return this.in_rt_getCriticalBusinessIssues();
   	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return this.in_rt_getCriticalEnterpriseIssues();
	},
	getHighIssues() {
		const selected = ReportOptions.selectedOptionValue;
   	if (CONSTANTS.reportOptions.ALL == selected) return this.rt_getHighIssues();
   	if (CONSTANTS.reportOptions.COMMUNITY == selected) return this.rt_getHighCommunityIssues();
   	if (CONSTANTS.reportOptions.BUSINESS == selected) return this.rt_getHighBusinessIssues();
    if (CONSTANTS.reportOptions.ENTERPRISE == selected) return this.rt_getHighEnterpriseIssues();
	},
	in_getHighIssues() {
		const selected = ReportOptions.selectedOptionValue;
   	if (CONSTANTS.reportOptions.ALL == selected) return this.in_rt_getHighIssues();
   	if (CONSTANTS.reportOptions.COMMUNITY == selected) return this.in_rt_getHighCommunityIssues();
   	if (CONSTANTS.reportOptions.BUSINESS == selected) return this.in_rt_getHighBusinessIssues();
   	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return this.in_rt_getHighEnterpriseIssues();
	},
}