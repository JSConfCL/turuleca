/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { getEmojiFlag, getCountryDataList } from "countries-list";

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
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import React, { useEffect, useMemo } from "react";
import { Skeleton } from "../../components/ui/skeleton";
import {
  Gender,
  TypeOfEmployment,
  WorkMetodology,
} from "../../api/gql/graphql";
import { z } from "../../components/Forms/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Separator } from "../../components/ui/separator";
import { GetWorkEmailsStatusQuery } from "./graphql/queries/getWorkEmailsStatus.generated";
import { useCreateSalaryMutation } from "./graphql/mutations/createSalary.generated";

const mapOfEmploymentType: Record<TypeOfEmployment, string> = {
  [TypeOfEmployment.Freelance]: "Freelance",
  [TypeOfEmployment.FullTime]: "Full Time",
  [TypeOfEmployment.PartTime]: "Part Time",
};

const mapOfWorkMetodology: Record<WorkMetodology, string> = {
  [WorkMetodology.Remote]: "Remoto",
  [WorkMetodology.Office]: "Oficina",
  [WorkMetodology.Hybrid]: "Híbrido",
};

// input CreateSalaryInput {
//   amount: Int!
//   currencyCode: String!
//   yearsOfExperience: Int!
//   workRoleId: String!

//   typeOfEmployment: TypeOfEmployment!
//   workMetodology: WorkMetodology!
//   countryCode: String!

//   gender: Gender!
//   genderOtherText: String!

//   confirmationToken: String!

//   companyId: String!
// }

const formSchema = z.object({
  workRoleId: z.string().min(1).trim(),
  workSeniorityId: z.string().min(1).trim(),
  yearsOfExperience: z.number().min(0, {
    message: "No puedes tener años de experiencia negativos.",
  }),
  salaryAmount: z.number().min(0, {
    message: "Tu salario no puede ser negativo.",
  }),
  currencyCode: z.string().min(1).trim(),

  typeOfEmployment: z.nativeEnum(TypeOfEmployment),
  workMetodology: z.nativeEnum(WorkMetodology),
  countryCode: z.string().min(1).trim(),
  companyId: z.string().min(1).trim(),

  gender: z.nativeEnum(Gender),
  genderOtherText: z.string().trim(),

  confirmationToken: z.string().min(1).trim(),
});

const defaultSeniorityId = "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d";

