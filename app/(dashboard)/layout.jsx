import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
//custom components
import Navigation from "../components/Nav";
import User from "../components/User";
import Header from "../components/Header";

export const dynamic = "force-dynamic";

const DashboardLayout = async ({ children }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    redirect("/login");
  }
  return (
    <>
      <div className="flex justify-evenly">
        <div>
          <User user={data.session.user} />
        </div>
        <Header />
      </div>
      <Navigation />
      <div className="mt-5">{children}</div>
    </>
  );
};

export default DashboardLayout;
