import type { MetadataRoute } from "next";
import { getCollections } from "@/data/collections";
import { site } from "@/data/site";

export const dynamic = "force-static";

const absolute = (path: string) => new URL(path, site.url).toString();

const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
	const collectionPages = getCollections().map((collection) => ({
		url: absolute(`/collections/${collection.slug}`),
		lastModified,
		changeFrequency: "yearly" as const,
		priority: 0.8,
		images: [absolute(collection.heroImage)],
	}));

	return [
		{
			url: absolute("/"),
			lastModified,
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: absolute("/collections"),
			lastModified,
			changeFrequency: "monthly",
			priority: 0.9,
		},
		...collectionPages,
		{
			url: absolute("/about"),
			lastModified,
			changeFrequency: "yearly",
			priority: 0.5,
		},
		{
			url: absolute("/contact"),
			lastModified,
			changeFrequency: "yearly",
			priority: 0.5,
		},
	];
}
