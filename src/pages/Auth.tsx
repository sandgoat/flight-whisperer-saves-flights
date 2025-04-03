
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuthForm from "@/components/auth/AuthForm";
import { useSearchParams } from "react-router-dom";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "login";
  
  return (
    <>
      <Helmet>
        <title>
          {mode === "login" 
            ? "Login to Flight Whisperer" 
            : "Create Account - Flight Whisperer"}
        </title>
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-gray-50">
          <div className="container mx-auto px-4 py-12 md:py-20">
            <AuthForm />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Auth;
