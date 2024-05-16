"use server";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const parisMock = {
    latitude: 48.8566,
    longitude: 2.3522,
  };

  const lat = request.headers.get("x-latitude") ?? parisMock.latitude;
  const long = request.headers.get("x-longitude") ?? parisMock.longitude;

  if (!lat || !long) {
    return;
  }

  const params = {
    latitude: lat,
    longitude: long,
    hourly: "temperature_2m,wind_speed_10m,weather_code",
  };
  const url = `https://customer-api.open-meteo.com/v1/forecast?latitude=${params.latitude}&longitude=${params.longitude}&hourly=${params.hourly}`;

  const weather = await fetch(url, { cache: "no-store" }).then((res) =>
    res.json()
  );

  return new NextResponse(weather, {
    status: 200,
  });
};
