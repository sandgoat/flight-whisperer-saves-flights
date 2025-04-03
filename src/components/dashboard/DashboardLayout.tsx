
import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  CreditCard, 
  Home, 
  Menu, 
  PlaneTakeoff, 
  Settings, 
  User, 
  X, 
  LogOut 
} from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const sidebarLinks = [
    {
      name: "Dashboard",
      icon: <Home size={20} />,
      path: "/dashboard",
    },
    {
      name: "My Flights",
      icon: <PlaneTakeoff size={20} />,
      path: "/dashboard/flights",
    },
    {
      name: "Subscription",
      icon: <CreditCard size={20} />,
      path: "/dashboard/subscription",
    },
    {
      name: "Settings",
      icon: <Settings size={20} />,
      path: "/dashboard/settings",
    },
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-30">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={toggleSidebar}
          className="bg-white"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>
      
      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 z-20 h-full w-64 bg-white border-r border-gray-200 transition-transform duration-300 transform lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center">
            <span className="text-xl font-bold text-southwest-blue">Flight</span>
            <span className="text-xl font-bold text-southwest-red">Whisperer</span>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-southwest-blue text-white flex items-center justify-center">
              <User size={20} />
            </div>
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-gray-500">john@example.com</p>
            </div>
          </div>
          
          <nav className="space-y-1">
            {sidebarLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-southwest-blue"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </nav>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 space-x-2"
            onClick={() => navigate('/')}
          >
            <LogOut size={18} />
            <span>Logout</span>
          </Button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="lg:pl-64">
        <div className="px-4 py-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
