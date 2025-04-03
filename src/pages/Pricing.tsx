
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - Flight Whisperer</title>
        <meta name="description" content="Simple, transparent pricing for Flight Whisperer. Save money on your Southwest flights with our automatic flight price monitoring and rebooking service." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div className="py-12">
            <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
              <p className="text-lg text-gray-600">
                One simple subscription to save hundreds on your Southwest flights.
              </p>
            </div>
          </div>
          <PricingSection />
          
          {/* Southwest Price Information Section */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <h2 className="text-3xl font-bold mb-6 text-center">How Southwest Pricing Works</h2>
              
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
                <h3 className="text-xl font-semibold mb-4">Dynamic Pricing</h3>
                <p className="mb-4">
                  Southwest Airlines prices on its Low Fare Calendar change frequently, often multiple times a day, 
                  based on demand, route availability, and fare class adjustments, with changes potentially happening 
                  overnight or even within hours, especially for popular routes or during fare sales.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Frequent Updates</h4>
                    <p className="text-sm">
                      The Low Fare Calendar is updated frequently, potentially multiple times a day, so prices can change rapidly.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Demand and Seat Availability</h4>
                    <p className="text-sm">
                      As flights fill up, fares tend to increase, and conversely, as seats become available, prices might drop.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Fare Sales</h4>
                    <p className="text-sm">
                      Southwest often releases discounts and fare sales, which can lead to significant price drops, especially on certain routes.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Free Rebooking</h4>
                    <p className="text-sm">
                      If you book a flight and the price drops, Southwest allows free rebooking at the lower fare, making it worthwhile to keep checking prices after booking.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">How Rebook Club Helps You Save</h3>
                <p className="mb-6">
                  We monitor your flights 24/7 and automatically catch price drops so you don't have to keep checking.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4">
                    <div className="bg-rebook-pink-light text-rebook-purple inline-flex items-center justify-center w-12 h-12 rounded-full mb-3">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <h4 className="font-semibold mb-2">We Monitor</h4>
                    <p className="text-sm">
                      We check your flight prices every 30 minutes, all day every day.
                    </p>
                  </div>
                  
                  <div className="text-center p-4">
                    <div className="bg-rebook-pink-light text-rebook-purple inline-flex items-center justify-center w-12 h-12 rounded-full mb-3">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <h4 className="font-semibold mb-2">We Find Savings</h4>
                    <p className="text-sm">
                      When prices drop, we catch it immediately, often before anyone else.
                    </p>
                  </div>
                  
                  <div className="text-center p-4">
                    <div className="bg-rebook-pink-light text-rebook-purple inline-flex items-center justify-center w-12 h-12 rounded-full mb-3">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <h4 className="font-semibold mb-2">You Save Money</h4>
                    <p className="text-sm">
                      We'll automatically rebook your flight or notify you based on your preferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Pricing;
