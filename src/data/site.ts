import type { Metadata } from "next";

/** Site-wide values shared by every page's metadata. */
export const site = {
	name: "Origami",
	title: "Origami — A new perspective on luxury",
	description:
		"The Origami 2018 catalogue: six furniture collections pairing uncompromising craftsmanship with bold colour, natural materials and a sense of play.",
	url: "https://www.origami2018.gregcooper.dpdns.org",
	locale: "en_GB",
} as const;

export interface SocialImage {
	url: string;
	width: number;
	height: number;
	alt: string;
}

/** Every scanned catalogue page shares these pixel dimensions. */
export const cataloguePageSize = { width: 1183, height: 1185 };

/** Default social preview image. */
export const catalogueCover: SocialImage = {
	url: "/images/catalogueTitle.png",
	width: 1920,
	height: 1080,
	alt: "The Origami 2018 Catalogue",
};

interface PageMetadataOptions {
	title: string;
	exactTitle?: boolean;
	description: string;
	path: string;
	image?: SocialImage;
}

export function pageMetadata({
	title,
	exactTitle = false,
	description,
	path,
	image = catalogueCover,
}: PageMetadataOptions): Metadata {
	const socialTitle = exactTitle ? title : `${title} — ${site.name}`;

	return {
		title: exactTitle ? { absolute: title } : title,
		description,
		alternates: { canonical: path },
		openGraph: {
			type: "website",
			siteName: site.name,
			locale: site.locale,
			title: socialTitle,
			description,
			url: path,
			images: [image],
		},
		twitter: {
			card: "summary_large_image",
			title: socialTitle,
			description,
			images: [image.url],
		},
	};
}
