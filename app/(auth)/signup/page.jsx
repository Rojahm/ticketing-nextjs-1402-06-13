import AuthForm from "../AuthForm";

const Signup = () => {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    console.log(email, password);
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
