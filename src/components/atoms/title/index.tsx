import type { HTMLAttributes } from "react";
import type { ComponentProps } from "@/types";

interface TitleProps
	extends ComponentProps,
		HTMLAttributes<HTMLHeadingElement> {
	as?: "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Title = ({
	children,
	className = "",
	as: Tag = "h3",
	...props
}: TitleProps) => {
	return (
		<Tag className={`${className}`} {...props}>
			{children}
		</Tag>
	);
};
