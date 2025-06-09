export default {
	supportTiers: {
		"community": "Community",
		"business_edition": "Business",
		"trial_business": "Trial BE",
		"enterprise_edition": "Enterprise",
		"trial_enterprise": "Trial EE"
	},
	ticketStatus: [
		"N/A",
		"New",
		"Pending on L1",
		"Pending on L2",
		"Pending on Customer",
		"Reminder 1",
		"Reminder 2",
		"Inactive",
		"On-hold",
		"Resolved",
		"Ignore",
  ],
	ticketSeverity: [
		"N/A",
		"Critical",
		"High",
		"Medium",
		"Normal",
		"Low",
  ],
	ticketSupportTier: [
		{
			label: "N/A",
			value: "n/a",
		},
		{
			label: "Enterprise",
			value: "enterprise_edition",
		},
		{
			label: "Enterprise Trial",
			value: "trial_enterprise",
		},
		{
			label: "Business",
			value: "business_edition",
		},
		{
			label: "Business Trial",
			value: "trial_business",
		},
		{
			label: "Community",
			value: "community",
		}
	]
}