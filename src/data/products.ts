import type { Product } from "./types";

const img = (n: number) => `/images/catalogue/page-${String(n).padStart(2, "0")}.webp`;

const imgSet = (n: number) =>
	["a", "b", "c"].map((l) => `/images/catalogue/page-${String(n).padStart(2, "0")}-${l}.webp`);

export const products: Product[] = [
	// Venedik
	{ id: "venedik-sofa", name: "Venedik Sofa", collection: "venedik", images: [img(8), img(12)] },
	{ id: "venedik-puff", name: "Venedik Puff", collection: "venedik", images: [img(8)] },
	{ id: "venedik-dining-table", name: "Venedik Dining Table", collection: "venedik", images: [img(9), img(10)] },
	{ id: "venedik-chair", name: "Venedik Chair", collection: "venedik", images: [img(9), img(10)] },
	{ id: "venedik-side-table", name: "Venedik Side Table", collection: "venedik", images: [img(9)] },
	{ id: "venedik-console", name: "Venedik Console", collection: "venedik", images: imgSet(13) },

	// Morocco
	{ id: "morocco-armchair", name: "Morocco Armchair", collection: "morocco", images: [img(16), ...imgSet(21)] },
	{ id: "morocco-bench", name: "Morocco Bench", collection: "morocco", images: [img(16)] },
	{
		id: "morocco-coffee-table",
		name: "Morocco Coffee Table",
		collection: "morocco",
		images: [img(16), ...imgSet(19), ...imgSet(21)],
	},
	{ id: "morocco-side-table", name: "Morocco Side Table", collection: "morocco", images: [img(16)] },
	{ id: "morocco-corner-sofa", name: "Morocco Corner Sofa", collection: "morocco", images: [img(17)] },
	{ id: "morocco-stone-dining-table", name: "Stone Dining Table", collection: "morocco", images: [img(18)] },
	{
		id: "morocco-stone-console",
		name: "Stone Console",
		collection: "morocco",
		images: [img(18), ...imgSet(19), img(20)],
	},
	{ id: "morocco-window-mirror", name: "Window Mirror", collection: "morocco", images: imgSet(21) },

	// Titian
	{ id: "titian-bedhead", name: "Titian Bedhead", collection: "titian", images: [img(24), ...imgSet(27)] },
	{ id: "titian-bed", name: "Titian Bed", collection: "titian", images: [img(24), ...imgSet(27)] },
	{ id: "titian-nightstand", name: "Titian Nightstand", collection: "titian", images: [img(24), ...imgSet(27)] },
	{ id: "titian-mirror", name: "Titian Mirror", collection: "titian", images: [img(24), ...imgSet(27)] },
	{ id: "titian-wardrobe", name: "Titian Wardrobe", collection: "titian", images: [img(25)] },
	{ id: "titian-bedding", name: "Titian Bedding", collection: "titian", images: [img(26)] },
	{ id: "titian-console", name: "Titian Console", collection: "titian", images: imgSet(27) },

	// Nichole
	{ id: "nichole-console", name: "Nichole Console", collection: "nichole", images: [img(30)] },
	{
		id: "nichole-dining-table",
		name: "Nichole Dining Table",
		collection: "nichole",
		images: [img(30), img(34), ...imgSet(35)],
	},
	{ id: "nichole-chair", name: "Nichole Chair", collection: "nichole", images: [img(30), ...imgSet(33), img(34)] },
	{ id: "nichole-side-table", name: "Nichole Side Table", collection: "nichole", images: [img(30), ...imgSet(33)] },
	{ id: "nichole-tv-unit", name: "Nichole TV Unit", collection: "nichole", images: [img(31), img(32)] },
	{ id: "nichole-armchair", name: "Nichole Armchair", collection: "nichole", images: imgSet(33) },
	{ id: "nichole-coffee-table", name: "Nichole Coffee Table", collection: "nichole", images: imgSet(33) },
	{ id: "nichole-dresser", name: "Nichole Dresser", collection: "nichole", images: imgSet(35) },

	// Greko
	{ id: "greko-sofa", name: "Greko Sofa", collection: "greko", images: [img(38), img(40), ...imgSet(41)] },
	{ id: "greko-coffee-table", name: "Greko Coffee Table", collection: "greko", images: [img(39)] },
	{ id: "greko-armchair", name: "Greko Armchair", collection: "greko", images: [img(39)] },
	{ id: "greko-console", name: "Greko Console", collection: "greko", images: [img(39), img(42)] },

	// Ametis
	{ id: "ametis-tv-unit", name: "Ametis TV Unit", collection: "ametis", images: [img(46), img(50)] },
	{ id: "ametis-sofa", name: "Ametis Sofa", collection: "ametis", images: [img(46), img(47)] },
	{
		id: "ametis-coffee-table",
		name: "Ametis Coffee Table",
		collection: "ametis",
		images: [img(46), ...imgSet(49), ...imgSet(51)],
	},
	{ id: "ametis-side-table", name: "Ametis Side Table", collection: "ametis", images: [img(47), img(48)] },
	{
		id: "ametis-dining-table",
		name: "Ametis Dining Table",
		collection: "ametis",
		images: [img(47), img(48), ...imgSet(49)],
	},
	{ id: "ametis-armchair", name: "Ametis Armchair", collection: "ametis", images: [img(50)] },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
export const getProducts = () => products;

export const getProductsByCollection = (collection: string) => products.filter((p) => p.collection === collection);
