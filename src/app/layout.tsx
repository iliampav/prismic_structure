import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import "./globals.css";
import { createClient } from "@prismicio/client";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient('tutorialcreating');

  const page = await client.getSingle('settings')
 
  return {
    title: page.data.site_title || 'Sem texto adicionado no titulo',
    description: page.data.meta_description || 'sem description utilizada',
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>Header!</header>
        {children}
        <footer>Footer!</footer>
      </body>
    </html>
  );
}
