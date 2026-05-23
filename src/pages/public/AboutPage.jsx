import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Rocket, ShieldCheck } from 'lucide-react';
import Button from '../../components/ui/Button';

const AboutPage = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="container mx-auto px-3 sm:px-4 py-16 sm:py-24 md:py-32 text-center">
          <div className="mx-auto max-w-3xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border bg-primary/5 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm text-primary">
              <Briefcase className="h-3 w-3 sm:h-4 sm:w-4" />
              LocalFreelance Platform
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight">
              Connecting Students With
              <span className="text-primary"> Real Opportunities</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              LocalFreelance helps students gain real-world experience while helping
              businesses hire skilled local talent quickly and affordably.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 pt-2 sm:pt-4">
              <Link to="/gigs">
                <Button size="lg" className="w-full sm:w-auto">Browse Gigs</Button>
              </Link>

              <Link to="/register">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Join Platform
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="container mx-auto px-3 sm:px-4 py-12 sm:py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Our Mission
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              We believe students should have access to real work opportunities
              before graduation. LocalFreelance bridges the gap between learning
              and practical experience.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Businesses can discover talented freelancers nearby while students
              build portfolios, skills, confidence, and income.
            </p>
          </div>

          <div className="grid gap-3 sm:gap-4">
            <div className="rounded-lg sm:rounded-2xl border bg-card p-4 sm:p-6">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3 sm:mb-4" />
              <h3 className="font-semibold text-base sm:text-lg mb-2">For Students</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Build experience, earn income, and work on real-world projects.
              </p>
            </div>

            <div className="rounded-lg sm:rounded-2xl border bg-card p-4 sm:p-6">
              <Rocket className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3 sm:mb-4" />
              <h3 className="font-semibold text-base sm:text-lg mb-2">For Businesses</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Hire affordable local talent quickly and efficiently.
              </p>
            </div>

            <div className="rounded-lg sm:rounded-2xl border bg-card p-4 sm:p-6">
              <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3 sm:mb-4" />
              <h3 className="font-semibold text-base sm:text-lg mb-2">Secure Platform</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Protected authentication and role-based workflows ensure reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-muted/40">
        <div className="container mx-auto px-3 sm:px-4 py-12 sm:py-16 md:py-20 text-center">
          <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Ready to Get Started?
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Join LocalFreelance today and start building your future through
              real freelance opportunities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 pt-2 sm:pt-4">
              <Link to="/gigs">
                <Button size="lg" className="w-full sm:w-auto">Explore Gigs</Button>
              </Link>

              <Link to="/register">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;