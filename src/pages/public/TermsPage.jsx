import React from 'react';

const TermsPage = () => {
  return (
    <div className="container mx-auto px-3 sm:px-4 py-12 sm:py-16 md:py-20 max-w-4xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6 sm:mb-8">
        Terms & Conditions
      </h1>

      <div className="space-y-6 sm:space-y-8 text-sm sm:text-base text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
            Platform Usage
          </h2>

          <p>
            LocalFreelance connects students and businesses through freelance opportunities.
            Users are responsible for maintaining accurate information and professional conduct.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
            User Responsibilities
          </h2>

          <p>
            Users agree not to misuse the platform, submit false information,
            or engage in harmful activities.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
            Payments & Agreements
          </h2>

          <p>
            Freelance agreements and payments between users remain their responsibility.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;