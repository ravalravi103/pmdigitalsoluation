import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-900 tracking-tight">PM DIGITAL SOLUTION</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="tel:8655595866" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a href="tel:8655595866" className="block px-3 py-2 text-blue-600 font-bold">Call: 8655595866</a>
          </div>
        </div>
      )}
    </nav>
  );
}
