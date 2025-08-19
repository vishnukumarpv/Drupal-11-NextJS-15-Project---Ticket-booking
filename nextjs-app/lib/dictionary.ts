import type { Locale, Dictionary } from './types'

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import('@/public/dictionaries/en.json').then((module) => module.default),
  ar: () => import('@/public/dictionaries/ar.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  try {
    return await dictionaries[locale]()
  } catch (error) {
    console.error(`Failed to load dictionary for locale: ${locale}`, error)
    // Fallback to English if dictionary loading fails
    return await dictionaries.en()
  }
}

// Create a translation function factory
export const createTranslator = (dictionary: Dictionary) => {
  return (key: string, params?: Record<string, string | number>): string => {
    const keys = key.split('.')
    let value: any = dictionary
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation key not found: ${key}`)
        return key // Return the key itself as fallback
      }
    }
    
    let translation = typeof value === 'string' ? value : key
    
    // Handle parameter interpolation
    if (params && typeof translation === 'string') {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        translation = translation.replace(
          new RegExp(`{{\\s*${paramKey}\\s*}}`, 'g'),
          String(paramValue)
        )
      })
    }
    
    return translation
  }
}

// Helper function for backwards compatibility
export const getTranslation = (dictionary: Dictionary, key: string): string => {
  const t = createTranslator(dictionary)
  return t(key)
}