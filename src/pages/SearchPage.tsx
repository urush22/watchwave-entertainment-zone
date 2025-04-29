
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Search as SearchIcon } from 'lucide-react';
import { searchContent, categories } from '@/services/mockData';
import { MovieCard } from '@/components/movie/MovieCard';
import { Button } from '@/components/ui/button';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const searchResults = query ? searchContent(query) : [];

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-28 pb-8">
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for movies or TV shows..."
              className="pl-10 py-6 bg-secondary"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        
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
        
        {/* Search results */}
        {query ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              {searchResults.length > 0 
                ? `Found ${searchResults.length} results for "${query}"` 
                : `No results found for "${query}"`}
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {searchResults.map(item => (
                <MovieCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  posterPath={item.posterPath}
                  type={item.type}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold mb-2">Search for your favorite movies and TV shows</h2>
            <p className="text-muted-foreground">Enter a title, actor, director or genre in the search box above</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SearchPage;
