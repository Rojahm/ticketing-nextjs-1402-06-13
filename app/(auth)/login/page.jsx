"use client";
import AuthForm from "../AuthForm";

const Login = () => {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    console.log("LOGIN", email, password);
  };

  return (
    <>
      <div>
        <h2>Login</h2>
        <AuthForm handleSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default Login;
