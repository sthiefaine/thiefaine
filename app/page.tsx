"use server";
import { Tech } from "@/components/Tech/tech";
import { Card } from "@/components/Card/card";
import { cardList } from "@/data/home";
import { Suspense, use } from "react";
import { headers } from "next/headers";
import { getWeatherEmoji } from "@/helpers/open-meteo";
import { CardWeather } from "@/components/Card/cardWeather";

import type { WeatherData } from "@/helpers/open-meteo";
import { Weather } from "@/components/weather/weather";

export default async function Home() {
  return (
    <>
      <Tech />
      <main>
        {cardList.map((card) => (
          <Card key={card.id + card.title} {...card} />
        ))}
        <Weather />
      </main>
    </>
  );
}
