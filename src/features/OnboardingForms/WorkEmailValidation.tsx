/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { verticalTransitionProps } from "../../components/FramerTransitions/VerticalTransitionContainer";
import { useSubmitWorkEmailMutation } from "./graphql/mutations/submitWorkEmail.generated";
import { useSubmitWorkEmailCodeValidationMutation } from "./graphql/mutations/submitWorkEmailCodeValidation.generated";
import { useGetOnboardingInformationLazyQuery } from "./graphql/queries/getWorkEmailInformation.generated";
import { z } from "../../components/Forms/zod";
import { WorkEmailFragment } from "./graphql/fragments/workEmailFragment.generated";
import { EmailStatus } from "../../api/gql/graphql";
import { InternalTextLink } from "../../components/TextLink/Internal";

const AnimatedCardHeader = motion(CardHeader);
const AnimatedCardContent = motion(CardContent);
const emailSchema = z.object({
  email: z
    .string()
    .email({
      message: "Email inválido.",
    })
    .trim(),
});

const codeSchema = z.object({
  email: z.string().email().trim(),
  verificationCode: z
    .string()
    .min(2, {
      message: "Email inválido.",
    })
    .trim(),
});

enum Step {
  EmailValidation = "WorkEmailValidation",
  CodeVerification = "WorkEmailCodeVerification",
}

export const WorkEmailValidationForm = ({
  pendingEmailValidation,
  onFinish,
}: {
  pendingEmailValidation?: WorkEmailFragment;
  onFinish: () => void;
}) => {
  const [submitWorkEmailMutation, submitWorkEmailMutationSatus] =
    useSubmitWorkEmailMutation();
  const [getOnboardingInformationLazyQuery] =
    useGetOnboardingInformationLazyQuery();
  const [submitWorkEmailCodeValidationMutation] =
    useSubmitWorkEmailCodeValidationMutation();
  const [step, setStep] = useState<Step>(
    pendingEmailValidation?.status === EmailStatus.Pending
      ? Step.CodeVerification
      : Step.EmailValidation,
  );
  const refSubmitButtom = useRef<HTMLButtonElement>(null);
  const emailForm = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: pendingEmailValidation?.workEmail || "",
    },
  });
  const codeForm = useForm<z.infer<typeof codeSchema>>({
    resolver: zodResolver(codeSchema),
    defaultValues: {
      email: "",
      verificationCode: "",
    },
  });

  const email = emailForm.watch("email");
  useEffect(() => {
    codeForm.setValue("email", email);
  }, [codeForm, email]);

  async function onSubmitEmailValidation(values: z.infer<typeof emailSchema>) {
    const emailInfo = await getOnboardingInformationLazyQuery({
      variables: {
        email: values.email,
      },
    });
    if (emailInfo.data?.workEmail?.isValidated) {
      // if the email is already validated, we short circuit the process.
      setStep(Step.CodeVerification);
      return;
    }
    await submitWorkEmailMutation({
      variables: {
        email: values.email,
      },
      onCompleted: () => {
        setStep(Step.CodeVerification);
      },
    });
  }

  async function onSubmitCodeValidation(values: z.infer<typeof codeSchema>) {
    await submitWorkEmailCodeValidationMutation({
      variables: {
        confirmationToken: values.verificationCode,
      },
      onCompleted: () => {
        onFinish();
      },
    });
  }

  return (
    <>
      <AnimatePresence key={1} mode="wait">
        {step === Step.EmailValidation && (
          <AnimatedCardHeader
            {...verticalTransitionProps}
            key={"head" + Step.EmailValidation}
          >
            <CardTitle>Verifica tu correo laboral</CardTitle>
            <CardDescription>
              Es super simple, y nos ayuda a garantizar la autenticidad de los
              datos que recopilamos.
              <br />
              Solo ingresa tu correo y te enviaremos un código de verificación.
            </CardDescription>
          </AnimatedCardHeader>
        )}
        {step === Step.CodeVerification && (
          <AnimatedCardHeader
            {...verticalTransitionProps}
            key={"head" + Step.CodeVerification}
          >
            <CardTitle>Excelente!</CardTitle>
            <CardDescription>
              Te enviamos un código de verificación a tu correo{" "}
              <span className="font-bold">{email}</span>. Revisa tu bandeja de
              entrada <i>(o SPAM)</i>, e ingresa el código que te enviamos acá.
            </CardDescription>
          </AnimatedCardHeader>
        )}
      </AnimatePresence>
      <AnimatePresence key={2} mode="wait">
        {step === Step.EmailValidation && (
          <AnimatedCardContent
            {...verticalTransitionProps}
            key={"body" + Step.EmailValidation}
          >
            <Form {...emailForm}>
              <form
                onSubmit={emailForm.handleSubmit(onSubmitEmailValidation)}
                className="space-y-8"
              >
                <FormField
                  control={emailForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ingresa tu correo laboral</FormLabel>
                      <FormControl>
                        <Input placeholder="nombre@empresa.tld" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end">
                  <Button
                    disabled={submitWorkEmailMutationSatus.loading}
                    variant="default"
                    type="submit"
                  >
                    Envíame mi código
                  </Button>
                </div>
              </form>
            </Form>
          </AnimatedCardContent>
        )}
        {step === Step.CodeVerification && (
          <>
            <AnimatedCardContent
              {...verticalTransitionProps}
              key={"body" + Step.CodeVerification}
            >
              <Form {...codeForm}>
                <form
                  onSubmit={codeForm.handleSubmit(onSubmitCodeValidation)}
                  className="space-y-8"
                >
                  <FormField
                    control={codeForm.control}
                    name="verificationCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Código de Verificación</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="xxxx-xxxxx-xxxx"
                            {...field}
                            onPaste={() => {
                              // TODO: This is a hack to make the form submit and
                              // validate right after the user pastes the code.
                              refSubmitButtom.current?.click();
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end">
                    <Button type="submit" ref={refSubmitButtom}>
                      Validar
                    </Button>
                  </div>
                </form>
              </Form>
            </AnimatedCardContent>
            <CardFooter>
              {/*
                TODO: This is a placeholder for a resend code button. Enable once we create the mutation
                <p>
                  <small>
                    No debería demorarse más de 5 minutos, si no recibiste el
                    código, puedes volver a solicitarlo{" "}
                    <Button
                      variant="link"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      acá
                    </Button>
                  </small>
                </p>
              */}
              <p>
                <small>
                  Si quieres cambiar el correo laboral con el que iniciaste este
                  proceso, haz click{" "}
                  <Button
                    className="p-0 font-bold underline"
                    variant="link"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    acá
                  </Button>
                  .
                </small>
              </p>
            </CardFooter>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
