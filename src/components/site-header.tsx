import Link from "next/link";
import styles from "./site-header.module.css";

export function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.headerInner}>
				<a className={styles.logo} href="https://www.origamimobilya.com/" target="_blank" rel="noopener noreferrer">
					origami
				</a>
				<nav className={styles.nav}>
					<Link href="/#top">Home</Link>
					<Link href="/collections">Collections</Link>
					<Link href="/#about">About the Catalogue</Link>
					<Link href="/#showrooms">Showrooms</Link>
					<Link href="/contact">Contact</Link>
				</nav>
			</div>
		</header>
	);
}
