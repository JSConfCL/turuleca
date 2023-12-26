"use client";
import React, { useMemo, useState } from "react";
import { VerticalStepper } from "../../../../src/components/Stepper/VerticalStepper";
import { Button } from "../../../../src/components/ui/button";
import { Form } from "../../../../src/features/onboarding/form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../../../src/components/ui/card";

const steps = [
  {
    id: "1",
    number: 1,
    title: "Step One",
    description: "This is the first step.",
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
    // <section className="flex w-full max-w-lg flex-col justify-center gap-4">
    <div className="grid grid-cols-12 gap-8">
      <Card className="col-span-4">
        <CardHeader className="text-right">Falta poco 🎉</CardHeader>
        <CardContent>
          <VerticalStepper steps={steps} currentStepIndex={currentStepIndex} />
        </CardContent>
        <CardFooter className="flex flex-row gap-4">
          <Button onClick={movePrev}>Prev Step</Button>
          <Button onClick={moveNext}>Next Step</Button>
        </CardFooter>
      </Card>
      <Card className="col-span-8 col-start-5 flex flex-col gap-4">
        {/*
            "Card" is a flex+gap components, we
            use empty divs if we don't use a header or
            footer, so we can have consistent spacing
            and avoid setting our own padding on
            CardContent
        */}
        <div />
        <CardContent>
          <Form stepId={currentStep.id} />
        </CardContent>
        <div />
      </Card>
    </div>
  );
}
export const runtime = "edge";
