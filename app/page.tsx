import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import FeaturedProject from "@/components/featured-project";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <main className="max-w-full flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <FeaturedProject />
      <Projects />
      <Skills />
      <Testimonials />
      <Experience />
      <Contact />
    </main>
  );
}
