import React from "react";
import { PersonalQuestions } from "./PersonalQuestionsForm";
import { AnimatePresence, Transition, motion } from "framer-motion";

type Props = {
  stepId: string;
};

const transition: Transition = {
  ease: [0.77, 0.2, 0.8, 1],
  duration: 0.2,
};
const basePosition = {
  y: 0,
  opacity: 1,
};
const exitedPosition = {
  y: 20,
  opacity: 0,
};

const TransitionContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={exitedPosition}
      exit={exitedPosition}
      animate={basePosition}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export const Form = ({ stepId }: Props) => {
  return (
    <AnimatePresence mode="wait">
      {stepId === "1" && (
        <TransitionContainer key={stepId}>
          <PersonalQuestions />
        </TransitionContainer>
      )}
      {stepId === "2" && (
        <TransitionContainer key={stepId}>
          <PersonalQuestions />
        </TransitionContainer>
      )}
    </AnimatePresence>
  );
};
