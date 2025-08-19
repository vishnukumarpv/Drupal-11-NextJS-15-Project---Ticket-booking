import MatchCard from "@/components/molecules/match/MatchCard";
import { ExternalLink } from "lucide-react";


interface Match {
  id: number;
  image: string;
  title: string;
  description: string;
  matchDate: string;
  bookingLink: string;
}

interface PopularMatchesProps {
  matches?: Match[];
}



interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

interface ViewAllButtonProps {
  href: string;
  label: string;
}



// Default matches data
const getDefaultMatches = (): Match[] => [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop",
    title: "Manchester United vs Liverpool",
    description: "Premier League clash between two football giants at Old Trafford.",
    matchDate: "2025-08-20T15:00:00",
    bookingLink: "/book/match-1"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=250&fit=crop",
    title: "Lakers vs Warriors",
    description: "NBA showdown featuring star-studded lineups in Los Angeles.",
    matchDate: "2025-08-22T19:30:00",
    bookingLink: "/book/match-2"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
    title: "Real Madrid vs Barcelona",
    description: "El Clasico - The most anticipated match in Spanish football.",
    matchDate: "2025-08-25T21:00:00",
    bookingLink: "/book/match-3"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    title: "India vs Australia",
    description: "Cricket World Cup semi-final at the iconic Melbourne Cricket Ground.",
    matchDate: "2025-08-28T14:30:00",
    bookingLink: "/book/match-4"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&h=250&fit=crop",
    title: "Wimbledon Finals",
    description: "Tennis championship finals at the prestigious All England Club.",
    matchDate: "2025-08-30T14:00:00",
    bookingLink: "/book/match-5"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
    title: "Chiefs vs Bills",
    description: "NFL playoff game featuring two powerhouse teams.",
    matchDate: "2025-09-02T20:00:00",
    bookingLink: "/book/match-6"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop",
    title: "Arsenal vs Chelsea",
    description: "London derby featuring two Premier League contenders.",
    matchDate: "2025-09-05T17:30:00",
    bookingLink: "/book/match-7"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=250&fit=crop",
    title: "Celtics vs Heat",
    description: "Eastern Conference playoff battle at TD Garden.",
    matchDate: "2025-09-08T20:00:00",
    bookingLink: "/book/match-8"
  }
];

// Section Header Component
const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

 

 
 
const MatchesGrid: React.FC<{ matches: Match[] }> = ({ matches }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {matches.map((match: Match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  );
};

// View All Button Component
const ViewAllButton: React.FC<ViewAllButtonProps> = ({ href, label }) => {
  return (
    <div className="text-center mt-12">
      <a
        href={href}
        className="inline-flex items-center px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-200"
      >
        {label}
        <ExternalLink className="w-5 h-5 ml-2" />
      </a>
    </div>
  );
};

// Main Popular Matches Component
const PopularMatches: React.FC<PopularMatchesProps> = ({ matches }) => {
  const matchData = matches || getDefaultMatches();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Popular Matches" 
          subtitle="Don't miss these exciting upcoming matches. Book your tickets now!" 
        />
        
        <MatchesGrid matches={matchData} />
        
        <ViewAllButton href="/matches" label="View All Matches" />
      </div>
    </section>
  );
};

export default PopularMatches;