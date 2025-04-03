
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Loader2 } from "lucide-react";

interface StripeCheckoutProps {
  rapidRewardsNumbers: string[];
  onSuccess?: () => void;
  onCancel?: () => void;
}

const StripeCheckout = ({ rapidRewardsNumbers, onSuccess, onCancel }: StripeCheckoutProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  // Calculate price based on number of Rapid Rewards numbers
  const calculatePrice = (numRewards: number) => {
    if (numRewards === 0) return 0;
    // $15 for the first + $5 for each additional
    return numRewards === 1 ? 15 : 15 + (numRewards - 1) * 5;
  };
  
  const price = calculatePrice(rapidRewardsNumbers.length);

  const handleCheckout = async () => {
    setIsLoading(true);
    
    // In a real implementation, this would call a Stripe checkout session creation endpoint
    try {
      // Simulating API call to create Stripe checkout session
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Redirecting to checkout",
        description: "You'll be redirected to Stripe to complete your purchase."
      });
      
      // In a real implementation, the backend would return a session URL to redirect to
      // window.location.href = sessionUrl;
      
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Checkout error:", error);
      toast({
        title: "Checkout failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Complete Your Subscription</h3>
      
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span>Rapid Rewards Numbers:</span>
          <span>{rapidRewardsNumbers.length}</span>
        </div>
        {rapidRewardsNumbers.length > 0 && (
          <>
            <div className="flex justify-between">
              <span>First Rapid Rewards Number:</span>
              <span>$15.00/month</span>
            </div>
            {rapidRewardsNumbers.length > 1 && (
              <div className="flex justify-between">
                <span>Additional {rapidRewardsNumbers.length - 1} {rapidRewardsNumbers.length - 1 === 1 ? 'number' : 'numbers'}:</span>
                <span>${((rapidRewardsNumbers.length - 1) * 5).toFixed(2)}/month</span>
              </div>
            )}
          </>
        )}
        <div className="flex justify-between font-medium mt-2 pt-2 border-t border-gray-100">
          <span>Monthly subscription:</span>
          <span>${price.toFixed(2)}/month</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Your card will be charged ${price.toFixed(2)} monthly for monitoring {rapidRewardsNumbers.length} Rapid Rewards {rapidRewardsNumbers.length === 1 ? 'number' : 'numbers'}.
        </p>
      </div>
      
      <Button
        onClick={handleCheckout}
        disabled={isLoading}
        className="w-full bg-rebook-purple text-white h-12"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <CreditCard className="mr-2 h-4 w-4" />
            Proceed to Payment
          </>
        )}
      </Button>
      
      <div className="mt-4 text-center">
        <Button variant="link" onClick={onCancel} disabled={isLoading}>
          Cancel
        </Button>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-6" />
          <span className="text-xs text-gray-500 ml-2">Secure payment processing</span>
        </div>
      </div>
    </div>
  );
};

export default StripeCheckout;
