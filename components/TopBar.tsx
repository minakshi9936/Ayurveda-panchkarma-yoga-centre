import { Phone, Mail, Award, Calendar } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm border-b border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a
              href="/contact"
              className="flex items-center gap-2 hover:text-accent transition-colors group"
            >
              <Calendar className="h-4 w-4" />
              <div className="hidden sm:block">
                <span className="font-medium">Online Booking</span>
                <span className="text-xs ml-1 text-primary-foreground/80 group-hover:text-accent">
                  Book Appointment
                </span>
              </div>
              <span className="sm:hidden font-medium">Book Now</span>
            </a>

            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span className="font-medium hidden md:inline">NABH Certified</span>
              <span className="font-medium md:hidden">Certified</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs md:text-sm">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">+91 6389202030</span>
            </a>
            <a
              href="mailto:info@citywitty.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="font-medium">info@citywitty.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
