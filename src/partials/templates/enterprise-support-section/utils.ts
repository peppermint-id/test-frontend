export type Sections = {
	id: string;
	title: string;
	description: string;
	icon: string;
};

export const sections = [
	{
		id: "stable-releases",
		title: "Stable Releases",
		icon: "/images/support/release-stable.svg",
		description:
			"Tested, CVE-free, FIPS-ready versions of Istio and Envoy, with extended CVE patches and bug fixes beyond OSS upstream",
	},
	{
		id: "lifecycle-management",
		title: "Lifecycle Management",
		icon: "/images/support/lifecycle.svg",
		description: "Tools for easy installation, management, and upgrades.",
	},
	{
		id: "production-support",
		title: "Production Support",
		icon: "/images/support/support.svg",
		description:
			"Enterprise-grade support for mission-critical applications, ensuring compliance and minimizing downtime.",
	},
];
