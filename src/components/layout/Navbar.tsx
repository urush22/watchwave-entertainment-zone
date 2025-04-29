
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 px-4 md:px-8 py-4 transition-colors duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">WatchWave</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium">Home</Link>
            <Link to="/movies" className="text-sm font-medium">Movies</Link>
            <Link to="/tv-shows" className="text-sm font-medium">TV Shows</Link>
            <Link to="/my-list" className="text-sm font-medium">My List</Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/search" className="p-1">
            <Search className="h-5 w-5" />
          </Link>
          <Link to="/notifications" className="p-1 hidden md:block">
            <Bell className="h-5 w-5" />
          </Link>
          <Link to="/login" className="hidden md:block">
            <User className="h-5 w-5" />
          </Link>
          <Button asChild variant="outline" size="sm" className="md:hidden">
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
