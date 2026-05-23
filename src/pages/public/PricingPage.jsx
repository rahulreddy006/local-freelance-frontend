import React from 'react';
import Button from '../../components/ui/Button';

const PricingPage = () => {
  return (
    <div className="container mx-auto px-3 sm:px-4 py-12 sm:py-16 md:py-20">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
          Simple Pricing
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
          Affordable pricing for students and businesses.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
        <div className="rounded-lg sm:rounded-2xl border bg-card p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Students</h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-6">
            Start freelancing completely free.
          </p>

          <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            ₹0
          </div>

          <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">
            <li>✔ Browse gigs</li>
            <li>✔ Apply to projects</li>
            <li>✔ Build portfolio</li>
          </ul>

          <Button className="w-full">
            Get Started
          </Button>
        </div>

        <div className="rounded-lg sm:rounded-2xl border-2 border-primary bg-card p-6 sm:p-8 relative">
          <div className="absolute -top-2 sm:-top-3 left-4 sm:left-6 bg-primary text-primary-foreground text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
            Popular
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mb-2">Businesses</h2>

          <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-6">
            Hire local freelancers efficiently.
          </p>

          <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            ₹499
            <span className="text-base sm:text-lg text-muted-foreground">/month</span>
          </div>

          <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">
            <li>✔ Unlimited gig posting</li>
            <li>✔ Access student talent</li>
            <li>✔ Manage applications</li>
          </ul>

          <Button className="w-full">
            Start Hiring
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;