"use server";
import { Tech } from "@/components/Tech/tech";
import { Card } from "@/components/Card/card";
import { cardList } from "@/data/home";
import { Weather } from "@/components/(server)/weather/weather";
import { Suspense } from "react";
import { WeatherSkeleton } from "@/components/(server)/weather/weatherSkeleton";

export default async function Home() {
  return (
    <>
      <Tech />
      <main>
        {cardList.map((card) => (
          <Card key={card.id + card.title} {...card} />
        ))}
        <Suspense fallback={<WeatherSkeleton />}>
          <Weather />
        </Suspense>
      </main>
      <a style={{ display: "none" }} href="https://storyset.com/business">
        Business illustrations by Storyset
      </a>
    </>
  );
}
