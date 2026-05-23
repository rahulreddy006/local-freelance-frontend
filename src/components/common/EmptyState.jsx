import React from 'react';
import { SearchX } from 'lucide-react';
import { cn } from '../../utils/cn';

const EmptyState = ({ title = 'No results found', description, icon: Icon = SearchX, action, className }) => {
  return (
    <div className={cn('flex flex-col items-center justify-center py-12 px-4 text-center', className)}>
      {/* Icon Container with gradient background */}
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-primary/5 mb-6 ring-1 ring-primary/20">
        <Icon className="h-12 w-12 text-primary/60" />
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      
      {/* Description */}
      {description && (
        <p className="text-sm text-muted-foreground max-w-md mb-6">
          {description}
        </p>
      )}
      
      {/* Action Button */}
      {action && (
        <div className="mt-4">
          {action}
        </div>
      )}
    </div>
  );
};

export default EmptyState;
