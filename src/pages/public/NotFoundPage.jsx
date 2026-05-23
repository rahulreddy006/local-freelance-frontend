import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

const NotFoundPage = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] text-center px-4">
      <h1 className="text-9xl font-black text-primary/20">404</h1>
      <h2 className="text-3xl font-bold tracking-tight mt-4">Page not found</h2>
      <p className="text-muted-foreground mt-4 max-w-md mx-auto">
        Sorry, we couldn't find the page you're looking for. It might have been removed or the link might be broken.
      </p>
      <div className="mt-8">
        <Link to="/">
          <Button size="lg">Go back home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
