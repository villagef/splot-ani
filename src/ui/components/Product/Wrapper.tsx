type Props = {
	children: React.ReactNode;
};
export function Wrapper({ children }: Props) {
	return <div className="flex gap-4">{children}</div>;
}
