import { cn } from "@/lib/utils";

interface ProgressBarProps {
  currentStep: number;
  onStepClick: (step: number) => void;
}

const steps = [
  { id: 1, label: "Claim Report" },
  { id: 2, label: "Your Info" },
  { id: 3, label: "CURE Policyholder Info" },
  { id: 4, label: "Loss Info" },
  { id: 5, label: "Owner name & address" },
  { id: 6, label: "Review & Submit" },
];

export const ProgressBar = ({ currentStep, onStepClick }: ProgressBarProps) => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold text-primary text-center mb-8">Report Process</h2>
      <div className="flex items-center justify-center gap-2 max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-1">
              <button
                onClick={() => onStepClick(step.id)}
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all cursor-pointer hover:scale-110",
                  currentStep === step.id
                    ? "bg-accent text-accent-foreground scale-110"
                    : currentStep > step.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {currentStep > step.id ? "✓" : step.id}
              </button>
              <span className="text-xs mt-2 text-center max-w-[100px]">{step.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "h-1 flex-1 transition-colors",
                  currentStep > step.id ? "bg-primary" : "bg-muted"
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
