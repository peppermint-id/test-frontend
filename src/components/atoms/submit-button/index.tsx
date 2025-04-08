import React from "react";
import "./styles.css";

interface SubmitButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode;
}

export const SubmitButton = ({
	children,
	className = "",
	...props
}: SubmitButtonProps) => (
	<button
		className={`btn--primary btn text__body--16-semibold ${className}`}
		{...props}
	>
		{children}
	</button>
);
