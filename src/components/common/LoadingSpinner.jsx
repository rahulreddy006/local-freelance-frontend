import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';

const LoadingSpinner = ({ fullScreen = false, className }) => {
  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground animate-pulse">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('flex justify-center items-center p-4', className)}>
      <Loader2 className="h-6 w-6 animate-spin text-primary" />
    </div>
  );
};

export default LoadingSpinner;
