import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cleanmails - Cold Email SaaS Source Code",
  description: "The complete source code for a production-ready cold-email SaaS. Campaigns, warmup, unified inbox, AI replies. Built with Go + Next.js. $997 one-time.",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K0VP1K39E5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K0VP1K39E5');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
