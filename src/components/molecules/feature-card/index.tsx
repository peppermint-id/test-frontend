import "./styles.css";

import { Icon, type IconType } from "@/components/atoms/Icon";
import { Title } from "src/components/atoms/title";
import { Paragraph } from "src/components/atoms/paragraph";

interface FeatureCardProps {
	icon: IconType;
	title: string;
	text: string;
}

export const FeatureCard = ({ icon, title, text }: FeatureCardProps) => (
	<div className="card__container">
		<Icon name={icon} className="card__icon" color="#f50" />
		<Title as="h4" className="text__body--14-semibold">
			{title}
		</Title>
		<Paragraph className="card__paragraph text__body--14">{text}</Paragraph>
	</div>
);
