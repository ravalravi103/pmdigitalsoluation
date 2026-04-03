import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Have questions? We're here to help you with your DSC requirements.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-4 rounded-2xl mr-6">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">Call Us</h4>
                    <p className="text-gray-600 mt-1">Sumit Raval</p>
                    <a href="tel:8655595866" className="text-blue-600 font-bold text-xl">+91 8655595866</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-4 rounded-2xl mr-6">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">Email Us</h4>
                    <p className="text-gray-600 mt-1">For queries and documentation</p>
                    <a href="mailto:ravalsumit103@gmail.com" className="text-blue-600 font-bold text-xl">ravalsumit103@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-4 rounded-2xl mr-6">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">Visit Our Office</h4>
                    <p className="text-gray-600 mt-1 leading-relaxed">
                      15, Ambika Park -4, Shiv Sena Gali,<br />
                      Bhayander West, Mumbai 401101
                    </p>
                  </div>
                </div>

                <div className="pt-8">
                  <a 
                    href="https://wa.me/918655595866" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-600 transition-all shadow-lg"
                  >
                    <MessageSquare className="mr-2 h-6 w-6" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                    <option>New DSC Application</option>
                    <option>DSC Renewal</option>
                    <option>Pricing Query</option>
                    <option>Technical Support</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-2" />
            <p className="text-gray-600 font-medium">Bhayander West, Mumbai</p>
            <p className="text-sm text-gray-500">Google Maps Integration Placeholder</p>
          </div>
        </div>
        {/* Real iframe would go here */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.263544605417!2d72.8464673!3d19.314418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b036f0000001%3A0x7d6f6f6f6f6f6f6f!2sBhayandar%20West%2C%20Mira%20Bhayandar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, opacity: 0.6 }} 
          allowFullScreen 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
