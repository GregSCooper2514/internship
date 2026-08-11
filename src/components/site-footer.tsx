import { showrooms } from "@/data/showrooms";
import styles from "./site-footer.module.css";
import Link from "next/link";

export function Footer() {
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
					<Link className={styles.footerLink} href="/#top">
						Home
					</Link>
					<Link className={styles.footerLink} href="/collections">
						Collections
					</Link>
					<Link className={styles.footerLink} href="/#about">
						The catalogue
					</Link>
					<Link className={styles.footerLink} href="/#showrooms">
						Showrooms
					</Link>
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
