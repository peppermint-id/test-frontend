import "./styles.css";
import { Input, Label } from "@/components/atoms";
import type { InputHTMLAttributes } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	required?: boolean;
}

export const FormField = ({
	label,
	required,
	...inputProps
}: FormFieldProps) => (
	<div className="formField__container">
		<Label>
			{label}
			{required && <span>*</span>}
		</Label>
		<Input {...inputProps} />
	</div>
);
