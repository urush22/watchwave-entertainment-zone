
import { Layout } from '@/components/layout/Layout';
import { MovieCard } from '@/components/movie/MovieCard';
import { moviesData, categories } from '@/services/mockData';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const MovieListingPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // In a real app, you would filter by category
  // For demo purposes, we're just showing all movies
  const displayedMovies = moviesData;

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-28 pb-8">
        <h1 className="text-3xl font-bold mb-6">Movies</h1>
        
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
        
        {/* Movies grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {displayedMovies.map(movie => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              posterPath={movie.posterPath}
              type={movie.type}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MovieListingPage;
