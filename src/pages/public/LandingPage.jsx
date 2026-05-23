import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import { Briefcase, ArrowRight, Star, ShieldCheck, Zap, CheckCircle, Users, TrendingUp } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-background to-muted/50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl space-y-4 sm:space-y-6"
        >
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs sm:text-sm bg-background">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Connecting local talent with business
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Find <span className="text-primary">Freelance Gigs</span> in Your City
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            The platform for students to gain real-world experience and businesses to find quality local help for short-term projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 sm:pt-8">
            <Link to="/register">
              <Button size="lg" className="w-full sm:w-auto h-11 sm:h-12 px-6 sm:px-8 text-base">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/gigs">
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-11 sm:h-12 px-6 sm:px-8 text-base">
                Browse Gigs
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30 border-y">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <StatCard number="500+" label="Active Gigs" icon={<Briefcase className="h-6 w-6 text-primary" />} />
            <StatCard number="1000+" label="Students" icon={<Users className="h-6 w-6 text-primary" />} />
            <StatCard number="98%" label="Success Rate" icon={<TrendingUp className="h-6 w-6 text-primary" />} />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">How It Works</h2>
            <p className="text-muted-foreground mt-2 sm:mt-4 text-sm sm:text-base">Get started in just a few steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard 
              number="1"
              title="Sign Up"
              description="Create a free account as a student or business owner in minutes."
            />
            <StepCard 
              number="2"
              title="Browse or Post"
              description="Students explore gigs or businesses post their projects."
            />
            <StepCard 
              number="3"
              title="Collaborate & Complete"
              description="Connect, work together, and deliver quality results."
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Why Choose LocalFreelance?</h2>
            <p className="text-muted-foreground mt-2 sm:mt-4 text-sm sm:text-base">Built for local communities to thrive together.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <FeatureCard 
              icon={<Briefcase className="h-8 w-8 text-primary" />}
              title="Local Opportunities"
              description="Find short-term projects and gigs right in your city. Build your local network."
            />
            <FeatureCard 
              icon={<Zap className="h-8 w-8 text-primary" />}
              title="Fast Hiring"
              description="Businesses can post gigs and hire students within hours, not weeks."
            />
            <FeatureCard 
              icon={<ShieldCheck className="h-8 w-8 text-primary" />}
              title="Verified Trust"
              description="A secure platform with verified local businesses and student profiles."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">What Our Users Say</h2>
            <p className="text-muted-foreground mt-2 sm:mt-4 text-sm sm:text-base">Real feedback from real users</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <TestimonialCard 
              quote="LocalFreelance helped me find meaningful work while still being a student. The platform is so easy to use!"
              author="Sarah Chen"
              role="Student Developer"
            />
            <TestimonialCard 
              quote="We found talented students within days. The hiring process was seamless and the quality exceeded expectations."
              author="Mark Johnson"
              role="Business Owner"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-primary/10 to-primary/5 border-t">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 text-sm sm:text-base">Join hundreds of students and businesses transforming how work gets done locally.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Sign Up Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const StatCard = ({ number, label, icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center text-center p-6"
  >
    <div className="mb-4">{icon}</div>
    <div className="text-2xl sm:text-3xl font-bold">{number}</div>
    <p className="text-sm sm:text-base text-muted-foreground mt-1">{label}</p>
  </motion.div>
);

const StepCard = ({ number, title, description }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="flex flex-col items-start p-6 rounded-lg border bg-card shadow-sm"
  >
    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold mb-4">
      {number}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </motion.div>
);

const FeatureCard = ({ icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="flex flex-col items-center text-center p-6 rounded-lg bg-card border shadow-sm"
  >
    <div className="mb-4 p-3 bg-primary/10 rounded-lg">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </motion.div>
);

const TestimonialCard = ({ quote, author, role }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-6 rounded-lg bg-card border shadow-sm"
  >
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
    <p className="text-sm text-muted-foreground mb-4 italic">"{quote}"</p>
    <div>
      <p className="text-sm font-semibold">{author}</p>
      <p className="text-xs text-muted-foreground">{role}</p>
    </div>
  </motion.div>
);

export default LandingPage;
