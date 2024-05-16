"use server";
import { Tech } from "@/components/Tech/tech";
import { Card } from "@/components/Card/card";
import { cardList } from "@/data/home";
import { use } from "react";
import { headers } from "next/headers";

export default async function Home() {
  const lat = headers().get("x-latitude");
  const long = headers().get("x-longitude");

  const params = {
    latitude: lat,
    longitude: long,
    hourly: "temperature_2m,wind_speed_10m,weather_code",
  };
  const url = `https://customer-api.open-meteo.com/v1/forecast?latitude=${params.latitude}&longitude=${params.longitude}&hourly=${params.hourly}`;

  const weather = await fetch(url, { cache: "no-store" }).then((res) =>
    res.json()
  );

  console.log("azerty", weather);

  return (
    <>
      <Tech />
      <main>
        {cardList.map((card) => (
          <Card key={card.id + card.title} {...card} />
        ))}
        <Card title="" url="/projects" />
      </main>
    </>
  );
}
