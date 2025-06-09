export default {
 	frt_getIssues: () => get_first_response_time.data,
	frt_getCriticalIssues: () => UtilsData.getCriticalIssues(this.frt_getIssues()),
	frt_getHighIssues: () => UtilsData.getHighIssues(this.frt_getIssues()),
	
	in_frt_getIssues: () => in_get_first_response_time.data,
  in_frt_getCriticalIssues: () => UtilsData.getCriticalIssues(this.in_frt_getIssues()),
  in_frt_getHighIssues: () => UtilsData.getHighIssues(this.in_frt_getIssues()),
  
  frt_getEnterpriseIssues: () => UtilsData.getEnterpriseIssues(this.frt_getIssues()),
  frt_getCriticalEnterpriseIssues: () => UtilsData.getEnterpriseIssues(this.frt_getCriticalIssues()),
  frt_getHighEnterpriseIssues: () => UtilsData.getEnterpriseIssues(this.frt_getHighIssues()),
  
  in_frt_getEnterpriseIssues: () => UtilsData.getEnterpriseIssues(this.in_frt_getIssues()),
  in_frt_getCriticalEnterpriseIssues: () => UtilsData.getEnterpriseIssues(this.in_frt_getCriticalIssues()),
  in_frt_getHighEnterpriseIssues: () => UtilsData.getEnterpriseIssues(this.in_frt_getHighIssues()),
  
  frt_getBusinessIssues: () => UtilsData.getBusinessIssues(this.frt_getIssues()),
  frt_getCriticalBusinessIssues: () => UtilsData.getBusinessIssues(this.frt_getCriticalIssues()),
  frt_getHighBusinessIssues: () => UtilsData.getBusinessIssues(this.frt_getHighIssues()),
  
  in_frt_getBusinessIssues: () => UtilsData.getBusinessIssues(this.in_frt_getIssues()),
  in_frt_getCriticalBusinessIssues: () => UtilsData.getBusinessIssues(this.in_frt_getCriticalIssues()),
  in_frt_getHighBusinessIssues: () => UtilsData.getBusinessIssues(this.in_frt_getHighIssues()),
  
  frt_getCommunityIssues: () => UtilsData.getCommunityIssues(this.frt_getIssues()),
  frt_getCriticalCommunityIssues: () => UtilsData.getCommunityIssues(this.frt_getCriticalIssues()),
  frt_getHighCommunityIssues: () => UtilsData.getCommunityIssues(this.frt_getHighIssues()),
  
  in_frt_getCommunityIssues: () => UtilsData.getCommunityIssues(this.in_frt_getIssues()),
  in_frt_getCriticalCommunityIssues: () => UtilsData.getCommunityIssues(this.in_frt_getCriticalIssues()),
  in_frt_getHighCommunityIssues: () => UtilsData.getCommunityIssues(this.in_frt_getHighIssues()),
  
 	getIssues() {
		const selected = ReportOptions.selectedOptionValue;
   	if (CONSTANTS.reportOptions.ALL == selected) return this.frt_getIssues();
   	if (CONSTANTS.reportOptions.COMMUNITY == selected) return this.frt_getCommunityIssues();
   	if (CONSTANTS.reportOptions.BUSINESS == selected) return this.frt_getBusinessIssues();
   	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return this.frt_getEnterpriseIssues();
	},
	in_getIssues() {
		const selected = ReportOptions.selectedOptionValue;
   	if (CONSTANTS.reportOptions.ALL == selected) return this.in_frt_getIssues();
   	if (CONSTANTS.reportOptions.COMMUNITY == selected) return this.in_frt_getCommunityIssues();
   	if (CONSTANTS.reportOptions.BUSINESS == selected) return this.in_frt_getBusinessIssues();
   	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return this.in_frt_getEnterpriseIssues();
	},
	getCriticalIssues() {
		const selected = ReportOptions.selectedOptionValue;
   	if (CONSTANTS.reportOptions.ALL == selected) return this.frt_getCriticalIssues();
   	if (CONSTANTS.reportOptions.COMMUNITY == selected) return this.frt_getCriticalCommunityIssues();
   	if (CONSTANTS.reportOptions.BUSINESS == selected) return this.frt_getCriticalBusinessIssues();
   	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return this.frt_getCriticalEnterpriseIssues();
	},
	in_getCriticalIssues() {
		const selected = ReportOptions.selectedOptionValue;
   	if (CONSTANTS.reportOptions.ALL == selected) return this.in_frt_getCriticalIssues();
   	if (CONSTANTS.reportOptions.COMMUNITY == selected) return this.in_frt_getCriticalCommunityIssues();
   	if (CONSTANTS.reportOptions.BUSINESS == selected) return this.in_frt_getCriticalBusinessIssues();
   	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return this.in_frt_getCriticalEnterpriseIssues();
	},
	getHighIssues() {
		const selected = ReportOptions.selectedOptionValue;
   	if (CONSTANTS.reportOptions.ALL == selected) return this.frt_getHighIssues();
   	if (CONSTANTS.reportOptions.COMMUNITY == selected) return this.frt_getHighCommunityIssues();
   	if (CONSTANTS.reportOptions.BUSINESS == selected) return this.frt_getHighBusinessIssues();
    if (CONSTANTS.reportOptions.ENTERPRISE == selected) return this.frt_getHighEnterpriseIssues();
	},
	in_getHighIssues() {
		const selected = ReportOptions.selectedOptionValue;
   	if (CONSTANTS.reportOptions.ALL == selected) return this.in_frt_getHighIssues();
   	if (CONSTANTS.reportOptions.COMMUNITY == selected) return this.in_frt_getHighCommunityIssues();
   	if (CONSTANTS.reportOptions.BUSINESS == selected) return this.in_frt_getHighBusinessIssues();
   	if (CONSTANTS.reportOptions.ENTERPRISE == selected) return this.in_frt_getHighEnterpriseIssues();
	},
}