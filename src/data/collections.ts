import type { Collection } from "./types";

const img = (n: number) => `/images/catalogue/page-${String(n).padStart(2, "0")}.jpg`;
const imgSet = (n: number) => ["a", "b", "c"].map((l) => `/images/catalogue/page-${String(n).padStart(2, "0")}-${l}.jpg`);

export const collections: Collection[] = [
	{
		slug: "venedik",
		name: "Venedik",
		tagline: "timeless lines",
		description:
			"For those who love to make a statement, dramatic, emotional, passionate and mystical designs become reality. Bold colours meeting classic furniture forms also produce striking, out-of-the-ordinary textures.",
		accent: "#2c7a5d",
		heroImage: img(7),
		galleryImages: imgSet(11),
	},
	{
		slug: "morocco",
		name: "Morocco",
		tagline: "timeless lines",
		description:
			"The Morocco collection is enriched with a range of accessories built around mystical decorative motifs — consoles, mirrors, side tables, display cabinets. Simple and natural, yet colourful, playful and full of contrasting detail.",
		accent: "#8b5a34",
		heroImage: img(15),
		galleryImages: [],
	},
	{
		slug: "titian",
		name: "Titian",
		tagline: "timeless lines",
		description:
			"A home can never be fashion — it is your reflection, a concept designed to let you live luxury, and everyone is bound to fall under its spell. Simple and natural, yet colourful, playful and full of contrasting detail.",
		accent: "#8f8878",
		heroImage: img(23),
		galleryImages: [],
	},
	{
		slug: "nichole",
		name: "Nichole",
		tagline: "timeless lines",
		description:
			"Elliptical forms intersect with wavering geometries; depths and reliefs echo one another in a series of artistic reverberations. Simple and natural, yet colourful, playful and full of contrasting detail.",
		accent: "#a9812e",
		heroImage: img(29),
		galleryImages: [],
	},
	{
		slug: "greko",
		name: "Greko",
		tagline: "timeless lines",
		description:
			"The rising star of a new, passionate and mystical concept, it takes on its own character following a tradition woven with awareness. Simple and natural, yet colourful, playful and full of contrasting detail.",
		accent: "#7a2130",
		heroImage: img(37),
		galleryImages: imgSet(43),
	},
	{
		slug: "ametis",
		name: "Ametis",
		tagline: "timeless lines",
		description:
			"With its eye-catching forms and a mystical spirit hidden in the details, it invites you into a timeless world. Simple and natural, yet colourful, playful and full of contrasting detail.",
		accent: "#8f6f74",
		heroImage: img(45),
		galleryImages: [],
	},
];

export const getCollection = (slug: string) => collections.find((c) => c.slug === slug);
export const getCollections = () => collections;