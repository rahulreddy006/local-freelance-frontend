import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <Outlet />
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center bg-zinc-900 text-white p-8">
        <div className="max-w-md space-y-4">
          <h1 className="text-4xl font-bold">Welcome to Local Freelance</h1>
          <p className="text-zinc-400 text-lg">Connect with local businesses and find your next opportunity.</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
