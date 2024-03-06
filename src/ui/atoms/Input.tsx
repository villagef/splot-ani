type Props = {
	label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, type = "text", ...props }: Props) {
	return (
		<div>
			<label htmlFor="input" className="mb-2 block text-sm font-semibold text-primary-textDark">
				{label}
			</label>
			<input
				id="input"
				{...props}
				type={type}
				className="border-primary-foregroundbg-transparentp-2.5 block w-full rounded-md border bg-secondary-foreground p-2 text-sm text-primary-textDark"
			/>
		</div>
	);
}
