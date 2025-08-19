export type Locale = 'en' | 'ar'

export const locales: readonly Locale[] = ['en', 'ar']
export const defaultLocale: Locale = 'en'

export type Dictionary = {
  [key: string]: string | Dictionary
}

export interface Match {
  id: number;
  image: string;
  title: string;
  description: string;
  matchDate: string;
  bookingLink: string;
}

export interface Club {
  id: number;
  name: string;
  image: string;
  link: string;
}