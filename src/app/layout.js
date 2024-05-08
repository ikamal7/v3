import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kamal Hosen",
  description: "Kamal Hosen: a backend developer specializing in crafting top-tier digital products with precision and innovation.",
  openGraph: {
    title: 'Kamal Hosen',
    description: 'Kamal Hosen: a backend developer specializing in crafting top-tier digital products with precision and innovation.',
    images: [
      {
        url: 'https://v3.kamalhosen.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kamal Hosen',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 ${inter.className}`}>{children}</body>
    </html>
  );
}
