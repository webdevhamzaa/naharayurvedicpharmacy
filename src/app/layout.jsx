import { Inter, Lora } from 'next/font/google'
import './globals.css'
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Providers from '@/components/providers/Providers';
import { siteDescription, siteName, siteTitle } from '@/lib/config/siteConfig';

const inter = Inter({ subsets: ['latin'] });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

export const metadata = {
  title: {
    default: siteTitle,
    template: `%s - ${siteName}`
  },
  description: siteDescription,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${lora.variable}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html >
  )
}
