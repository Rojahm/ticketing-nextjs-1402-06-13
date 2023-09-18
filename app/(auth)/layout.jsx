import Link from "next/link";
import Image from "next/image";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    redirect("/");
  }
  return (
    <div className="auth-layout">
      <nav className="d-flex p-3">
        <Link href={"/"}>
          <Image
            priority={true}
            src={
              "/img/lssi-high-resolution-logo-color-on-transparent-background.webp"
            }
            width={120}
            height={120}
            alt="lssi it logo"
            className="rounded p-3 drop-shadow-sm shadow py-3 hover:cursor-pointer hover:drop-shadow-md hover:shadow-transparent"
          />
        </Link>
        <div className="p-3 mr-auto">
          <Link href={"/signup"} className="app-link mx-3">
            Sign Up
          </Link>
          <Link href={"/login"} className="app-link mx-3">
            Login
          </Link>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default AuthLayout;
