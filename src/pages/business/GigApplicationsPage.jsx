import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGigApplications, useApplicationStatus } from '../../hooks/useApplications';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import EmptyState from '../../components/common/EmptyState';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';

const GigApplicationsPage = () => {
  const { gigId } = useParams();
  const { data: appsResponse, isLoading, isError } = useGigApplications(gigId);
  const { mutate: updateStatus, isPending } = useApplicationStatus();

  if (isLoading) return <LoadingSpinner fullScreen />;
  if (isError) return <EmptyState title="Failed to load applications" />;

  const applications = appsResponse?.data || [];

  const handleStatusUpdate = (applicationId, status) => {
    updateStatus({ applicationId, status });
  };

  return (
    <div className="space-y-6">
      <div>
        <Link to="/business/my-gigs" className="text-primary hover:underline mb-4 inline-block text-sm">
          &larr; Back to My Gigs
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Review Applications</h1>
        <p className="text-muted-foreground mt-1">Review and manage candidates for your gig.</p>
      </div>

      {applications.length === 0 ? (
        <EmptyState 
          title="No applications yet" 
          description="Waiting for students to apply to this gig." 
        />
      ) : (
        <div className="space-y-6">
          {applications.map(app => (
            <Card key={app._id}>
              <CardHeader className="pb-3 border-b">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{app.appliedBy?.name || 'Unknown User'}</CardTitle>
                    <p className="text-sm text-muted-foreground">{app.appliedBy?.email}</p>
                  </div>
                  <Badge variant={
                    app.status === 'accepted' ? 'success' :
                    app.status === 'rejected' ? 'destructive' : 'warning'
                  }>
                    {app.status.toUpperCase()}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-foreground">Proposal:</h4>
                  <div className="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap text-muted-foreground">
                    {app?.proposal || "No proposal provided"}
                  </div>
                </div>

                {app.status === 'pending' && (
                  <div className="flex justify-end gap-3 pt-2">
                    <Button 
                      variant="outline" 
                      className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => handleStatusUpdate(app._id, 'rejected')}
                      disabled={isPending}
                    >
                      Reject
                    </Button>
                    <Button 
                      className="bg-emerald-600 hover:bg-emerald-700"
                      onClick={() => handleStatusUpdate(app._id, 'accepted')}
                      disabled={isPending}
                    >
                      Accept Application
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default GigApplicationsPage;
