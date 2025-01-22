import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white shadow-sm mt-8 w-full absolute left-0 right-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">FeedbackApp</h3>
              <p className="text-gray-600 text-sm">
                Helping organizations collect and manage feedback effectively.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-600 hover:text-blue-600 text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 text-sm">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-blue-600 text-sm">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-600 text-sm">
                  Email: support@feedbackapp.com
                </li>
                <li className="text-gray-600 text-sm">
                  Phone: (555) 123-4567
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 mt-8 pt-8">
            <p className="text-center text-gray-600 text-sm">
              © {new Date().getFullYear()} FeedbackApp. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };