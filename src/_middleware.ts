import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Log only in development
  if (process.env.NODE_ENV === "development") {
    console.log(`Middleware triggered for path: ${request.nextUrl.pathname}`);
  }

  if (request.nextUrl.pathname === "/patients") {
    // Rewrite `/patients` requests to the index route
    return NextResponse.rewrite(new URL("/", request.url));
  }

  // Optional: return undefined to continue the request as usual for other routes
}

// Specify the matcher for the middleware to target `/patients` only
export const config = {
  matcher: "/patients",
};
