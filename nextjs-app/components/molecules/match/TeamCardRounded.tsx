import { Club } from '@/lib/types';
interface TeamCardRoundedProps {
  club: Club;
  onClick?: (club: Club) => void;
}

const TeamCardRounded: React.FC<TeamCardRoundedProps> = ({ club, onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick(club);
    } else {
      window.location.href = club.link;
    }
  };

  return (
    <div className="text-center p-2">
      <div 
        onClick={handleClick}
        className="group cursor-pointer transform transition-all duration-300 hover:scale-110 inline-block"
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white">
          <img
            src={club.image}
            alt={club.name}
            className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
          />
        </div>
        <p className="text-xs font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200 max-w-16 sm:max-w-20 md:max-w-24 mx-auto leading-tight">
          {club.name}
        </p>
      </div>
    </div>
  );
};

export default TeamCardRounded;