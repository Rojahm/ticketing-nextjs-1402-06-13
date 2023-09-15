import Loading from "../loading";
import { Suspense } from "react";
import TicketListPage from "./list/page";

function TicketPage() {
  return (
    <main>
      <nav>
        <div>
          <h2>لیست تیکت ها</h2>
          <p>
            <small>تیکت های باز.</small>
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
