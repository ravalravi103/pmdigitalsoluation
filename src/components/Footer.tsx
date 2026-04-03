import { Phone, Mail, MapPin, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-blue-400" />
              <span className="font-bold text-lg tracking-tight">PM DIGITAL SOLUTION</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fast, secure, and reliable Digital Signature Certificate (DSC) services in Mumbai. 
              We simplify the process for individuals and organizations.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+91 8655595866</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>ravalsumit103@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <span>15, Ambika Park -4, Shiv Sena Gali, Bhayander West, Mumbai 401101</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex justify-between">
                <span>Mon - Sat:</span>
                <span>10:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} PM DIGITAL SOLUTION. All rights reserved.</p>
          <p className="mt-1">Designed for professional DSC services.</p>
        </div>
      </div>
    </footer>
  );
}
