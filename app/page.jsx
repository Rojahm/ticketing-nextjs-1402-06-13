import Box from "./components/Box";

export default function Home() {
  return (
    <main className="container text-center mt-5">
      <h1>HomePage</h1>
      <div className="d-flex justify-evenly mt-5">
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </main>
  );
}
