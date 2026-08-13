import Image from "next/image";
import styles from "./page.module.css";

export default function About() {
	return (
		<main className={styles.page}>
			<header className={styles.header}>
				<h1>About</h1>
				<p>The story behind the 2018 catalogue.</p>
			</header>
			<section>
				<h2>About this Catalogue</h2>
				<div className={styles.storyGrid}>
					<Image src="/images/catalogueTitle.png" alt="The Origami 2018 Catalogue" width={500} height={500} />
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
			<section>
				<h2>The Origami story</h2>
				<p>
					Every living space tells a story, and Origami's began long before this catalogue did. The brand sees furniture
					not merely as an object but as a work of art — each design a reflection of a passion for detail, careful
					craftsmanship, and a considered choice of materials.
				</p>
				<p>
					That instinct for bold experimentation, timeless above all trend, runs in the family. Origami's roots trace
					back to a furniture-making tradition dating to the 1950s, passed down from fathers to sons. The brand itself
					was founded in 2009 by Fatih Karakan and Akın Ayva, who built a design vision around distinctive aesthetic
					needs.
				</p>
				<p>
					This 2018 catalogue is one chapter of that ongoing story: six collections shaped by the same desire to make a
					living space more special, more personal, and a little surprising.
				</p>
			</section>
			<section>
				<h2>Vision &amp; Mission</h2>
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
			<section>
				<h2>Frequently asked questions</h2>
				<dl>
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
