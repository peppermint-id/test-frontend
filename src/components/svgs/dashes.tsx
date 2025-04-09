import type { SvgProps } from "@/types";

export const Dashes = ({ ...props }: SvgProps) => {
	const { width = 802, height = 2, className = "" } = props;

	return (
		<svg
			width={width}
			height={height}
			className={className}
			viewBox="0 0 802 2"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M802 1L-2.86102e-06 1"
				stroke="url(#paint0_linear_1_13889)"
				strokeDasharray="2 2"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_1_13889"
					x1="-22.4764"
					y1="1"
					x2="802"
					y2="0.999999"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="white" stopOpacity="0" />
					<stop offset="0.0923412" stopColor="white" stopOpacity="0.2" />
					<stop offset="0.456666" stopColor="white" stopOpacity="0.2" />
					<stop offset="0.505524" stopColor="white" stopOpacity="0" />
					<stop offset="0.554747" stopColor="white" stopOpacity="0.2" />
					<stop offset="0.973076" stopColor="white" stopOpacity="0.2" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</linearGradient>
			</defs>
		</svg>
	);
};
