import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { TechStack } from "@/components/tech-stack";
import { Work } from "@/components/work";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";

export default function Home() {
	return (
		<>
			<Nav />
			<main className="flex-1">
				<Hero />
				<TechStack />
				<Work />
				<About />
			</main>
			<Footer />
		</>
	);
}
