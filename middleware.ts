import { NextRequest, NextResponse } from "next/server";

interface ExtendedNextRequest extends NextRequest {
  geo?: {
    latitude?: string;
    longitude?: string;
    country?: string;
    city?: string;
    region?: string;
  };
}

export function middleware(request: ExtendedNextRequest) {
  // Destructure geo information with optional chaining

  const { geo: { latitude, longitude, country, city } = {} } = request;

  // Check if all required geo information is present
  if (latitude && longitude && country && city) {
    const response = NextResponse.next();

    // Safely set headers with proper encoding
    response.headers.set("x-latitude", String(latitude));
    response.headers.set("x-longitude", String(longitude));
    response.headers.set("x-country", encodeURIComponent(country));
    response.headers.set("x-city", encodeURIComponent(city));

    return response;
  }

  // Optional: Return the original request if geo data is incomplete
  return NextResponse.next();
}
