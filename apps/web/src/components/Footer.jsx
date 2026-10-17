
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Globe, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 md:py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src="/logo-scoopy-asheville.png" 
              alt="Scoopy Doo AVL - Professional Pooper Scooper Service Logo"
              className="w-32 h-auto bg-white/10 rounded-lg p-2" 
            />
            <p className="text-sm text-slate-400 leading-relaxed">
              Professional pet waste removal service making yards cleaner, safer, and more enjoyable for families and their pets. We are your trusted poop pick up company.
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://www.facebook.com/profile.php?id=61578292444117" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-300 hover:bg-primary hover:text-white transition-all duration-200 active:scale-95"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/scoopyavl/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-300 hover:bg-primary hover:text-white transition-all duration-200 active:scale-95"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors text-sm">Dog Poop Removal</Link></li>
              <li><Link to="/near-me" className="hover:text-primary transition-colors text-sm">Service Areas</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors text-sm">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors text-sm">FAQ</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors text-sm">About Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-primary transition-colors text-sm">Pooper Scooper Service</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors text-sm">Dog Poop Removal</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors text-sm">Pet Waste Removal</Link></li>
              <li><Link to="/one-time-cleanup" className="hover:text-primary transition-colors text-sm">One-Time Poop Pick Up Service</Link></li>
              <li><Link to="/hoa-pet-waste-removal-asheville" className="hover:text-primary transition-colors text-sm">HOA Pet Waste Removal</Link></li>
              <li><Link to="/apartment-dog-park-cleaning-asheville" className="hover:text-primary transition-colors text-sm">Apartment Dog Park Cleaning</Link></li>
              <li><Link to="/pet-waste-station-installation-asheville" className="hover:text-primary transition-colors text-sm">Pet Waste Station Installation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-sm">(828) 844-8060</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-sm">info@scoopyavl.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Serving Asheville, Arden, Fletcher, Hendersonville, Black Mountain, Weaverville, and the rest of the Asheville area</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-sm">24/7 online booking always available</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Scoopy Doo LLC. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-slate-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
