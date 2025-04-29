
import { Link } from 'react-router-dom';
import { Play, Plus, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMyList } from '@/contexts/MyListContext';

interface HeroSectionProps {
  title: string;
  overview: string;
  backdropPath: string;
  id: string;
  type: 'movie' | 'tv';
}

export const HeroSection = ({ 
  title, 
  overview, 
  backdropPath, 
  id, 
  type 
}: HeroSectionProps) => {
  const { isInMyList, toggleMyList } = useMyList();
  
  const inMyList = isInMyList(id);
  
  const handleToggleMyList = () => {
    toggleMyList({
      id,
      title,
      backdropPath,
      posterPath: backdropPath, // In case we need a poster
      type,
      overview
    });
  };

  return (
    <div className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${backdropPath})` }}
      />
      <div className="hero-gradient" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-16 z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">{title}</h1>
          <p className="text-sm md:text-base line-clamp-3 md:line-clamp-4 mb-6 text-gray-200">
            {overview}
          </p>
          <div className="flex space-x-4">
            <Button asChild size="lg">
              <Link to={`/${type}/${id}/watch`}>
                <Play className="mr-2 h-5 w-5" />
                Play
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleToggleMyList}
            >
              {inMyList ? (
                <>
                  <Check className="mr-2 h-5 w-5" />
                  My List
                </>
              ) : (
                <>
                  <Plus className="mr-2 h-5 w-5" />
                  My List
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
