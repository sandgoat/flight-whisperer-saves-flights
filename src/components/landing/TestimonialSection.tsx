
import { StarIcon } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Flight Whisperer saved me $247 on my family vacation to Orlando. It found a price drop at 3 AM that I would have never caught!",
      author: "Michael T.",
      location: "Denver, CO",
      savings: "$247",
      imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      quote: "I was skeptical at first, but after it rebooked my Vegas flight twice and saved me $176, I'm a believer. Worth every penny of the subscription.",
      author: "Sarah K.",
      location: "Portland, OR",
      savings: "$176",
      imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      quote: "As someone who flies Southwest at least once a month for work, this service has already saved me hundreds of dollars. My company loves it too!",
      author: "David R.",
      location: "Austin, TX",
      savings: "$315",
      imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
    },
  ];
  
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">
            Join hundreds of travelers who are already saving money on their Southwest flights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 card-hover">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.imgSrc}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
                <div className="ml-auto">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Saved {testimonial.savings}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-southwest-blue bg-opacity-5 rounded-xl p-8 md:p-10 border border-southwest-blue border-opacity-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
              <h3 className="text-2xl font-bold mb-4">Our customers have saved over $127,500</h3>
              <p className="text-gray-700">
                Join the thousands of travelers who trust Flight Whisperer to automatically find and rebook cheaper Southwest flights, saving them time and money.
              </p>
            </div>
            <div className="md:w-1/3 md:border-l md:border-southwest-blue md:border-opacity-20 md:pl-6 flex flex-col items-center text-center">
              <div className="text-5xl font-bold text-southwest-blue mb-2">$127,583</div>
              <p className="text-gray-600">Total customer savings to date</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
