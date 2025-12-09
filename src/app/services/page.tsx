import { Badge } from '@/components/ui/badge';
import { Navigation } from '@/components/solid-solutionz/Navigation';
import { Footer } from '@/components/solid-solutionz/Footer';
import { ServiceCard } from '@/components/solid-solutionz/ServiceCard';
import { TestimonialCard } from '@/components/solid-solutionz/TestimonialCard';
import { SERVICES, TESTIMONIALS } from '@/lib/data/mock-data';
import { Hammer, Wrench, Droplet, Tree, Home, TruckIcon } from 'lucide-react';

const categoryIcons = {
  carpentry: Hammer,
  concrete: TruckIcon,
  plumbing: Droplet,
  landscaping: Tree,
  remodeling: Home,
  general: Wrench,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              Complete Service Portfolio
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Professional Services for Every Need
            </h1>
            <p className="text-xl text-muted-foreground">
              From minor repairs to major renovations, Solid Solutionz offers comprehensive
              handyman and contracting services. Browse our complete service catalog below.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(categoryIcons).map(([category, Icon]) => (
              <div
                key={category}
                className="flex flex-col items-center justify-center p-6 bg-muted/30 rounded-lg hover:bg-primary/10 hover:shadow-md transition-all cursor-pointer border-2 border-transparent hover:border-primary"
              >
                <Icon className="h-10 w-10 text-primary mb-3" />
                <span className="text-sm font-semibold capitalize">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Complete Service Lineup
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional execution, transparent pricing, and guaranteed satisfaction on every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                name={service.name}
                category={service.category}
                description={service.description}
                priceRangeMin={service.priceRangeMin}
                priceRangeMax={service.priceRangeMax}
                typicalTimelineDays={service.typicalTimelineDays}
                onRequestQuote={() => {
                  window.location.href = '/#quote-form';
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Why Choose Solid Solutionz</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              The Solid Solutionz Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Multi-Skilled Team</h3>
              <p className="text-muted-foreground">
                Our team brings expertise across all trades - carpentry, plumbing, concrete,
                landscaping, and more. One call handles everything.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Badge className="text-2xl font-bold">24hr</Badge>
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Response</h3>
              <p className="text-muted-foreground">
                We respond to quote requests within 24 hours and offer emergency services
                for urgent repairs when you need them most.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Home className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Licensed & Insured</h3>
              <p className="text-muted-foreground">
                Fully licensed, bonded, and insured for your protection and peace of mind
                on every single project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Success Stories</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Real Projects, Real Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what our customers have to say about working with Solid Solutionz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                customerName={testimonial.customerName}
                serviceCategory={testimonial.serviceCategory}
                rating={testimonial.rating}
                testimonialText={testimonial.testimonialText}
                projectDetails={testimonial.projectDetails}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a free, detailed quote within 24 hours. No obligation, no pressure - just honest,
            professional service.
          </p>
          <a
            href="/#quote-form"
            className="inline-flex items-center justify-center rounded-md text-lg font-semibold bg-background text-foreground hover:bg-background/90 h-12 px-8 py-6 transition-colors"
          >
            Request Free Quote
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
