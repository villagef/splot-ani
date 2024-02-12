export default function DynamicPage({ params }: { params: { dynamicPage: string } }) {
	return (
		<section className="mx-auto pt-28">Here will be {params.dynamicPage} page soon :)</section>
	);
}
