import { Showrooms } from "@/components/showrooms";
import styles from "./page.module.css";

export default function Contact() {
	return (
		<main className={styles.page}>
			<header className={styles.pageHeader}>
				<p className={styles.eyebrow}>Get in touch</p>
				<h1>Contact</h1>
				<p className={styles.lede}>Get in touch with us, or visit one of our showrooms.</p>
			</header>
			<Showrooms />
			<section className={styles.section}>
				<div className={styles.sectionHeader}>
					<div>
						<p className={styles.sectionEyebrow}>Talk to us</p>
						<h2 className={styles.sectionTitle}>Our Contact Details</h2>
					</div>
					<p>Questions about a collection, a piece, or a showroom visit — we're happy to help.</p>
				</div>
				<div className={styles.detailGrid}>
					<div className={styles.detailTile}>
						<p className={styles.detailLabel}>Phone</p>
						<a className={styles.detailValue} href="tel:+903123500303">
							+90 312 350 03 03
						</a>
					</div>
					<div className={styles.detailTile}>
						<p className={styles.detailLabel}>Email</p>
						<a className={styles.detailValue} href="mailto:bilgi@origamimobilya.com">
							bilgi@origamimobilya.com
						</a>
					</div>
				</div>
			</section>
			<section className={styles.section}>
				<div className={styles.sectionHeader}>
					<div>
						<p className={styles.sectionEyebrow}>Elsewhere</p>
						<h2 className={styles.sectionTitle}>Follow Us</h2>
					</div>
					<p>Stay updated with our latest news and offers by following us on social media.</p>
				</div>
				<div className={styles.socialGrid}>
					<a
						className={styles.socialTile}
						href="https://www.facebook.com/origamimobilya"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h3>Facebook</h3>
						<p className={styles.socialHandle}>origamimobilya</p>
						<span className={styles.socialCta}>Follow</span>
					</a>
					<a
						className={styles.socialTile}
						href="https://www.instagram.com/origamimobilya/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h3>Instagram</h3>
						<p className={styles.socialHandle}>@origamimobilya</p>
						<span className={styles.socialCta}>Follow</span>
					</a>
					<a
						className={styles.socialTile}
						href="https://www.pinterest.com/origamimobilya/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h3>Pinterest</h3>
						<p className={styles.socialHandle}>origamimobilya</p>
						<span className={styles.socialCta}>Follow</span>
					</a>
				</div>
			</section>
		</main>
	);
}
