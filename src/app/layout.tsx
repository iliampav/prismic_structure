import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import "./globals.css";
import { createClient, repositoryName } from "@/prismicio";
import Header from '@/components/header';
import Footer from '@/components/footer';
import { PrismicPreview } from '@prismicio/next';

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

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
        <PrismicPreview repositoryName={repositoryName}/>
      </body>
    </html>
  );
}
