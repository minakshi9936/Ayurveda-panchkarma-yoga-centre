'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Menu,
  X,
  Phone,
  Mail,
  Calendar,
  Award,
  ChevronDown,
  Leaf,
  ArrowRight,
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // ✅ Updated Dropdown Data
  const treatmentsMenu = [
    { label: 'Chronic Pains', href: '/treatments/chronic-pains' },
    { label: 'Piles Surgery', href: '/treatments/piles-surgery' },
    { label: 'Gynecological', href: '/treatments/gynecological' },
    { label: 'Breathing Issues', href: '/treatments/breathing-issues' },
    { label: 'Stomach Problems', href: '/treatments/stomach-problems' },
    { label: 'Neuro Problems', href: '/treatments/neuro-problems' },
    { label: 'Skin Problems', href: '/treatments/skin-problems' },
    { label: 'Detoxification', href: '/treatments/detoxification' },
  ];

  const therapyMenu = [
    { label: 'Abhyanga', href: '/therapies/abhyanga' },
    { label: 'Agnikarma', href: '/therapies/agnikarma' },
    { label: 'Basti (Enema)', href: '/therapies/basti-enema' },
    { label: 'Body Scrub Massage', href: '/therapy#body-scrub-massage' },
    { label: 'Griva Vasthi', href: '/therapy#griva-vasthi' },
    { label: 'Herbal Hair Pack', href: '/therapy#herbal-hair-pack' },
    { label: 'Janu Vasthi', href: '/therapy#janu-vasthi' },
    { label: 'Kati Vasti', href: '/therapy#kati-vasti' },
    { label: 'Kerala Potli', href: '/therapy#kerala-potli' },
    { label: 'Others', href: '/therapy#others' },
  ];

  const reviewsMenu = [
    { label: 'Reviews', href: '/reviews' },
    { label: 'Rewards', href: '/rewards' },
  ];

  const handleDropdownToggle = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="w-full bg-primary shadow-sm sticky top-0 z-50">


      {/* MAIN NAVBAR */}
      <nav className="bg-primary shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-primary-foreground" />
              <span className="text-2xl font-bold text-primary-foreground">AyurVeda Centre</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Home */}
              <Link
                href="/"
                className="px-4 py-2 text-primary-foreground font-medium hover:text-accent relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </Link>

              {/* Treatments */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('treatments')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2 text-primary-foreground font-medium hover:text-accent flex items-center gap-1">
                  Treatments <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === 'treatments' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-100 py-2">
                    {treatmentsMenu.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Therapy */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('therapy')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2 text-primary-foreground font-medium hover:text-accent flex items-center gap-1">
                  Therapy <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === 'therapy' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-100 py-2">
                    {therapyMenu.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Packages */}

              <Link
                href="/packages"
                className="px-4 py-2 text-primary-foreground font-medium hover:text-accent relative group"
              >
                Packages
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </Link>

              {/* Reviews & Rewards */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('reviews')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2 text-primary-foreground font-medium hover:text-accent flex items-center gap-1">
                  Reviews & Rewards <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === 'reviews' && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-100 py-2">
                    {reviewsMenu.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="https://wa.me/916391421660?text=Hello%20I%20want%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 flex items-center gap-2 font-medium"
              >
                Book Appointment <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              {/* Mobile toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-primary-foreground hover:text-accent"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* ✅ Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-primary border-t border-primary-foreground/20">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <Link href="/" className="block py-3 text-primary-foreground hover:text-accent font-medium">
                Home
              </Link>

              {/* mobile dropdowns */}
              {[
                { title: 'Treatments', menu: treatmentsMenu },
                { title: 'Therapy', menu: therapyMenu },
                { title: 'Reviews & Rewards', menu: reviewsMenu },
              ].map((section) => (
                <div key={section.title}>
                  <button
                    onClick={() => handleDropdownToggle(section.title.toLowerCase())}
                    className="w-full flex justify-between items-center py-3 text-primary-foreground hover:text-accent font-medium"
                  >
                    {section.title}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        activeDropdown === section.title.toLowerCase() ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeDropdown === section.title.toLowerCase() && (
                    <div className="pl-4 space-y-1">
                      {section.menu.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block py-2 text-sm text-gray-600 hover:text-primary"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
