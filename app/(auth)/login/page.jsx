"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import AuthForm from "../AuthForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setError("");

    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    }
    if (!error) {
      router.push("/");
    }
  };

  return (
    <>
      <div>
        <h2>Login</h2>
        <AuthForm handleSubmit={handleSubmit} />
        {error && <div>{error}</div>}
      </div>
    </>
  );
};

export default Login;
