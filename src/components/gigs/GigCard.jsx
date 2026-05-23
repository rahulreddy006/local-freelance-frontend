import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { formatCurrency, formatDate } from '../../utils/formatDate';
import { Calendar, DollarSign } from 'lucide-react';

const GigCard = ({ gig }) => {
  return (
    <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <h3 className="font-semibold text-lg line-clamp-2">{gig.title}</h3>
          <Badge variant={gig.status === 'open' ? 'success' : 'secondary'}>
            {gig.status || 'Open'}
          </Badge>
        </div>
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mt-2">
          <div className="flex items-center">
            <DollarSign className="w-4 h-4 mr-1 text-primary" />
            <span className="font-medium text-foreground">{formatCurrency(gig.price)}</span>
          </div>
          {gig.deadline && (
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>Due {formatDate(gig.deadline)}</span>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {gig.description}
        </p>
        
        {gig.skillsRequired?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {gig.skillsRequired.slice(0, 4).map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs font-normal">
                {skill}
              </Badge>
            ))}
            {gig.skillsRequired.length > 4 && (
              <Badge variant="secondary" className="text-xs font-normal">
                +{gig.skillsRequired.length - 4} more
              </Badge>
            )}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="pt-4 border-t">
        <Link to={`/gigs/${gig._id}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default GigCard;
