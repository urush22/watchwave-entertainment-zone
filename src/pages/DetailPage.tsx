
import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Play, Plus, Info } from 'lucide-react';
import { getContentById, popularData } from '@/services/mockData';
import { ContentRow } from '@/components/movie/ContentRow';

const DetailPage = () => {
  const { id, type } = useParams<{ id: string; type: string }>();
  const content = getContentById(id || '');

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

  return (
    <Layout>
      <div className="relative pt-16">
        {/* Backdrop image */}
        <div className="relative h-[50vh] md:h-[60vh]">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${content.backdropPath})` }}
          />
          <div className="featured-gradient" />
          
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">{content.title}</h1>
          </div>
        </div>
        
        {/* Content details */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 lg:w-1/4">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={content.posterPath} 
                  alt={content.title} 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="md:w-2/3 lg:w-3/4">
              <div className="flex flex-wrap gap-4 mb-6">
                <Button size="lg" asChild>
                  <Link to={`/${content.type}/${content.id}/watch`}>
                    <Play className="mr-2 h-5 w-5" />
                    Play
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Plus className="mr-2 h-5 w-5" />
                  Add to My List
                </Button>
              </div>
              
              <h2 className="text-xl font-semibold mb-2">Overview</h2>
              <p className="text-gray-200 mb-6">{content.overview}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
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
              </div>
            </div>
          </div>
        </div>
        
        {/* Recommended content */}
        <div className="mt-8">
          <ContentRow title="More Like This" items={popularData} />
        </div>
      </div>
    </Layout>
  );
};

export default DetailPage;
