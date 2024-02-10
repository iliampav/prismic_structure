import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import "./globals.css";
import { createClient } from "@prismicio/client";
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient('tutorialcreating');

  const settings = await client.getSingle('settings')
 
  return {
    title: settings.data.site_title || 'Sem texto adicionado no titulo',
    description: settings.data.meta_description || 'sem description utilizada',
    openGraph: {
      images: [settings.data.og_image.url || ""],
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
