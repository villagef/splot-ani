import { Container } from "@/ui/atoms/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Splotani",
	description: "Splotani - sklep z rękodziełem",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <Container>{children}</Container>;
}
