import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const { data, error } = await supabase.auth.getSession();

  if (error) {
    await supabase.auth.refreshSession();
    return ["errorrrrrrrrrrrrrr", res];
  } else {
    return res;
  }
}
