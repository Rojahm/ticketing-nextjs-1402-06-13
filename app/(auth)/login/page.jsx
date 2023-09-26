"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
//custom components
import AuthForm from "../AuthForm";

const Login = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setIsLoading(false);
    }
    if (!error) {
      console.log(error);
      router.push("/");
    }
  };

  return (
    <div className="auth-form">
      <h4 className="text-center mt-5">🚪 ورود به پنل کاربری</h4>
      <AuthForm
        handleSubmit={handleSubmit}
        text={"ورود"}
        isLoading={isLoading}
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Login;