const countries = getCountryDataList();
const SuspendableCreateSalaryForm = ({
  // onFinish,
  workRoles,
}: {
  onFinish: () => void;
  workRoles: GetWorkEmailsStatusQuery["workRoles"];
}) => {
  const [createSalaryMutation, createSalaryMutationResponse] =
    useCreateSalaryMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const seniorities = useMemo(() => {
    const seniorityMap: Record<string, { id: string; name: string }[]> = {};
    for (const workRole of workRoles) {
      seniorityMap[workRole.id] = workRole.seniorities?.filter(
        (el) => el.id !== defaultSeniorityId,
      );
    }
    return seniorityMap;
  }, [workRoles]);
  const workRoleId = form.watch("workRoleId");
  const gender = form.watch("gender");
  const numberOfSeniorities = seniorities[workRoleId]?.length;
  useEffect(() => {
    if (numberOfSeniorities === 1) {
      form.setValue("workSeniorityId", defaultSeniorityId);
    } else {
      form.setValue("workSeniorityId", "");
    }
  }, [form, numberOfSeniorities]);

  const shouldShowSeniority = Boolean(workRoleId) && numberOfSeniorities > 1;

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(form.getValues());
    await createSalaryMutation({
      variables: {
        input: {
          amount: values.salaryAmount,
          currencyCode: values.currencyCode,
          yearsOfExperience: values.yearsOfExperience,
          confirmationToken: values.confirmationToken,
          countryCode: values.countryCode,
          gender: values.gender,
          genderOtherText: values.genderOtherText,
          workRoleId: values.workRoleId,
          workSeniorityId: values.workSeniorityId,
          workMetodology: values.workMetodology,
          typeOfEmployment: values.typeOfEmployment,
          companyId: values.companyId,
        },
      },
    });
    // onFinish();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-10"
      >
        <div className="flex flex-col gap-8">
          <FormField
            control={form.control}
            name="workRoleId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿Cuál es tu rol actual?</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-[280px]">
                      <SelectValue placeholder="Selecciona el rol que tienes actualmente en tu empresa" />
                    </SelectTrigger>
                    <SelectContent>
                      {workRoles.map((workRole) => (
                        <SelectItem key={workRole.id} value={workRole.id}>
                          <div className="flex items-center gap-2">
                            <span>{workRole.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  Considera que algunos roles no tienen el mismo nombre en todas
                  las empresas. (Software engineer y Full-stack Developer, por
                  ejemplo). Por lo que te recomendamos que selecciones el rol
                  que más se asemeje al tuyo.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {shouldShowSeniority && (
            <FormField
              control={form.control}
              name="workSeniorityId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>¿Cuál es tu grado de senioridad?</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={!workRoleId}
                    >
                      <SelectTrigger className="w-[280px]">
                        <SelectValue placeholder="Selecciona que seniority tienes en tu cargo" />
                      </SelectTrigger>
                      <SelectContent>
                        {seniorities[workRoleId]?.map((seniority) => (
                          <SelectItem key={seniority.id} value={seniority.id}>
                            <div className="flex items-center gap-2">
                              <span>{seniority.name}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    No todas las empresas se basan en el mismo seniority. Te
                    recomendamos que selecciones el que más se asemeje a tu rol
                    actual. Si no encuentras tu seniority, puedes enviarnos un
                    mensaje y lo arreglaremos.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="salaryAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿Cuál es tu salario mensual?</FormLabel>
                <FormControl>
                  <Input
                    placeholder="💰"
                    {...field}
                    type="number"
                    onChange={(event) => field.onChange(+event.target.value)}
                  />
                </FormControl>
                <FormDescription>
                  Considera tu salario{" "}
                  <b>post impuestos, y contribuciones sociales.</b>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="currencyCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿En que moneda recibes tu salario?</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-[280px]">
                      <SelectValue placeholder="Selecciona una moneda" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.iso2} value={country.iso2}>
                          <div className="flex items-center gap-2">
                            <span>{country.name}</span>
                            <span>{getEmojiFlag(country.iso2)}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  Por ejemplo, puedes vivir en México o Uruguay, pero recibir un
                  sueldo en dólares estadounidenses, en ese caso, selecciona
                  Estados Unidos.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-8">
          <FormField
            control={form.control}
            name="typeOfEmployment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  ¿Cuál es tu <b>tipo</b> de empleo?
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-[280px]">
                      <SelectValue placeholder="Selecciona tu tipo de empleo" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.values(TypeOfEmployment).map((type) => (
                        <SelectItem key={type} value={type}>
                          {mapOfEmploymentType[type]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  Full-time, Part-time, Freelance, etc.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="workMetodology"
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿Con qué metodología trabajas?</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-[280px]">
                      <SelectValue placeholder="Selecciona una metodología de trabajo" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.values(WorkMetodology).map((type) => (
                        <SelectItem key={type} value={type}>
                          {mapOfWorkMetodology[type]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>En oficina, Remoto, etc</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="countryCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿En que pais trabajas?</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-[280px]">
                      <SelectValue placeholder="Selecciona el pais en el que trabajas" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.iso2} value={country.iso2}>
                          <div className="flex items-center gap-2">
                            <span>{country.name}</span>
                            <span>{getEmojiFlag(country.iso2)}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Separator />
        <div className="flex flex-col gap-8">
          <span>
            <b>(Opcional)</b> Cuéntanos más de ti.
          </span>
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿Cual es tu género?</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-[280px]">
                      <SelectValue placeholder="Selecciona tu género" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(Gender).map(([key, value]) => (
                        <SelectItem key={key} value={value}>
                          <div className="flex items-center gap-2">
                            <span>{key}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {gender === Gender.Other && (
            <FormField
              control={form.control}
              name="genderOtherText"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Otro: ¿Cuál?</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="¿Cual?" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>
        <div className="flex justify-end">
          <Button disabled={createSalaryMutationResponse.loading} type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

const FormSekeleton = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-start gap-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-3 w-24" />
      </div>
      <div className="flex flex-col items-start gap-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-3 w-40" />
      </div>
      <div className="flex flex-col items-start gap-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-3 w-40" />
      </div>
    </div>
  );
};
export const PersonalQuestionsForm = ({
  onFinish,
  data,
}: {
  onFinish: () => void;
  data: GetWorkEmailsStatusQuery;
}) => {
  return (
    <>
      <CardHeader>
        <CardTitle>Cúentanos de tí!</CardTitle>
        <CardDescription>
          (Toda información será anonimizada antes de ser publicada).
        </CardDescription>
      </CardHeader>
      <div className="pb-6">
        <Separator />
      </div>
      <CardContent>
        <React.Suspense fallback={<FormSekeleton />}>
          <SuspendableCreateSalaryForm
            onFinish={onFinish}
            workRoles={data.workRoles}
          />
        </React.Suspense>
      </CardContent>
    </>
  );
};
