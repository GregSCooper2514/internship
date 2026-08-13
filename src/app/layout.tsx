import "./globals.css";
import { Footer } from "@/components/site-footer";
import { Header } from "@/components/site-header";

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
