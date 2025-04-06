import React from "react";

interface LabelProps {
	children?: React.ReactNode;
}

export const Label = ({ children }: LabelProps) => (
	<label className="text__body--14-medium color-gray-900">{children}</label>
);
