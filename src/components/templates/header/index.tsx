import { useState, useEffect } from "react";

import { Icon, type IconType } from "@/components/atoms";
import { ArrowRight } from "@/components/svgs";
import { headerNavigation } from "@/constants";
import "./styles.css";

export const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [hoveredMegaMenu, setHoveredMegaMenu] = useState<null | number>(null);
	const [isHoveredMenu, setIsHoveredMenu] = useState<boolean>(false);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isHeaderVisible, setIsHeaderVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > lastScrollY && currentScrollY > 100) {
				setIsHeaderVisible(false);
			} else {
				setIsHeaderVisible(true);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);

	return (
		<nav
			className={`nav ${!isMobileMenuOpen && (isHeaderVisible ? "visible" : "hidden")} ${window.scrollY > 100 && "nav__with__bg"}`}
		>
			<div className="nav__container">
				<a href="/">
					<img
						src="/images/logo.svg"
						className="nav__logo"
						loading="lazy"
						alt="Tetrate logo"
					/>
				</a>

				<div className="nav__links">
					{headerNavigation.map((item, index) => (
						<div className="u-relative">
							<a
								key={item.title}
								href={item.url}
								className="nav__link text__body--16"
								onMouseEnter={() => {
									if (item.categories) {
										setHoveredMegaMenu(index);
										setIsHoveredMenu(true);
									}
								}}
							>
								{item.title}
								{item.categories && (
									<Icon
										name={hoveredMegaMenu === index ? "arrow-up" : "arrow"}
									/>
								)}
							</a>
							{!isMobileMenuOpen && hoveredMegaMenu === index ? (
								<div
									className={`mega_menu__container ${index === 0 && "u-translate-x-300"}  ${isHoveredMenu ? "open" : "closed"}`}
									onMouseLeave={() => setIsHoveredMenu(false)}
								>
									{headerNavigation[hoveredMegaMenu].categories?.map(
										(category) => (
											<div
												className={`mega_menu__column__wrapper ${!category.items[0].description && "mega_menu__column__wrapper__no_gap"}`}
											>
												{category.title &&
													(category.url ? (
														<a
															className="text__caption mega_menu__content__wrapper"
															href={category.url}
														>
															{category.title}
															<ArrowRight
																color="#FF5500"
																width={20}
																height={20}
															/>
														</a>
													) : (
														<p className="text__caption mega_menu__content__wrapper">
															{category.title}
														</p>
													))}
												{category.items.map((item) =>
													item?.icon === "button" ? (
														<a
															className="mega_menu__item__wrapper"
															href={item.url}
														>
															<button className="btn btn--primary text__body--14-medium text__body--16-semibold-lg">
																Tetrate Academy
																<Icon name="arrow-right" />
															</button>
														</a>
													) : (
														<a
															className={`mega_menu__item__wrapper ${!item.description && "mega_menu__item__wrapper__center"}`}
															href={item.url}
														>
															{item.icon && (
																<div className="mega_menu__item_icon__wrapper">
																	<Icon name={item.icon as IconType} />
																</div>
															)}
															<div className="mega_menu__item_description__wrapper">
																<p className="text__body--16-medium u-whitespace-nowrap">
																	{item.name}
																</p>
																{item.description && (
																	<p className="text__body--14 color-gray-800 mega_menu__item_description">
																		{item.description}
																	</p>
																)}
															</div>
														</a>
													)
												)}
											</div>
										)
									)}
								</div>
							) : (
								<></>
							)}
						</div>
					))}
				</div>

				<div className="nav__buttons">
					<a href="/contact/pricing-request/">
						<button className="btn btn--primary btn--md text__body--16-medium nav__pricing_request__btn">
							Pricing Request
						</button>
					</a>
					<div
						className="nav__menu__button"
						onClick={() => setIsMobileMenuOpen(true)}
					>
						<Icon name="menu" />
					</div>
				</div>
			</div>
			{isMobileMenuOpen && (
				<div className="nav__mobile">
					<div className="nav__mobile__top">
						<img
							src="/images/logo.svg"
							className="nav__logo"
							loading="lazy"
							alt="Tetrate logo for mobile navigation"
						/>
						<div
							className="nav__close"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							<Icon name="close" />
						</div>
					</div>

					<div className="nav__mobile__content">
						<div className="nav__mobile__links">
							{headerNavigation.map((item, index) => (
								<div className="nav__link__wrapper">
									<a
										key={item.title}
										href={item.url}
										className="nav__link text__heading--h6"
										onClick={() => setHoveredMegaMenu(index)}
									>
										{item.title}
										{item.categories && (
											<Icon
												name={hoveredMegaMenu === index ? "arrow-up" : "arrow"}
											/>
										)}
									</a>
									{hoveredMegaMenu === index ? (
										<div className="mega_menu__container">
											{headerNavigation[hoveredMegaMenu].categories?.map(
												(category) => (
													<div
														className={`mega_menu__column__wrapper ${!category.items[0].description && "mega_menu__column__wrapper__no_gap"}`}
													>
														{category.title &&
															(category.url ? (
																<a
																	className="text__caption mega_menu__content__wrapper"
																	href={category.url}
																>
																	{category.title}
																	<ArrowRight
																		color="#FF5500"
																		width={20}
																		height={20}
																	/>
																</a>
															) : (
																<p className="text__caption mega_menu__content__wrapper">
																	{category.title}
																</p>
															))}
														{category.items.map((item) =>
															item?.icon === "button" ? (
																<a
																	className="mega_menu__item__wrapper"
																	href={item.url}
																>
																	<button className="btn btn--primary text__body--14-medium text__body--16-semibold-lg">
																		Tetrate Academy
																		<Icon name="arrow-right" />
																	</button>
																</a>
															) : (
																<a
																	className={`mega_menu__item__wrapper ${!item.description && "mega_menu__item__wrapper__center"}`}
																	href={item.url}
																>
																	{item.icon && (
																		<div className="mega_menu__item_icon__wrapper">
																			<Icon name={item.icon as IconType} />
																		</div>
																	)}
																	<div className="mega_menu__item_description__wrapper">
																		<p className="text__body--16-medium">
																			{item.name}
																		</p>
																		{item.description && (
																			<p className="text__body--14 color-gray-800 mega_menu__item_description">
																				{item.description}
																			</p>
																		)}
																	</div>
																</a>
															)
														)}
													</div>
												)
											)}
										</div>
									) : (
										<></>
									)}
								</div>
							))}
						</div>

						<div className="nav__mobile__buttons">
							<a href="/contact/demo-request/">
								<button className="btn btn--secondary text__body--14-medium text__body--16-semibold-md nav__mobile__button">
									Request a demo
								</button>
							</a>
							<a href="/contact/pricing-request/">
								<button className="btn btn--primary text__body--16-medium text__body--16-semibold-md nav__mobile__button">
									Pricing Request
								</button>
							</a>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};
