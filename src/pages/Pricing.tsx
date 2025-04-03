
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
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Pricing;
