import type { HTMLAttributes } from "react";
import type { ComponentProps } from "@/types";

interface CardTextProps
	extends ComponentProps,
		HTMLAttributes<HTMLParagraphElement> {}

export const Paragraph = ({
	children,
	className = "",
	...props
}: CardTextProps) => {
	return (
		<p className={`${className}`} {...props}>
			{children}
		</p>
	);
};
