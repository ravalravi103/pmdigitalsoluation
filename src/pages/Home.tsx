import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const services = [
    {
      title: "Class 3 DSC",
      description: "Highest level of assurance, required for e-tendering, e-procurement, and MCA filings.",
      icon: ShieldCheck
    },
    {
      title: "Organization DSC",
      description: "For companies and organizations to authenticate digital documents on behalf of the entity.",
      icon: Zap
    },
    {
      title: "Foreign DSC",
      description: "Specialized certificates for foreign nationals and organizations operating in India.",
      icon: Lock
    }
  ];

  return (
    <div id="home" className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
            >
              PM DIGITAL SOLUTION
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-blue-100 mb-8"
            >
              Trusted Digital Signature Certificate (DSC) Services in Mumbai
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <a 
                href="tel:8655595866"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg flex items-center justify-center"
              >
                Call Now <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#pricing"
                className="bg-blue-700 text-white border border-blue-500 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all flex items-center justify-center"
              >
                View Pricing
              </a>
            </motion.div>
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-blue-100 text-sm font-medium">
              <span className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-white" /> Fast Processing</span>
              <span className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-white" /> Secure & Reliable</span>
              <span className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-white" /> Expert Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Specialized Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide a comprehensive range of Digital Signature Certificates tailored to your specific needs.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose PM Digital Solution?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">Quick Turnaround</h4>
                    <p className="text-gray-600">We understand the urgency of business filings. Get your DSC processed in record time.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">Transparent Pricing</h4>
                    <p className="text-gray-600">No hidden charges. What you see is what you pay for your certificate and token.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">Expert Guidance</h4>
                    <p className="text-gray-600">Managed by Sumit Raval, we provide professional assistance for all your DSC queries.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800" 
                  alt="Professional Service" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover h-96"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it. Here's what business owners and professionals in Mumbai think about our services.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Mehta",
                role: "Chartered Accountant",
                content: "Sumit and his team are incredibly efficient. I've been getting DSCs for my clients from PM Digital Solution for over a year now. Fast approval every time!",
                rating: 5
              },
              {
                name: "Priya Sharma",
                role: "Business Owner",
                content: "The process was so simple. I needed a Class 3 DSC for a government tender urgently, and they delivered it within hours. Highly recommended!",
                rating: 5
              },
              {
                name: "Amit Patel",
                role: "Corporate Consultant",
                content: "Transparent pricing and excellent support. They guided me through the entire documentation process for a Foreign DSC. Very professional.",
                rating: 5
              }
            ].map((review, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative"
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{review.content}"</p>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-blue-600 font-medium">{review.role}</p>
                </div>
                <div className="absolute top-8 right-8 opacity-10">
                  <svg className="h-12 w-12 text-blue-600 fill-current" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H12.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.5693 13 5.017 13H4.017V21H6.017Z" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to get your Digital Signature?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Join hundreds of satisfied clients in Mumbai who trust PM Digital Solution for their digital authentication needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <a 
                href="https://wa.me/918655595866" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all flex items-center justify-center"
              >
                Chat on WhatsApp
              </a>
              <a 
                href="#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
