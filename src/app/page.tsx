import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t border-border/50 py-8 text-center text-sm text-muted-foreground">
        <div className="section-container">
          <p>© {new Date().getFullYear()} Vũ Quang Nguyên. Được xây dựng với Next.js & shadcn/ui.</p>
        </div>
      </footer>
    </>
  );
}