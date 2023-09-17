import { FaSignInAlt } from "react-icons/fa";
import LogoutButton from "./LogoutButton";
import Link from "next/link";

function User({ user }) {
  return (
    <div className="User">
      <div className="user-menu">
        {user && <span className="text-primary">Hello, {user.email}</span>}
        <LogoutButton />
        {/* <Link href={"/login"}>
          <FaSignInAlt className={"icon shadow"} />
        </Link> */}
        {/* <FaSignOutAlt className={"icon shadow"} />
            <FaUserAlt className={"icon shadow"} /> */}
      </div>
    </div>
  );
}

export default User;
