"use client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const dynamic = "force-dynamic";

function CreateForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newTicket = {
      title,
      body,
      priority,
    };
    // const url = `${process.env.NEXT_PUBLIC_URL}/api/tickets`;
    // console.log(process.env.NEXT_PUBLIC_URL);
    // console.log(url);

    const res = await fetch("https://helpdesk.rojahm.ir/api/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTicket),
    });

    const data = await res.json();

    if (data.error) {
      setIsLoading(false);
      console.log(error.message);
    }
    if (data.data) {
      router.refresh();
      router.push("/ticketing");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-1/2">
        <label>
          <span>موضوع:</span>
          <input
            required
            type="text"
            name="title"
            value={title}
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          <span>شرح:</span>
          <textarea
            required
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </label>
        <label>
          <span>اولویت:</span>
          <select
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">معمولی</option>
            <option value="medium">بالا</option>
            <option value="high">بحرانی</option>
          </select>
        </label>

        <Button variant="success" type="submit" disabled={isLoading}>
          {isLoading && <span>Adding...</span>}
          {!isLoading && <span>Add Ticket</span>}
        </Button>
      </form>
    </>
  );
}

export default CreateForm;
