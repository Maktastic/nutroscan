import type { Metadata } from "next";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import PageWrapper from "@/components/PageWrapper";
import { Inter } from 'next/font/google';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Nutroscan: AI Personalized Meal Plans for Better Health",
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
      </Head>
      <Script id='google-adsense' src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6860205400583484" crossOrigin="anonymous" async strategy="afterInteractive" defer>
      </Script>
      <body
        className={inter.className}
      >
        <NextUIProvider>
					<Toaster position="bottom-center" toastOptions={{
						className: 'max-sm:text-[12px]'
					}} />
          <PageWrapper>
            <Navbar />
            {children}
            <Footer />
          </PageWrapper>
          <Analytics />
          <SpeedInsights />
        </NextUIProvider>
      </body>
    </html>
  );
}
