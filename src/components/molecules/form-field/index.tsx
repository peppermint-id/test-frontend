import "./styles.css";
import { Input, Label } from "@/components/atoms";
import type { InputHTMLAttributes } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	label?: string;
	required?: boolean;
}

export const FormField = ({
	id,
	label,
	required,
	...inputProps
}: FormFieldProps) => (
	<div className="formField__container">
		{label && (
			<Label htmlFor={id}>
				{label}
				{required && <span>*</span>}
			</Label>
		)}
		<Input id={id} required {...inputProps} />
	</div>
);
