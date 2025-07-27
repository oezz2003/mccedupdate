import './globals.css';
import type { Metadata } from 'next';
// تمت إزالة استيراد Roboto من Google Fonts لاستخدام الخط المحلي
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// لا حاجة لتعريف roboto لأن الخط معرف محليًا في CSS

export const metadata: Metadata = {
  title: 'MCCED - Global Logistics Solutions | On Time, Every Time, Anywhere',
  description: 'MCCED provides comprehensive global logistics services including international freight, customs brokerage, warehousing, and supply chain solutions. Trusted by businesses worldwide since 2020.',
  openGraph: {
    title: 'MCCED - Global Logistics Solutions',
    description: 'Comprehensive global logistics services: freight, customs, warehousing, supply chain. On Time, Every Time, Anywhere.',
    url: 'https://www.mcced.com',
    siteName: 'MCCED',
    images: [
      {
        url: 'https://www.mcced.com/main%20logo.png',
        width: 800,
        height: 600,
        alt: 'MCCED Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MCCED - Global Logistics Solutions',
    description: 'Comprehensive global logistics services: freight, customs, warehousing, supply chain. On Time, Every Time, Anywhere.',
    images: ['https://www.mcced.com/main%20logo.png'],
    site: '@mcced',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>MCCED - Global Logistics Solutions | On Time, Every Time, Anywhere</title>
        <meta name="description" content="MCCED provides comprehensive global logistics services including international freight, customs brokerage, warehousing, and supply chain solutions. Trusted by businesses worldwide since 2020." />
      </head>
      <body style={{ fontFamily: 'Roboto, sans-serif' }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
