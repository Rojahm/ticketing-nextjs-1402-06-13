"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
//custom components
import AuthForm from "../AuthForm";

export const dynamic = "force-dynamic";

const Login = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // const handleSubmit = async (e, email, password) => {
  //   e.preventDefault();
  //   const supabase = createClientComponentClient();

  //   setError("");
  //   setIsLoading(true);

  //   await supabase.auth.signInWithPassword({
  //     email,
  //     password,
  //   });
  //   router.refresh();
  // };
  // const handleSubmit = async (e, email, password) => {
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/auth/sign-in`, {
  //     method: "POST",
  //   });
  // };
  return (
    // <div className="auth-form">
    //   <h4 className="text-center mt-5">🚪 ورود به پنل کاربری</h4>
    //   <AuthForm
    //     handleSubmit={handleSubmit}
    //     text={"ورود"}
    //     isLoading={isLoading}
    //   />
    //   {error && <div className="error">{error}</div>}
    // </div>
    <form action="/api/auth/sign-in" method="post">
      <label htmlFor="email">Email</label>
      <input name="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" />
      <button>Sign In</button>
    </form>
  );
};

export default Login;
