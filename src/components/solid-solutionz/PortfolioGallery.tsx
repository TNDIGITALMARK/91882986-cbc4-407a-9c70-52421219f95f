'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wrench, Home, Droplet, Shovel, PaintBucket } from 'lucide-react';
import { useState } from 'react';

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  icon: React.ReactNode;
}

const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: 'Modern Kitchen Remodel',
    category: 'Kitchen Remodeling',
    image: '/generated/kitchen-remodel-finished.jpg',
    description: 'Complete kitchen transformation with custom white cabinetry, quartz countertops, and designer lighting',
    icon: <Home className="h-5 w-5" />
  },
  {
    id: 2,
    title: 'Custom Cedar Deck',
    category: 'Deck Construction',
    image: '/generated/deck-construction-finished.jpg',
    description: 'Beautiful outdoor living space with natural cedar wood, built-in seating, and professional railings',
    icon: <Wrench className="h-5 w-5" />
  },
  {
    id: 3,
    title: 'Luxury Bathroom Renovation',
    category: 'Bathroom Plumbing',
    image: '/generated/bathroom-renovation-finished.jpg',
    description: 'Spa-like bathroom featuring double vanity, marble countertops, and frameless glass shower',
    icon: <Droplet className="h-5 w-5" />
  },
  {
    id: 4,
    title: 'Stamped Concrete Driveway',
    category: 'Concrete Work',
    image: '/generated/concrete-driveway-finished.jpg',
    description: 'Professional stamped concrete driveway with decorative border and flawless finish',
    icon: <PaintBucket className="h-5 w-5" />
  },
  {
    id: 5,
    title: 'Professional Landscaping',
    category: 'Landscape Design',
    image: '/generated/landscaping-finished.jpg',
    description: 'Stunning front yard transformation with curved garden beds, stone pathway, and vibrant plantings',
    icon: <Shovel className="h-5 w-5" />
  }
];

const CATEGORIES = ['All Projects', 'Kitchen Remodeling', 'Deck Construction', 'Bathroom Plumbing', 'Concrete Work', 'Landscape Design'];

export function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');

  const filteredProjects = selectedCategory === 'All Projects'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(project => project.category === selectedCategory);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary text-primary-foreground">Our Work</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            See Our Quality Craftsmanship
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real projects completed by our skilled team. From small repairs to major renovations,
            we deliver exceptional results that exceed expectations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-md scale-105'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:border-primary"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Category Badge Overlay */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 backdrop-blur-sm text-primary-foreground flex items-center gap-2">
                    {project.icon}
                    {project.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              No projects found in this category.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Let us transform your vision into reality with the same quality craftsmanship shown above.
            </p>
            <a
              href="#quote-form"
              className="inline-block bg-primary hover:bg-primary-dark text-primary-foreground font-bold px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:scale-105"
            >
              Get Your Free Quote Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
