import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Briefcase, LogOut, User } from 'lucide-react';
import { AuthContext } from '../../contexts/AuthContext';
import Button from '../ui/Button';

const MobileMenu = ({ isOpen, onClose, isAuthenticated, user }) => {
  const navigate = useNavigate();
  const { logoutContext } = React.useContext(AuthContext);

  // Close menu on route change
  useEffect(() => {
    onClose();
  }, []);

  // Close on escape key
  useEffect(() => {
    if (isOpen) {
      const handleEscape = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLogout = () => {
    logoutContext();
    onClose();
    navigate('/login');
  };

  const getDashboardLink = () => {
    if (user?.role === 'business') return '/business/dashboard';
    if (user?.role === 'student') return '/student/dashboard';
    return '/complete-profile';
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={onClose}
          role="presentation"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-screen w-64 bg-background border-l shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-md transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col h-[calc(100%-4rem)] overflow-y-auto">
          {/* Public Menu Items */}
          <nav className="flex-1 space-y-1 p-4">
            <Link
              to="/gigs"
              onClick={onClose}
              className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Find Gigs
            </Link>
            <Link
              to="/about"
              onClick={onClose}
              className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
            >
              About
            </Link>
            <Link
              to="/pricing"
              onClick={onClose}
              className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              onClick={onClose}
              className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Auth Section */}
          <div className="border-t p-4 space-y-3">
            {isAuthenticated ? (
              <>
                <Link to={getDashboardLink()} onClick={onClose} className="block w-full">
                  <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                    <User className="h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="w-full justify-start gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={onClose} className="block w-full">
                  <Button variant="ghost" size="sm" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link to="/register" onClick={onClose} className="block w-full">
                  <Button size="sm" className="w-full">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
