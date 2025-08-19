import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StoreProvider from '@/lib/store/StoreProvider'
import '../globals.css'
import { Locale, locales } from '@/lib/types'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { getDictionary } from '@/lib/dictionary'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js 15 i18n App',
  description: 'A Next.js 15 app with TypeScript and internationalization',
}

// Generate static params for all supported locales
export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }))
}

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    lang: Locale
  }
}

export default async function RootLayout({ 
  children, 
  params
}: RootLayoutProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang)
  console.log(lang)
  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <body>
        <StoreProvider>
        <Navigation lang={lang} dictionary={dictionary} />
        <main  className=" mx-auto bg-white text-black">
          {children}
        </main>
        <Footer />
        </StoreProvider>
      </body>
    </html>
  )
}