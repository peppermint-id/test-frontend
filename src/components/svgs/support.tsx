import type { SvgProps } from "@/types";

export const Support = ({ ...props }: SvgProps) => {
	const { width = 27, height = 28, color = "white", className = "" } = props;

	return (
		<svg
			width={width}
			height={height}
			className={className}
			viewBox="0 0 27 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M26.5 12.9996V22.9996C26.5 24.3257 25.9732 25.5974 25.0355 26.5351C24.0979 27.4728 22.8261 27.9996 21.5 27.9996H14.5C14.2348 27.9996 13.9804 27.8942 13.7929 27.7067C13.6054 27.5192 13.5 27.2648 13.5 26.9996C13.5 26.7344 13.6054 26.48 13.7929 26.2925C13.9804 26.1049 14.2348 25.9996 14.5 25.9996H21.5C22.2956 25.9996 23.0587 25.6835 23.6213 25.1209C24.1839 24.5583 24.5 23.7952 24.5 22.9996H21.5C20.7044 22.9996 19.9413 22.6835 19.3787 22.1209C18.8161 21.5583 18.5 20.7952 18.5 19.9996V14.9996C18.5 14.2039 18.8161 13.4409 19.3787 12.8783C19.9413 12.3157 20.7044 11.9996 21.5 11.9996H24.4562C24.267 9.92076 23.4902 7.93869 22.2165 6.28489C20.9428 4.6311 19.2248 3.37385 17.2633 2.66C15.3017 1.94615 13.1775 1.80518 11.1388 2.25355C9.10011 2.70191 7.23107 3.72111 5.75 5.19209C3.90832 7.00947 2.7724 9.42219 2.545 11.9996H5.5C6.29565 11.9996 7.05871 12.3157 7.62132 12.8783C8.18393 13.4409 8.5 14.2039 8.5 14.9996V19.9996C8.5 20.7952 8.18393 21.5583 7.62132 22.1209C7.05871 22.6835 6.29565 22.9996 5.5 22.9996H3.5C2.70435 22.9996 1.94129 22.6835 1.37868 22.1209C0.816071 21.5583 0.5 20.7952 0.5 19.9996V12.9996C0.502804 10.4245 1.26953 7.90805 2.70313 5.76887C4.13673 3.62969 6.17275 1.96392 8.55349 0.982398C10.9342 0.000875235 13.5526 -0.252271 16.0773 0.255002C18.602 0.762274 20.9194 2.00716 22.7362 3.83209C23.9358 5.03747 24.8857 6.4677 25.5316 8.04082C26.1774 9.61395 26.5065 11.2991 26.5 12.9996Z"
				fill={color}
			/>
		</svg>
	);
};
