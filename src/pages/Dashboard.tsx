
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import FlightCard from "@/components/dashboard/FlightCard";
import AddFlightForm from "@/components/dashboard/AddFlightForm";
import SavingsSummary from "@/components/dashboard/SavingsSummary";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isAddingFlight, setIsAddingFlight] = useState(false);
  const [bookingMode, setBookingMode] = useState('automatic');
  const navigate = useNavigate();
  
  // Mock data
  const [flights, setFlights] = useState([
    {
      id: "flight1",
      from: "SAN",
      to: "PHX",
      date: "May 15, 2025",
      flightNumber: "2174",
      rapidRewardsNumber: "RR12345678",
      originalPrice: 189.99,
      currentPrice: 61.35,
      savings: 128.64,
      pointsSavings: Math.round(128.64 / 0.013),
      status: 'rebooked',
      lastChecked: "2 hours ago",
    },
    {
      id: "flight2",
      from: "DEN",
      to: "LAS",
      date: "June 21, 2025",
      flightNumber: "3211",
      rapidRewardsNumber: "RR12345678",
      originalPrice: 213.50,
      currentPrice: 119.00,
      savings: 94.50,
      pointsSavings: Math.round(94.50 / 0.013),
      status: 'rebooked',
      lastChecked: "1 hour ago",
    },
    {
      id: "flight3",
      from: "MCO",
      to: "ATL",
      date: "July 08, 2025",
      flightNumber: "5589",
      rapidRewardsNumber: "RR87654321",
      originalPrice: 278.99,
      currentPrice: 154.31,
      savings: 124.68,
      pointsSavings: Math.round(124.68 / 0.013),
      status: 'rebooked',
      lastChecked: "30 minutes ago",
    },
    {
      id: "flight4",
      from: "LAX",
      to: "SEA",
      date: "August 12, 2025",
      flightNumber: "1122",
      rapidRewardsNumber: "RR87654321",
      originalPrice: 195.50,
      currentPrice: null,
      savings: 0,
      pointsSavings: 0,
      status: 'monitoring',
      lastChecked: "Just now",
    },
  ] as any[]);
  
  const handleAddFlight = (newFlight: any) => {
    // Add pointsSavings calculation for new flights
    const flightWithPoints = {
      ...newFlight,
      pointsSavings: newFlight.savings > 0 ? Math.round(newFlight.savings / 0.013) : 0
    };
    setFlights((prev) => [flightWithPoints, ...prev]);
    setIsAddingFlight(false);
  };
  
  const handleDeleteFlight = (id: string) => {
    setFlights((prev) => prev.filter((flight) => flight.id !== id));
  };
  
  const handleBookingModeChange = (mode: string) => {
    setBookingMode(mode);
  };
  
  const totalSavings = flights.reduce((acc, flight) => acc + flight.savings, 0);
  const totalPointsSavings = flights.reduce((acc, flight) => acc + flight.pointsSavings, 0);
  const flightsRebooked = flights.filter((flight) => flight.status === 'rebooked').length;
  const flightsMonitoring = flights.filter((flight) => flight.status === 'monitoring').length;
  
  // Get unique Rapid Rewards numbers
  const uniqueRapidRewardsNumbers = [...new Set(flights.map(flight => flight.rapidRewardsNumber).filter(Boolean))];
  
  const handleSubscribe = () => {
    navigate("/pricing");
  };
  
  return (
    <>
      <Helmet>
        <title>Dashboard - Rebook Club</title>
      </Helmet>
      
      <DashboardLayout>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <Button 
              onClick={() => setIsAddingFlight(true)}
              className="bg-rebook-red text-white"
              disabled={isAddingFlight}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Flight
            </Button>
          </div>
          
          {uniqueRapidRewardsNumbers.length > 0 && (
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Your Rapid Rewards Numbers</h3>
                  <p className="text-sm text-gray-500">Monitoring {uniqueRapidRewardsNumbers.length} Rapid Rewards {uniqueRapidRewardsNumbers.length === 1 ? 'number' : 'numbers'}</p>
                </div>
                <Button 
                  onClick={handleSubscribe} 
                  className="bg-rebook-red text-white"
                >
                  Subscribe ($15/number)
                </Button>
              </div>
              <div className="mt-4 space-y-2">
                {uniqueRapidRewardsNumbers.map((number) => (
                  <div key={number} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">{number}</span>
                    <span className="text-sm text-gray-500">
                      {flights.filter(f => f.rapidRewardsNumber === number).length} flights
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <SavingsSummary 
            totalSavings={totalSavings}
            totalPointsSavings={totalPointsSavings}
            flightsRebooked={flightsRebooked}
            flightsMonitoring={flightsMonitoring}
          />
          
          {isAddingFlight && (
            <AddFlightForm 
              onAddFlight={handleAddFlight}
              onCancel={() => setIsAddingFlight(false)}
              bookingMode={bookingMode}
              onModeChange={handleBookingModeChange}
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
                  bookingMode={bookingMode}
                />
              ))}
            </div>
            
            {flights.length === 0 && (
              <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
                <h3 className="text-lg font-medium text-gray-700 mb-2">No flights added yet</h3>
                <p className="text-gray-500 mb-4">
                  Add your first flight to start monitoring for price drops.
                </p>
                <Button 
                  onClick={() => setIsAddingFlight(true)}
                  className="bg-rebook-red text-white"
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
