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
import { useGetUserSalariesSuspenseQuery } from "./graphql/queries/getUserSalaries.generated";
import React from "react";
import { Skeleton } from "../../components/ui/skeleton";
import { TypeOfEmployment, WorkMetodology } from "../../api/gql/graphql";
import { z } from "../../components/Forms/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Separator } from "../../components/ui/separator";

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

const formSchema = z.object({
  salaryAmount: z.number().min(0, {
    message: "Tu salario no puede ser negativo.",
  }),
  countryCode: z.string().min(1).trim(),
  gender: z.string().trim(),
  genderOtherText: z.string().trim(),
  typeOfEmployment: z.nativeEnum(TypeOfEmployment),
  workMetodology: z.nativeEnum(WorkMetodology),
  yearsOfExperience: z.number().min(0, {
    message: "No puedes tener años de experiencia negativos.",
  }),
  currencyCode: z.string().min(1).trim(),
  workRoleId: z.string().min(1).trim(),
  rolId: z.string().min(1).trim(),
});

const countries = getCountryDataList();
const SuspendableCreateSalaryForm = ({
  onFinish,
}: {
  onFinish: () => void;
}) => {
  const { data } = useGetUserSalariesSuspenseQuery();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rolId: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(form.getValues());
    // onFinish();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="salaryAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cual es tu salario mensual?</FormLabel>
                <FormControl>
                  <Input
                    placeholder="$"
                    {...field}
                    type="number"
                    onChange={(event) => field.onChange(+event.target.value)}
                  />
                </FormControl>
                <FormDescription>
                  Considera tu salario post impuestos, y contribuciones
                  sociales.
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
                <FormLabel>En que moneda recibes tu salario?</FormLabel>
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
                <FormDescription>En que pais trabajas?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="workRoleId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>En que moneda recibes tu salario?</FormLabel>
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
                <FormDescription>En que pais trabajas?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Separator />
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="typeOfEmployment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Como es tu tipo de empleo?</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-[280px]">
                      <SelectValue placeholder="Tipo de Empleo" />
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
                  This is your public display name.
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
                <FormLabel>Metodología de trabajo</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-[280px]">
                      <SelectValue placeholder="Selecciona tipo de Empleo" />
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
                <FormDescription>
                  Como trabajas (Remoto, Oficina, etc)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="countryCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>En que pais trabajas?</FormLabel>
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
                <FormDescription>En que pais trabajas?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Separator />

        <div className="flex flex-col gap-4">(Opcional) Cuéntanos de ti.</div>
        <Button type="submit">Submit</Button>
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
}: {
  onFinish: () => void;
}) => {
  return (
    <>
      <CardHeader>
        <CardTitle>Cúentanos de tu rol</CardTitle>
        <CardDescription>
          Agrega información de tu salario y cargo. Esta información será
          anonimizada antes de ser publica.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <React.Suspense fallback={<FormSekeleton />}>
          <SuspendableCreateSalaryForm onFinish={onFinish} />
        </React.Suspense>
      </CardContent>
    </>
  );
};
