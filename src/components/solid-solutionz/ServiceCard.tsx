'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, DollarSign } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  category: string;
  description: string;
  priceRangeMin: number;
  priceRangeMax: number;
  typicalTimelineDays: number;
  onRequestQuote?: () => void;
}

export function ServiceCard({
  name,
  category,
  description,
  priceRangeMin,
  priceRangeMax,
  typicalTimelineDays,
  onRequestQuote,
}: ServiceCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary cursor-pointer">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="mb-2 capitalize">
            {category}
          </Badge>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowRight className="h-5 w-5 text-primary" />
          </div>
        </div>
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {/* Price Range */}
          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="h-4 w-4 text-primary" />
            <span className="font-semibold text-foreground">
              {formatPrice(priceRangeMin)} - {formatPrice(priceRangeMax)}
            </span>
          </div>

          {/* Timeline */}
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">
              Typical timeline: {typicalTimelineDays} day{typicalTimelineDays !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Request Quote Button */}
          <Button
            onClick={onRequestQuote}
            className="w-full mt-4 bg-primary hover:bg-primary-dark font-semibold"
            size="lg"
          >
            Get Free Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
