import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import DeleteButton from "./DeleteButton";

export async function generateMetadata({ params: { id } }) {
  const supabase = createServerComponentClient({ cookies });
  const { data: ticket } = await supabase
    .from("Tickets")
    .select()
    .eq("id", id)
    .single();
  return {
    title: `IT Dep. | Ticket #${id} | ${ticket?.title || "Tickets not found"} `,
    description: `${ticket?.title || "Tickets not found"}`,
  };
}
export const dynamicParms = true;
// get params ahead to render static pages for every params on server
// export async function generateStaticParams() {
//   const res = await fetch("http://localhost:4000/tickets");
//   const tickets = await res.json();
//   return tickets.map((ticket) => ({
//     id: ticket.id,
//   }));
// }

async function getTickets(id) {
  const supabase = createServerComponentClient({ cookies });
  const { data: ticket } = await supabase
    .from("Tickets")
    .select()
    .eq("id", id)
    .single();

  if (!ticket) {
    notFound();
  }
  return ticket;
}

async function TicketDetailsPage({ params: { id } }) {
  const ticket = await getTickets(id);

  //current user session
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  const currentUserEmail = data.session.user.email;

  return (
    <main>
      <nav className="flex">
        <h2>تیکت #{id}:</h2>
        <div className="mr-auto">
          {currentUserEmail === ticket.user_email && <DeleteButton id={id} />}
        </div>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>توسط: {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}

export default TicketDetailsPage;
