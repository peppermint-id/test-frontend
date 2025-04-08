type Section = {
	id: string;
	title: string;
	description: string;
	icon: string;
};

export const sections = <Section[]>[
	{
		id: "stable-releases",
		title: "Stable Releases",
		icon: "release-stable",
		description:
			"Tested,\u00A0CVE\u2011free,\u00A0FIPS\u2011ready\u00A0versions\u00A0of Istio and Envoy, with extended CVE patches and bug fixes beyond OSS upstream",
	},
	{
		id: "lifecycle-management",
		title: "Lifecycle Management",
		icon: "lifecycle",
		description:
			"Tools\u00A0for\u00A0easy installation, management,and upgrades.",
	},
	{
		id: "production-support",
		title: "Production Support",
		icon: "support",
		description:
			"Enterprise\u2011grade\u00A0support\u00A0for\u00A0mission-critical applications, ensuring compliance and minimizing downtime.",
	},
];
