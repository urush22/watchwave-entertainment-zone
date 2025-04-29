
import { Link } from 'react-router-dom';
import { Play, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MovieCardProps {
  id: string;
  title: string;
  posterPath: string;
  type: 'movie' | 'tv';
}

export const MovieCard = ({ id, title, posterPath, type }: MovieCardProps) => {
  return (
    <div className="movie-card">
      <Link to={`/${type}/${id}`}>
        <img
          src={posterPath}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="movie-card-overlay">
          <h3 className="text-sm font-medium mb-1">{title}</h3>
          <div className="flex space-x-2 mt-2">
            <Button size="sm" asChild className="w-full">
              <Link to={`/${type}/${id}/watch`}>
                <Play className="h-4 w-4 mr-1" />
                Play
              </Link>
            </Button>
            <Button size="sm" variant="outline" className="px-2">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};
