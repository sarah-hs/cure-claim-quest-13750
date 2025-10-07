import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ReportStep5Props {
  onNext: () => void;
  onBack: () => void;
}

export const ReportStep5 = ({ onNext, onBack }: ReportStep5Props) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-primary mb-6">Owner Name and Address</h2>

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
          <label className="text-sm font-medium mb-2 block">Email Address*</label>
          <Input placeholder="Email Address" />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Phone Number*</label>
          <Input placeholder="Phone Number" />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Street Address*</label>
          <Input placeholder="Street Address" />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Apartment #</label>
          <Input placeholder="Apartment #" />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">City*</label>
          <Input placeholder="City" />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">State*</label>
          <Input placeholder="State" />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Zip Code*</label>
          <Input placeholder="Zip Code" />
        </div>
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
