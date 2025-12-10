'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/solid-solutionz/Navigation';
import { Footer } from '@/components/solid-solutionz/Footer';
import { MOCK_QUOTE_REQUESTS } from '@/lib/data/mock-data';
import { Calendar, DollarSign, Clock, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  reviewed: 'bg-blue-100 text-blue-800 border-blue-300',
  quoted: 'bg-purple-100 text-purple-800 border-purple-300',
  accepted: 'bg-green-100 text-green-800 border-green-300',
  declined: 'bg-gray-100 text-gray-800 border-gray-300',
  completed: 'bg-emerald-100 text-emerald-800 border-emerald-300',
};

const urgencyIcons = {
  emergency: <AlertCircle className="h-4 w-4 text-red-500" />,
  urgent: <Clock className="h-4 w-4 text-orange-500" />,
  normal: <Clock className="h-4 w-4 text-blue-500" />,
  flexible: <Clock className="h-4 w-4 text-gray-500" />,
};

export default function QuotesPage() {
  const [selectedQuote, setSelectedQuote] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              Quote Management
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Track Your Project Quotes
            </h1>
            <p className="text-xl text-muted-foreground">
              View and manage your quote requests, communicate with our team, and track project progress
              all in one convenient location.
            </p>
          </div>
        </div>
      </section>

      {/* Quotes Dashboard */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quotes List */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Your Quote Requests</h2>
                <Button asChild className="bg-primary hover:bg-primary-dark btn-text-white">
                  <a href="/#quote-form" className="btn-text-white">New Quote Request</a>
                </Button>
              </div>

              {MOCK_QUOTE_REQUESTS.map((quote) => (
                <Card
                  key={quote.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedQuote === quote.id ? 'border-primary border-2' : ''
                  }`}
                  onClick={() => setSelectedQuote(quote.id)}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <CardTitle className="text-xl mb-2">{quote.serviceCategory}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Submitted {formatDate(quote.createdAt)}
                        </CardDescription>
                      </div>
                      <Badge
                        className={`capitalize ${
                          statusColors[quote.status as keyof typeof statusColors]
                        }`}
                      >
                        {quote.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {quote.projectDescription}
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-sm">
                        {urgencyIcons[quote.urgency as keyof typeof urgencyIcons]}
                        <span className="capitalize">{quote.urgency} priority</span>
                      </div>
                      {quote.estimatedCost && (
                        <div className="flex items-center gap-2 text-sm">
                          <DollarSign className="h-4 w-4 text-primary" />
                          <span className="font-semibold">
                            {new Intl.NumberFormat('en-US', {
                              style: 'currency',
                              currency: 'USD',
                              minimumFractionDigits: 0,
                            }).format(quote.estimatedCost)}
                          </span>
                        </div>
                      )}
                    </div>

                    {quote.estimatedTimelineDays && (
                      <div className="mt-3 text-sm text-muted-foreground">
                        Estimated timeline: {quote.estimatedTimelineDays} days
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}

              {MOCK_QUOTE_REQUESTS.length === 0 && (
                <Card className="p-12 text-center">
                  <MessageSquare className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Quote Requests Yet</h3>
                  <p className="text-muted-foreground mb-6">
                    Get started by submitting your first quote request
                  </p>
                  <Button asChild className="bg-primary hover:bg-primary-dark btn-text-white">
                    <a href="/#quote-form" className="btn-text-white">Request Quote</a>
                  </Button>
                </Card>
              )}
            </div>

            {/* Quote Details Sidebar */}
            <div className="lg:col-span-1">
              {selectedQuote ? (
                (() => {
                  const quote = MOCK_QUOTE_REQUESTS.find((q) => q.id === selectedQuote);
                  if (!quote) return null;

                  return (
                    <Card className="sticky top-24">
                      <CardHeader>
                        <CardTitle>Quote Details</CardTitle>
                        <CardDescription>Request #{quote.id}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {/* Status */}
                        <div>
                          <h4 className="text-sm font-semibold mb-2">Status</h4>
                          <Badge
                            className={`capitalize ${
                              statusColors[quote.status as keyof typeof statusColors]
                            }`}
                          >
                            {quote.status}
                          </Badge>
                        </div>

                        {/* Customer Info */}
                        <div>
                          <h4 className="text-sm font-semibold mb-2">Customer</h4>
                          <p className="text-sm">{quote.customerName}</p>
                          <p className="text-sm text-muted-foreground">{quote.customerEmail}</p>
                          {quote.customerPhone && (
                            <p className="text-sm text-muted-foreground">{quote.customerPhone}</p>
                          )}
                        </div>

                        {/* Project Details */}
                        <div>
                          <h4 className="text-sm font-semibold mb-2">Project Details</h4>
                          <div className="space-y-2 text-sm">
                            <p>
                              <span className="font-medium">Service:</span> {quote.serviceCategory}
                            </p>
                            <p>
                              <span className="font-medium">Size:</span>{' '}
                              <span className="capitalize">{quote.projectSize}</span>
                            </p>
                            <p>
                              <span className="font-medium">Budget:</span> {quote.budgetRange}
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <div>
                          <h4 className="text-sm font-semibold mb-2">Description</h4>
                          <p className="text-sm text-muted-foreground">{quote.projectDescription}</p>
                        </div>

                        {/* Estimate */}
                        {quote.estimatedCost && (
                          <div className="bg-primary/5 rounded-lg p-4">
                            <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary" />
                              Our Estimate
                            </h4>
                            <p className="text-2xl font-bold text-primary">
                              {new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 0,
                              }).format(quote.estimatedCost)}
                            </p>
                            {quote.estimatedTimelineDays && (
                              <p className="text-sm text-muted-foreground mt-2">
                                Timeline: {quote.estimatedTimelineDays} days
                              </p>
                            )}
                          </div>
                        )}

                        {/* Actions */}
                        <div className="space-y-2">
                          <Button className="w-full bg-primary hover:bg-primary-dark btn-text-white">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Message Contractor
                          </Button>
                          {quote.status === 'quoted' && (
                            <>
                              <Button className="w-full" variant="outline">
                                Accept Quote
                              </Button>
                              <Button className="w-full" variant="ghost">
                                Request Changes
                              </Button>
                            </>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })()
              ) : (
                <Card className="p-8 text-center">
                  <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Select a quote request to view details
                  </p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-muted-foreground mb-6">
              Have questions about your quote or project? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline">
                <MessageSquare className="mr-2 h-4 w-4" />
                Live Chat
              </Button>
              <Button size="lg" variant="outline">
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
