import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
	return (
		<main className={styles.page}>
			<header className={styles.pageHeader}>
				<p className={styles.eyebrow}>Error 404</p>
				<h1>Page not found</h1>
				<p className={styles.lede}>This page has been folded away — or it never was.</p>
				<div className={styles.actions}>
					<Link className={styles.ctaPrimary} href="/">
						Back to home
					</Link>
					<Link className={styles.ctaSecondary} href="/collections">
						Browse collections
					</Link>
				</div>
			</header>
		</main>
	);
}
