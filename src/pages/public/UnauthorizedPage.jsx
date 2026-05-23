import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import { ShieldAlert } from 'lucide-react';

const UnauthorizedPage = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] text-center px-4">
      <div className="h-24 w-24 rounded-full bg-destructive/10 flex items-center justify-center mb-6">
        <ShieldAlert className="h-12 w-12 text-destructive" />
      </div>
      <h2 className="text-3xl font-bold tracking-tight">Access Denied</h2>
      <p className="text-muted-foreground mt-4 max-w-md mx-auto">
        You don't have permission to view this page. Please ensure you are logged in with the correct account type.
      </p>
      <div className="mt-8">
        <Link to="/">
          <Button size="lg">Return to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
