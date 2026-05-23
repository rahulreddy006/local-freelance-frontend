import React from 'react';
import { Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo = ({ className }) => {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <Briefcase className="h-6 w-6 text-primary" />
      <span className="font-bold tracking-tight text-lg">LocalFreelance</span>
    </Link>
  );
};

export default Logo;
