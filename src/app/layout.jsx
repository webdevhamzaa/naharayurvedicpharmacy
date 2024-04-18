import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Providers from '@/components/providers/Providers';
import { siteConfig } from '@/lib/const';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: siteConfig.siteTitle,
  description: siteConfig.siteDescription,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html >
  )
}
