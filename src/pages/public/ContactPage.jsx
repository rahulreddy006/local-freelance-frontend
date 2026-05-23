import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-3 sm:px-4 py-12 sm:py-16 md:py-20 max-w-5xl">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
          Contact Us
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
          We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
        <div className="rounded-lg sm:rounded-2xl border bg-card p-4 sm:p-6 text-center">
          <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-3 sm:mb-4" />
          <h3 className="font-semibold mb-2 text-sm sm:text-base">Email</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            support@localfreelance.com
          </p>
        </div>

        <div className="rounded-lg sm:rounded-2xl border bg-card p-4 sm:p-6 text-center">
          <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-3 sm:mb-4" />
          <h3 className="font-semibold mb-2 text-sm sm:text-base">Phone</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            +91 9908569772
          </p>
        </div>

        <div className="rounded-lg sm:rounded-2xl border bg-card p-4 sm:p-6 text-center">
          <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-3 sm:mb-4" />
          <h3 className="font-semibold mb-2 text-sm sm:text-base">Location</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Hyderabad, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;