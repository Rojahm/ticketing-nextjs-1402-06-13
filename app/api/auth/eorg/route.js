import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request) {
  const url = new URL(request.url);
  console.log(request);
  console.log(cookies);
  return NextResponse.redirect(url.origin);
}
