"use server";
import Header from "@/components/Header/header";
import { Card } from "@/components/Card/card";
import PageTitle from "@/components/PageTitle/pageTitle";
import { contactData } from "@/data/contact";

export default async function Contact() {
  return (
    <>
      <PageTitle>Contact</PageTitle>
      <main>
        {contactData.map((contact) => (
          <Card key={contact.id} {...contact} />
        ))}
      </main>
    </>
  );
}
