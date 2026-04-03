import { motion } from 'motion/react';
import { Check, Info } from 'lucide-react';

const pricingData = [
  { name: "Class 3 General 1 Yr", price: 1350, category: "Standard" },
  { name: "Class 3 General 2 Yr", price: 1500, category: "Standard" },
  { name: "Class 3 General 3 Yr", price: 1800, category: "Standard" },
  { name: "Class 3 General Combo 1 Yr", price: 2100, category: "Combo" },
  { name: "Class 3 General Combo 2 Yr", price: 2400, category: "Combo" },
  { name: "Class 3 General Combo 3 Yr", price: 2900, category: "Combo" },
  { name: "Foreign - Class 3 General 1 Yr", price: 3800, category: "Foreign" },
  { name: "Foreign - Class 3 General 2 Yr", price: 4400, category: "Foreign" },
  { name: "Foreign - Class 3 General 3 Yr", price: 6000, category: "Foreign" },
  { name: "Foreign - Class 3 Combo 1 Yr", price: 6000, category: "Foreign Combo" },
  { name: "Foreign - Class 3 Combo 2 Yr", price: 7200, category: "Foreign Combo" },
  { name: "Foreign - Class 3 Combo 3 Yr", price: 8200, category: "Foreign Combo" },
];

export default function Pricing() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Transparent Pricing
          </motion.h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Affordable and competitive rates for all your Digital Signature needs.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl font-extrabold text-blue-600">₹{item.price}</span>
                    <span className="text-gray-500 ml-1 text-sm">/ certificate</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Paperless Processing
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Valid for all Govt. Portals
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Token Included (if applicable)
                    </li>
                  </ul>
                </div>
                <a 
                  href={`https://wa.me/918655595866?text=I'm interested in ${item.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-blue-600 text-white rounded-xl font-bold text-center hover:bg-blue-700 transition-colors"
                >
                  Order Now
                </a>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <div className="flex items-start">
              <Info className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Important Information</h4>
                <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                  <li>Prices are inclusive of GST where applicable.</li>
                  <li>Class 3 certificates are now the standard for all e-tendering and MCA requirements.</li>
                  <li>Combo certificates include both Signature and Encryption components.</li>
                  <li>Bulk pricing available for CA firms and large organizations. Contact us for details.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
