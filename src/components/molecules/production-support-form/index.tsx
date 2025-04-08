import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

import { ArrowRight } from "@/components/svgs";

import { firstFields, lastFields, businessObjectives } from "./formFields";
import "./index.css";

type FormData = Record<string, string>;

const ProductionSupportForm = () => {
	const [formData, setFormData] = useState<FormData>({});
	const [selectedObjectives, setSelectedObjectives] = useState<string[]>([]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
	};

	const toggleObjective = (objective: string) => {
		setSelectedObjectives((prev) =>
			prev.includes(objective)
				? prev.filter((item) => item !== objective)
				: [...prev, objective]
		);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const data = {
			...formData,
			businessObjectives: selectedObjectives,
		};
		console.log("Form submitted:", data);
	};

	return (
		<div className="production-support-form">
			<h3 className="production-support-form__heading text__heading--h6 text__heading--h5-md text__heading--h4-lg">
				Request Production Support
			</h3>
			<form className="production-support-form__form" onSubmit={handleSubmit}>
				{firstFields.map(({ id, label, placeholder, type }) => (
					<div className="production-support-form__field" key={id}>
						<label
							htmlFor={id}
							className="production-support-form__label text__body--14-medium "
						>
							{label}
						</label>
						<input
							id={id}
							type={type}
							placeholder={placeholder}
							className="production-support-form__input"
							value={formData[id] || undefined}
							onChange={handleChange}
						/>
					</div>
				))}
				<div className="production-support-form__field">
					<label className="production-support-form__label text__body--14-medium">
						What is your business objective?
					</label>
					<div className="production-support-form__tags">
						{businessObjectives.map((objective: string) => (
							<button
								type="button"
								key={objective}
								className={`production-support-form__tag text__caption text__body--14-md ${
									selectedObjectives.includes(objective)
										? "production-support-form__tag--selected"
										: ""
								}`}
								onClick={() => toggleObjective(objective)}
							>
								{objective}
							</button>
						))}
					</div>
				</div>
				{lastFields.map(({ id, label, placeholder, type }) => (
					<div className="production-support-form__field" key={id}>
						<label
							htmlFor={id}
							className="production-support-form__label text__body--14-medium"
						>
							{label}
						</label>
						<input
							id={id}
							name={id}
							type={type}
							placeholder={placeholder}
							className="production-support-form__input"
							value={formData[id] || undefined}
							onChange={handleChange}
						/>
					</div>
				))}
				<p className="production-support-form__required text__body--14-medium">
					*Required Fields.
				</p>
				<p className="text__body--14 production-support-form__policy">
					Tetrate uses your contact info to share product updates. You can
					unsubscribe anytime. Learn more in our{" "}
					<a
						className="production-support-form__policy-link"
						href="/privacy-policy"
					>
						Privacy Policy.
					</a>
				</p>
				{/* TODO: Remove */}
				<div className="production-support-form__captcha"></div>
				<button
					type="submit"
					className="production-support-form__submit btn btn--primary btn--lg text__body--16-semibold-md"
				>
					Submit
					<span className="text__body--14-medium production-support-form__submit-arrow">
						<ArrowRight />
					</span>
				</button>
			</form>
		</div>
	);
};

export default ProductionSupportForm;
