import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

async function getTickets() {
  //imitate delay
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.from("Tickets").select();

  if (error) {
    console.log(error.message);
  }
  return data;
}

export default async function TicketListPage() {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card">
          <Link href={`/ticketing/${ticket.id}`} className="app-link">
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets, yay! 🎉</p>
      )}
    </>
  );
}
