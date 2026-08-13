import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { getCollections } from "@/data/collections";
import { getProductsByCollection } from "@/data/products";
import type { Collection } from "@/data/types";
import styles from "./page.module.css";

function CollectionCard({ collection }: { collection: Collection; }) {
	const productCount: number = getProductsByCollection(collection.slug).length;

	return (
		<article className={styles.card} style={{ "--accent": collection.accent } as CSSProperties}>
			<div className={styles.cardImage}>
				<Image src={collection.heroImage} alt={`${collection.name} - Hero Image`} width={400} height={400} />
			</div>
			<div className={styles.cardBody}>
				<p className={styles.count}>
					{productCount} {productCount === 1 ? "product" : "products"}
				</p>
				<h2>{collection.name}</h2>
				<p className={styles.tagline}>{collection.tagline}</p>
				<p className={styles.description}>{collection.description}</p>
				<Link className={styles.cardLink} href={`/collections/${collection.slug}`}>
					View Collection
				</Link>
			</div>
		</article>
	);
}

export default function CollectionsPage() {
	return (
		<main className={styles.page}>
			<header className={styles.pageHeader}>
				<p className={styles.eyebrow}>The 2018 Catalogue</p>
				<h1>Collections</h1>
				<p className={styles.lede}>Six collections from the Origami 2018 catalogue.</p>
			</header>
			<section className={styles.catalogue}>
				<div className={styles.grid}>
					{getCollections().map((collection) => (
						<CollectionCard key={collection.slug} collection={collection} />
					))}
				</div>
			</section>
		</main>
	);
}
