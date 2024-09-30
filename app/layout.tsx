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
         <meta name="google-adsense-account" content="ca-pub-6860205400583484" />
          <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MPBB4DV6');`,
          }}
        />
        <link rel="icon" href="/assets/favicon.ico" />
			</Head>
      <body
        className={`antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MPBB4DV6"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <NextUIProvider>
          {children}
        </NextUIProvider>

      </body>
    </html>
  );
}
