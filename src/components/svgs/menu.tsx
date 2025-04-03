import type { SvgProps } from "@/types";

export const Menu = ({ ...props }: SvgProps) => {
	const { width = 20, height = 20, color = "inherit", className = "" } = props;

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 20 20"
			fill="none"
			className={className}
		>
			<path
				d="M1 7H19M1 1H19M1 13H19"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
