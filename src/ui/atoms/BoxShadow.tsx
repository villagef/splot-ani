import React from "react";
type Props = {
	children: React.ReactNode;
	className?: string;
};
export function BoxShadow({ children, className }: Props) {
	return (
		<div
			className={`rounded-xl bg-primary-foreground p-3 tracking-wide shadow-md md:p-6 ${className}`}
		>
			{children}
		</div>
	);
}
