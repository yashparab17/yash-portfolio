import { ThemeToggle } from "@/components/theme-toggle";

export function Nav() {
	return (
		<header className="relative z-50 flex items-center justify-between px-6 py-6 md:px-10">
			<a href="#top" className="text-2xl font-bold">
				yash parab
			</a>
			<ThemeToggle />
		</header>
	);
}
