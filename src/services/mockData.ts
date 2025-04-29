
// Sample movie/TV data for our application

// Base URL for images
export const IMG_BASE_URL = "https://source.unsplash.com/random/";

// Featured content for hero section
export const featuredContent = {
  id: "featured-1",
  title: "Cosmic Odyssey",
  overview: "In the year 2157, humanity has colonized Mars but faces an existential threat from an unknown alien civilization. Dr. Elena Reyes, a brilliant xenolinguist, must decipher their language to prevent interplanetary war. As she delves deeper into their communication patterns, she discovers a shocking truth about humanity's origins that will forever change our understanding of the universe.",
  backdropPath: `${IMG_BASE_URL}1600x900/?space,scifi`,
  type: "movie" as const,
};

// Movies data
export const moviesData = [
  {
    id: "movie-1",
    title: "The Lost City",
    overview: "An explorer searches for a mythical city in the Amazon rainforest.",
    posterPath: `${IMG_BASE_URL}500x750/?adventure,jungle`,
    backdropPath: `${IMG_BASE_URL}1600x900/?adventure,jungle`,
    type: "movie" as const,
  },
  {
    id: "movie-2",
    title: "Midnight Run",
    overview: "A detective chases a fugitive across the country in this action-packed thriller.",
    posterPath: `${IMG_BASE_URL}500x750/?thriller,night`,
    backdropPath: `${IMG_BASE_URL}1600x900/?thriller,night`,
    type: "movie" as const,
  },
  {
    id: "movie-3",
    title: "Quantum Break",
    overview: "A physicist discovers time travel but unleashes unintended consequences.",
    posterPath: `${IMG_BASE_URL}500x750/?scifi,time`,
    backdropPath: `${IMG_BASE_URL}1600x900/?scifi,time`,
    type: "movie" as const,
  },
  {
    id: "movie-4",
    title: "Heart of Fire",
    overview: "A firefighter with a troubled past faces her biggest challenge yet.",
    posterPath: `${IMG_BASE_URL}500x750/?fire,action`,
    backdropPath: `${IMG_BASE_URL}1600x900/?fire,action`,
    type: "movie" as const,
  },
  {
    id: "movie-5",
    title: "Ocean's Depth",
    overview: "A marine biologist discovers a new species with extraordinary abilities.",
    posterPath: `${IMG_BASE_URL}500x750/?ocean,underwater`,
    backdropPath: `${IMG_BASE_URL}1600x900/?ocean,underwater`,
    type: "movie" as const,
  },
  {
    id: "movie-6",
    title: "The Last Stand",
    overview: "A small town sheriff must protect his community from escaped convicts.",
    posterPath: `${IMG_BASE_URL}500x750/?western,desert`,
    backdropPath: `${IMG_BASE_URL}1600x900/?western,desert`,
    type: "movie" as const,
  },
  {
    id: "movie-7",
    title: "Skyfall",
    overview: "A spy must track down a dangerous terrorist threatening global security.",
    posterPath: `${IMG_BASE_URL}500x750/?spy,action`,
    backdropPath: `${IMG_BASE_URL}1600x900/?spy,action`,
    type: "movie" as const,
  },
  {
    id: "movie-8",
    title: "Electric Dreams",
    overview: "In a future where AI has evolved, a programmer forms an unusual connection.",
    posterPath: `${IMG_BASE_URL}500x750/?future,tech`,
    backdropPath: `${IMG_BASE_URL}1600x900/?future,tech`,
    type: "movie" as const,
  },
];

// TV Shows data
export const tvShowsData = [
  {
    id: "tv-1",
    title: "Dark Matter",
    overview: "Scientists investigate mysterious phenomena happening around the world.",
    posterPath: `${IMG_BASE_URL}500x750/?science,mystery`,
    backdropPath: `${IMG_BASE_URL}1600x900/?science,mystery`,
    type: "tv" as const,
  },
  {
    id: "tv-2",
    title: "City Lights",
    overview: "Follow the interconnected lives of people living in a bustling metropolis.",
    posterPath: `${IMG_BASE_URL}500x750/?city,night`,
    backdropPath: `${IMG_BASE_URL}1600x900/?city,night`,
    type: "tv" as const,
  },
  {
    id: "tv-3",
    title: "Kingdom's Edge",
    overview: "A historical drama set in a medieval kingdom facing internal strife and external threats.",
    posterPath: `${IMG_BASE_URL}500x750/?medieval,castle`,
    backdropPath: `${IMG_BASE_URL}1600x900/?medieval,castle`,
    type: "tv" as const,
  },
  {
    id: "tv-4",
    title: "Medical Frontline",
    overview: "Doctors at a prestigious hospital face personal and professional challenges.",
    posterPath: `${IMG_BASE_URL}500x750/?medical,hospital`,
    backdropPath: `${IMG_BASE_URL}1600x900/?medical,hospital`,
    type: "tv" as const,
  },
  {
    id: "tv-5",
    title: "Legal Eagles",
    overview: "A team of ambitious lawyers tackle high-profile cases while navigating office politics.",
    posterPath: `${IMG_BASE_URL}500x750/?legal,office`,
    backdropPath: `${IMG_BASE_URL}1600x900/?legal,office`,
    type: "tv" as const,
  },
  {
    id: "tv-6",
    title: "Cosmic Explorers",
    overview: "The crew of a spacecraft explores distant planets in search of new life.",
    posterPath: `${IMG_BASE_URL}500x750/?space,planets`,
    backdropPath: `${IMG_BASE_URL}1600x900/?space,planets`,
    type: "tv" as const,
  },
  {
    id: "tv-7",
    title: "Small Town Secrets",
    overview: "A detective returns to their hometown to solve a mysterious death.",
    posterPath: `${IMG_BASE_URL}500x750/?mystery,town`,
    backdropPath: `${IMG_BASE_URL}1600x900/?mystery,town`,
    type: "tv" as const,
  },
  {
    id: "tv-8",
    title: "Culinary Masters",
    overview: "Competitive chefs battle to impress renowned culinary experts.",
    posterPath: `${IMG_BASE_URL}500x750/?food,cooking`,
    backdropPath: `${IMG_BASE_URL}1600x900/?food,cooking`,
    type: "tv" as const,
  },
];

// Trending content
export const trendingData = [...moviesData.slice(0, 4), ...tvShowsData.slice(0, 4)];

// New releases
export const newReleasesData = [
  ...moviesData.slice(4, 6),
  ...tvShowsData.slice(4, 6),
  ...moviesData.slice(6, 8),
  ...tvShowsData.slice(6, 8),
];

// Popular content
export const popularData = [
  ...moviesData.slice(2, 6),
  ...tvShowsData.slice(2, 6),
];

// Content categories
export const categories = [
  { id: "action", name: "Action" },
  { id: "comedy", name: "Comedy" },
  { id: "drama", name: "Drama" },
  { id: "horror", name: "Horror" },
  { id: "sci-fi", name: "Sci-Fi" },
  { id: "thriller", name: "Thriller" },
  { id: "romance", name: "Romance" },
  { id: "documentary", name: "Documentary" },
];

// Function to get a movie/TV show by ID
export const getContentById = (id: string) => {
  return [...moviesData, ...tvShowsData].find(item => item.id === id);
};

// Function to search for content
export const searchContent = (query: string) => {
  const normalizedQuery = query.toLowerCase().trim();
  return [...moviesData, ...tvShowsData].filter(
    item => item.title.toLowerCase().includes(normalizedQuery) || 
    item.overview.toLowerCase().includes(normalizedQuery)
  );
};
