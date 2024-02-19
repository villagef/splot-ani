import type { Metadata } from "next";
import { Container } from "@/ui/atoms/Container";

export const metadata: Metadata = {
	title: "Splotani",
	description: "Splotani - sklep z rękodziełem",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <Container className="prose prose-md flex flex-col overflow-hidden">{children}</Container>;
}
