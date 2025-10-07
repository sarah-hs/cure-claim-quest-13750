import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface ReportStep6Props {
  onBack: () => void;
}

export const ReportStep6 = ({ onBack }: ReportStep6Props) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isCertified, setIsCertified] = useState(false);

  const handleSubmit = () => {
    toast({
      title: "Claim Submitted Successfully",
      description: "Your claim has been submitted. You will receive a confirmation email shortly.",
    });
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="space-y-6 py-8">
      <h2 className="text-2xl font-semibold text-primary mb-6 text-center">Review & Submit</h2>

      <div className="bg-muted p-6 rounded-lg mb-6">
        <div className="flex items-start gap-3">
          <input 
            type="checkbox" 
            className="mt-1" 
            id="certify" 
            checked={isCertified}
            onChange={(e) => setIsCertified(e.target.checked)}
          />
          <label htmlFor="certify" className="text-sm">
            I hereby certify that, to the best of my knowledge, the provided information is true and accurate.†
          </label>
        </div>
      </div>

      <Button 
        onClick={handleSubmit} 
        variant="action" 
        size="lg" 
        className="w-full"
        disabled={!isCertified}
      >
        SUBMIT
      </Button>

      <div className="text-xs text-muted-foreground space-y-3 mt-8">
        <p>
          †The Michigan Department of Insurance and Financial Services defines insurance fraud as providing "false information to an insurance company in order to gain something of value that he or she would not have received if the truth had been told[.]" Under Michigan law, it is unlawful to present any oral or written statement knowing that the statement contains any false information concerning any fact material to an application for the issuance of an insurance policy or a claim.
        </p>
        <p>
          †Pursuant to New Jersey regulations, "Any person who knowingly files a statement of claim containing any false or misleading information is subject to criminal and civil penalties."
        </p>
        <p>
          †Pursuant to Pennsylvania regulations, "Any person who knowingly and with intent to defraud any insurance company or other person files an application for insurance or statement of claim containing any materially false information or conceals for the purpose of misleading, information concerning any fact material thereto commits a fraudulent insurance act, which is a crime and subjects such person to criminal and civil penalties."
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center">
          <span className="text-3xl">😊</span>
        </div>
        <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full">
          Click any bubble to return to previous steps!
        </div>
      </div>

      <div className="flex justify-start pt-6">
        <Button onClick={onBack} variant="action" size="lg">
          <ChevronLeft className="mr-2" /> BACK
        </Button>
      </div>
    </div>
  );
};
