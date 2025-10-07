import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ReportStep2Props {
  onNext: () => void;
  onBack: () => void;
}

export const ReportStep2 = ({ onNext, onBack }: ReportStep2Props) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-primary mb-6">Your Information</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium mb-2 block">First Name*</label>
          <Input placeholder="First Name" />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Last Name*</label>
          <Input placeholder="Last Name" />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Phone Number*</label>
          <Input placeholder="Phone Number" />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Email Address*</label>
          <Input placeholder="Email Address" />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-primary mt-8 mb-4">Loss Information</h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Date of Loss mm/dd/yyyy*</label>
          <Input type="date" />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Time of Loss hh:mm AM/PM</label>
          <Input type="time" />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-primary mt-8 mb-4">Your Vehicle Information</h3>
      
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Year</label>
          <Input placeholder="Year" />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Make</label>
          <Input placeholder="Make" />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Model</label>
          <Input placeholder="Model" />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-medium mb-2 block">Carrier name</label>
          <Input placeholder="Carrier name" />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Carrier Policy #</label>
          <Input placeholder="Carrier Policy #" />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Describe the vehicle or property damage</label>
        <Textarea rows={5} placeholder="Describe the vehicle or property damage" />
      </div>

      <div className="bg-muted p-4 rounded">
        <h4 className="font-semibold mb-3">Docs used:</h4>
        <ul className="space-y-2 text-sm">
          <li>
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-primary hover:underline">• Police Report</button>
              </DialogTrigger>
              <DialogContent className="bg-card max-w-3xl max-h-[80vh] overflow-auto">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Police Report Preview</h3>
                  <div className="bg-muted p-8 rounded text-center">
                    <p className="text-muted-foreground">PDF Preview: Sample Police Report Document</p>
                    <p className="text-sm mt-4">This is a placeholder for PDF preview functionality.</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </li>
          <li>
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-primary hover:underline">• Driver's License</button>
              </DialogTrigger>
              <DialogContent className="bg-card max-w-3xl max-h-[80vh] overflow-auto">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Driver's License Preview</h3>
                  <div className="bg-muted p-8 rounded text-center">
                    <p className="text-muted-foreground">PDF Preview: Sample Driver's License Document</p>
                    <p className="text-sm mt-4">This is a placeholder for PDF preview functionality.</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </li>
          <li>
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-primary hover:underline">• Car Registration</button>
              </DialogTrigger>
              <DialogContent className="bg-card max-w-3xl max-h-[80vh] overflow-auto">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Car Registration Preview</h3>
                  <div className="bg-muted p-8 rounded text-center">
                    <p className="text-muted-foreground">PDF Preview: Sample Car Registration Document</p>
                    <p className="text-sm mt-4">This is a placeholder for PDF preview functionality.</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </li>
        </ul>
        <Button variant="default" className="mt-4">UPDATE DOCUMENTS</Button>
      </div>

      <div className="flex justify-between pt-6">
        <Button onClick={onBack} variant="action" size="lg">
          <ChevronLeft className="mr-2" /> BACK
        </Button>
        <Button onClick={onNext} variant="action" size="lg">
          NEXT <ChevronRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
};
