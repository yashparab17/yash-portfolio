import Image from "next/image";
import { ArrowDownIcon } from "@phosphor-icons/react/dist/ssr";
import { LinkButton } from "@/components/ui/button";
import { LowPolySphere } from "@/components/low-poly-sphere";
import darkWaves from "@/assets/dark-waves.jpg";

export function Hero() {
	return (
		<section id="top" className="relative overflow-hidden">
			<Image
				src={darkWaves}
				alt=""
				fill
				priority
				className="object-cover opacity-25 invert mask-[linear-gradient(to_bottom,transparent,black_50%,black_75%,transparent)] dark:invert-0"
			/>

			<div className="relative mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-40 md:grid-cols-[1.2fr_1fr] md:items-center md:pt-20">
				<div className="flex flex-col gap-6">
				<h1 className="text-5xl leading-[1.05] font-bold tracking-tight text-balance md:text-8xl">
					software with intention
				</h1>
				<p className="max-w-[42ch] text-lg text-muted-foreground">
					computer science student and developer focused on practical,
					performance-oriented, and well-crafted products
				</p>
				<div>
					<LinkButton
						href="#work"
						size="lg"
						className="w-fit h-12 rounded-full px-12 text-xl"
					>
						view work
						<ArrowDownIcon size={28} />
					</LinkButton>
				</div>
			</div>

			<LowPolySphere />
			</div>
		</section>
	);
}
