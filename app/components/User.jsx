import LogoutButton from "./LogoutButton";

function User({ user }) {
  return (
    <div className="mt-2">
      {user && <span className="greeting"> سلام, {user.email}</span>}
      <LogoutButton />
    </div>
  );
}

export default User;
