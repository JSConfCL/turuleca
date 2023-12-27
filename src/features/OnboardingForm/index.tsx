import React from "react";
import { PersonalQuestionsForm } from "./PersonalQuestionsForm";
import { AnimatePresence } from "framer-motion";
import { WorkEmailValidationForm } from "./WorkEmailValidation";
import { VerticalTransitionContainer } from "../../components/FramerTransitions/VerticalTransitionContainer";

type Props = {
  stepId: string;
  setCurrentStepIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const Form = ({ stepId, setCurrentStepIndex }: Props) => {
  return (
    <AnimatePresence mode="wait">
      {stepId === "1" && (
        <VerticalTransitionContainer key={stepId}>
          <WorkEmailValidationForm
            onFinish={() => setCurrentStepIndex((prev) => prev + 1)}
          />
        </VerticalTransitionContainer>
      )}
      {stepId === "2" && (
        <VerticalTransitionContainer key={stepId}>
          <PersonalQuestionsForm />
        </VerticalTransitionContainer>
      )}
    </AnimatePresence>
  );
};
