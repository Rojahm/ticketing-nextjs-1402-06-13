import { notFound } from "next/navigation";

// get params ahead to render static pages for every params on server
export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/tickets");
  const tickets = res.json();
  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
}

async function getTickets(id) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`);
  if (!res.ok) {
    notFound();
  }
  const ticket = res.json();
  return ticket;
}

async function TicketDetailsPage({ params: { id } }) {
  const ticket = await getTickets(id);
  return (
    <main>
      <nav>
        <h2>تیکت #{id}:</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>{ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}

export default TicketDetailsPage;
