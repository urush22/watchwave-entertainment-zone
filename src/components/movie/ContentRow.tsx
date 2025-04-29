
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MovieCard } from './MovieCard';
import { Button } from '@/components/ui/button';
import React, { useRef } from 'react';

interface ContentRowProps {
  title: string;
  items: Array<{
    id: string;
    title: string;
    posterPath: string;
    type: 'movie' | 'tv';
  }>;
}

export const ContentRow = ({ title, items }: ContentRowProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { current } = sliderRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="content-row">
      <h2 className="content-row-title">{title}</h2>
      
      <div className="relative">
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/50 backdrop-blur-sm"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="content-slider" ref={sliderRef}>
          {items.map((item) => (
            <MovieCard
              key={item.id}
              id={item.id}
              title={item.title}
              posterPath={item.posterPath}
              type={item.type}
            />
          ))}
        </div>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/50 backdrop-blur-sm"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
