import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log(`Middleware triggered for path: ${request.nextUrl.pathname}`);

  // Redirect to the index route
  return NextResponse.rewrite(new URL("/", request.url));
}

export const config = {
  matcher: "/patients", // Matches the `patients` route in the project
};
