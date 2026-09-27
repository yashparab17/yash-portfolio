import {
	EnvelopeSimpleIcon,
	GithubLogoIcon,
	LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { LinkButton } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export function About() {
	return (
		<section id="about" className="relative overflow-hidden py-24">
			<div className="absolute inset-0 mask-[linear-gradient(to_bottom,transparent,black_35%,black_65%,transparent)]">
				<BackgroundRippleEffect rows={20} />
			</div>

			<div className="pointer-events-none relative z-10 mx-auto flex max-w-7xl flex-col gap-24 px-6">
				<Reveal>
					<div className="max-w-[65ch]">
						<h2 className="text-5xl font-bold tracking-tight text-balance md:text-8xl">
							about me
						</h2>
						<p className="mt-6 text-lg text-muted-foreground">
							{/* TODO: replace with your real bio */}i&apos;m a
							computer science student who likes turning rough ideas
							into software that actually holds up. most of my time
							goes into the small interface details that make an app
              feel considered rather than assembled - while keeping
              it optimized
						</p>
					</div>
				</Reveal>

				<Reveal delay={0.05}>
					<div className="glass flex flex-col items-start gap-6 rounded-3xl p-10 md:p-16">
						<h2 className="max-w-[16ch] text-5xl font-bold tracking-tight text-balance md:text-8xl">
							let&apos;s build something
						</h2>
						<p className="max-w-[45ch] text-lg text-muted-foreground">
							open to internships, freelance work, and interesting
							problems
						</p>
						<div className="flex flex-wrap gap-4">
							<LinkButton
								href="mailto:yashparab1705@gmail.com"
								size="lg"
								className="pointer-events-auto h-12 w-fit rounded-full px-12 text-xl"
							>
								contact
								<EnvelopeSimpleIcon size={28} className="size-7" />
							</LinkButton>
							{/* TODO: replace with your real GitHub/LinkedIn links */}
							<LinkButton
								href="https://github.com/yashparab17"
								target="_blank"
								rel="noopener noreferrer"
								size="lg"
								className="pointer-events-auto h-12 w-fit rounded-full px-12 text-xl"
							>
								github
								<GithubLogoIcon size={28} className="size-7" />
							</LinkButton>
							<LinkButton
								href="https://www.linkedin.com/in/yash-parab-787b6a281/"
								target="_blank"
								rel="noopener noreferrer"
								size="lg"
								className="pointer-events-auto h-12 w-fit rounded-full px-12 text-xl"
							>
								linkedin
								<LinkedinLogoIcon size={28} className="size-7" />
							</LinkButton>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
