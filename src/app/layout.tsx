import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marcev Services | Technische Gebäudebetreuung für Hausverwaltungen",
  description: "Ein Ansprechpartner für alle Gewerke: Zählerablesung, Rauchwarnmelder-Service, Gerätemontage und Dokumentation. Eigene Servicekräfte und ein belastbares Partnernetzwerk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
