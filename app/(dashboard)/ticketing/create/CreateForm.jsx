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

    const res = await fetch("http://localhost:3000/api/tickets", {
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
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>موضوع</Form.Label>
          <Form.Control
            size="md"
            type="text"
            placeholder="موضوع"
            value={title}
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>اولویت</Form.Label>
          <Form.Select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value={"low"}>معمولی</option>
            <option value={"medium"}>بالا</option>
            <option value={"high"}>بحرانی</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>شرح</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="شرح"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </Form.Group>

        <Button variant="success" type="submit" disabled={isLoading}>
          {isLoading && <span>Adding...</span>}
          {!isLoading && <span>Add Ticket</span>}
        </Button>
      </Form>
    </>
  );
}

export default CreateForm;
