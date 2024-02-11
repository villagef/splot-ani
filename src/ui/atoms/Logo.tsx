import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
	size?: number;
};

export function Logo({ size = 60 }: Props) {
	return (
		<Link href={"/"}>
			<Image width={size} height={size} src={"/logo.svg"} alt="" className="mr-4" />
		</Link>
	);
}
