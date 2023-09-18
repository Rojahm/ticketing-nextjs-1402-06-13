"use client";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { FaSignOutAlt } from "react-icons/fa";

function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.push("/login");
    }
    if (error) {
      console.log(error);
    }
  };
  return (
    <button onClick={handleLogout}>
      <FaSignOutAlt />
      Logout
    </button>
  );
}

export default LogoutButton;
