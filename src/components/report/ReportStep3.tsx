import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ReportStep3Props {
  onNext: () => void;
  onBack: () => void;
}

export const ReportStep3 = ({ onNext, onBack }: ReportStep3Props) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-primary mb-6">CURE Policyholder Information</h2>

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
          <label className="text-sm font-medium mb-2 block">Policy Number*</label>
          <Input placeholder="Policy Number" />
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
        <div>
          <label className="text-sm font-medium mb-2 block">Email Address*</label>
          <Input placeholder="Email Address" />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-primary mt-8 mb-4">CURE Vehicle Information</h3>
      
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
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Describe Damage</label>
        <Textarea rows={5} placeholder="Describe Damage" />
      </div>

      <h3 className="text-xl font-semibold text-primary mt-8 mb-4">CURE Driver Information</h3>
      
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
          <label className="text-sm font-medium mb-2 block">Phone Number</label>
          <Input placeholder="Phone Number" />
        </div>
        <div></div>
        <div>
          <label className="text-sm font-medium mb-2 block">Street Address</label>
          <Input placeholder="Street Address" />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Apartment #</label>
          <Input placeholder="Apartment #" />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">City</label>
          <Input placeholder="City" />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">State</label>
          <Input placeholder="State" />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Zip Code</label>
          <Input placeholder="Zip Code" />
        </div>
      </div>

      <div className="space-y-3 mt-6">
        <div className="flex items-center gap-4">
          <label className="text-sm font-medium">Were there any other vehicles or property damaged in the loss?*</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="otherDamage" value="yes" />
              <span>Yes</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="otherDamage" value="no" />
              <span>No</span>
            </label>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <label className="text-sm font-medium">Were there any passengers in your vehicle?*</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="passengers" value="yes" />
              <span>Yes</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="passengers" value="no" />
              <span>No</span>
            </label>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <label className="text-sm font-medium">Was anyone else injured in this loss?*</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="injured" value="yes" />
              <span>Yes</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="injured" value="no" />
              <span>No</span>
            </label>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <label className="text-sm font-medium">Please select your preferred delivery method.</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="delivery" value="email" />
              <span>Email</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="delivery" value="mail" />
              <span>Mail</span>
            </label>
          </div>
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
