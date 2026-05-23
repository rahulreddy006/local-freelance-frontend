import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGigDetails } from '../../hooks/useGigs';
import { useAuth } from '../../hooks/useAuth';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import EmptyState from '../../components/common/EmptyState';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import { Card, CardContent } from '../../components/ui/Card';
import { formatCurrency, formatDate } from '../../utils/formatDate';
import { Calendar, DollarSign, Clock } from 'lucide-react';
import ApplyGigModal from '../../components/gigs/ApplyGigModal'; // We'll create this next

const GigDetailsPage = () => {
  const { gigId } = useParams();
  const { user } = useAuth();
  const { data: gigResponse, isLoading, isError } = useGigDetails(gigId);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  if (isLoading) return <LoadingSpinner fullScreen />;
  if (isError || !gigResponse?.data?.gig) {
    return <EmptyState title="Gig not found" description="This gig may have been removed." />;
  }

  const gig = gigResponse.data.gig;
  const isStudent = user?.role === 'student';
  const isOwner = user?.id === gig.ownerId; // Optional: depending on if backend provides ownerId matching

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/gigs" className="text-primary hover:underline mb-6 inline-block">
        &larr; Back to gigs
      </Link>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Badge variant={gig.status === 'open' ? 'success' : 'secondary'}>
                {gig.status || 'Open'}
              </Badge>
              <span className="text-sm text-muted-foreground flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                Posted recently
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{gig?.title || 'Untitled Gig'}</h1>
            <p className="text-muted-foreground whitespace-pre-wrap">{gig?.description || 'No description provided'}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Skills Required</h3>
            <div className="flex flex-wrap gap-2">
              {gig.skillsRequired?.map((skill, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">
                  {skill}
                </Badge>
              ))}
              {(!gig.skillsRequired || gig.skillsRequired.length === 0) && (
                <span className="text-muted-foreground">No specific skills listed.</span>
              )}
            </div>
          </div>
        </div>

        <div className="md:col-span-1">
          <Card className="sticky top-24">
            <CardContent className="p-6 space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Project Budget</p>
                <div className="text-3xl font-bold text-foreground flex items-center">
                  <DollarSign className="w-6 h-6 text-primary" />
                  {formatCurrency(gig.price).replace('$', '')}
                </div>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Status</p>
                  <p className="text-sm capitalize">{gig.status || 'Open'}</p>
                </div>
              </div>

              {gig.deadline && (
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-5 h-5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Deadline</p>
                    <p className="text-sm">{formatDate(gig.deadline)}</p>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t">
                {!user ? (
                  <Link to="/login">
                    <Button className="w-full">Log in to Apply</Button>
                  </Link>
                ) : isStudent ? (
                  <Button className="w-full" size="lg" onClick={() => setIsApplyModalOpen(true)}>
                    Apply Now
                  </Button>
                ) : (
                  <Button className="w-full" disabled variant="secondary">
                    {isOwner ? "This is your gig" : "Business accounts cannot apply"}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <ApplyGigModal 
        isOpen={isApplyModalOpen} 
        onClose={() => setIsApplyModalOpen(false)} 
        gigId={gigId} 
        gigTitle={gig?.title || 'Gig'} 
      />
    </div>
  );
};

export default GigDetailsPage;
