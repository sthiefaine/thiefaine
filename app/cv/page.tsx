"use server";
import { Card } from "@/components/Card/card";
import PageTitle from "@/components/PageTitle/pageTitle";
import { Download } from "lucide-react";
import Image from "next/image";
export default async function CV() {
  const urlCvImage = "/doc/CV_SIMONNOU-Thiefaine.png";
  const urlCv = "/doc/CV_SIMONNOU-Thiefaine.pdf";
  return (
    <>
      <PageTitle>CV</PageTitle>
      <Card
        title="Télécharger"
        url={urlCv}
        rel="noopener noreferrer"
        description="Télécharger le CV au format pdf"
      >
        <Download />
      </Card>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={urlCvImage} width={400} height={300} alt="CV" />
      </main>
    </>
  );
}
