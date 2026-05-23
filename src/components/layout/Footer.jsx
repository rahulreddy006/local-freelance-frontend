import React from 'react';
import { Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/40 py-8 sm:py-12">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-3 sm:mb-4">
              <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <span className="font-bold tracking-tight text-sm sm:text-lg">LocalFreelance</span>
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Connecting local students with businesses for high-quality freelance opportunities.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 sm:mb-4 text-xs sm:text-sm">Platform</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li><Link to="/gigs" className="hover:text-primary transition-colors">Browse Gigs</Link></li>
              <li><Link to="/register" className="hover:text-primary transition-colors">How it works</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 sm:mb-4 text-xs sm:text-sm">Company</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 md:mt-12 pt-6 sm:pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} LocalFreelance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
