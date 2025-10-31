import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Leaf, Settings } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6" />
              <span className="text-xl font-bold">AyurVeda Centre</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Authentic Panchakarma & Yoga for Holistic Healing. Over 25 years of trusted Ayurvedic care.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/treatments/chronic-pains" className="text-sm hover:text-accent transition-colors">
                  Treatments
                </Link>
              </li>
              <li>
                <Link href="/therapies/abhyanga" className="text-sm hover:text-accent transition-colors">
                  Therapy
                </Link>
              </li>
              <li>
                <Link href="/yoga" className="text-sm hover:text-accent transition-colors">
                  Yoga
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-sm hover:text-accent transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/reviews-rewards" className="text-sm hover:text-accent transition-colors">
                  Reviews & Rewards
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">123 Wellness Road, Green Valley, Kerala 682001</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">info@ayurvedacentre.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm font-semibold mb-2">Opening Hours</p>
              <p className="text-sm text-primary-foreground/80">Mon - Sat: 8:00 AM - 8:00 PM</p>
              <p className="text-sm text-primary-foreground/80">Sunday: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/70">
            &copy; {new Date().getFullYear()} AyurVeda Centre. All rights reserved.
          </p>
          <Link
            href="/admin"
            className="flex items-center space-x-2 mt-4 md:mt-0 text-sm hover:text-accent transition-colors"
          >
            <Settings className="h-4 w-4" />
            <span>Admin Panel</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
