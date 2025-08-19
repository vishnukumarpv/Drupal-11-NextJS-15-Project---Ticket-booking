
import { Match } from "@/lib/types";
import { Calendar } from "lucide-react";
import Button from "@/components/atoms/Button";

interface MatchCardProps {
  match: Match;
}

// Utility function to format date
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Match Title Component
const MatchTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
      {title}
    </h3>
  );
};

// Match Description Component
const MatchDescription: React.FC<{ description: string }> = ({ description }) => {
  return (
    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
      {description}
    </p>
  );
};

// Match Date Component
const MatchDate: React.FC<{ dateString: string }> = ({ dateString }) => {
  return (
    <div className="flex items-center text-gray-500 mb-5">
      <Calendar className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
      <span className="text-xs font-medium">
        {formatDate(dateString)}
      </span>
    </div>
  );
};

const MatchImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <div className="relative overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
    </div>
  );
};

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <MatchImage src={match.image} alt={match.title} />
      
      <div className="p-5">
        <MatchTitle title={match.title} />
        <MatchDescription description={match.description} />
        <MatchDate dateString={match.matchDate} />
        <Button href={match.bookingLink} >Book ticket</Button>

      </div>
    </div>
  );
};

export default MatchCard;