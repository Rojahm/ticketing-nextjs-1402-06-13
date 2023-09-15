import Link from "next/link";

const AuthLayout = ({ children }) => {
  return (
    <>
      <nav>
        <h2>LSSI</h2>
        <Link href={"/signup"}>Sign Up</Link>
        <Link href={"/login"}>Login</Link>
      </nav>
      {children}
    </>
  );
};

export default AuthLayout;
