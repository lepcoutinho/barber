import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Actions from "@/components/actions/actions";

import { Merriweather, Quattrocento } from "next/font/google";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--merriweathe",
});

const quattrocento = Quattrocento({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--quattrocento",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nome Barbearia",
    default: "Nome Barbearia",
  },
  // description: 'The official Next.js Learn Dashboard built with App Router.',
  // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${merriweather.variable} ${quattrocento.variable}`}
    >
      <body>
        <Header />
        <Actions />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
