"use client";
import React from "react";
import { OnboardingForms, OnboardingStep } from "@/features/OnboardingForms";
import { useGetWorkEmailsStatusSuspenseQuery } from "../../../../src/features/OnboardingForms/graphql/queries/getWorkEmailsStatus.generated";
import { EmailStatus } from "../../../../src/api/gql/graphql";

const steps = [
  {
    id: "1",
    number: 1,
    title: "Tu correo",
    description: "Valida tu correo laboral..",
  },
  {
    id: "2",
    number: 2,
    title: "Tu rol",
    description: "Cuéntanos de tu salario y cargo.",
  },
  {
    id: "3",
    number: 3,
    title: "Listo!",
  },
] satisfies OnboardingStep[];

const Suspended = () => {
  const { data } = useGetWorkEmailsStatusSuspenseQuery();
  const hasValidatedWorkEmails =
    data?.workEmails?.filter(
      (workEmail) => workEmail.status === EmailStatus.Confirmed,
    ).length >= 1;
  const hasAddedSalaries = data?.salaries?.length >= 1;
  const initialStep = hasValidatedWorkEmails ? (hasAddedSalaries ? 2 : 1) : 0;
  return (
    <OnboardingForms steps={steps} initialStep={initialStep} data={data} />
  );
};

export default function Page() {
  // TODO: Pull data and create the steps dynamically.
  // And set the current step differently from the index.
  return (
    <div className="grid grid-cols-12 gap-8">
      <React.Suspense fallback={<div>Loading...</div>}>
        <Suspended />
      </React.Suspense>
    </div>
  );
}
export const runtime = "edge";
