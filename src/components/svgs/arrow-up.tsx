import type { SvgProps } from "@/types";

export const ArrowUp = ({ ...props }: SvgProps) => {
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
				d="M7 12.5L10 9.5L13 12.5"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
