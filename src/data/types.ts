export interface Showroom {
	city: string;
	location: string;
	telephone: string;
}

export type CollectionSlug = "venedik" | "morocco" | "titian" | "nichole" | "greko" | "ametis";

export interface Collection {
	slug: CollectionSlug;
	name: string;
	tagline: string;
	description: string;
	accent: string;
	heroImage: string;
	galleryImages: string[]; // Extra photos for this collection with no single named product.
}

export interface Product {
	id: string;
	name: string;
	collection: CollectionSlug;
	images: string[]; // One or more photos of this piece.
}
