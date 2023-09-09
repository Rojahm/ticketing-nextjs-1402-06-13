import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>
      <div className="flex">
        <h2>hi</h2>
        <div className="flex-none">01</div>
        <div className="flex-auto w-64">02</div>
        <div className="flex-auto w-32">03</div>
      </div>
    </main>
  );
}
