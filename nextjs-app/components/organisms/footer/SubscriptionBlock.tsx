'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

const SubscriptionBlock = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };
  return (
    <>
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
        <p className="text-gray-400 mb-8">
          Subscribe to our newsletter for the latest updates, offers, and insights.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
          </div>
          <button
            onClick={handleSubscribe}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Subscribe
          </button>
        </div>

        {isSubscribed && (
          <div className="mt-4 text-green-400 font-medium animate-fade-in">
            ✓ Successfully subscribed!
          </div>
        )}
      </div>
    </>
  )
};

export default SubscriptionBlock;