import type { SvgProps } from "@/types";

export const ChartDonut = ({ ...props }: SvgProps) => {
	const { width = 32, height = 32, color = "inherit", className = "" } = props;

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 32 32"
			fill="none"
			className={`fill-current ${className}`}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M3.59286 14.4426C3.88816 11.9664 4.90096 9.63057 6.50661 7.72256C6.68427 7.50833 6.90469 7.33353 7.15377 7.20935C7.40285 7.08518 7.6751 7.01435 7.95312 7.00141C8.23113 6.98847 8.50879 7.03369 8.76833 7.13419C9.02786 7.23469 9.26357 7.38826 9.46036 7.58506L12.9191 11.1176C13.2522 11.4499 13.4563 11.8898 13.495 12.3588C13.5337 12.8277 13.4045 13.2951 13.1304 13.6776C12.9227 13.9721 12.7664 14.2996 12.6679 14.6463C12.6366 14.7486 12.5733 14.8382 12.4874 14.9018C12.4014 14.9655 12.2973 14.9999 12.1904 15.0001H4.09036C4.01978 15.0002 3.94997 14.9853 3.88553 14.9565C3.82109 14.9277 3.76348 14.8856 3.71649 14.833C3.66949 14.7803 3.63418 14.7183 3.61287 14.651C3.59157 14.5837 3.58475 14.5127 3.59286 14.4426ZM17.6729 3.00756C17.3966 2.98347 17.1184 3.01709 16.8558 3.10628C16.5933 3.19547 16.3521 3.33829 16.1477 3.52566C15.9433 3.71303 15.7801 3.94086 15.6684 4.19468C15.5568 4.4485 15.4991 4.72277 15.4991 5.00006V10.0838C15.4957 10.5555 15.6605 11.013 15.9641 11.3741C16.2677 11.7352 16.6901 11.9762 17.1554 12.0538C18.0315 12.1984 18.8347 12.6304 19.4383 13.2817C20.0419 13.9331 20.4115 14.7668 20.489 15.6514C20.5665 16.536 20.3474 17.4213 19.8663 18.1677C19.3851 18.9141 18.6693 19.4791 17.8316 19.7738C17.7341 19.8096 17.65 19.8745 17.5905 19.9597C17.531 20.0448 17.4991 20.1462 17.4991 20.2501V28.4038C17.4986 28.4746 17.5132 28.5447 17.5419 28.6094C17.5705 28.6742 17.6126 28.7321 17.6653 28.7794C17.718 28.8266 17.7801 28.8622 17.8476 28.8836C17.915 28.9051 17.9863 28.912 18.0566 28.9038C21.1764 28.5186 24.0522 27.0197 26.1546 24.6827C28.2571 22.3458 29.4448 19.3281 29.4991 16.1851C29.5929 9.39881 24.3979 3.61006 17.6729 3.00756ZM15.1554 19.7701C14.5964 19.5707 14.0888 19.2494 13.6694 18.8295C13.2499 18.4097 12.9292 17.9017 12.7304 17.3426C12.6963 17.2434 12.6323 17.1572 12.5472 17.0959C12.4622 17.0346 12.3602 17.0011 12.2554 17.0001H4.08911C4.01844 16.9996 3.94847 17.0142 3.88383 17.0427C3.81918 17.0713 3.76133 17.1132 3.71408 17.1658C3.66684 17.2184 3.63127 17.2803 3.60973 17.3477C3.58819 17.415 3.58116 17.4861 3.58911 17.5563C3.93925 20.4456 5.2479 23.1341 7.30587 25.1921C9.36385 27.25 12.0523 28.5587 14.9416 28.9088C15.0118 28.9168 15.083 28.9097 15.1503 28.8882C15.2176 28.8667 15.2796 28.8311 15.3321 28.7838C15.3847 28.7366 15.4266 28.6787 15.4552 28.6141C15.4838 28.5495 15.4983 28.4795 15.4979 28.4088V20.2501C15.4981 20.1443 15.4651 20.0411 15.4037 19.955C15.3423 19.869 15.2554 19.8043 15.1554 19.7701Z"
				fill={color}
			/>
		</svg>
	);
};
