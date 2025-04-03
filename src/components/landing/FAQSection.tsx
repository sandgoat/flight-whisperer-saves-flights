
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "How does Flight Whisperer work?",
      answer: "Flight Whisperer monitors your Southwest flights and automatically rebooks them when prices drop. We check prices every 30 minutes, 24/7. When we find a lower price for the exact same flight, we securely rebook it using your Southwest account credentials, and the price difference is refunded to you as either travel funds or back to your original payment method."
    },
    {
      question: "Is it safe to share my Southwest login?",
      answer: "Yes, Flight Whisperer takes security extremely seriously. Your credentials are encrypted with bank-level encryption and are only used to log into Southwest's website to perform the rebooking when prices drop. We never store your password in plain text, and you can delete your credentials at any time. Additionally, we use secure, encrypted connections for all data transfers."
    },
    {
      question: "Will my original seat assignments and boarding positions be affected?",
      answer: "No, when we rebook your flight, we ensure that your original seat assignments and boarding positions remain the same. The rebooking process is seamless and only changes the price, not any other aspects of your reservation."
    },
    {
      question: "How often do prices actually drop?",
      answer: "Southwest frequently adjusts their prices based on demand, competition, and other factors. On average, about 40% of flights see at least one price drop after booking. The amount can vary from a few dollars to over $100 per passenger, which is why constant monitoring is valuable."
    },
    {
      question: "How will I know if my flight has been rebooked?",
      answer: "You'll receive an instant notification via email and/or SMS (based on your preferences) whenever we successfully rebook a flight at a lower price. The notification includes details about the savings amount and confirmation that the rebooking was successful."
    },
    {
      question: "Does Flight Whisperer work with points bookings?",
      answer: "Yes! Flight Whisperer works with both cash and points bookings. For points bookings, we'll automatically rebook when the points price drops and the difference in points will be refunded to your Southwest Rapid Rewards account."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely. You can cancel your subscription at any time from your account settings page. There are no long-term commitments or cancellation fees. If you cancel, your subscription will remain active until the end of your current billing period."
    },
    {
      question: "What happens if Southwest changes my flight schedule?",
      answer: "If Southwest makes changes to your flight schedule, Flight Whisperer will detect this and notify you. We'll continue monitoring the new flight details for price drops unless you remove it from your dashboard."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Flight Whisperer and how it works.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                className="flex w-full justify-between items-start text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <span className="ml-6 h-7 flex items-center">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-southwest-blue" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-2 pr-12">
                  <p className="text-base text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions? <a href="#" className="text-southwest-blue font-medium hover:underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
