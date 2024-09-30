import type { Metadata } from "next";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Nutroscan: AI Personalized Meal Plans for Better Health | Custom Diet Plans for Health Conditions",
  description: "Nutroscan offers AI-generated meal plans tailored to your specific health conditions. Achieve optimal health with our personalized diet solutions.",
};

const GTM_ID = 'GTM-MPBB4DV6';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={GTM_ID} />
      <Head>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Script id='google-adsense' src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6860205400583484" crossOrigin="anonymous" async strategy="afterInteractive">
      </Script>
      <body
        className={`antialiased`}
      >
        <NextUIProvider>
          {children}
          <Analytics />
        </NextUIProvider>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
      </body>
    </html>
  );
}
