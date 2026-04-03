import { motion } from 'motion/react';
import { Shield, Award, Users, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div id="about" className="bg-white pt-20">
      {/* Content */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About PM DIGITAL SOLUTION</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Your trusted partner for Digital Signature Certificates in Mumbai.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                PM DIGITAL SOLUTION was founded with a simple goal: to make digital authentication accessible, fast, and secure for everyone. In an increasingly digital world, having a reliable Digital Signature Certificate is essential for business compliance and security.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Managed by Sumit Raval, we pride ourselves on our personalized service and technical expertise. We don't just sell certificates; we provide end-to-end support to ensure you can use your DSC effectively for e-tendering, MCA filings, Income Tax, and more.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="font-semibold text-gray-700">Fast Approval</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="font-semibold text-gray-700">Secure Process</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="font-semibold text-gray-700">Expert Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="font-semibold text-gray-700">Best Pricing</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-blue-50 p-8 rounded-2xl text-center">
                  <Shield className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900">Secure</h3>
                  <p className="text-sm text-gray-500">Bank-grade encryption</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl text-center">
                  <Users className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900">500+</h3>
                  <p className="text-sm text-gray-500">Happy Clients</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gray-50 p-8 rounded-2xl text-center">
                  <Award className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900">Certified</h3>
                  <p className="text-sm text-gray-500">Authorized Provider</p>
                </div>
                <div className="bg-blue-50 p-8 rounded-2xl text-center">
                  <CheckCircle2 className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900">100%</h3>
                  <p className="text-sm text-gray-500">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Founder Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400" 
                alt="Sumit Raval" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Founder & Manager</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Sumit Raval</h2>
              <p className="text-gray-600 text-lg italic leading-relaxed">
                "At PM Digital Solution, we believe that technology should simplify business, not complicate it. Our goal is to provide a seamless experience for every client, ensuring they have the digital tools they need to succeed in the modern economy."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
