'use client';

import { useState } from 'react';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleChat}
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {/* Popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-40 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-64 max-w-[calc(100vw-3rem)] sm:w-72">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
            <button
              onClick={toggleChat}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>
          <div className="space-y-3">
            <a
              href="tel:+1234567890"
              className="flex items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors duration-200 group"
            >
              <Phone size={20} className="text-green-600 mr-3 group-hover:text-green-700" />
              <span className="text-gray-700 group-hover:text-gray-900">Call Us</span>
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors duration-200 group"
            >
              <MessageCircle size={20} className="text-green-600 mr-3 group-hover:text-green-700" />
              <span className="text-gray-700 group-hover:text-gray-900">WhatsApp</span>
            </a>
            <a
              href="mailto:info@example.com"
              className="flex items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors duration-200 group"
            >
              <Mail size={20} className="text-green-600 mr-3 group-hover:text-green-700" />
              <span className="text-gray-700 group-hover:text-gray-900">Email</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChat;
