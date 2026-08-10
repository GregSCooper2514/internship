import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

function Header() {
	return (
		<header className={styles.header}>
			<Link href="#top">origami</Link>
			<nav className={styles.nav}>
				<Link href="#top">Home</Link>
				<Link href="#collections">Collections</Link>
				<Link href="#about">About the Catalogue</Link>
				<Link href="#showrooms">Showrooms</Link>
				<Link href="#contact">Contact</Link>
			</nav>
		</header>
	);
}

function Hero() {
	return (
		<section className={styles.hero}>
			<h1>origami</h1>
			<p className={styles.voice}>A new perspective on luxury.</p>
			<p className={styles.heroDesc}>
				Six collections, one point of view. Furniture that pairs uncompromising craftsmanship with a sense of play —
				natural materials, bold colour, and the odd beautiful contradiction.
			</p>
			<div>
				<Link href="#collections">Explore collections</Link>
				<Link href="#showrooms">Find a showroom</Link>
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

function Collections() {
	return (
		<section className={styles.collections} id="collections">
			<div className={styles.collectionHeader}>
				<div>
					<p>The 2018 Catalogue</p>
					<h2>Six Collections, Six Moods</h2>
				</div>
				<p>Each collection channels a different chapter of drama, craft and colour — from Venetian velvet to Aegean crimson.</p>
			</div>
			<div className={styles.collectionGrid}>
				{/* TODO: Add collection generation code */}
			</div>
		</section>
	);
}

function About() {
	return (
		<section className={styles.about} id="about">
			{/* TODO: Add picture page 5 */}
			<div>
				<h2>"Our differences are our richness"</h2>
				<p>The Origami 2018 collection is made up of designs that are simple and natural, yet colourful, playful, and full of contrasting detail — spaces that don't compromise on either luxury or function. This year, without chasing any particular trend, the idea that "our differences are our richness" sets the theme for these timeless designs. Being Origami means travelling between dramatic, emotional, passionate and mystical cultures, finding the best ideas in the world, interpreting them, making them your own, and retelling them in your own language — turning dreams into reality.</p>
			</div>
			<Link href="#collections">Explore collections</Link>
		</section>
	);
}

function Showrooms() {
	return (
		<section className={styles.showrooms} id="showrooms">
			<div className={styles.showroomHeader}>
				<div>
					<p>Visit Us</p>
					<h2>Three Showrooms</h2>
				</div>
				<p>Every collection is dressed in full room settings — worth seeing in person.</p>
			</div>
			<div className={styles.showroomGrid}>
				{/* TODO: Add showroom tiles */}
			</div>
		</section>
	);
}

function Footer() {
	return <footer className={styles.footer}></footer>;
}

export default function Home() {
	return (
		<>
			<Header />
			<main id="top">
				<Hero />
				<Intro />
				<Collections />
				<About />
			</main>
			<Footer />
		</>
	);
}
