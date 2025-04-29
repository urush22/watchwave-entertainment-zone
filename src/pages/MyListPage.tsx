
import { Layout } from "@/components/layout/Layout";
import { MovieCard } from "@/components/movie/MovieCard";
import { useMyList } from "@/contexts/MyListContext";

const MyListPage = () => {
  const { myList } = useMyList();

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
                overview={item.overview}
                backdropPath={item.backdropPath}
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
