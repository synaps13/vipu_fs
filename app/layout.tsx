import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.scss";

export const metadata: Metadata = {
	title: "VIPU Your IT partner",
	description: "Some description!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<GoogleTagManager gtmId="GTM-WGHNR9SJ" />
			<body>
				{children}
			</body>
		</html>
	);
}
