import React, { useContext } from 'react';
import { Menu, LogOut } from 'lucide-react';
import { AuthContext } from '../../contexts/AuthContext';
import Button from '../ui/Button';

const DashboardHeader = ({ onMenuClick }) => {
  const { user, logoutContext } = useContext(AuthContext);

  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b bg-background px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <button 
        type="button" 
        onClick={onMenuClick}
        className="-m-2.5 p-2.5 text-muted-foreground md:hidden hover:bg-muted rounded-md transition-colors"
      >
        <span className="sr-only">Open sidebar</span>
        <Menu className="h-5 w-5" aria-hidden="true" />
      </button>

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div className="flex flex-1"></div>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <span className="text-sm font-medium hidden sm:block">
            Welcome back, {user?.name || 'User'}
          </span>
          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-border" aria-hidden="true" />
          <Button variant="ghost" size="sm" onClick={() => logoutContext()} className="gap-2">
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
