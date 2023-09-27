"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

// ui icon
import { FaTrash } from "react-icons/fa";

function DeleteButton({ id }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    setIsLoading(true);
    const res = await fetch(`https://helpdesk.rojahm.ir/api/tickets/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.error) {
      console.log(error);
      setIsLoading(false);
    }
    if (!data.error) {
      router.refresh();
      router.push("/ticketing");
    }
  };
  return (
    <div>
      <button
        className="btn btn-danger"
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading && <>Deleting...</>}

        {!isLoading && (
          <>
            <FaTrash size={15} />
          </>
        )}
      </button>
    </div>
  );
}

export default DeleteButton;
