import type { Metadata } from "next";
import "@/styles/css/style.css"
import "@/styles/sass/main.sass";
import Script from "next/script";
import { Suspense } from 'react';
import YandexMetrika from "@/components/yandexMetrika/yandexMetrika";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Cookie from "@/components/cookie/cookie";

export const metadata: Metadata = {
  title: "Авто из Японии, Кореи и Китая с доставкой в РФ от 10 дней",
  description: "Доставка авто из Кореи, Японии и Китая от 10 дней по всей россии",  metadataBase: new URL('https://автонинзя.рф'),
  alternates: {
    canonical: 'https://автонинзя.рф',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://автонинзя.рф',
    siteName: 'Авто из Японии, Кореи и Китая с доставкой в РФ от 10 дней',
    title: 'Авто из Японии, Кореи и Китая с доставкой в РФ от 10 дней',
    description: 'Доставка авто из Кореи, Японии и Китая от 10 дней по всей россии',
    images: [{
      url: '/images/og-image.webp',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Авто из Японии, Кореи и Китая с доставкой в РФ от 10 дней',
    description: 'Доставка авто из Кореи, Японии и Китая от 10 дней по всей россии',
  },};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="theme-color" content="#7F1BFF"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="авто из Японии, авто из Кореи, авто из Китая, доставка авто, купить авто" />
        <meta name="author" content="AUTONINJA" />
        <link rel="icon" href="/favicon/favicon.ico"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon-180x180.webp"/>
        <link rel="alternate" hrefLang="ru" href="https://автонинзя.рф" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>
      </head>
      <body>
        <Script id="metrika-counter" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(94235766, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
            });
          `}
        </Script>
        <main>{children}<SpeedInsights/></main>
        <Suspense fallback={<></>}>
          <YandexMetrika />
        </Suspense>
        <Cookie/>
        <Script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossOrigin="anonymous" strategy="lazyOnload"></Script>
      </body>
    </html>
  );
}
