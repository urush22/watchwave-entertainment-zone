
import { Link } from 'react-router-dom';
import { Play, Plus, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMyList } from '@/contexts/MyListContext';

interface MovieCardProps {
  id: string;
  title: string;
  posterPath: string;
  type: 'movie' | 'tv';
  overview?: string;
  backdropPath?: string;
}

export const MovieCard = ({ id, title, posterPath, type, overview, backdropPath }: MovieCardProps) => {
  const { isInMyList, toggleMyList } = useMyList();
  
  const inMyList = isInMyList(id);
  
  const handleToggleMyList = () => {
    toggleMyList({
      id,
      title,
      posterPath,
      type,
      overview,
      backdropPath
    });
  };

  return (
    <div className="movie-card">
      <div className="relative">
        <Link to={`/${type}/${id}`}>
          <img
            src={posterPath}
            alt={title}
            className="w-full h-full object-cover"
          />
        </Link>
        <div className="movie-card-overlay">
          <h3 className="text-sm font-medium mb-1">{title}</h3>
          <div className="flex space-x-2 mt-2">
            <Button size="sm" className="w-full">
              <Link to={`/${type}/${id}/watch`} className="flex items-center">
                <Play className="h-4 w-4 mr-1" />
                Play
              </Link>
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="px-2"
              onClick={handleToggleMyList}
              title={inMyList ? "Remove from My List" : "Add to My List"}
            >
              {inMyList ? (
                <Check className="h-4 w-4" />
              ) : (
                <Plus className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
