
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import FlightCard from "@/components/dashboard/FlightCard";
import AddFlightForm from "@/components/dashboard/AddFlightForm";
import SavingsSummary from "@/components/dashboard/SavingsSummary";

const Dashboard = () => {
  const [isAddingFlight, setIsAddingFlight] = useState(false);
  
  // Mock data
  const [flights, setFlights] = useState([
    {
      id: "flight1",
      from: "SAN",
      to: "PHX",
      date: "May 15, 2025",
      flightNumber: "2174",
      originalPrice: 189.99,
      currentPrice: 61.35,
      savings: 128.64,
      status: 'rebooked',
      lastChecked: "2 hours ago",
    },
    {
      id: "flight2",
      from: "DEN",
      to: "LAS",
      date: "June 21, 2025",
      flightNumber: "3211",
      originalPrice: 213.50,
      currentPrice: 119.00,
      savings: 94.50,
      status: 'rebooked',
      lastChecked: "1 hour ago",
    },
    {
      id: "flight3",
      from: "MCO",
      to: "ATL",
      date: "July 08, 2025",
      flightNumber: "5589",
      originalPrice: 278.99,
      currentPrice: 154.31,
      savings: 124.68,
      status: 'rebooked',
      lastChecked: "30 minutes ago",
    },
    {
      id: "flight4",
      from: "LAX",
      to: "SEA",
      date: "August 12, 2025",
      flightNumber: "1122",
      originalPrice: 195.50,
      currentPrice: null,
      savings: 0,
      status: 'monitoring',
      lastChecked: "Just now",
    },
  ] as any[]);
  
  const handleAddFlight = (newFlight: any) => {
    setFlights((prev) => [newFlight, ...prev]);
    setIsAddingFlight(false);
  };
  
  const handleDeleteFlight = (id: string) => {
    setFlights((prev) => prev.filter((flight) => flight.id !== id));
  };
  
  const totalSavings = flights.reduce((acc, flight) => acc + flight.savings, 0);
  const flightsRebooked = flights.filter((flight) => flight.status === 'rebooked').length;
  const flightsMonitoring = flights.filter((flight) => flight.status === 'monitoring').length;
  
  return (
    <>
      <Helmet>
        <title>Dashboard - Flight Whisperer</title>
      </Helmet>
      
      <DashboardLayout>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <Button 
              onClick={() => setIsAddingFlight(true)}
              className="bg-southwest-blue text-white"
              disabled={isAddingFlight}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Flight
            </Button>
          </div>
          
          <SavingsSummary 
            totalSavings={totalSavings}
            flightsRebooked={flightsRebooked}
            flightsMonitoring={flightsMonitoring}
          />
          
          {isAddingFlight && (
            <AddFlightForm 
              onAddFlight={handleAddFlight}
              onCancel={() => setIsAddingFlight(false)}
            />
          )}
          
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Your Flights</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {flights.map((flight) => (
                <FlightCard 
                  key={flight.id} 
                  flight={flight} 
                  onDelete={handleDeleteFlight}
                />
              ))}
            </div>
            
            {flights.length === 0 && (
              <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
                <h3 className="text-lg font-medium text-gray-700 mb-2">No flights added yet</h3>
                <p className="text-gray-500 mb-4">
                  Add your first Southwest flight to start monitoring for price drops.
                </p>
                <Button 
                  onClick={() => setIsAddingFlight(true)}
                  className="bg-southwest-blue text-white"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Flight
                </Button>
              </div>
            )}
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
