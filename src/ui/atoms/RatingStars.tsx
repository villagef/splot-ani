import React from "react";

type Props = {
	label: string;
	value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function RatingStars({ label, ...props }: Props) {
	return (
		<div>
			<label htmlFor="input" className="mb-2 block text-sm font-semibold text-primary-textDark">
				{label}
			</label>
			<div className="star-5 star-rating">
				{[...(Array(5) as unknown[])].map((_, index) => {
					const rating = index + 1;

					return (
						<React.Fragment key={index}>
							<input
								type="radio"
								name="rating"
								value={rating}
								className="star cursor-pointer"
								{...props}
							/>
							<i></i>
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
}
