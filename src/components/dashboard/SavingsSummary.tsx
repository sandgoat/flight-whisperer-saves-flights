
import { DollarSign, TrendingUp } from "lucide-react";

interface SavingsSummaryProps {
  totalSavings: number;
  flightsRebooked: number;
  flightsMonitoring: number;
}

const SavingsSummary = ({ totalSavings, flightsRebooked, flightsMonitoring }: SavingsSummaryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex items-start">
          <div className="w-12 h-12 rounded-lg bg-southwest-blue bg-opacity-10 flex items-center justify-center mr-4">
            <DollarSign className="h-6 w-6 text-southwest-blue" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Savings</p>
            <p className="text-2xl font-bold text-southwest-blue">${totalSavings.toFixed(2)}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex items-start">
          <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mr-4">
            <TrendingUp className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Flights Rebooked</p>
            <p className="text-2xl font-bold">{flightsRebooked}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex items-start">
          <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-500">Flights Monitoring</p>
            <p className="text-2xl font-bold">{flightsMonitoring}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsSummary;
