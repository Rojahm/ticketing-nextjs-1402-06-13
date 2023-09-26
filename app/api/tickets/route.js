import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const dynamic = "forece-dynamic";

export async function POST(request) {
  console.log(request);
  const ticket = await request.json();

  //get supabase instance
  const supabase = createRouteHandlerClient({ cookies });

  //get current user
  const {
    data: { session },
  } = await supabase.auth.getSession();

  //insert the data to tickets table
  const { data, error } = await supabase
    .from("Tickets")
    .insert({
      ...ticket,
      user_email: session.user.email,
    })
    .select()
    .single();
  console.log(session);
  return NextResponse.json({ data, error });
}
