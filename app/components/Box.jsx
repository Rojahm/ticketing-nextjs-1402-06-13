import Link from "next/link";

const Box = () => {
  return (
    <div className="Box">
      <div className="border rounded shadow-sm p-5">
        <Link href={"/"}>Ticket</Link>
      </div>
    </div>
  );
};

export default Box;
