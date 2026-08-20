import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = pageMetadata({
	title: "About the Catalogue",
	description:
		"The story behind the Origami 2018 catalogue — the theme that shaped it, the furniture-making heritage behind the brand, and the vision and mission that guide its designs.",
	path: "/about",
});

export default function About() {
	return (
		<main className={styles.page}>
			<header className={styles.pageHeader}>
				<p className={styles.eyebrow}>The 2018 Catalogue</p>
				<h1>About</h1>
				<p className={styles.lede}>The story behind the 2018 catalogue.</p>
			</header>
			<section className={styles.section}>
				<div className={styles.sectionHeader}>
					<div>
						<p className={styles.sectionEyebrow}>The theme</p>
						<h2 className={styles.sectionTitle}>About this Catalogue</h2>
					</div>
					<p>One idea, six collections — read it before you walk the rooms.</p>
				</div>
				<div className={styles.storyGrid}>
					<div className={styles.storyImage}>
						<Image src="/images/catalogueTitle.png" alt="The Origami 2018 Catalogue" width={500} height={500} />
					</div>
					<div>
						<h3>"Our differences are our richness"</h3>
						<p>
							The Origami 2018 collection is made up of designs that are simple and natural, yet colourful, playful, and
							full of contrasting detail — spaces that don't compromise on either luxury or function. This year, without
							chasing any particular trend, the idea that "our differences are our richness" sets the theme for these
							timeless designs. Being Origami means travelling between dramatic, emotional, passionate and mystical
							cultures, finding the best ideas in the world, interpreting them, making them your own, and retelling them
							in your own language — turning dreams into reality.
						</p>
					</div>
				</div>
			</section>
			<section className={styles.section}>
				<div className={styles.sectionHeader}>
					<div>
						<p className={styles.sectionEyebrow}>Heritage</p>
						<h2 className={styles.sectionTitle}>The Origami story</h2>
					</div>
				</div>
				<div className={styles.prose}>
					<p>
						Every living space tells a story, and Origami's began long before this catalogue did. The brand sees
						furniture not merely as an object but as a work of art — each design a reflection of a passion for detail,
						careful craftsmanship, and a considered choice of materials.
					</p>
					<p>
						That instinct for bold experimentation, timeless above all trend, runs in the family. Origami's roots trace
						back to a furniture-making tradition dating to the 1950s, passed down from fathers to sons. The brand itself
						was founded in 2009 by Fatih Karakan and Akın Ayva, who built a design vision around distinctive aesthetic
						needs.
					</p>
					<p>
						This 2018 catalogue is one chapter of that ongoing story: six collections shaped by the same desire to make
						a living space more special, more personal, and a little surprising.
					</p>
				</div>
			</section>
			<section className={styles.section}>
				<div className={styles.sectionHeader}>
					<div>
						<p className={styles.sectionEyebrow}>What drives us</p>
						<h2 className={styles.sectionTitle}>Vision &amp; Mission</h2>
					</div>
				</div>
				<div className={styles.visionMissionGrid}>
					<article>
						<h3>Vision</h3>
						<p>
							To be a furniture brand that meets the aesthetic needs of modern life, leads in quality and design, and
							always puts customer satisfaction first.
						</p>
					</article>
					<article>
						<h3>Mission</h3>
						<p>
							To turn dreams into reality with timeless designs, produced using quality materials and craftsmanship,
							that personalise the living space of every customer.
						</p>
					</article>
				</div>
			</section>
			<section className={styles.section}>
				<div className={styles.sectionHeader}>
					<div>
						<p className={styles.sectionEyebrow}>Good to know</p>
						<h2 className={styles.sectionTitle}>Frequently asked questions</h2>
					</div>
				</div>
				<dl className={styles.faq}>
					<dt>When was Origami founded?</dt>
					<dd>
						Origami is built on a family furniture-making tradition dating back to the 1950s, and was officially founded
						in 2009 by Fatih Karakan and Akın Ayva.
					</dd>

					<dt>Who are the founders of Origami?</dt>
					<dd>Fatih Karakan and Akın Ayva.</dd>

					<dt>What kind of furniture does Origami produce?</dt>
					<dd>
						Modern and luxury furniture designs, including custom-designed pieces for individual living spaces — like
						the six collections in this 2018 catalogue.
					</dd>
				</dl>
			</section>
		</main>
	);
}
