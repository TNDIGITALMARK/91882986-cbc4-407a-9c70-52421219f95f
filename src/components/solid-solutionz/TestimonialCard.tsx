'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  customerName: string;
  serviceCategory: string;
  rating: number;
  testimonialText: string;
  projectDetails?: string;
}

export function TestimonialCard({
  customerName,
  serviceCategory,
  rating,
  testimonialText,
  projectDetails,
}: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        {/* Star Rating */}
        <div className="flex gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-foreground mb-4 italic leading-relaxed">
          "{testimonialText}"
        </p>

        {/* Project Details */}
        {projectDetails && (
          <p className="text-sm text-muted-foreground mb-4">
            Project: {projectDetails}
          </p>
        )}

        {/* Customer Info */}
        <div className="border-t pt-4">
          <p className="font-semibold text-foreground">{customerName}</p>
          <p className="text-sm text-muted-foreground">{serviceCategory}</p>
        </div>
      </CardContent>
    </Card>
  );
}
