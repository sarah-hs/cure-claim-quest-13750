import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ClaimsCenter = () => {
  const [selectedClaim, setSelectedClaim] = useState("");

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

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Left Panel - Claim Status */}
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-primary mb-4">Claim Status</h3>
            
            {/* Status Progress */}
            <div className="flex items-center mb-6">
              <div className="flex items-center flex-1">
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold">✓</div>
                <div className="h-1 flex-1 bg-muted mx-2" />
              </div>
              <div className="flex items-center flex-1">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center" />
                <div className="h-1 flex-1 bg-muted mx-2" />
              </div>
              <div className="flex items-center flex-1">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center" />
                <div className="h-1 flex-1 bg-muted mx-2" />
              </div>
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center" />
            </div>
            
            <div className="flex justify-between text-xs mb-6">
              <span>Claim Submitted</span>
              <span>All Information Received</span>
              <span>Under Review</span>
              <span>Processed</span>
            </div>

            <div className="mb-4 text-sm">
              <p className="font-semibold">Policy #</p>
              <p>Policy Term: xx/xx/xxxx - xx/xx/xxxx</p>
            </div>

            <Select value={selectedClaim} onValueChange={setSelectedClaim}>
              <SelectTrigger className="w-full mb-4">
                <SelectValue placeholder="Select Claim" />
              </SelectTrigger>
              <SelectContent className="bg-card">
                <SelectItem value="claim1">Claim #1 - Open</SelectItem>
                <SelectItem value="claim2">Claim #2 - Closed</SelectItem>
              </SelectContent>
            </Select>

            <div className="bg-muted p-4 rounded mb-4">
              <h4 className="font-semibold mb-3 text-center">Needs Attention</h4>
              <div className="space-y-2 text-sm">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-primary hover:underline block">
                      Police Report - <span className="underline">Upload</span>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="bg-card">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Upload Police Report</h3>
                      <input type="file" className="w-full" />
                      <Button className="mt-4 w-full" variant="default">Upload</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-primary hover:underline block">
                      Claims Related Docs - <span className="underline">Upload</span>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="bg-card">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Upload Claims Documents</h3>
                      <input type="file" className="w-full" />
                      <Button className="mt-4 w-full" variant="default">Upload</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-primary hover:underline block">
                      xxxx - <span className="underline">Upload</span>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="bg-card">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Upload Document</h3>
                      <input type="file" className="w-full" />
                      <Button className="mt-4 w-full" variant="default">Upload</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="bg-muted p-4 rounded text-sm">
              <h4 className="font-semibold mb-2">Claims Adjuster Contact Information</h4>
              <p><span className="font-semibold">Name:</span> xxxx</p>
              <p><span className="font-semibold">Phone Number:</span> (xxx) xxx-xxxx</p>
              <p><span className="font-semibold">Email Address:</span> xxxx@xxx.com</p>
              <p><span className="font-semibold">Hours:</span> x:xx - x:xx</p>
            </div>
          </div>

          {/* Right Panel - Actions and Claim Info */}
          <div className="md:col-span-2">
            <div className="bg-muted p-6 rounded-lg mb-6">
              <div className="space-y-2 text-sm">
                <Link to="/report/1" className="text-primary hover:underline block font-semibold">
                  Report New Claim
                </Link>
                <Link to="#" className="text-primary hover:underline block">View your Declaration Pages</Link>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-primary hover:underline font-semibold">
                      Upload Photos/Documentation
                    </button>
                  </DialogTrigger>
                  <DialogContent className="bg-card">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Upload Photos/Documentation</h3>
                      <input type="file" multiple className="w-full" />
                      <Button className="mt-4 w-full" variant="action">Upload Files</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Link to="#" className="text-primary hover:underline block">View Claim File</Link>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-6">Claim Information</h3>
              <div className="flex items-center justify-center h-64 bg-muted rounded">
                <p className="text-muted-foreground text-lg">Pull claim information from GW</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ClaimsCenter;
