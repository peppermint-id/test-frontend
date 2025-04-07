import React from "react";
import "./styles.css";
import { Title } from "@/components/atoms";
import { Paragraph } from "@/components/atoms";
import { Icon, type IconType } from "@/components/atoms";

interface InfoItemProps {
	icon: IconType;
	title: string;
	description: string;
}

export const InfoItem = ({ icon, title, description }: InfoItemProps) => (
	<div className="infoItem__container text--center">
		<Icon name={icon} color="#FFF" />
		<Title
			as="h6"
			className="infoItem__title color-white text__heading--h6 text__heading--h5-md"
		>
			{title}
		</Title>
		<Paragraph className="infoItem__paragraph text__body--16 text--center color-white">
			{description}
		</Paragraph>
	</div>
);
