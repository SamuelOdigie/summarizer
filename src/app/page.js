import Hero from "./components/Hero";
import Demo from "./components/Demo";
export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between bg bg bg-gradient-to-t from-blue-300 via-blue-200 to-blue-100 ">
      <Hero />
      <Demo />
    </main>
  );
}
