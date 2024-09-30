import type { Metadata } from "next";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"
import { GoogleTagManager } from '@next/third-parties/google'

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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6860205400583484"
        crossOrigin="anonymous"></script>
        <link rel="icon" href="/assets/favicon.ico" />
			</Head>
      <GoogleTagManager gtmId="GTM-MPBB4DV6" />
      <body
        className={`antialiased`}
      >
        <NextUIProvider>
          {children}
          <Analytics />
        </NextUIProvider>

      </body>
    </html>
  );
}
