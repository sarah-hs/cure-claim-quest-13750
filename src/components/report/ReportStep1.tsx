import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ReportStep1Props {
  onNext: () => void;
  formData: any;
  updateFormData: (data: any) => void;
}

export const ReportStep1 = ({ onNext, formData, updateFormData }: ReportStep1Props) => {
  const navigate = useNavigate();
  
  const handleChoice = (isInsured: boolean) => {
    updateFormData({ isInsuredWithCure: isInsured });
    // If insured with CURE, skip step 2 and go directly to step 3
    if (isInsured) {
      navigate("/report/3");
    } else {
      navigate("/report/2");
    }
  };

  return (
    <div className="py-8">
      <h2 className="text-3xl font-semibold text-primary text-center mb-12">
        Who is reporting the claim?
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        <button
          onClick={() => handleChoice(true)}
          className="bg-primary text-primary-foreground p-12 rounded-lg text-xl font-semibold hover:bg-primary/90 transition-colors"
        >
          I am insured with CURE
        </button>

        <button
          onClick={() => handleChoice(false)}
          className="bg-primary text-primary-foreground p-12 rounded-lg text-xl font-semibold hover:bg-primary/90 transition-colors"
        >
          I had an accident with a CURE customer
        </button>
      </div>
    </div>
  );
};
