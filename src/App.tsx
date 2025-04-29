
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MovieListingPage from "./pages/MovieListingPage";
import TVShowsPage from "./pages/TVShowsPage";
import WatchPage from "./pages/WatchPage";
import MyListPage from "./pages/MyListPage";
import NotFound from "./pages/NotFound";
import { MyListProvider } from "./contexts/MyListContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <MyListProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/movies" element={<MovieListingPage />} />
            <Route path="/tv-shows" element={<TVShowsPage />} />
            <Route path="/my-list" element={<MyListPage />} />
            <Route path="/:type/:id" element={<DetailPage />} />
            <Route path="/:type/:id/watch" element={<WatchPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MyListProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
