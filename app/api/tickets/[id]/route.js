import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function DELETE(_, { params: { id } }) {
  const supabase = createRouteHandlerClient({ cookies });
  console.log(id);
  const { error } = await supabase.from("Tickets").delete().eq("id", id);

  return NextResponse.json({ error });
}
// export const dynamic = "forece-dynamic";

// export async function GET(_, { params: { id } }) {
//   const res = await fetch(`http://localhost:4000/tickets/${id}`);

//   const ticket = await res.json();

//   if (!res.ok) {
//     return NextResponse.json(
//       { error: "Cannot find this ticket" },
//       {
//         status: 404,
//       }
//     );
//   }

//   return NextResponse.json(ticket, {
//     status: 200,
//   });
// }
