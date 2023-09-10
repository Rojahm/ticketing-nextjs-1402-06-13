import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>HomePage</h1>
      <div className="flex">
        <div>
          <Link href={"/"}>Ticket</Link>
        </div>
      </div>
    </main>
  );
}
