import React from 'react';
import { useMyGigs } from '../../hooks/useGigs';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import EmptyState from '../../components/common/EmptyState';
import { Card, CardContent } from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';
import { Users, PlusCircle } from 'lucide-react';

const MyGigsPage = () => {
  const { data: gigsResponse, isLoading, isError } = useMyGigs();

  if (isLoading) return <LoadingSpinner fullScreen />;
  if (isError) return <EmptyState title="Failed to load gigs" />;

  const gigs = gigsResponse?.data || [];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Gigs</h1>
          <p className="text-muted-foreground mt-1">Manage the gigs you've posted.</p>
        </div>
        <Link to="/business/create-gig">
          <Button className="gap-2">
            <PlusCircle className="h-4 w-4" />
            Post New Gig
          </Button>
        </Link>
      </div>

      {gigs.length === 0 ? (
        <EmptyState 
          title="No gigs posted yet" 
          description="Create your first gig to start finding talent." 
          action={<Link to="/business/create-gig"><Button>Create Gig</Button></Link>}
        />
      ) : (
        <div className="grid gap-4">
          {gigs.map(gig => (
            <Card key={gig._id} className="overflow-hidden">
              <CardContent className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">{gig.title}</h3>
                  <div className="text-sm text-muted-foreground flex gap-4">
                    <span>Deadline: {formatDate(gig.deadline)}</span>
                    <Badge variant={gig.status === 'open' ? 'success' : 'secondary'} className="h-5">
                      {gig.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex gap-3 w-full sm:w-auto">
                  <Link to={`/gigs/${gig._id}`} className="flex-1 sm:flex-none">
                    <Button variant="outline" className="w-full">View Public</Button>
                  </Link>
                  <Link to={`/business/gigs/${gig._id}/applications`} className="flex-1 sm:flex-none">
                    <Button className="w-full gap-2">
                      <Users className="h-4 w-4" />
                      Applications
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyGigsPage;
