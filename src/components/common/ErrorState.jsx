import React from 'react';
import { AlertCircle } from 'lucide-react';
import Button from '../ui/Button';

const ErrorState = ({ title = 'Something went wrong', message, retry }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center border rounded-xl bg-destructive/5 text-destructive border-destructive/20 my-4">
      <AlertCircle className="h-10 w-10 mb-4 opacity-80" />
      <h3 className="text-lg font-semibold">{title}</h3>
      {message && <p className="mt-2 text-sm opacity-80 max-w-sm">{message}</p>}
      {retry && (
        <Button variant="outline" onClick={retry} className="mt-6 border-destructive/30 hover:bg-destructive hover:text-white">
          Try Again
        </Button>
      )}
    </div>
  );
};

export default ErrorState;
