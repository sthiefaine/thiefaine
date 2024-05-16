"use server";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  console.log(request);
  return new NextResponse(
    "Hello, world!" +
      request?.geo?.latitude +
      request?.geo?.longitude +
      request.headers.get("X-Forwarded-For") +
      request.headers.get("x-latitude") +
      request.headers.get("x-longitude")
  );
  const lat = request?.geo?.latitude;
  const long = request?.geo?.longitude;

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
