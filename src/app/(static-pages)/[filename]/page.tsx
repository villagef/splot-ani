import { notFound } from "next/navigation";
import { ComponentType } from "react";

type Props = {
	params: {
		filename: string;
	};
};

export default async function StaticPage({ params: { filename } }: Props) {
	const Content = await import(`./${filename}.mdx`).then(
		(module: { default: ComponentType }) => module.default,
		() => notFound(),
	);

	return <Content />;
}
