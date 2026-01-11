import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Tools from "../components/Tools";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Footer from "../components/Footer";
import StickyBottomNav from "../components/StickyBottomNav";

export default function Home() {
  return (
    <div className="relative z-10">
      <Navbar />
      <Hero />
      <Projects />
      <Tools />
      <Education />
      <Certifications />
      <Footer />
      <StickyBottomNav />
    </div>
  );
}
