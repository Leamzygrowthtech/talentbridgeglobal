import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer-bg text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">Talent</span>
              <span className="text-2xl font-bold text-accent">Bridge</span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Your global partner in talent acquisition and workforce success. Connecting exceptional
              professionals with world-class organizations.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:info@talentbridgeglobal.com"
                className="hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-white/80">Recruitment Solutions</li>
              <li className="text-sm text-white/80">Executive Search</li>
              <li className="text-sm text-white/80">Career Coaching</li>
              <li className="text-sm text-white/80">Workforce Consulting</li>
              <li className="text-sm text-white/80">RPO Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm text-white/80">
                  2000 Parkwood Circle SE, Suite 320<br />
                  Atlanta, GA 30339
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm text-white/80">
                  6230 Fairview Rd, Suite 220<br />
                  Charlotte, NC 28210
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-sm text-white/80">+1 (470) 555-2048</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="flex-shrink-0" />
                <a
                  href="mailto:info@talentbridgeglobal.com"
                  className="text-sm text-white/80 hover:text-primary transition-colors"
                >
                  info@talentbridgeglobal.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/70">
              © {currentYear} Talent Bridge Global. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-sm text-white/70 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-white/70 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
