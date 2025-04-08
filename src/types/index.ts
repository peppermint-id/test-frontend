import type { PropsWithChildren } from "react";
import type {IconType} from "@/components/atoms";

export interface SvgProps {
	width?: number;
	height?: number;
	color?: string;
	stroke?: string;
	className?: string;
}

export interface ExtraTWClassProps {
	className?: string;
}

export type ComponentProps = PropsWithChildren<ExtraTWClassProps>;

export type TNews = {
	id: number;
	name: string;
	image: TImage;
	title: string;
	description: string;
	url: string;
};

export type TProduct = {
	id: number;
	title: string;
	description: string;
	image: TImage;
	tabletImage: TImage;
	mobileImage: TImage;
	features: string[];
	url: string;
};

export type TImage = {
	url: string;
	urlTablet?: string;
	urlMobile?: string;
	srcset?: string;
	width?: number;
	height?: number;
};

export type TLink = {
	name: string;
	url: string;
	external?: boolean;
};

export type TFooterMenu = {
	title: string;
	links: TLink[];
};

export type TMenuItem = {
	icon?: string;
	name: string;
	description?: string;
	url: string;
	external?: boolean;
};

export type THeaderMenu = {
	title: string;
	url: string;
	categories?: {
		title?: string;
		url?: string;
		items: TMenuItem[];
	}[];
};

export type TCard = {
	title: string;
	description: string;
	icon: IconType;
}
