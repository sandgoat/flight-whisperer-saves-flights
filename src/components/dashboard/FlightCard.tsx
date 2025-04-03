
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Clock, Plane, RefreshCw, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FlightCardProps {
  flight: {
    id: string;
    from: string;
    to: string;
    date: string;
    flightNumber: string;
    originalPrice: number;
    currentPrice: number | null;
    savings: number;
    status: 'monitoring' | 'rebooked' | 'completed';
    lastChecked: string;
  };
  onDelete: (id: string) => void;
}

const FlightCard = ({ flight, onDelete }: FlightCardProps) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { toast } = useToast();
  
  const handleDelete = () => {
    setIsDeleting(true);
    
    // Simulate API call
    setTimeout(() => {
      onDelete(flight.id);
      toast({
        title: "Flight removed",
        description: "The flight has been removed from your monitoring list.",
      });
      setIsDeleting(false);
    }, 500);
  };
  
  const getStatusBadge = () => {
    switch (flight.status) {
      case 'monitoring':
        return (
          <div className="flex items-center space-x-1 text-sm font-medium text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full">
            <Clock size={14} />
            <span>Monitoring</span>
          </div>
        );
      case 'rebooked':
        return (
          <div className="flex items-center space-x-1 text-sm font-medium text-green-700 bg-green-100 px-2.5 py-0.5 rounded-full">
            <RefreshCw size={14} />
            <span>Rebooked</span>
          </div>
        );
      case 'completed':
        return (
          <div className="flex items-center space-x-1 text-sm font-medium text-gray-700 bg-gray-100 px-2.5 py-0.5 rounded-full">
            <Check size={14} />
            <span>Completed</span>
          </div>
        );
    }
  };
  
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden card-hover">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center space-x-2">
              <Plane className="h-5 w-5 text-southwest-blue" />
              <h3 className="font-bold text-lg">
                {flight.from} → {flight.to}
              </h3>
            </div>
            <div className="mt-1 flex items-center text-sm text-gray-500">
              <span>{flight.date}</span>
              <span className="mx-2">•</span>
              <span>Flight #{flight.flightNumber}</span>
            </div>
          </div>
          {getStatusBadge()}
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="flex items-end space-x-2">
              {flight.savings > 0 ? (
                <>
                  <div className="text-sm font-medium text-red-600 line-through">
                    ${flight.originalPrice.toFixed(2)}
                  </div>
                  <div className="text-xl font-bold text-southwest-blue">
                    ${(flight.originalPrice - flight.savings).toFixed(2)}
                  </div>
                </>
              ) : (
                <div className="text-xl font-bold">
                  ${flight.originalPrice.toFixed(2)}
                </div>
              )}
            </div>
            {flight.savings > 0 && (
              <div className="mt-1 text-sm font-medium text-green-600">
                Saved ${flight.savings.toFixed(2)}
              </div>
            )}
          </div>
          
          <div className="text-right">
            <div className="text-sm text-gray-500">Last checked</div>
            <div className="text-sm font-medium">{flight.lastChecked}</div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            {flight.status === 'monitoring' 
              ? 'Checked every 30 minutes' 
              : flight.status === 'rebooked' 
                ? 'Successfully rebooked at lower price' 
                : 'Flight completed'}
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            <Trash2 size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
