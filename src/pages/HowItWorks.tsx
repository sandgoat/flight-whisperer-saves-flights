
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Check, Plane, RefreshCw, DollarSign } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Add your flights",
      description: "Enter your flight details once and we'll keep track of them for you.",
      icon: <Plane className="h-8 w-8 text-rebook-red" />
    },
    {
      title: "We monitor prices",
      description: "Our system checks prices every 30 minutes to catch all price drops.",
      icon: <RefreshCw className="h-8 w-8 text-rebook-red" />
    },
    {
      title: "Automatic or manual rebooking",
      description: "Choose automatic rebooking or get notified when prices drop and rebook yourself.",
      icon: <Check className="h-8 w-8 text-rebook-red" />
    },
    {
      title: "Keep all your savings",
      description: "Save hundreds of dollars or thousands of points on your flights with our flat monthly fee.",
      icon: <DollarSign className="h-8 w-8 text-rebook-red" />
    }
  ];

  const faqs = [
    {
      question: "How does Rebook Club work?",
      answer: "Rebook Club monitors your flights 24/7 for price drops. When we find a lower price, we either automatically rebook your flight for you or notify you so you can rebook yourself, depending on your preferences."
    },
    {
      question: "Is Rebook Club affiliated with airlines?",
      answer: "No, Rebook Club is not affiliated with any airlines. We're a third-party service that helps you save money on your flights."
    },
    {
      question: "How much does Rebook Club cost?",
      answer: "Rebook Club costs $15 per month, regardless of how many flights you're monitoring or how much you save."
    },
    {
      question: "How safe is my airline account information?",
      answer: "Your security is our top priority. We use bank-level encryption to protect your credentials and never store your password in plain text."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time from your account settings page."
    }
  ];

  return (
    <>
      <Helmet>
        <title>How It Works - Rebook Club</title>
        <meta name="description" content="Learn how Rebook Club helps you save money on your flights by automatically finding and rebooking cheaper flights." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">How Rebook Club Works</h1>
                <p className="text-lg text-gray-600">
                  We make saving money on your flights effortless
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-rebook-red bg-opacity-10 flex items-center justify-center mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <section id="faq" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                      <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HowItWorks;
