import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Identity from "@/components/Identity";
import Capabilities from "@/components/Capabilities";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Identity />
        <Capabilities />
        <Projects />
        <Achievements />
        <Roadmap />
      </main>
      <Footer />
    </>
  );
}
