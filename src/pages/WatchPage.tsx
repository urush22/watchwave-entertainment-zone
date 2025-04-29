
import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Plus, Check } from 'lucide-react';
import { getContentById } from '@/services/mockData';
import { useMyList } from '@/contexts/MyListContext';

const WatchPage = () => {
  const { id, type } = useParams<{ id: string; type: string }>();
  const content = getContentById(id || '');
  const { isInMyList, toggleMyList } = useMyList();

  // If content not found
  if (!content) {
    return (
      <Layout>
        <div className="container mx-auto px-4 pt-32 text-center">
          <h1 className="text-2xl font-bold mb-4">Content not found</h1>
          <p className="mb-6">The content you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const inMyList = isInMyList(content.id);
  
  const handleToggleMyList = () => {
    toggleMyList(content);
  };

  return (
    <Layout>
      <div className="relative pt-16">
        {/* Back button */}
        <div className="absolute top-20 left-4 z-10">
          <Button variant="outline" size="sm" asChild className="bg-background/50 backdrop-blur-sm">
            <Link to={`/${type}/${id}`}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Link>
          </Button>
        </div>
        
        {/* Video player */}
        <div className="w-full bg-black aspect-video relative">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
            style={{ backgroundImage: `url(${content.backdropPath})` }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-xl font-bold mb-4">Playing: {content.title}</h2>
              <p className="mb-8">Video playback would start automatically here</p>
              <Button onClick={handleToggleMyList}>
                {inMyList ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Remove from My List
                  </>
                ) : (
                  <>
                    <Plus className="mr-2 h-4 w-4" />
                    Add to My List
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Content details */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-2">{content.title}</h1>
          <p className="text-gray-300 mb-6">{content.overview}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div>
              <h3 className="text-sm font-medium text-gray-400">Type</h3>
              <p>{content.type === 'movie' ? 'Movie' : 'TV Series'}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400">Genre</h3>
              <p>Drama, Action</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400">Release Year</h3>
              <p>2023</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400">Duration</h3>
              <p>2h 15m</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WatchPage;
