
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface BookingPreferencesProps {
  bookingMode: string;
  onModeChange: (mode: string) => void;
}

const BookingPreferences = ({ bookingMode, onModeChange }: BookingPreferencesProps) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Default Booking Preferences</h3>
      <p className="text-sm text-gray-500 mb-4">
        This setting will be applied as the default for all new flights you add. You can override this during flight addition.
      </p>
      
      <RadioGroup 
        value={bookingMode} 
        onValueChange={onModeChange}
        className="flex flex-col space-y-3"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="automatic" id="automatic" />
          <Label htmlFor="automatic" className="font-medium cursor-pointer">
            Automatic Rebooking
          </Label>
          <span className="text-sm text-gray-500 ml-2">
            We'll automatically rebook your flight when prices drop
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="manual" id="manual" />
          <Label htmlFor="manual" className="font-medium cursor-pointer">
            Manual Rebooking
          </Label>
          <span className="text-sm text-gray-500 ml-2">
            We'll notify you when prices drop so you can rebook yourself
          </span>
        </div>
      </RadioGroup>
    </div>
  );
};

export default BookingPreferences;
