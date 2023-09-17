import Navigation from "../components/Nav";
import User from "../components/User";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const DashboardLayout = async ({ children }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  return (
    <>
      <User User={data.session.user} />
      <Navigation />
      {children}
    </>
  );
};

export default DashboardLayout;
