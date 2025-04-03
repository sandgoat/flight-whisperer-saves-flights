
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  // In a real app, this would come from authentication context
  const isLoggedIn = false;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "How It Works", path: "/how-it-works" },
    { title: "Pricing", path: "/pricing" },
    { title: "FAQ", path: "/#faq" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <span className="text-xl font-bold text-rebook-red">Rebook</span>
            <span className="text-xl font-bold text-gray-800">Club</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-rebook-red ${
                location.pathname === link.path ? "text-rebook-red" : "text-gray-600"
              }`}
            >
              {link.title}
            </Link>
          ))}
          
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/dashboard')}
                className="flex items-center space-x-2"
              >
                <User size={18} />
                <span>Dashboard</span>
              </Button>
              <Button 
                variant="ghost" 
                className="flex items-center space-x-2 text-red-600"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/auth?mode=login')}
              >
                Login
              </Button>
              <Button 
                className="bg-rebook-red hover:bg-opacity-90 text-white"
                onClick={() => navigate('/auth?mode=signup')}
              >
                Get Started
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 p-4 shadow-lg z-50">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-rebook-red ${
                  location.pathname === link.path ? "text-rebook-red" : "text-gray-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            
            {isLoggedIn ? (
              <div className="flex flex-col space-y-4 pt-4 border-t border-gray-200">
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    navigate('/dashboard');
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center justify-start space-x-2"
                >
                  <User size={18} />
                  <span>Dashboard</span>
                </Button>
                <Button 
                  variant="ghost" 
                  className="flex items-center justify-start space-x-2 text-red-600"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </Button>
              </div>
            ) : (
              <div className="flex flex-col space-y-4 pt-4 border-t border-gray-200">
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    navigate('/auth?mode=login');
                    setIsMenuOpen(false);
                  }}
                  className="justify-start"
                >
                  Login
                </Button>
                <Button 
                  className="bg-rebook-red hover:bg-opacity-90 text-white justify-start"
                  onClick={() => {
                    navigate('/auth?mode=signup');
                    setIsMenuOpen(false);
                  }}
                >
                  Get Started
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
