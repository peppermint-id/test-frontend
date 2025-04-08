type Field = {
	id: string;
	label: string;
	placeholder: string;
	type: string;
};

export const firstFields: Field[] = [
	{
		id: "firstName",
		label: "First name:*",
		placeholder: "Enter your first name",
		type: "text",
	},
	{
		id: "lastName",
		label: "Last name:*",
		placeholder: "Enter your last name",
		type: "text",
	},
	{
		id: "email",
		label: "Email:*",
		placeholder: "Enter your work email",
		type: "email",
	},
	{
		id: "jobTitle",
		label: "Job title:*",
		placeholder: "Enter your job title",
		type: "text",
	},
	{
		id: "company",
		label: "Company:*",
		type: "text",
		placeholder: "Enter your company name",
	},
];

export const lastFields: Field[] = [
	{
		id: "usingServiceMesh",
		label: "Are you currently using Istio or any other Service Mesh?",
		placeholder: "Enter your answer",
		type: "text",
	},
	{
		id: "additionalInfo",
		label: "Anything else you'd like to tell us?",
		placeholder: "Enter your answer",
		type: "text",
	},
];

export const businessObjectives: string[] = [
	"Implement Zero Trust security",
	"Observability into services",
	"Migrate workloads to one or more clouds",
	"Deploy faster & safer with canary releases",
	"Ensure infrastructure resilience",
	"Learning Istio",
	"Accelerate application delivery",
];
