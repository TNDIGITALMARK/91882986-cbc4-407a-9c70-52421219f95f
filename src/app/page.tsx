import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Navigation } from '@/components/solid-solutionz/Navigation';
import { Footer } from '@/components/solid-solutionz/Footer';
import { ServiceCard } from '@/components/solid-solutionz/ServiceCard';
import { TestimonialCard } from '@/components/solid-solutionz/TestimonialCard';
import { QuoteRequestForm } from '@/components/solid-solutionz/QuoteRequestForm';
import { SERVICES, TESTIMONIALS } from '@/lib/data/mock-data';
import { CheckCircle2, Clock, Shield, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold">
                Professional Contractor Services
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance">
                No Job Too Big, Too Small{' '}
                <span className="text-primary">We Do It All</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Expert handyman and contracting services for homeowners and businesses.
                From carpentry to concrete, plumbing to landscaping - one call does it all.
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 py-6">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" />
                  </div>
                  <p className="font-bold text-2xl">5.0</p>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-bold text-2xl">500+</p>
                  <p className="text-sm text-muted-foreground">Projects Done</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-bold text-2xl">24hr</p>
                  <p className="text-sm text-muted-foreground">Response Time</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-lg px-8 py-6 font-semibold"
                  asChild
                >
                  <a href="#quote-form">Get Free Quote</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 font-semibold"
                  asChild
                >
                  <a href="#services">View Services</a>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/generated/solid-solutionz-logo.png"
                  alt="Solid Solutionz Mascot"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-background shadow-lg rounded-lg p-4 border-2 border-primary">
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-bold text-sm">Licensed & Insured</p>
                    <p className="text-xs text-muted-foreground">Fully Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Complete Home & Property Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From small repairs to major renovations, our skilled team handles every project with expertise and care
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
                  document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real feedback from real customers who trust Solid Solutionz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.filter((t) => t.isFeatured).map((testimonial) => (
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

      {/* Quote Request Form Section */}
      <section id="quote-form" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Get Started</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Request Your Free Quote
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tell us about your project and we'll provide a detailed estimate within 24 hours
            </p>
          </div>

          <QuoteRequestForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
