import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">SOLID SOLUTIONZ</h3>
            <p className="text-sm opacity-90">
              Professional handyman and contracting services. No job too big, too small - we do it all!
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline opacity-90 hover:opacity-100">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline opacity-90 hover:opacity-100">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/quotes" className="hover:underline opacity-90 hover:opacity-100">
                  Quote Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Carpentry</li>
              <li>Concrete Work</li>
              <li>Plumbing</li>
              <li>Landscaping</li>
              <li>Remodeling</li>
              <li>General Repairs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 opacity-90">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 opacity-90">
                <Mail className="h-4 w-4" />
                <span>info@solidsolutionz.com</span>
              </div>
              <div className="flex items-center gap-2 opacity-90">
                <MapPin className="h-4 w-4" />
                <span>Serving Your Local Area</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; {currentYear} Solid Solutionz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
