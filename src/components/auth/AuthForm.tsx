
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "login";
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      // For demo, just show a success toast and redirect
      if (mode === "login") {
        toast({
          title: "Welcome back!",
          description: "You have successfully logged in.",
        });
      } else {
        toast({
          title: "Account created!",
          description: "Your account has been created successfully.",
        });
      }
      
      // Redirect to dashboard
      navigate("/dashboard");
    }, 1500);
  };
  
  return (
    <div className="w-full max-w-md mx-auto p-6 md:p-8 bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="flex justify-center mb-6">
        <div className="flex items-center">
          <span className="text-xl font-bold text-southwest-blue">Flight</span>
          <span className="text-xl font-bold text-southwest-red">Whisperer</span>
        </div>
      </div>
      
      <h1 className="text-2xl font-bold mb-6 text-center">
        {mode === "login" ? "Welcome Back" : "Create Your Account"}
      </h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === "signup" && (
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <User size={18} />
              </div>
              <Input 
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="pl-10"
                required
              />
            </div>
          </div>
        )}
        
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
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="pl-10"
              required
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
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="pl-10 pr-10"
              required
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
        
        {mode === "login" && (
          <div className="text-right">
            <a 
              href="#" 
              className="text-sm text-southwest-blue hover:underline"
            >
              Forgot password?
            </a>
          </div>
        )}
        
        <Button 
          type="submit" 
          className="w-full bg-southwest-blue hover:bg-opacity-90 text-white h-11"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              {mode === "login" ? "Logging in..." : "Creating account..."}
            </div>
          ) : (
            mode === "login" ? "Login" : "Create Account"
          )}
        </Button>
      </form>
      
      <div className="mt-6 text-center">
        {mode === "login" ? (
          <p className="text-sm text-gray-600">
            Don't have an account yet?{" "}
            <a 
              href="/auth?mode=signup" 
              className="text-southwest-blue hover:underline font-medium"
            >
              Sign up
            </a>
          </p>
        ) : (
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a 
              href="/auth?mode=login" 
              className="text-southwest-blue hover:underline font-medium"
            >
              Log in
            </a>
          </p>
        )}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-xs text-center text-gray-500">
          By signing up, you agree to our{" "}
          <a href="/terms" className="text-southwest-blue hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-southwest-blue hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
