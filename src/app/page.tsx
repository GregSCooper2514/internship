import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { collections } from "@/data/collections";
import { showrooms } from "@/data/showrooms";
import type { Collection, Showroom } from "@/data/types";
import styles from "./page.module.css";

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.headerInner}>
				<a className={styles.logo} href="https://www.origamimobilya.com/" target="_blank" rel="noopener noreferrer">
					origami
				</a>
				<nav className={styles.nav}>
					<a href="#top">Home</a>
					<a href="#collections">Collections</a>
					<a href="#about">About the Catalogue</a>
					<a href="#showrooms">Showrooms</a>
					<a href="#contact">Contact</a>
				</nav>
			</div>
		</header>
	);
}

function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.heroContent}>
				<p className={styles.eyebrow}>Since 2018 — timeless lines</p>
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
		<article className={styles.collectionTile} style={{ "--accent": collection.accent } as CSSProperties}>
			<h3>{collection.name}</h3>
			<p>{collection.tagline}</p>
			<p>{collection.description}</p>
			<Link className={styles.collectionLink} href={`/collections/${collection.slug}`}>
				Discover collection
			</Link>
		</article>
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
				{collections.map((collection) => (
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

function ShowroomTile({ showroom }: { showroom: Showroom }) {
	return (
		<div className={styles.showroomTile}>
			<p>{showroom.city}</p>
			<h3>{showroom.location}</h3>
			<p>{showroom.telephone}</p>
			<a className={styles.showroomLink} href={`tel:${showroom.telephone}`}>
				Call this showroom
			</a>
		</div>
	);
}

function Showrooms() {
	return (
		<section className={styles.showrooms} id="showrooms">
			<div className={styles.showroomHeader}>
				<div>
					<p className={styles.sectionEyebrow}>Visit Us</p>
					<h2 className={styles.sectionTitle}>Three Showrooms</h2>
				</div>
				<p>Every collection is dressed in full room settings — worth seeing in person.</p>
			</div>
			<div className={styles.showroomGrid}>
				{showrooms.map((showroom) => (
					<ShowroomTile key={showroom.city + showroom.location} showroom={showroom} />
				))}
			</div>
		</section>
	);
}

function Footer() {
	return (
		<footer className={styles.footer} id="contact">
			<div className={styles.footerGrid}>
				<div>
					<a className={styles.logo} href="https://www.origamimobilya.com/" target="_blank" rel="noopener noreferrer">
						origami
					</a>
					<p>A new perspective on luxury.</p>
				</div>
				<div>
					<h4>Navigate</h4>
					<a className={styles.footerLink} href="#top">
						Home
					</a>
					<a className={styles.footerLink} href="#collections">
						Collections
					</a>
					<a className={styles.footerLink} href="#about">
						The catalogue
					</a>
					<a className={styles.footerLink} href="#showrooms">
						Showrooms
					</a>
				</div>
				<div>
					<h4>Showrooms</h4>
					{showrooms.map((showroom) => (
						<p key={showroom.city + showroom.location}>
							{showroom.city} — {showroom.location}
						</p>
					))}
				</div>
				<div>
					<h4>Follow</h4>
					<a
						className={styles.footerLink}
						href="https://www.instagram.com/origamimobilya/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Instagram — @origamimobilya
					</a>
					<a className={styles.footerLink} href="mailto:hello@origamimobilya.com">
						hello@origamimobilya.com
					</a>
				</div>
			</div>
		</footer>
	);
}

export default function Home() {
	return (
		<div className={styles.page}>
			<Header />
			<main id="top">
				<Hero />
				<Intro />
				<Collections />
				<About />
				<Showrooms />
			</main>
			<Footer />
		</div>
	);
}
