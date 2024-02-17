import React from "react";
import { Icons } from "@/ui/Icons";
import { ButtonIcon } from "@/ui/atoms/ButtonIcon";

type Props = {
	open: boolean;
	onClose: () => void;
	children: React.ReactNode;
	header?: React.ReactNode;
};

export function Drawer({ children, header, onClose, open }: Props) {
	return (
		<div
			className={`${open ? "translate-y-0" : "translate-y-full"} fixed bottom-0 left-0 z-30 h-screen w-full bg-black/75 p-4 transition-all duration-200 ease-linear`}
			onClick={onClose}
			aria-label="drawer-bottom"
		>
			<div
				id="drawer-bottom"
				className={`${open ? "translate-y-0" : "translate-y-full"} duration-250 bg-secon fixed bottom-0 left-0 z-40 min-h-[600px] w-full transform overflow-y-hidden rounded-t-2xl bg-secondary p-4 text-secondary-textLight transition-all ease-linear`}
				aria-labelledby="bottom-drawer"
			>
				<ButtonIcon variant="text" className="absolute right-2 top-2">
					<Icons.close />
				</ButtonIcon>
				{header && <div className="mt-8 h-auto min-h-10 w-full">{header}</div>}
				<div className="mt-4 h-auto min-h-10 w-full">{children}</div>
			</div>
		</div>
	);
}
