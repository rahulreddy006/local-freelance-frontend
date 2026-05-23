import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGigs } from '../../hooks/useGigs';
import GigCard from '../../components/gigs/GigCard';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import EmptyState from '../../components/common/EmptyState';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { Search, SlidersHorizontal } from 'lucide-react';
import { SORT_OPTIONS } from '../../utils/constants';

const GigsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  
  // Parse params
  const currentParams = {
    page: parseInt(searchParams.get('page') || '1', 10),
    limit: 10,
    search: searchParams.get('search') || '',
    sort: searchParams.get('sort') || 'newest',
  };

  const { data, isLoading, isError } = useGigs(currentParams);

  // Debounced search effect would ideally go here. For simplicity, we search on button click or form submit.
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      if (searchTerm) newParams.set('search', searchTerm);
      else newParams.delete('search');
      newParams.set('page', '1'); // reset to page 1 on new search
      return newParams;
    });
  };

  const handleSortChange = (e) => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      newParams.set('sort', e.target.value);
      return newParams;
    });
  };

  const handlePageChange = (newPage) => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      newParams.set('page', newPage.toString());
      return newParams;
    });
  };

  return (
    <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
        <div className="w-full md:w-auto">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Available Gigs</h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1">Find the perfect short-term project for your skills.</p>
        </div>
        
        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2 sm:gap-3">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="text" 
                placeholder="Search gigs..." 
                className="pl-8 w-full sm:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button type="submit" variant="secondary" className="w-full sm:w-auto">Search</Button>
          </form>
          
          <div className="relative w-full sm:w-auto">
            <select 
              className="h-10 w-full sm:w-40 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring appearance-none"
              value={currentParams.sort}
              onChange={handleSortChange}
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <SlidersHorizontal className="absolute right-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="py-20"><LoadingSpinner /></div>
      ) : isError ? (
        <EmptyState title="Failed to load gigs" description="Please try again later." />
      ) : data?.data?.length === 0 ? (
        <EmptyState 
          title="No gigs found" 
          description="Try adjusting your search filters or check back later." 
        />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.data?.map(gig => (
              <GigCard key={gig._id} gig={gig} />
            ))}
          </div>

          {/* Pagination */}
          {data?.pagination?.totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 gap-2">
              <Button 
                variant="outline" 
                disabled={currentParams.page <= 1}
                onClick={() => handlePageChange(currentParams.page - 1)}
              >
                Previous
              </Button>
              <span className="text-sm font-medium px-4">
                Page {currentParams.page} of {data?.pagination?.totalPages}
              </span>
              <Button 
                variant="outline" 
                disabled={currentParams.page >= data?.pagination?.totalPages}
                onClick={() => handlePageChange(currentParams.page + 1)}
              >
                Next
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GigsPage;
