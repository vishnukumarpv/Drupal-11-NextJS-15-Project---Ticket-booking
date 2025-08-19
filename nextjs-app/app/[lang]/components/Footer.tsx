
import { Mail, MapPin, CreditCard, Smartphone } from 'lucide-react';
import SubscriptionBlock from '@/components/organisms/footer/SubscriptionBlock';

const Footer = () => {


  const menuItems = [
    { title: 'Products', links: ['Web Design', 'Development', 'SEO Services', 'Consulting'] },
    { title: 'Company', links: ['About Us', 'Careers', 'Blog', 'Contact'] },
    { title: 'Support', links: ['Help Center', 'Documentation', 'Community', 'Status'] },
    { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookies', 'Licenses'] }
  ];

  const paymentMethods = [
    { name: 'Visa', color: 'bg-blue-600' },
    { name: 'Mastercard', color: 'bg-red-500' },
    { name: 'PayPal', color: 'bg-blue-500' },
    { name: 'Stripe', color: 'bg-purple-600' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Subscribe Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SubscriptionBlock />
        </div>
      </div>

      {/* Menu Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {menuItems.map((menu, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-4">{menu.title}</h4>
                <ul className="space-y-3">
                  {menu.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Address & Payment Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Address Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Contact Information
            </h4>
            <div className="space-y-4 text-gray-400">
              <div>
                <p className="font-medium text-white mb-1">Headquarters</p>
                <p>123 Business Street</p>
                <p>Suite 100, Tech District</p>
                <p>San Francisco, CA 94105</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Contact</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Email: hello@company.com</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Business Hours</p>
                <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Payment Gateways Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <CreditCard className="w-5 h-5 mr-2" />
              Secure Payments
            </h4>
            <div className="space-y-6">
              <p className="text-gray-400">
                We accept all major payment methods with enterprise-grade security.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className={`${method.color} rounded-lg p-4 text-center font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200`}
                  >
                    {method.name}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-sm">SSL Secured</span>
                </div>
                <div className="flex items-center text-blue-400">
                  <Smartphone className="w-4 h-4 mr-2" />
                  <span className="text-sm">Mobile Payments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Your Company Name. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer;