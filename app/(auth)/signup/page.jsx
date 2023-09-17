"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import AuthForm from "../AuthForm";

const Signup = () => {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });

    if (error) {
    }
    if (!error) {
    }
  };

  return (
    <>
      <div>
        <h2>Sign up</h2>
        <AuthForm handleSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default Signup;
