import React from "react";

type Props = {
	children: React.ReactNode;
};

export function Container({ children }: Props) {
	return <div className="mx-auto w-full max-w-screen-xl p-4">{children}</div>;
}
