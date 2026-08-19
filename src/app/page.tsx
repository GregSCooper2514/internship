import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Showrooms } from "@/components/showrooms";
import { getCollections } from "@/data/collections";
import type { Collection } from "@/data/types";
import styles from "./page.module.css";

function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.heroContent}>
				<h1 className={styles.heroTitle}>origami</h1>
				<p className={styles.voice}>A new perspective on luxury.</p>
				<p className={styles.heroDesc}>
					Six collections, one point of view. Furniture that pairs uncompromising craftsmanship with a sense of play —
					natural materials, bold colour, and the odd beautiful contradiction.
				</p>
				<div className={styles.heroActions}>
					<a className={styles.heroCtaPrimary} href="#collections">
						Explore collections
					</a>
					<a className={styles.heroCtaSecondary} href="#showrooms">
						Find a showroom
					</a>
				</div>
			</div>
			<svg
				className={styles.heroSvg}
				aria-label="a decorative illustration of a wood shaving in a spiral shape"
				viewBox="0 0 100 100"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M70,15 C90,15 92,45 75,58 C60,69 38,64 34,46 C31,32 44,22 56,28 C65,33 63,44 54,45"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				/>
			</svg>
		</section>
	);
}

function Intro() {
	return (
		<section className={styles.intro}>
			<p className={styles.voice}>"A home is never fashion — it is your reflection..."</p>
		</section>
	);
}

function CollectionTile({ collection }: { collection: Collection }) {
	return (
		<Link
			className={styles.collectionTile}
			style={{ "--accent": collection.accent } as CSSProperties}
			href={`/collections/${collection.slug}`}
		>
			<h3>{collection.name}</h3>
			<p>{collection.tagline}</p>
			<p>{collection.description}</p>
			<span className={styles.collectionLink}>
				Discover collection
			</span>
		</Link>
	);
}

function Collections() {
	return (
		<section className={styles.collections} id="collections">
			<div className={styles.collectionHeader}>
				<div>
					<p className={styles.sectionEyebrow}>The 2018 Catalogue</p>
					<h2 className={styles.sectionTitle}>Six Collections, Six Moods</h2>
				</div>
				<p>
					Each collection channels a different chapter of drama, craft and colour — from Venetian velvet to Aegean
					crimson.
				</p>
			</div>
			<div className={styles.collectionGrid}>
				{getCollections().map((collection) => (
					<CollectionTile key={collection.slug} collection={collection} />
				))}
			</div>
		</section>
	);
}

function About() {
	return (
		<section className={styles.about} id="about">
			<div className={styles.aboutImage}>
				<Image src="/images/catalogueTitle.png" alt="The Origami 2018 Catalogue" width={400} height={100} />
			</div>
			<div>
				<h2>"Our differences are our richness"</h2>
				<p>
					The Origami 2018 collection is made up of designs that are simple and natural, yet colourful, playful, and
					full of contrasting detail — spaces that don't compromise on either luxury or function. This year, without
					chasing any particular trend, the idea that "our differences are our richness" sets the theme for these
					timeless designs. Being Origami means travelling between dramatic, emotional, passionate and mystical
					cultures, finding the best ideas in the world, interpreting them, making them your own, and retelling them in
					your own language — turning dreams into reality.
				</p>
				<a className={styles.heroCtaPrimary} href="#collections">
					Explore collections
				</a>
			</div>
		</section>
	);
}

export default function Home() {
	return (
		<main id="top" className={styles.page}>
			<Hero />
			<Intro />
			<Collections />
			<About />
			<Showrooms />
		</main>
	);
}
