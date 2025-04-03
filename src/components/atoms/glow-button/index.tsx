import React from "react";
import "./styles.css";

interface GlowButtonProps {
	children?: React.ReactNode;
	className?: string;
	containerClassName?: string;
	onClick?: () => void;
}

export const GlowButton: React.FC<GlowButtonProps> = ({
	children,
	containerClassName = "",
	className = "",
	onClick,
}) => {
	return (
		<div className={`glow-button-container ${containerClassName}`}>
			<div className="glow-button__layer glow-button__layer--orange"></div>
			<div className="glow-button__layer glow-button__layer--white"></div>
			<button className={`btn btn--primary ${className}`} onClick={onClick}>
				{children}
			</button>
		</div>
	);
};
