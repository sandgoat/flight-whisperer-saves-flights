
import { Shield, RefreshCw, Bell, DollarSign, UserCheck, PlaneTakeoff } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-southwest-blue" />,
      title: "Secure Account Protection",
      description: "Your Southwest account credentials are encrypted with bank-level security and never stored in plain text."
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-southwest-blue" />,
      title: "Automatic Rebooking",
      description: "Our system checks for price drops every 30 minutes and automatically rebooks your flight when prices fall."
    },
    {
      icon: <Bell className="h-10 w-10 text-southwest-blue" />,
      title: "Instant Notifications",
      description: "Get alerted immediately when we find a better price and successfully rebook your flight."
    },
    {
      icon: <DollarSign className="h-10 w-10 text-southwest-blue" />,
      title: "Travel Fund Management",
      description: "We track your Southwest travel funds and help you use them before they expire."
    },
    {
      icon: <UserCheck className="h-10 w-10 text-southwest-blue" />,
      title: "Secure Credential Handling",
      description: "Your login information is securely encrypted and only used for the rebooking process."
    },
    {
      icon: <PlaneTakeoff className="h-10 w-10 text-southwest-blue" />,
      title: "Support All Flight Types",
      description: "Works with points bookings, cash bookings, and companion pass reservations."
    }
  ];
  
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">How Flight Whisperer Works</h2>
          <p className="text-lg text-gray-600">
            We continuously monitor Southwest prices and instantly rebook your flights when they drop, putting the difference back in your pocket.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 md:mt-24 bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">How We Save You Money</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-southwest-blue text-white flex items-center justify-center mr-3 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Connect your Southwest account</h4>
                    <p className="text-gray-600 mt-1">Securely link your Southwest account to allow automated rebooking.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-southwest-blue text-white flex items-center justify-center mr-3 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Add your existing flights</h4>
                    <p className="text-gray-600 mt-1">We'll import your existing bookings or you can add them manually.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-southwest-blue text-white flex items-center justify-center mr-3 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">We monitor prices automatically</h4>
                    <p className="text-gray-600 mt-1">Our system checks for price drops every 30 minutes, day and night.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-southwest-blue text-white flex items-center justify-center mr-3 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold">Automatic rebooking when prices drop</h4>
                    <p className="text-gray-600 mt-1">When we find a lower price, we instantly rebook the same flight and notify you.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-southwest-blue text-white flex items-center justify-center mr-3 mt-0.5">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold">You keep 100% of the savings</h4>
                    <p className="text-gray-600 mt-1">The price difference goes back to your original payment method or as travel funds.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl p-2 shadow-lg">
                <div className="bg-white rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?auto=format&fit=crop&w=600&h=600&q=80"
                    alt="Southwest airplane"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h4 className="font-semibold">Denver → Las Vegas</h4>
                        <p className="text-sm text-gray-600">June 21, 2025</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-red-600 line-through">$189.00</p>
                        <p className="text-lg font-bold text-southwest-blue">$94.50</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                          <RefreshCw className="h-4 w-4 text-green-700" />
                        </div>
                        <p className="text-sm font-medium text-green-700">Automatically Rebooked</p>
                      </div>
                      <p className="text-sm font-bold text-green-700">Saved $94.50</p>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-gray-600">Southwest travel funds or refund to original payment method will be processed within 7-10 business days.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-southwest-yellow rounded-full opacity-70 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
