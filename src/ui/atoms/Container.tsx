import React from "react";

type Props = {
	children: React.ReactNode;
	className?: string;
};

export function Container({ children, className }: Props) {
	return <div className={`mx-auto w-full max-w-screen-xl p-8 ${className}`}>{children}</div>;
}
