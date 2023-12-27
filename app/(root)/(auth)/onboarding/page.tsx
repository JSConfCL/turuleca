"use client";
import React, { useMemo, useState } from "react";
import { VerticalStepper } from "../../../../src/components/Stepper/VerticalStepper";
import { Button } from "../../../../src/components/ui/button";
import { Form } from "../../../../src/features/OnboardingForm";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../src/components/ui/card";

const steps = [
  {
    id: "1",
    number: 1,
    title: "Verifica tu correo laboral.",
  },
  {
    id: "2",
    number: 2,
    title: "Step Two long text for test 2 asdao pouadsf fasd fsad dsafosahuo",
    description: "This is the second step.",
  },
  {
    id: "3",
    number: 3,
    title: "Step Three",
    description:
      "This is the third step. long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text",
  },
];

export default function Page() {
  // TODO: Pull data and create the steps dynamically.
  // And set the current step differently from the index.
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const moveNext = () => {
    setCurrentStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
  };
  const movePrev = () => {
    setCurrentStepIndex((prev) => Math.max(prev - 1, 0));
  };
  const currentStep = useMemo(
    () => steps[currentStepIndex],
    [currentStepIndex],
  );
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-right">Falta poco 🎉</CardTitle>
          </CardHeader>
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
          <Form
            stepId={currentStep.id}
            setCurrentStepIndex={setCurrentStepIndex}
          />
        </Card>
      </div>
    </div>
  );
}
export const runtime = "edge";
