import type { THeaderMenu } from "@/types";

export const headerNavigation: THeaderMenu[] = [
	{
		title: "Products",
		url: "#",
		categories: [
			{
				title: "Enterprise Solutions for Regulated Workloads",
				items: [
					{
						icon: "m-products-agent-operations-director",
						name: "Agent Operations Director",
						description:
							"Runtime visibility and governance for ML infrastructure teams to maximize GenAI ROI.",
						url: "/products/agent-operations-director/",
					},
					{
						icon: "m-products-tetrate-service-bridge",
						name: "Tetrate Service Bridge",
						description:
							"Service mesh management for multi-cluster, multi-tenant developer platforms at massive scale.",
						url: "/products/tetrate-service-bridge/",
					},
				],
			},
			{
				title: "Open Source Solutions for Kubernetes Networking",
				items: [
					{
						icon: "m-products-tetrate-istio-subscription",
						name: "Tetrate Istio Subscription",
						description:
							"Stable releases, production support, CVE scanner, and configuration analysis in one package.",
						url: "/products/tetrate-istio-subscription/",
					},
					{
						icon: "m-products-tetrate-istio-subscription-plus",
						name: "Tetrate Istio Subscription Plus",
						description:
							"Powerful multi-cluster Istio troubleshooting for platform teams, safe self-service diagnostics for app.",
						url: "/products/tetrate-istio-subscription-plus/",
					},
					{
						icon: "m-products-tetrate-enterprise-envoy-gateway",
						name: "Tetrate Enterprise Envoy Gateway",
						description:
							"Stable releases, expert migration guidance, and production support for Envoy Gateway adopters.",
						url: "/products/tetrate-enterprise-gateway-for-envoy/",
					},
				],
			},
		],
	},
	{
		title: "Solutions",
		url: "#",
		categories: [
			{
				items: [
					{
						icon: "m-solutions-financial-services",
						name: "Financial Services",
						description:
							"Build secure, scalable cloud-native applications and innovate faster with the service mesh.",
						url: "/solutions/financial-services/",
					},
					{
						icon: "m-solutions-fips",
						name: "FIPS",
						description:
							"FIPS-compliant Istio for compliance, faster FedRAMP approval, and security.",
						url: "/solutions/fips-140-2-validated-service-mesh/",
					},
					{
						icon: "m-solutions-government",
						name: "Government",
						description:
							"Tetrate’s FIPS-validated mesh ensures modernization, risk mitigation, and compliance.",
						url: "/solutions/government/",
					},
					{
						icon: "m-solutions-kubernetes",
						name: "Kubernetes",
						description:
							"Seamlessly implement policies for security, identity, traffic management.",
						url: "/solutions/manage-kubernetes-complexity/",
					},
					{
						icon: "m-solutions-zero-trust",
						name: "Zero Trust",
						description:
							"Secure multi-cloud microservices with Zero Trust to protect apps, users, and business.",
						url: "/solutions/zero-trust-security/",
					},
				],
			},
		],
	},
	{
		title: "Learn",
		url: "#",
		categories: [
			{
				title: "Resources",
				url: "/resources/",
				items: [
					{
						icon: "m-learn-blog",
						name: "Blog",
						url: "/blog/",
					},
					{
						icon: "m-learn-zero-trust-center",
						name: "Zero Trust Center",
						url: "/resources/",
					},
					{
						icon: "m-learn-documentation",
						name: "Documentation",
						url: "https://docs.tetrate.io/",
					},
					{
						icon: "m-learn-faq",
						name: "FAQ",
						url: "/faq/whats-the-difference-between-tetrate-products-and-istio",
					},
					{
						icon: "m-learn-ebooks-and-reports",
						name: "Ebooks & Reports",
						url: "/resources/?fwp_resource_categories=ebooks-reports",
					},
					{
						icon: "m-learn-white-papers",
						name: "White papers",
						url: "/resources/?fwp_resource_categories=whitepapers",
					},
					{
						icon: "m-learn-video",
						name: "Video",
						url: "/resources/?fwp_resource_categories=video",
					},
					{
						icon: "m-learn-all",
						name: "All",
						url: "/resources/",
					},
					{
						icon: "button",
						name: "Tetrate Academy",
						url: "https://academy.tetrate.io/",
					},
				],
			},
			{
				title: "Learning Center",
				url: "/learning-center/",
				items: [
					{
						name: "Envoy Proxy",
						description:
							"Get started with the standard data plane for cloud-native applications.",
						url: "/learn/envoy-proxy/",
					},
					{
						name: "Envoy Gateway",
						description:
							"Build scalable and resilient apps using Envoy as an application gateway.",
						url: "/envoy-gateway/",
					},
					{
						name: "Istio Service Mesh",
						description:
							"Connect, manage and secure apps with the industry standard service mesh.",
						url: "/learn/istio-service-mesh/",
					},
					{
						name: "FIPS",
						description:
							"Learn about the security standards for apps runnng in FedRAMP environments.",
						url: "/learn/what-is-fips/",
					},
					{
						name: "Mutual TLS (mTLS)",
						description:
							"Ensure secure communication between components of a Zero Trust architecture.",
						url: "/learn/what-is-mtls/",
					},
					{
						name: "Observability",
						description:
							"Observe app behavior with telemetry from logs, metrics, traces and events.",
						url: "/learn/what-is-observability/",
					},
				],
			},
			{
				title: " ",
				url: "",
				items: [
					{
						name: "API Gateway",
						description:
							"Simplify app traffic management and improve security with a single point of entry.",
						url: "/api-gateway/",
					},
					{
						name: "Kubernetes Gateway API",
						description:
							"Manage K8s ingress with more power than the old Ingress API.",
						url: "/learn/what-is-kubernetes-gateway-api/",
					},
					{
						name: "Microservices",
						description:
							"Gain agility with services that are separately developed, deployed and scaled.",
						url: "/learn/what-are-microservices/",
					},
					{
						name: "Platform Team",
						description:
							"Improve application infrastructure with a dedicated team.",
						url: "/learn/what-is-platform-team/",
					},
					{
						name: "Wasm",
						description:
							"Write portable code in multiple languages compiled to a common bytecode format.",
						url: "/learn/what-is-wasm/",
					},
					{
						name: "Zero Trust Architecture",
						description:
							"Improve security for all communication, regardless of network location.",
						url: "/learn/what-is-zero-trust-architecture/",
					},
				],
			},
		],
	},
	{ title: "Events", url: "/events" },
	{
		title: "Company",
		url: "#",
		categories: [
			{
				items: [
					{
						icon: "m-company-about-us",
						name: "About Us",
						url: "/about",
					},
					{
						icon: "m-company-leadership",
						name: "Leadership",
						url: "/about#leadership",
					},
					{
						icon: "m-company-investors",
						name: "Investors",
						url: "/about#investors",
					},
					{
						icon: "m-company-partners",
						name: "Partners",
						url: "/partners-and-integrations",
					},
					{
						icon: "m-company-newsroom",
						name: "Newsroom",
						url: "/press",
					},
					{
						icon: "m-company-careers",
						name: "Careers",
						url: "/about#careers",
					},
					{
						icon: "m-company-get-support",
						name: "Get Support",
						url: "/about#support",
					},
					{
						icon: "m-company-contact-us",
						name: "Contact Us",
						url: "/about#support",
					},
				],
			},
		],
	},
];

