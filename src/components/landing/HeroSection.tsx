
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl md:max-w-3xl">
              Never Overpay for <span className="gradient-text">Southwest Flights</span> Again
            </h1>
            <p className="text-lg text-gray-600 md:text-xl max-w-2xl">
              Flight Whisperer automatically monitors your Southwest bookings and instantly rebooks when prices drop — saving you money while you sleep.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Button 
                className="bg-southwest-blue hover:bg-opacity-90 text-white h-12 px-8 text-base"
                onClick={() => navigate('/auth?mode=signup')}
              >
                Start Saving Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="border-southwest-blue text-southwest-blue hover:bg-southwest-blue hover:text-white h-12 px-8 text-base"
                onClick={() => navigate('/#how-it-works')}
              >
                How It Works
              </Button>
            </div>
            <div className="pt-6 flex items-center space-x-4">
              <div className="flex -space-x-2">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100"
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  alt="User"
                />
                <img 
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100"
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  alt="User"
                />
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100"
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  alt="User"
                />
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">350+ subscribers</span> saving money every day
              </p>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 relative">
            <div className="bg-gray-100 rounded-2xl p-2 shadow-xl">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="bg-southwest-blue py-4 px-6 text-white">
                  <h3 className="font-bold">Flight Savings Dashboard</h3>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Total Savings</p>
                      <p className="text-2xl font-bold text-southwest-blue">$347.82</p>
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      3 Flights Rebooked
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4 card-hover">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center">
                            <span className="font-semibold">SAN → PHX</span>
                            <span className="mx-2 text-gray-400">•</span>
                            <span className="text-sm text-gray-600">May 15</span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">Flight #2174</p>
                        </div>
                        <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                          Saved $128.64
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 card-hover">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center">
                            <span className="font-semibold">DEN → LAS</span>
                            <span className="mx-2 text-gray-400">•</span>
                            <span className="text-sm text-gray-600">June 21</span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">Flight #3211</p>
                        </div>
                        <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                          Saved $94.50
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 card-hover">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center">
                            <span className="font-semibold">MCO → ATL</span>
                            <span className="mx-2 text-gray-400">•</span>
                            <span className="text-sm text-gray-600">July 08</span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">Flight #5589</p>
                        </div>
                        <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                          Saved $124.68
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-southwest-yellow rounded-full opacity-60 -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-southwest-red rounded-full opacity-60 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
