"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export function ThemeToggle() {
	return (
		<AnimatedThemeToggler
			variant="circle"
			aria-label="toggle theme"
			className="flex size-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-foreground/5"
		/>
	);
}
