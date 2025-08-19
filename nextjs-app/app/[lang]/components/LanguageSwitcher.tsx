'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Locale, locales } from '@/lib/types'

interface LanguageSwitcherProps {
  currentLang: Locale
}

const languageNames: Record<Locale, string> = {
  en: 'English',
  ar: 'Arabic',
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname()

  const getLocalizedPath = (locale: Locale): string => {
    // Remove the current locale from the pathname
    const segments = pathname.split('/')
    segments[1] = locale // Replace the locale segment
    return segments.join('/')
  }

  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
        <span>{languageNames[currentLang]}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md   invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="py-1" role="menu">
          {locales.map((locale) => (
            <Link
              key={locale}
              href={getLocalizedPath(locale)}
              className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                locale === currentLang 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-700'
              }`}
              role="menuitem"
            >
              {languageNames[locale]}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}