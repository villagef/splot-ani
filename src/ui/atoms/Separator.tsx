type Props = {
	fullWidth?: boolean;
};

export function Separator({ fullWidth }: Props) {
	return (
		<hr
			className={`mx-auto my-2 ${fullWidth ? "w-full" : "w-5/6"} rounded-xl border-secondary/30 px-4`}
		/>
	);
}
