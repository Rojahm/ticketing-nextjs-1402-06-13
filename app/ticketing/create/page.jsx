"use client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CreateTicket = () => {
  return (
    <div className="CreateTicket">
      <h1>Create Ticket</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>موضوع</Form.Label>
          <Form.Control size="md" type="text" placeholder="موضوع" />
          <Form.Text className="text-muted">توضیح مختصر</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>شرح</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="شرح" />
        </Form.Group>

        <Button variant="success" type="submit">
          ثبت
        </Button>
      </Form>
    </div>
  );
};

export default CreateTicket;
