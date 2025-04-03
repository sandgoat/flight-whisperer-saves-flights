
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface AddFlightFormProps {
  onAddFlight: (flight: any) => void;
  onCancel: () => void;
  bookingMode: string;
  onModeChange: (mode: string) => void;
}

const AddFlightForm = ({ onAddFlight, onCancel, bookingMode, onModeChange }: AddFlightFormProps) => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    flightNumber: "",
    rapidRewardsNumber: "",
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const newFlight = {
        id: Math.random().toString(36).substring(2, 9),
        ...formData,
        originalPrice: Math.floor(Math.random() * 200) + 100,
        currentPrice: null,
        savings: 0,
        status: 'monitoring',
        lastChecked: 'Just now',
      };
      
      onAddFlight(newFlight);
      toast({
        title: "Flight added",
        description: "Your flight has been added to the monitoring list.",
      });
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
      <h3 className="font-bold text-lg mb-4">Add Flight to Monitor</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="from">Departure Airport</Label>
            <Input 
              id="from"
              name="from"
              placeholder="SAN, LAX, etc."
              value={formData.from}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="to">Arrival Airport</Label>
            <Input 
              id="to"
              name="to"
              placeholder="PHX, DEN, etc."
              value={formData.to}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="date">Flight Date</Label>
            <div className="relative">
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Calendar size={18} />
              </div>
              <Input 
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="flightNumber">Flight Number</Label>
            <Input 
              id="flightNumber"
              name="flightNumber"
              placeholder="e.g., 1234"
              value={formData.flightNumber}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="rapidRewardsNumber">Rapid Rewards Number</Label>
            <Input 
              id="rapidRewardsNumber"
              name="rapidRewardsNumber"
              placeholder="Your Rapid Rewards #"
              value={formData.rapidRewardsNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="mt-6 border-t border-gray-100 pt-4">
          <h4 className="font-medium mb-3">Booking Preferences</h4>
          <RadioGroup 
            value={bookingMode} 
            onValueChange={onModeChange}
            className="flex flex-col space-y-3"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="automatic" id="form-automatic" />
              <Label htmlFor="form-automatic" className="font-medium cursor-pointer">
                Automatic Rebooking
              </Label>
              <span className="text-sm text-gray-500 ml-2">
                We'll automatically rebook your flight when prices drop
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="manual" id="form-manual" />
              <Label htmlFor="form-manual" className="font-medium cursor-pointer">
                Manual Rebooking
              </Label>
              <span className="text-sm text-gray-500 ml-2">
                We'll notify you when prices drop so you can rebook yourself
              </span>
            </div>
          </RadioGroup>
        </div>
        
        <div className="mt-6 flex justify-end space-x-3">
          <Button 
            type="button" 
            variant="outline"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            className="bg-rebook-red text-white"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                <span>Adding...</span>
              </div>
            ) : (
              'Add Flight'
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddFlightForm;
