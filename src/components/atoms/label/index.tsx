import React, { type LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	children?: React.ReactNode;
}

export const Label = ({ children, ...props }: LabelProps) => (
	<label className="text__body--14-medium color-gray-900" {...props}>
		{children}
	</label>
);
