import React, { useMemo, useState } from "react";
import { PersonalQuestionsForm } from "./PersonalQuestionsForm";
import { AnimatePresence } from "framer-motion";
import { WorkEmailValidationForm } from "./WorkEmailValidation";
import { VerticalTransitionContainer } from "../../components/FramerTransitions/VerticalTransitionContainer";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { VerticalStepper } from "../../components/Stepper/VerticalStepper";
import { Button } from "../../components/ui/button";
import { GetWorkEmailsStatusQuery } from "./graphql/queries/getWorkEmailsStatus.generated";

export type OnboardingStep = {
  id: string;
  number: number;
  title: string;
  description?: string;
};

export const OnboardingForms = ({
  steps,
  initialStep = 0,
  data,
}: {
  steps: OnboardingStep[];
  initialStep: number;
  data: GetWorkEmailsStatusQuery;
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(initialStep);
  const moveNext = () => {
    setCurrentStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
  };
  const movePrev = () => {
    setCurrentStepIndex((prev) => Math.max(prev - 1, 0));
  };
  const currentStep = useMemo(
    () => steps[currentStepIndex],
    [currentStepIndex, steps],
  );
  return (
    <>
      <div className="col-span-4">
        <Card>
          {/* Dummy placeholder */}
          <CardFooter />
          <CardContent>
            <VerticalStepper
              steps={steps}
              currentStepIndex={currentStepIndex}
            />
          </CardContent>
          <CardFooter className="flex flex-row gap-4">
            <Button onClick={movePrev}>Prev Step</Button>
            <Button onClick={moveNext}>Next Step</Button>
          </CardFooter>
        </Card>
      </div>
      <div className="col-span-8 flex flex-col gap-4">
        <Card>
          <AnimatePresence mode="wait">
            {currentStep.id === "1" && (
              <VerticalTransitionContainer key={"1"}>
                <WorkEmailValidationForm
                  onFinish={() => setCurrentStepIndex(1)}
                />
              </VerticalTransitionContainer>
            )}
            {currentStep.id === "2" && (
              <VerticalTransitionContainer key={"2"}>
                <PersonalQuestionsForm
                  data={data}
                  onFinish={() => setCurrentStepIndex(2)}
                />
              </VerticalTransitionContainer>
            )}
          </AnimatePresence>
        </Card>
      </div>
    </>
  );
};
