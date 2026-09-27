import Image from "next/image";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import nexsyncLogo from "@/assets/nexsync.svg";
import helixLogo from "@/assets/helix.svg";
import skyventureLogo from "@/assets/skyventure.svg";

const PROJECTS = [
	{
		title: "nexsync",
		description:
			"a local-first, peer-to-peer workspace for notes, code, files, and kanban boards, with no account or central server",
		href: "https://github.com/yashparab17/nexsync",
		logo: nexsyncLogo,
		featured: true,
	},
	{
		title: "helix",
		description:
			"a decentralized version control app that pins files to ipfs and records every version on-chain, with your wallet as your identity",
		href: "https://github.com/yashparab17/helix-new",
		logo: helixLogo,
		featured: false,
	},
	{
		title: "skyventure",
		description: "a 2d platformer game built with godot",
		href: "https://github.com/yashparab17/skyventure-revamped",
		logo: skyventureLogo,
		featured: false,
	},
];

export function Work() {
	const [featured, ...rest] = PROJECTS;

	return (
		<section id="work" className="mx-auto max-w-7xl px-6 py-24">
			<Reveal>
				<h2 className="max-w-[20ch] text-5xl font-bold tracking-tight text-balance md:text-8xl">
					selected work
				</h2>
			</Reveal>

			<div className="mt-10 grid gap-4 md:grid-cols-2">
				<Reveal className="md:col-span-2">
					<ProjectCard project={featured} large />
				</Reveal>
				{rest.map((project, i) => (
					<Reveal key={project.title} delay={(i + 1) * 0.05}>
						<ProjectCard project={project} />
					</Reveal>
				))}
			</div>
		</section>
	);
}

function ProjectCard({
	project,
	large = false,
}: {
	project: (typeof PROJECTS)[number];
	large?: boolean;
}) {
	return (
		<a
			href={project.href}
			target="_blank"
			rel="noopener noreferrer"
			className="glass group flex h-full flex-col overflow-hidden rounded-3xl"
		>
			<div
				className={`relative w-full overflow-hidden bg-card/40 ${large ? "aspect-21/9" : "aspect-video"}`}
			>
				<Image
					src={project.logo}
					alt=""
					fill
					sizes="(min-width: 768px) 45vw, 90vw"
					className="object-contain p-12 transition-transform duration-500 group-hover:scale-105"
				/>
			</div>
			<div className="flex flex-1 flex-col gap-2 p-6">
				<div className="flex items-center justify-between gap-2">
					<h3 className="text-2xl font-semibold">{project.title}</h3>
					<ArrowUpRightIcon
						size={22}
						className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
					/>
				</div>
				<p className="text-base text-muted-foreground">
					{project.description}
				</p>
			</div>
		</a>
	);
}
