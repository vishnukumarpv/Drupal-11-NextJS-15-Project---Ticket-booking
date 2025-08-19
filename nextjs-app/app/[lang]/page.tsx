import { getDictionary, createTranslator } from '@/lib/dictionary'
import { Locale } from '@/lib/types'
import HeroCarousel from '@/components/organisms/carousel/HeroCarousel'
import PopularMatchesSection from '@/components/organisms/matches/PopularMatchesSection'
import TeamsListCarousel from '@/components/organisms/carousel/TeamsListCarousel'
import OurGoalsSection from './components/OurGoalsSection'



interface HomePageProps {
  params: {
    lang: Locale
  }
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang)
  const t = createTranslator(dictionary)

  return (
    <>
    <div className="w-fulld mx-auto">
      <HeroCarousel />
    </div>

    <div className="mx-auto py-8">
      <PopularMatchesSection />
    </div>

    <div className="mx-auto py-8">
      <TeamsListCarousel />
    </div>

    <div className="mx-auto py-8">
      <OurGoalsSection />
    </div>

    
    </>
  )
}