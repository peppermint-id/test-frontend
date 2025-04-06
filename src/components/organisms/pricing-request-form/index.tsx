import "./styles.css";
import { FormField } from "@/components/molecules";
import { SubmitButton } from "@/components/atoms";
import { Title } from "@/components/atoms";
import { ArrowRight } from "@/components/svgs";

export const PricingRequestForm = () => {
	return (
		<div className="form__container">
			<Title
				as="h2"
				className="pricingRequestForm__title text__heading--h6 text__heading--h5-md text__heading--h4-lg"
			>
				Request Pricing
			</Title>
			<form className="form" id="pricing-form">
				<div className="fields__wrapper">
					<FormField
						label="First name:"
						required
						placeholder="Enter your first name"
					/>
					<FormField
						label="Last name:"
						required
						placeholder="Enter your last name"
					/>
					<FormField
						label="Email:"
						required
						placeholder="Enter your work email"
					/>
					<FormField
						label="Job title:"
						required
						placeholder="Enter your job title"
					/>
					<FormField
						label="Company:"
						required
						placeholder="Enter your company name"
					/>
				</div>

				<div className="policy__captcha">
					<p className="text__body--14 color-gray-900">
						Tetrate uses your contact info to share product updates. You can
						unsubscribe anytime. Learn more in our{" "}
						<a href="/privacy" className="color-blue-500">
							Privacy Policy
						</a>
						.
					</p>
					<picture className="form__captcha">
						<source srcSet="/images/pricingRequestForm/reCaptcha@2x.png 2x" />
						<img
							src="/images/pricingRequestForm/reCaptcha.png"
							alt="reCaptcha"
						/>
					</picture>
				</div>

				<SubmitButton type="submit" className="form__submit">
					Submit
					<ArrowRight color="#FFF" width={20} height={20} />
				</SubmitButton>
			</form>
		</div>
	);
};
