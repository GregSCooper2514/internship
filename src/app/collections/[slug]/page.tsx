import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { Carousel } from "@/components/carousel";
import { getCollection, getCollections } from "@/data/collections";
import { getProductsByCollection } from "@/data/products";
import type { Collection, Product } from "@/data/types";
import styles from "./page.module.css";

export async function generateStaticParams() {
	const collections = getCollections();
	return collections.map((collection) => ({
		slug: collection.slug,
	}));
}

function CollectionGallery({ collection }: { collection: Collection }) {
	return (
		<section className={styles.gallery}>
			<div className={styles.sectionHeader}>
				<div>
					<p className={styles.sectionEyebrow}>In the room</p>
					<h2 className={styles.sectionTitle}>More from {collection.name}</h2>
				</div>
				<p>More stunning images from {collection.name}</p>
			</div>
			<div className={styles.galleryStage}>
				<Carousel images={collection.galleryImages} alt={`${collection.name} Gallery Image`} width={560} height={560} />
			</div>
		</section>
	);
}

function ProductCard({ product }: { product: Product }) {
	return (
		<article className={styles.productCard}>
			<Carousel images={product.images} alt={`${product.name} Image`} width={300} height={300} />
			<h3>{product.name}</h3>
		</article>
	);
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const collection = getCollection(slug);
	const products = getProductsByCollection(slug);

	if (!collection || !products) {
		notFound();
	}

	return (
		<main className={styles.page} style={{ "--accent": collection.accent } as CSSProperties}>
			<header className={styles.hero}>
				<div>
					<Link className={styles.backLink} href="/collections">
						All collections
					</Link>
					<p className={styles.eyebrow}>{collection.tagline}</p>
					<h1 className={styles.heroTitle}>{collection.name}</h1>
					<p className={styles.heroDesc}>{collection.description}</p>
					<p className={styles.meta}>
						{products.length} {products.length === 1 ? "product" : "products"}
					</p>
				</div>
				<div className={styles.heroImage}>
					<Image src={collection.heroImage} alt={`${collection.name} Hero Image`} width={700} height={700} />
				</div>
			</header>
			{collection.galleryImages.length > 0 && <CollectionGallery collection={collection} />}
			<section className={styles.products}>
				<div className={styles.sectionHeader}>
					<div>
						<p className={styles.sectionEyebrow}>The pieces</p>
						<h2 className={styles.sectionTitle}>Products in {collection.name}</h2>
					</div>
					<p>Every piece is dressed in full room settings — worth seeing in person.</p>
				</div>
				<div className={styles.productGrid}>
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</section>
		</main>
	);
}
