import Image from "next/image";
import type { Collection } from "@/data/types";
import styles from "./page.module.css";
import { getProductsByCollection } from "@/data/products";
import Link from "next/link";
import { getCollections } from "@/data/collections";

function CollectionCard({collection}: {collection: Collection}) {
	const productCount: number = getProductsByCollection(collection.slug).length;

	return (
		<article className={styles.collectionCard}>
			<Image src={collection.heroImage} alt={`${collection.name} - Hero Image`} width={400} height={400} />
			<h2>{collection.name}</h2>
			<p>{collection.tagline}</p>
			<p>{collection.description}</p>
			<p>{productCount} {productCount === 1 ? "product" : "products"}</p>
			<Link href={`/collections/${collection.slug}`}>View Collection</Link>
		</article>
	);
};

export default function CollectionsPage() {
	return (
		<main>
			<header>
				<h1>Collections</h1>
				<p>Six collections from the Origami 2018 catalogue.</p>
			</header>
			<section className={styles.collectionsPage}>
				{getCollections().map((collection) => (
					<CollectionCard key={collection.slug} collection={collection} />
				))}
			</section>
		</main>
	);
}
