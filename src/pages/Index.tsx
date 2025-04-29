
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/movie/HeroSection";
import { ContentRow } from "@/components/movie/ContentRow";
import { 
  featuredContent, 
  trendingData, 
  newReleasesData, 
  popularData, 
  moviesData, 
  tvShowsData
} from "@/services/mockData";

const Index = () => {
  return (
    <Layout>
      <HeroSection 
        title={featuredContent.title}
        overview={featuredContent.overview}
        backdropPath={featuredContent.backdropPath}
        id={featuredContent.id}
        type={featuredContent.type}
      />
      
      <div className="container mt-8">
        <ContentRow title="Trending Now" items={trendingData} />
        <ContentRow title="New Releases" items={newReleasesData} />
        <ContentRow title="Popular Movies" items={moviesData.slice(0, 8)} />
        <ContentRow title="Popular TV Shows" items={tvShowsData.slice(0, 8)} />
      </div>
    </Layout>
  );
};

export default Index;
