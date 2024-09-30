import type { Metadata } from "next";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Nutroscan: AI Personalized Meal Plans for Better Health | Custom Diet Plans for Health Conditions",
  description: "Nutroscan offers AI-generated meal plans tailored to your specific health conditions. Achieve optimal health with our personalized diet solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
			<Head>
        <link rel="icon" href="/assets/favicon.ico" />
				<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6860205400583484"
					crossOrigin="anonymous"></script>
			</Head>
      <body
        className={`antialiased`}
      >
        <NextUIProvider>
          {children}
        </NextUIProvider>

      </body>
    </html>
  );
}
