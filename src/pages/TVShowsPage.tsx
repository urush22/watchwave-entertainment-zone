
import { Layout } from '@/components/layout/Layout';
import { MovieCard } from '@/components/movie/MovieCard';
import { tvShowsData, categories } from '@/services/mockData';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const TVShowsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // In a real app, you would filter by category
  // For demo purposes, we're just showing all TV shows
  const displayedShows = tvShowsData;

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-28 pb-8">
        <h1 className="text-3xl font-bold mb-6">TV Shows</h1>
        
        {/* Category filters */}
        <div className="mb-8 overflow-x-auto pb-4">
          <div className="flex space-x-2">
            <Button
              variant={activeCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('all')}
              className="whitespace-nowrap"
            >
              All
            </Button>
            
            {categories.map(category => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.id)}
                className="whitespace-nowrap"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
        
        {/* TV Shows grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {displayedShows.map(show => (
            <MovieCard
              key={show.id}
              id={show.id}
              title={show.title}
              posterPath={show.posterPath}
              type={show.type}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TVShowsPage;
