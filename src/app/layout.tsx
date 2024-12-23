import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const hancoke = localFont({
  src: "./fonts/Hancoke.ttf",
  display: "swap",
  weight: "400", 
  style: "normal", 
  variable: "--font-hancoke", 
});
const montserrat = localFont({
  src: "./fonts/Montserrat-Bold.ttf",
  display: "swap",
  weight: "400", 
  style: "normal",
  variable: "--font-montserrat",
});
const poppins = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  display: "swap",
  weight: "400", 
  style: "normal",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sriwijaya Besanjo 2025",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hancoke.variable} ${montserrat.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
