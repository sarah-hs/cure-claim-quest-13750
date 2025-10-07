import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ReportStep4Props {
  onNext: () => void;
  onBack: () => void;
}

export const ReportStep4 = ({ onNext, onBack }: ReportStep4Props) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-primary mb-6">Loss Information</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Street Address*</label>
          <Input placeholder="Street Address" />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">City*</label>
          <Input placeholder="City" />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Zip Code*</label>
          <Input placeholder="Zip Code" />
        </div>
        <div className="flex items-center gap-4">
          <label className="text-sm font-medium">Police contacted?</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="policeContacted" value="yes" />
              <span>Yes</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="policeContacted" value="no" />
              <span>No</span>
            </label>
          </div>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Description of accident*</label>
        <Textarea rows={8} placeholder="Description of accident" />
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
