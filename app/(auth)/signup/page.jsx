"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
//client component
import AuthForm from "../AuthForm";

const Signup = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClientComponentClient();

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
    }
    if (!error) {
      router.push("/verify");
    }
  };

  return (
    <div className="auth-form">
      <h4 className="text-center mt-5">ثبت نام</h4>
      <AuthForm
        handleSubmit={handleSubmit}
        text={"ثبت نام"}
        isLoading={isLoading}
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Signup;
