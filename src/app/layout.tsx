import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/site-footer";
import { Header } from "@/components/site-header";
import { catalogueCover, site } from "@/data/site";

export const metadata: Metadata = {
	metadataBase: new URL(site.url),
	title: {
		default: site.title,
		template: `%s — ${site.name}`,
	},
	description: site.description,
	applicationName: site.name,
	authors: [{ name: site.name, url: site.url }],
	creator: site.name,
	publisher: site.name,
	category: "furniture",
	keywords: [
		"Origami",
		"Origami Mobilya",
		"luxury furniture",
		"furniture catalogue",
		"2018 catalogue",
		"interior design",
		"furniture collections",
		"showroom",
	],
	openGraph: {
		type: "website",
		siteName: site.name,
		locale: site.locale,
		title: site.title,
		description: site.description,
		url: "/",
		images: [catalogueCover],
	},
	twitter: {
		card: "summary_large_image",
		title: site.title,
		description: site.description,
		images: [catalogueCover.url],
	},
};

export const viewport: Viewport = {
	colorScheme: "dark",
	themeColor: "#1c1a17",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" data-scroll-behavior="smooth">
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
