"use server";

import {
  WeatherData,
  getWeatherEmoji,
  weatherEmojiMock,
  weatherResultMock,
} from "@/helpers/open-meteo";
import { headers } from "next/headers";
import { CardWeather } from "../../Card/cardWeather";
import { Suspense } from "react";

export async function Weather() {
  const headersList = await headers();

  const geoMock = {
    latitude: 48.8566,
    longitude: 2.3522,
    city: "Paris",
    country: "France",
  };

  // https://vercel.com/docs/edge-network/headers/request-headers
  const params = {
    latitude: headersList.get("x-latitude") ?? geoMock.latitude,
    longitude: headersList.get("x-longitude") ?? geoMock.longitude,
    city: headersList.get("x-vercel-ip-city") ?? geoMock.city,
    country: headersList.get("x-country") ?? geoMock.country,
    current:
      "temperature_2m,relative_humidity_2m,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m",
  };

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${params.latitude}&longitude=${params.longitude}&current=${params.current}`;

  const weather: WeatherData = await fetch(url, { cache: "no-store" }).then(
    (res) => res.json()
  );

  const weatherEmoji = getWeatherEmoji(weather);

  return (
    <Suspense
      fallback={
        <CardWeather
          emoji={weatherEmojiMock.emoji}
          title={decodeURIComponent(params.city)}
          description={
            weatherEmojiMock.description +
            " " +
            weatherResultMock.current.temperature_2m +
            weatherResultMock.current_units.temperature_2m +
            " " +
            weatherResultMock.current.wind_speed_10m +
            weatherResultMock.current_units.wind_speed_10m
          }
        />
      }
    >
      <CardWeather
        emoji={weatherEmoji.emoji}
        title={decodeURIComponent(params.city)}
        description={
          weatherEmoji.description +
          " " +
          weather.current.temperature_2m +
          weather.current_units.temperature_2m +
          " " +
          weather.current.wind_speed_10m +
          weather.current_units.wind_speed_10m
        }
      />
    </Suspense>
  );
}
