'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Quote Management', href: '/quotes' },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/generated/solid-solutionz-logo.png"
              alt="Solid Solutionz Logo"
              width={60}
              height={60}
              className="transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary">SOLID SOLUTIONZ</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                No Job Too Big, Too Small
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-dark font-semibold btn-text-white"
            >
              <Link href="/" className="btn-text-white">
                <Phone className="mr-2 h-4 w-4" />
                Get Free Quote
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <span className="text-xl font-bold text-primary">SOLID SOLUTIONZ</span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary-dark font-semibold mt-4 btn-text-white"
                >
                  <Link href="/" onClick={() => setMobileMenuOpen(false)} className="btn-text-white">
                    <Phone className="mr-2 h-4 w-4" />
                    Get Free Quote
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
