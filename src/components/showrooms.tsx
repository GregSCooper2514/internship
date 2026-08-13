import { getShowrooms } from "@/data/showrooms";
import type { Showroom } from "@/data/types";
import styles from "./showrooms.module.css";

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

export function Showrooms() {
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
				{getShowrooms().map((showroom) => (
					<ShowroomTile key={showroom.city + showroom.location} showroom={showroom} />
				))}
			</div>
		</section>
	);
}
