import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const MyAccount = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-5xl font-bold text-primary">MY ACCOUNT</h1>
          <div className="flex items-center gap-4 text-sm">
            <span>Hi Jocelyn</span>
            <Link to="/" className="text-primary hover:underline">🏠</Link>
            <Link to="#" className="text-primary hover:underline">Change Login/Password</Link>
            <Link to="#" className="text-primary hover:underline">Logout</Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Billing & Payment Center */}
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              BILLING & PAYMENT CENTER
            </h2>
            
            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between">
                <span className="font-semibold">Amount Due:</span>
                <span className="text-accent italic">No payment due.</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Date Due:</span>
                <span>N/A</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Total Due:</span>
                <span className="text-accent">$1,616.45</span>
              </div>
            </div>

            <div className="bg-muted p-3 mb-4 text-xs text-center">
              Not seeing your recent payment? Allow 2-3 days for your account to update.
            </div>

            <Button variant="default" size="lg" className="w-full mb-4">
              MAKE A PAYMENT
            </Button>

            <div className="text-xs space-y-2 mb-4">
              <p>A third party convenience fee, charged by One Inc, of $14.95 will be added to your online payment.</p>
              <Link to="#" className="text-primary hover:underline block">
                Looking for other payment options? Click here
              </Link>
            </div>

            <div className="space-y-2 text-sm">
              <div>
                <span className="font-semibold">Enroll in Autopay:</span>{" "}
                <Link to="#" className="text-primary hover:underline">Enroll Now!</Link>
              </div>
              <div>
                <span className="font-semibold">Enroll in Text to Pay:</span>{" "}
                <Link to="#" className="text-primary hover:underline">Enroll Now!</Link>
              </div>
              <Link to="#" className="text-primary hover:underline block">
                How to enroll in Text to Pay
              </Link>
            </div>
          </div>

          {/* Manage My Policy */}
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              MANAGE MY POLICY
            </h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="font-semibold">Policy Number:</span>
                <span>PAPA000658</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-semibold">Policy Period:</span>
                <span>09/17/2025 - 03/17/2026</span>
              </div>
            </div>

            <ul className="space-y-2 mb-6 text-sm">
              <li>
                <Link to="#" className="text-primary hover:underline">• ID Cards</Link>
              </li>
              <li>
                <Link to="#" className="text-primary hover:underline">• View Payment History</Link>
              </li>
              <li>
                <Link to="#" className="text-primary hover:underline">• View Bill/Declaration Pages</Link>
              </li>
              <li>
                <Link to="/claims-center" className="text-primary hover:underline font-semibold">
                  • Access Claims Center
                </Link>
              </li>
            </ul>

            <div className="border-t pt-6">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="text-primary hover:underline">• Add Vehicle</Link>
                </li>
                <li>
                  <Link to="#" className="text-primary hover:underline">• Replace Vehicle</Link>
                </li>
                <li>
                  <Link to="#" className="text-primary hover:underline">• Remove Vehicle</Link>
                </li>
              </ul>
            </div>

            <p className="text-xs mt-6">
              If you would like to update your address or make any household changes, please call us at{" "}
              <Link to="tel:800-535-2873" className="text-primary hover:underline">800-535-2873</Link>.
            </p>

            <div className="mt-4">
              <Link to="#" className="text-primary hover:underline text-sm">• Upload Document</Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyAccount;
