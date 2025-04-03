
import { useState } from "react";
import { Check, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PricingSection = () => {
  const navigate = useNavigate();
  
  const handleSignUp = () => {
    navigate('/auth?mode=signup');
  };
  
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600">
            One simple plan that lets you save hundreds on your Southwest flights.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 md:p-8 lg:w-2/3">
              <div className="flex items-center">
                <CreditCard className="h-6 w-6 text-rebook-red mr-2" />
                <h3 className="text-xl font-bold">Flight Saver Subscription</h3>
              </div>
              
              <div className="mt-6 mb-6">
                <span className="text-4xl font-bold">$15</span>
                <span className="text-gray-600">/month per Rapid Rewards number</span>
                <p className="text-sm text-gray-600 mt-1">Cancel anytime, no commitment required</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p>Unlimited flight monitoring and automatic rebooking</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p>Checks every 30 minutes, 24/7, for price drops</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p>Works with points bookings, cash bookings, and companion passes</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p>Real-time notifications for successful rebookings</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p>Secure credential management</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p>Email and chat support</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 md:p-8 flex flex-col lg:w-1/3 border-t lg:border-t-0 lg:border-l border-gray-200">
              <h4 className="font-bold mb-3">Why our customers love us</h4>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-700 font-bold text-sm px-2 py-1 rounded mr-3 mt-0.5">$128</div>
                  <p className="text-sm">Average savings on domestic flights</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-700 font-bold text-sm px-2 py-1 rounded mr-3 mt-0.5">$347</div>
                  <p className="text-sm">Highest amount saved on a single flight</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-700 font-bold text-sm px-2 py-1 rounded mr-3 mt-0.5">89%</div>
                  <p className="text-sm">Of users recoup their subscription in the first month</p>
                </li>
              </ul>
              
              <div className="mt-auto">
                <Button 
                  className="w-full bg-rebook-red hover:bg-opacity-90 text-white h-12"
                  onClick={handleSignUp}
                >
                  Start Your 7-Day Free Trial
                </Button>
                <p className="text-xs text-center text-gray-500 mt-3">
                  No credit card required for trial. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 mt-8 text-center">
            <h4 className="font-semibold mb-2">Money-Back Guarantee</h4>
            <p className="text-sm text-gray-600">
              If we don't save you at least the cost of your subscription within 3 months, we'll refund your payments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
