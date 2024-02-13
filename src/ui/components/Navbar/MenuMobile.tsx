import React from "react";
import { Drawer } from "@/ui/atoms/Drawer";

export function MenuMobile({ open, onClose }: { open: boolean; onClose: () => void }) {
	return (
		<Drawer open={open} onClose={onClose}>
			content
		</Drawer>
	);
}