const footerNavigation = [
	{
		title: "Products",
		links: [
			{
				name: "Tetrate Istio Subscription - Commercial Istio Support",
				url: "/products/tetrate-istio-subscription",
				external: false,
			},
			{
				name: "Tetrate Istio Distro",
				url: "https://docs.tetrate.io/istio-distro/",
				external: true,
			},
			{
				name: "Tetrate Enterprise Gateway for Envoy",
				url: "/products/tetrate-enterprise-gateway-for-envoy",
				external: false,
			},
			{
				name: "Tetrate Service Express",
				url: "/tetrate-service-express",
				external: false,
			},
			{
				name: "Tetrate Service Bridge",
				url: "/products/tetrate-service-bridge",
				external: false,
			},
		],
	},
	{
		title: "SOLUTIONS",
		links: [
			{
				name: "Financial Services",
				url: "/solutions/financial-services",
				external: false,
			},
			{
				name: "FIPS",
				url: "/solutions/fips-140-2-validated-service-mesh",
				external: false,
			},
			{ name: "Government", url: "/solutions/government", external: false },
			{
				name: "Kubernetes",
				url: "/solutions/manage-kubernetes-complexity",
				external: false,
			},
			{
				name: "Kubernetes Ingress",
				url: "/learn/kubernetes/what-is-kubernetes-ingress",
				external: false,
			},
			{
				name: "Zero Trust",
				url: "/solutions/zero-trust-security",
				external: false,
			},
		],
	},
	{
		title: "LEARN",
		links: [
			{ name: "Blog", url: "/blog", external: false },
			{
				name: "Resources for Kubernetes Ingress and Enterprise Istio Support",
				url: "/resources",
				external: false,
			},
			{ name: "Learning Center", url: "/learning-center", external: false },
			{
				name: "Tetrate Academy",
				url: "https://academy.tetrate.io/",
				external: true,
			},
			{
				name: "Documentation",
				url: "https://docs.tetrate.io/",
				external: true,
			},
		],
	},
	{
		title: "EVENTS",
		links: [
			{
				name: "What's New in Envoy Gateway 1.1",
				url: "/event/whats-new-in-envoy-gateway-1-1",
				external: false,
			},
			{
				name: "Best Practices For Platform Owners and App Developers",
				url: "/event/best-practices-for-platform-owners-and-app-developers",
				external: false,
			},
		],
	},
	{
		title: "COMPANY",
		links: [
			{ name: "About", url: "/about", external: false },
			{ name: "Leadership", url: "/about/#leadership", external: false },
			{ name: "Investors", url: "/about/#investors", external: false },
			{ name: "Partners", url: "/about/#partners", external: false },
			{ name: "Newsroom", url: "/about/#newsroom", external: false },
			{ name: "Careers", url: "/about/#careers", external: false },
			{ name: "Get Support", url: "/about/#support", external: false },
			{ name: "Contact Us", url: "/about/#support", external: false },
			{ name: "Legal", url: "/legal", external: false },
			{ name: "Sitemap", url: "/sitemap", external: false },
		],
	},
];
