import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { importantLinks } from "../../lib/routes";
import { ExternalTextLink } from "../TextLink";

export const FAQS = () => {
  return (
    <Accordion defaultValue={["item-1"]} type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-2xl font-bold">
          ¿Es realmente gratis?
        </AccordionTrigger>
        <AccordionContent className="font-roboto !text-lg text-gray-400">
          Sip! Nos hemos comprometido a mantenerlo gratis para siempre. Nuestro
          compromiso es ayudar a la comunidad, y no cobrar por ello.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger className="text-2xl font-bold">
          ¿Porqué están haciendo esto?
        </AccordionTrigger>
        <AccordionContent className="font-roboto !text-lg text-gray-400">
          Porque no? Es divertido, y queremos ayudar a la comunidad. <br />
          <br />
          Nuestro pitch más formal es: <br />
          <blockquote className="italic">
            Queremos ayudar a los profesionales a entender mejor su valor en el
            mercado, y negociar salarios de manera informada. <br />
            Tener esta información disponible, y de forma transparente, permite
            que tengamos un ecosistemas mas sano y justo para todos.
          </blockquote>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-2xl font-bold">
          ¿No piensan vendernos a los reclutadores?
        </AccordionTrigger>
        <AccordionContent className="font-roboto !text-lg text-gray-400">
          Nope! Nunca hemos vendido datos de la comunidad a nadie, y no tenemos
          planes de hacerlo. Tampoco venderemos tu información a reclutadores, o
          empresas. Ningun empleador tiene accesso a esta información.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-2xl font-bold">
          ¿Cómo puedo contribuir?
        </AccordionTrigger>
        <AccordionContent className="font-roboto !text-lg text-gray-400">
          Genial! Puedes ayudar compartiendo el sitio con tus amigos, y colegas.
          Si quieres ayudar con código, puedes contribuir al proyecto en{" "}
          <ExternalTextLink href={importantLinks.repo}>
            el repo de github
          </ExternalTextLink>{" "}
          y si tienes otra idea, puedes contactarnos al correo{" "}
          <ExternalTextLink href={`mailto:${importantLinks.contactMail}`}>
            {importantLinks.contactMail}
          </ExternalTextLink>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-2xl font-bold">
          ¿Cómo puedo contactarlos?
        </AccordionTrigger>
        <AccordionContent className="font-roboto !text-lg text-gray-400">
          Puedes entrar al{" "}
          <ExternalTextLink href={importantLinks.discord}>
            Discord
          </ExternalTextLink>{" "}
          o enviarnos un correo a{" "}
          <ExternalTextLink href={`mailto:${importantLinks.contactMail}`}>
            {importantLinks.contactMail}
          </ExternalTextLink>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-2xl font-bold">
          ¿Cómo puedo eliminar mi cuenta o información?
        </AccordionTrigger>
        <AccordionContent className="font-roboto !text-lg text-gray-400">
          Estamos trabajando en una forma de eliminar tu cuenta más
          automatizada, por ahora, puedes enviarnos un correo, y te
          confirmaremos la eliminación de tu cuenta en cuanto antes podamos.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="text-2xl font-bold">
          ¿Cómo puedo reportar un bug o error?
        </AccordionTrigger>
        <AccordionContent className="font-roboto !text-lg text-gray-400">
          Puedes reportar un bug en el{" "}
          <ExternalTextLink href={importantLinks.repo}>
            repositorio de github
          </ExternalTextLink>{" "}
          o en el{" "}
          <ExternalTextLink href={importantLinks.discord}>
            Discord
          </ExternalTextLink>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger className="text-2xl font-bold">
          Que tecnologías usan?
        </AccordionTrigger>
        <AccordionContent className="font-roboto !text-lg text-gray-400">
          <ul>
            <li>
              Nuestro FE está hecho con React (NextJS), TailwindCSS, y
              Typescript.
            </li>
            <li>Nuestro BE está hecho con Cloudflare Workers, Typescript.</li>
            <li>
              Nuestra BDD está hosteada en{" "}
              <ExternalTextLink href="https://turso.tech">
                Turso
              </ExternalTextLink>{" "}
              ❤️
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger className="text-2xl font-bold">
          Que le pasa a Lupita?
        </AccordionTrigger>
        <AccordionContent className="font-roboto !text-lg text-gray-400">
          No sé.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
