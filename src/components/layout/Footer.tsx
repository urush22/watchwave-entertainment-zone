
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="py-8 px-4 md:px-8 mt-16 border-t border-muted">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">WatchWave</h3>
            <p className="text-sm text-muted-foreground">
              The ultimate destination for movies and TV shows.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-foreground">Home</Link></li>
              <li><Link to="/movies" className="text-sm text-muted-foreground hover:text-foreground">Movies</Link></li>
              <li><Link to="/tv-shows" className="text-sm text-muted-foreground hover:text-foreground">TV Shows</Link></li>
              <li><Link to="/my-list" className="text-sm text-muted-foreground hover:text-foreground">My List</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Account</h4>
            <ul className="space-y-2">
              <li><Link to="/login" className="text-sm text-muted-foreground hover:text-foreground">Login</Link></li>
              <li><Link to="/signup" className="text-sm text-muted-foreground hover:text-foreground">Sign Up</Link></li>
              <li><Link to="/profile" className="text-sm text-muted-foreground hover:text-foreground">Profile</Link></li>
              <li><Link to="/settings" className="text-sm text-muted-foreground hover:text-foreground">Settings</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} WatchWave Entertainment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
