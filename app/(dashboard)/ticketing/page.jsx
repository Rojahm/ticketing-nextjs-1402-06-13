import Loading from "../loading";
import { Suspense } from "react";
import TicketListPage from "./list/page";

export const metadata = {
  title: "IT Dep. | Tickets",
  description: "Ticket List",
};
export const dynamic = "force-dynamic";

function TicketPage() {
  return (
    <main>
      <nav>
        <div>
          <h2>لیست تیکت ها</h2>
          <p>
            <small>تیکت های باز:</small>
          </p>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketListPage />
      </Suspense>
    </main>
  );
}

export default TicketPage;
