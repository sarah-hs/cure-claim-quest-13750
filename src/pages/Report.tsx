import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProgressBar } from "@/components/ProgressBar";
import { ReportStep1 } from "@/components/report/ReportStep1";
import { ReportStep2 } from "@/components/report/ReportStep2";
import { ReportStep3 } from "@/components/report/ReportStep3";
import { ReportStep4 } from "@/components/report/ReportStep4";
import { ReportStep5 } from "@/components/report/ReportStep5";
import { ReportStep6 } from "@/components/report/ReportStep6";

const Report = () => {
  const { step } = useParams();
  const navigate = useNavigate();
  const currentStep = parseInt(step || "1", 10);
  const [formData, setFormData] = useState({
    isInsuredWithCure: false,
  });

  const handleStepClick = (stepNumber: number) => {
    // Skip step 2 if user is insured with CURE
    if (stepNumber === 2 && formData.isInsuredWithCure) {
      navigate("/report/3");
    } else {
      navigate(`/report/${stepNumber}`);
    }
  };

  const handleNext = () => {
    // Skip step 2 if user is insured with CURE
    if (currentStep === 1 && formData.isInsuredWithCure) {
      navigate("/report/3");
    } else if (currentStep < 6) {
      navigate(`/report/${currentStep + 1}`);
    }
  };

  const handleBack = () => {
    // Skip step 2 when going back if user is insured with CURE
    if (currentStep === 3 && formData.isInsuredWithCure) {
      navigate("/report/1");
    } else if (currentStep > 1) {
      navigate(`/report/${currentStep - 1}`);
    }
  };

  const updateFormData = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  // Redirect to step 1 if invalid step
  useEffect(() => {
    if (currentStep < 1 || currentStep > 6) {
      navigate("/report/1");
    }
  }, [currentStep, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-6 py-8">
        <ProgressBar currentStep={currentStep} onStepClick={handleStepClick} />

        <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg">
          {currentStep === 1 && (
            <ReportStep1
              onNext={handleNext}
              formData={formData}
              updateFormData={updateFormData}
            />
          )}
          {currentStep === 2 && (
            <ReportStep2 onNext={handleNext} onBack={handleBack} />
          )}
          {currentStep === 3 && (
            <ReportStep3 onNext={handleNext} onBack={handleBack} />
          )}
          {currentStep === 4 && (
            <ReportStep4 onNext={handleNext} onBack={handleBack} />
          )}
          {currentStep === 5 && (
            <ReportStep5 onNext={handleNext} onBack={handleBack} />
          )}
          {currentStep === 6 && <ReportStep6 onBack={handleBack} />}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Report;
