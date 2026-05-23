import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useMyGigs } from '../../hooks/useGigs';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Briefcase, Activity, CheckCircle } from 'lucide-react';

const BusinessDashboard = () => {
  const { user } = useAuth();
  const { data: gigsResponse, isLoading } = useMyGigs();

  if (isLoading) return <LoadingSpinner />;

  const gigs = gigsResponse?.data || [];
  const activeGigs = gigs.filter(g => g.status === 'open').length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Business Dashboard</h1>
        <p className="text-muted-foreground mt-1">Manage your job postings, {user?.name || 'Business'}.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Gigs Posted</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{gigs.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Gigs</CardTitle>
            <Activity className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-500">{activeGigs}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BusinessDashboard;
