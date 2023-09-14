import TicketListPage from "./list/page";

function TicketPage() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently Open Tickets.</small>
          </p>
        </div>
      </nav>
      <TicketListPage />
    </main>
  );
}

export default TicketPage;
