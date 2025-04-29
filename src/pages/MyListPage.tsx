
import { Layout } from "@/components/layout/Layout";
import { MovieCard } from "@/components/movie/MovieCard";
import { useState, useEffect } from "react";
import { moviesData, tvShowsData } from "@/services/mockData";

// For now, we'll mock the user's list with some selected content
const MyListPage = () => {
  const [myList, setMyList] = useState<Array<{
    id: string;
    title: string;
    posterPath: string;
    type: 'movie' | 'tv';
  }>>([]);

  // Simulate loading the user's list
  useEffect(() => {
    // Mock data - combining some movies and TV shows
    const savedList = [
      ...moviesData.slice(0, 3),
      ...tvShowsData.slice(0, 3)
    ];
    setMyList(savedList);
  }, []);

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">My List</h1>
        
        {myList.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {myList.map((item) => (
              <MovieCard
                key={item.id}
                id={item.id}
                title={item.title}
                posterPath={item.posterPath}
                type={item.type}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">Your list is empty</p>
            <p className="mt-2 text-muted-foreground">
              Add movies and TV shows to your list to watch them later
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MyListPage;
