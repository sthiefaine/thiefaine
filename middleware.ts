import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (
    request.geo?.latitude &&
    request.geo?.longitude &&
    request.geo?.country &&
    request.geo?.city
  ) {
    const response = NextResponse.next();

    response.headers.set("x-latitude", request.geo.latitude);
    response.headers.set("x-longitude", request.geo.longitude);
    response.headers.set("x-country", request.geo.country);
    response.headers.set("x-city", request.geo.city);

    return response;
  }
}
