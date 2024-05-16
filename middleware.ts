import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.geo?.latitude && request.geo?.longitude) {
    const response = NextResponse.next();

    response.headers.set("x-latitude", request.geo.latitude);
    response.headers.set("x-longitude", request.geo.longitude);

    return response;
  }
}
