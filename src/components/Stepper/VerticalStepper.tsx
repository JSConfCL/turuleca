import { Check } from "lucide-react";
import { cx } from "class-variance-authority";
import React from "react";

type Step = {
  id: string;
  number: number;
  title: string;
  description: string;
};

type VerticalStepperProps = {
  steps: Step[];
  currentStepIndex: number;
};

type StepComponentProps = {
  step: Step;
  isCurrent: boolean;
  isInThePast: boolean;
  isInTheFuture: boolean;
  isPreviousOne: boolean;
  isNextOne: boolean;
  hasNext: boolean;
  hasPrevious: boolean;
};
const StepComponent = ({
  step,
  isCurrent,
  isInThePast,
}: StepComponentProps) => {
  return (
    <div
      className={cx("flex items-center transition-all", {
        "opacity-55": isInThePast,
      })}
    >
      <div className="grid grid-cols-[20px_auto] items-start gap-x-4 transition-all duration-300">
        <div
          className={cx(
            "z-10 flex h-6 w-6 translate-x-0 items-center justify-center rounded-full border-2 border-gray-300 bg-black transition-all mt-[2px]",
            {
              "border-green-500": isCurrent,
            },
          )}
        >
          {isInThePast ? <Check size={12} /> : <small>{step.number}</small>}
        </div>
        <h4
          className={cx("font-semibold transition-all", {
            "line-through": isInThePast,
          })}
        >
          {step.title}
        </h4>
        <div className="col-span-1 col-start-2">
          <p
            className={cx("text-sm text-gray-400 transition-all", {
              "line-through": isInThePast,
            })}
          >
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const VerticalStepper: React.FC<VerticalStepperProps> = ({
  steps,
  currentStepIndex,
}: VerticalStepperProps) => {
  return (
    <div className="flex flex-col items-start gap-4">
      {steps.map((step, index) => (
        <StepComponent
          key={step.id}
          step={step}
          isCurrent={index === currentStepIndex}
          isInThePast={index < currentStepIndex}
          isInTheFuture={index > currentStepIndex}
          isPreviousOne={index === currentStepIndex - 1}
          isNextOne={index === currentStepIndex + 1}
          hasNext={index < steps.length - 1}
          hasPrevious={index > 0}
        />
      ))}
    </div>
  );
};
