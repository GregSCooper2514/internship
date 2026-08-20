import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import styles from "./not-found.module.css";

const lede = "This page has been folded away — or it never was.";

export const metadata: Metadata = {
	title: "Page not found",
	description: lede,
	openGraph: {
		title: `Page not found — ${site.name}`,
		description: lede,
	},
};

export default function NotFound() {
	return (
		<main className={styles.page}>
			<header className={styles.pageHeader}>
				<p className={styles.eyebrow}>Error 404</p>
				<h1>Page not found</h1>
				<p className={styles.lede}>{lede}</p>
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
