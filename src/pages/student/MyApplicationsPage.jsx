import React from 'react';
import { useMyApplications } from '../../hooks/useApplications';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import EmptyState from '../../components/common/EmptyState';
import { Card, CardContent } from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import { Link } from 'react-router-dom';

const MyApplicationsPage = () => {
  const { data: appsResponse, isLoading, isError } = useMyApplications();

  if (isLoading) return <LoadingSpinner fullScreen />;

  if (isError) return <EmptyState title="Error loading applications" />;

  const applications = appsResponse?.data || [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Applications</h1>
        <p className="text-muted-foreground mt-1">Track the status of gigs you've applied to.</p>
      </div>

      {applications.length === 0 ? (
        <EmptyState 
          title="No applications yet" 
          description="Start applying to gigs to see them here." 
          action={<Link to="/gigs" className="text-primary hover:underline">Browse Gigs</Link>}
        />
      ) : (
        <div className="grid gap-4">
          {applications.map(app => (
            <Card key={app._id} className="overflow-hidden">
              <CardContent className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">{app.gigId?.title || 'Untitled Gig'}</h3>
                  <p className="text-sm text-muted-foreground">
                    Applied on {new Date(app.createdAt).toLocaleDateString()}
                  </p>
                </div>
                
                <div className="flex flex-col sm:items-end gap-2">
                  <Badge variant={
                    app.status === 'accepted' ? 'success' :
                    app.status === 'rejected' ? 'destructive' : 'warning'
                  }>
                    {app.status.toUpperCase()}
                  </Badge>
                  {app.gigId && (
                    <Link to={`/gigs/${app.gigId._id}`} className="text-xs text-primary hover:underline">
                      View Original Gig
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyApplicationsPage;
