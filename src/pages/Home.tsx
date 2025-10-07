import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Clock, Smartphone, Monitor, BarChart } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-primary text-center mb-12">
          CURE CLAIMS CENTER
        </h1>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Insured with CURE Section */}
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-primary mb-6 text-center">
              I AM INSURED WITH CURE
            </h2>
            
            <div className="space-y-4">
              <Button asChild variant="action" size="lg" className="w-full">
                <a href="https://www.cure.com/my-account">
                  MANAGE YOUR CLAIMS THROUGH MY ACCOUNT
                </a>
              </Button>
              
              <Button asChild variant="action" size="lg" className="w-full">
                <Link to="/report/1">REPORT A CLAIM</Link>
              </Button>
              
              <Button asChild variant="action" size="lg" className="w-full">
                <Link to="#">CHECK CLAIM STATUS</Link>
              </Button>
              
              <Button asChild variant="action" size="lg" className="w-full">
                <Link to="#">REVIEW YOUR COVERAGE</Link>
              </Button>
              
              <Button asChild variant="action" size="lg" className="w-full h-auto py-3">
                <Link to="#" className="flex flex-col items-center gap-1">
                  <span>UPLOAD DOCUMENTS</span>
                  <span className="text-xs font-normal">Police report, pictures, repair estimates, medical bills, receipts and invoices</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Had accident with CURE customer Section */}
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-primary mb-6 text-center">
              I HAD AN ACCIDENT WITH A CURE CUSTOMER
            </h2>
            
            <div className="space-y-4">
              <Button asChild variant="action" size="lg" className="w-full">
                <Link to="/report/1">REPORT A CLAIM</Link>
              </Button>
              
              <Button asChild variant="action" size="lg" className="w-full">
                <Link to="#">CHECK CLAIM STATUS</Link>
              </Button>
              
              <Button asChild variant="action" size="lg" className="w-full h-auto py-3">
                <Link to="#" className="flex flex-col items-center gap-1">
                  <span>UPLOAD DOCUMENTS</span>
                  <span className="text-xs font-normal">Police report, pictures, repair estimates, medical bills, receipts and invoices</span>
                </Link>
              </Button>
              
              <Button asChild variant="action" size="lg" className="w-full">
                <a href="https://www.cure.com/my-account">LOG IN/REGISTER</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="text-center">
            <Clock className="w-16 h-16 mx-auto mb-3 text-primary" />
            <h3 className="font-semibold mb-2">24/7 Online Access</h3>
          </div>
          <div className="text-center">
            <Smartphone className="w-16 h-16 mx-auto mb-3 text-primary" />
            <h3 className="font-semibold mb-2">On the Go Filing and Service</h3>
          </div>
          <div className="text-center">
            <Monitor className="w-16 h-16 mx-auto mb-3 text-primary" />
            <h3 className="font-semibold mb-2">Tracking Your Claim</h3>
          </div>
          <div className="text-center">
            <BarChart className="w-16 h-16 mx-auto mb-3 text-primary" />
            <h3 className="font-semibold mb-2">Self Service Options</h3>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
