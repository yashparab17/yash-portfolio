"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useReducedMotion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

// `variant` defaults to "plain" (devicon's colorful transparent-background
// version). A few icons only ship as "original" (still colorful, just no
// separate "plain" file). `mono: true` marks icons whose devicon artwork has
// no color at all (plain black paths) — those get inverted in dark mode so
// they're visible against a dark background instead of vanishing.
const STACK = [
	{ slug: "c", name: "c", variant: "original" },
	{ slug: "cplusplus", name: "c++", variant: "original" },
	{ slug: "python", name: "python", variant: "original" },
	{ slug: "java", name: "java", variant: "original" },
	{ slug: "csharp", name: "c#", variant: "original" },
	{ slug: "rust", name: "rust", variant: "original", mono: true },
	{ slug: "godot", name: "godot", variant: "original" },
	{ slug: "javascript", name: "javascript", variant: "original" },
	{ slug: "typescript", name: "typescript", variant: "original" },
	{ slug: "react", name: "react", variant: "original" },
	{ slug: "nextjs", name: "next.js", variant: "original" },
	{ slug: "nodejs", name: "node.js", variant: "original" },
	{ slug: "tailwindcss", name: "tailwind css", variant: "original" },
	{ slug: "tauri", name: "tauri", variant: "original" },
	{ slug: "sqlite", name: "sqlite", variant: "original" },
	{ slug: "postgresql", name: "postgresql", variant: "original" },
	{ slug: "git", name: "git", variant: "original" },
] satisfies {
	slug: string;
	name: string;
	variant?: "plain" | "original";
	mono?: boolean;
}[];

const LOOPED_STACK = Array.from({ length: 8 }, () => STACK).flat();

export function TechStack() {
	const reduce = useReducedMotion();

	const [autoScroll] = useState(() =>
		AutoScroll({
			speed: 1.5,
			stopOnInteraction: false,
		}),
	);
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{ loop: true, align: "start" },
		[autoScroll],
	);

	useEffect(() => {
		const plugin = emblaApi?.plugins().autoScroll;
		if (!plugin) return;
		if (reduce) plugin.stop();
		else plugin.play();
	}, [emblaApi, reduce]);

	return (
		<section id="stack" className="mx-auto max-w-7xl py-24">
			<Reveal>
				<h2 className="max-w-[20ch] px-6 text-5xl font-bold tracking-tight text-balance md:text-8xl">
					tech i work with
				</h2>
			</Reveal>

			<div
				ref={emblaRef}
				className="mt-10 cursor-grab overflow-hidden active:cursor-grabbing mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
			>
				<div className="flex">
					{LOOPED_STACK.map(
						({ slug, name, variant = "plain", mono }, i) => (
							<img
								key={`${slug}-${i}`}
								src={`${DEVICON_BASE}/${slug}/${slug}-${variant}.svg`}
								alt={name}
								width={128}
								height={128}
								draggable={false}
								className={cn(
									"mr-12 size-32 shrink-0",
									mono && "dark:invert",
								)}
							/>
						),
					)}
				</div>
			</div>
		</section>
	);
}
