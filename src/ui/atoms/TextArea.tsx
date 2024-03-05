type Props = {
	label: string;
	rows?: number;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextArea({ label, rows = 3, ...props }: Props) {
	return (
		<div>
			<label htmlFor="textarea" className="mb-2 block text-sm font-semibold text-primary-textDark">
				{label}
			</label>
			<textarea
				id="textarea"
				{...props}
				rows={rows}
				className="border-primary-foregroundbg-transparentp-2.5 block w-full rounded-lg border bg-secondary-foreground p-2 text-sm text-primary-textDark"
			/>
		</div>
	);
}
