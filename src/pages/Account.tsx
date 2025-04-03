
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Lock, Mail, User, CreditCard } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useToast } from "@/hooks/use-toast";

const Account = () => {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john@example.com",
    password: "••••••••",
  });
  
  const [southwestData, setSouthwestData] = useState({
    username: "john_doe_sw",
    password: "••••••••",
  });
  
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSouthwestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSouthwestData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Profile updated",
        description: "Your profile information has been updated successfully.",
      });
      setIsSaving(false);
    }, 1000);
  };
  
  const handleSaveSouthwest = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Airline credentials updated",
        description: "Your airline credentials have been securely updated.",
      });
      setIsSaving(false);
    }, 1000);
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <>
      <Helmet>
        <title>Account Settings - Rebook Club</title>
      </Helmet>
      
      <DashboardLayout>
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-bold">Account Settings</h1>
            <p className="text-gray-600">Manage your account preferences and credentials</p>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold">Profile Information</h2>
            </div>
            
            <div className="p-6">
              <form onSubmit={handleSaveProfile} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <User size={18} />
                    </div>
                    <Input 
                      id="name"
                      name="name"
                      value={profileData.name}
                      onChange={handleProfileChange}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <Mail size={18} />
                    </div>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={profileData.email}
                      onChange={handleProfileChange}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <Lock size={18} />
                    </div>
                    <Input 
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={profileData.password}
                      onChange={handleProfileChange}
                      className="pl-10 pr-10"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="bg-rebook-red text-white"
                    disabled={isSaving}
                  >
                    {isSaving ? "Saving..." : "Save Changes"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold">Airline Account</h2>
              <p className="text-gray-600 text-sm mt-1">
                Your credentials are encrypted and only used to rebook flights when prices drop
              </p>
            </div>
            
            <div className="p-6">
              <form onSubmit={handleSaveSouthwest} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="sw_username">Airline Username</Label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <User size={18} />
                    </div>
                    <Input 
                      id="sw_username"
                      name="username"
                      value={southwestData.username}
                      onChange={handleSouthwestChange}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="sw_password">Airline Password</Label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <Lock size={18} />
                    </div>
                    <Input 
                      id="sw_password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={southwestData.password}
                      onChange={handleSouthwestChange}
                      className="pl-10 pr-10"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="bg-rebook-red text-white"
                    disabled={isSaving}
                  >
                    {isSaving ? "Saving..." : "Save Credentials"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold">Subscription Management</h2>
            </div>
            
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <CreditCard className="h-5 w-5 text-rebook-red mr-2" />
                    <h3 className="font-semibold">Rebook Club Subscription</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 md:mb-0">
                    Your subscription will renew on <span className="font-medium">May 15, 2025</span>
                  </p>
                </div>
                <div className="space-x-3">
                  <Button variant="outline">Update Payment</Button>
                  <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                    Cancel Subscription
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Account;
