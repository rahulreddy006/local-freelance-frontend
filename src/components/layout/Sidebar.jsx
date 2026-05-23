import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, Briefcase, PlusCircle, Users } from 'lucide-react';
import { cn } from '../../utils/cn';

const Sidebar = ({ role }) => {
  const studentLinks = [
    { name: 'Dashboard', path: '/student/dashboard', icon: LayoutDashboard },
    { name: 'My Applications', path: '/student/applications', icon: FileText },
    { name: 'Find Gigs', path: '/gigs', icon: Briefcase },
  ];

  const businessLinks = [
    { name: 'Dashboard', path: '/business/dashboard', icon: LayoutDashboard },
    { name: 'My Gigs', path: '/business/my-gigs', icon: Briefcase },
    { name: 'Create Gig', path: '/business/create-gig', icon: PlusCircle },
  ];

  const links = role === 'student' ? studentLinks : businessLinks;

  return (
    <aside className="hidden w-64 flex-col border-r bg-background md:flex sticky top-0 h-screen overflow-y-auto">
      <div className="h-16 flex items-center px-4 sm:px-6 border-b">
        <NavLink to="/" className="flex items-center gap-2 text-base sm:text-lg font-bold">
          <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          <span className="hidden sm:inline">LocalFreelance</span>
        </NavLink>
      </div>
      <nav className="flex-1 space-y-1 p-3 sm:p-4">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 rounded-md px-3 py-2 text-xs sm:text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )
              }
            >
              <Icon className="h-4 w-4 flex-shrink-0" />
              <span className="hidden sm:inline">{link.name}</span>
            </NavLink>
          );
        })}
      </nav>
      <div className="p-3 sm:p-4 border-t">
        <div className="flex items-center gap-2 sm:gap-3 rounded-md px-3 py-2 text-xs sm:text-sm text-muted-foreground">
          <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs sm:text-sm">
            {role[0].toUpperCase()}
          </div>
          <span className="capitalize hidden sm:inline">{role} Portal</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
