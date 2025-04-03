
import { Link } from "react-router-dom";
import { Shield, CreditCard, Mail, Twitter, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <span className="text-xl font-bold text-rebook-red">Rebook</span>
              <span className="text-xl font-bold text-gray-800">Club</span>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Automatically find and rebook cheaper flights to save you money without the hassle.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-rebook-red transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-rebook-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-rebook-red transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h5 className="font-medium text-sm uppercase text-gray-700 mb-4">Product</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-rebook-red text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-rebook-red text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/#faq" className="text-gray-600 hover:text-rebook-red text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h5 className="font-medium text-sm uppercase text-gray-700 mb-4">Support</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-rebook-red text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-rebook-red text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-rebook-red text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h5 className="font-medium text-sm uppercase text-gray-700 mb-4">Contact</h5>
            <div className="flex items-center space-x-3 mb-3">
              <Mail size={18} className="text-gray-500" />
              <a href="mailto:support@rebookclub.com" className="text-sm text-gray-600 hover:text-rebook-red">
                support@rebookclub.com
              </a>
            </div>
            <div className="flex flex-col space-y-3 mt-6">
              <div className="flex items-center space-x-2">
                <Shield size={18} className="text-rebook-red" />
                <span className="text-sm text-gray-700">Secure Account Protection</span>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCard size={18} className="text-rebook-red" />
                <span className="text-sm text-gray-700">Secure Payment Processing</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 mt-8 text-center sm:flex sm:justify-between sm:text-left">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Rebook Club. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <p className="text-xs text-gray-500">
              Rebook Club is not affiliated with any airlines
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
