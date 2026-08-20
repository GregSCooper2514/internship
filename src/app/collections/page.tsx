import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { getCollections } from "@/data/collections";
import { getProductsByCollection } from "@/data/products";
import { pageMetadata } from "@/data/site";
import type { Collection } from "@/data/types";
import styles from "./page.module.css";

const catalogue = getCollections();

export const metadata: Metadata = pageMetadata({
	title: "Collections",
	description: `All ${catalogue.length} collections from the Origami 2018 catalogue: ${catalogue
		.map((collection) => collection.name)
		.join(", ")}.`,
	path: "/collections",
});

function CollectionCard({ collection }: { collection: Collection }) {
	const productCount: number = getProductsByCollection(collection.slug).length;

	return (
		<Link className={styles.cardAnchor} href={`/collections/${collection.slug}`}>
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
					<span className={styles.cardLink}>View Collection</span>
				</div>
			</article>
		</Link>
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
