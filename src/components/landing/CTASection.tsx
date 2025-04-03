
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Start Saving on Southwest Flights Today</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join hundreds of savvy travelers who never overpay for their Southwest flights again.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p>7-day free trial with no credit card required</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p>Average savings of $128 per flight</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p>89% of customers recover their subscription cost in the first month</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p>Cancel anytime, no long-term commitment</p>
                </div>
              </div>
              
              <Button 
                className="bg-southwest-blue hover:bg-opacity-90 text-white h-12 px-8 text-base"
                onClick={() => navigate('/auth?mode=signup')}
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                No credit card required to start. Full access for 7 days.
              </p>
            </div>
            
            <div className="relative hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1531642765602-5cae8bbbece6?auto=format&fit=crop&w=600&h=600&q=80"
                alt="Person with laptop checking flight prices"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-southwest-blue to-southwest-red opacity-70"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                <h3 className="text-3xl font-bold mb-6 text-center">Our customers have saved over $127,000</h3>
                <div className="grid grid-cols-2 gap-8 w-full max-w-md">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">$347</div>
                    <p className="text-sm text-white text-opacity-90">Largest single flight savings</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">9,428</div>
                    <p className="text-sm text-white text-opacity-90">Flights successfully rebooked</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">30min</div>
                    <p className="text-sm text-white text-opacity-90">Price check frequency</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">4.9/5</div>
                    <p className="text-sm text-white text-opacity-90">Customer satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
