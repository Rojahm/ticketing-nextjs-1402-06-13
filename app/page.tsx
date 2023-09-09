import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>
      <div className="flex h-96 ">
        <div className="flex-none bg-slate-400/50">01</div>
        <div className="flex-auto w-64 bg-slate-400">02</div>
        <div className="flex-auto w-32 bg-slate-400/50">03</div>
      </div>
    </main>
  );
}
