import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import { site } from "@/data";

/*
  One landing page with a section for each page of the Constrix website (no blog). Get a Quote is merged
  into the contact section.
  The ids match the header and footer links in site.json ("#about" → id="about"); scroll-mt-20 keeps
  each section clear of the fixed header when a link scrolls to it.
*/
export default function HomePage() {
  return (
    <>
      <div id="home">
        <HeroSection data={site.hero} />
      </div>
      <div id="about" className="scroll-mt-20">
        <AboutSection data={site.aboutSection} />
      </div>
      <div id="services" className="scroll-mt-20">
        <ServicesSection data={site.servicesSection} />
      </div>
      <div id="projects" className="scroll-mt-20">
        <ProjectsSection data={site.projectsSection} />
      </div>
      <div id="testimonials" className="scroll-mt-20">
        <TestimonialsSection data={site.testimonialsSection} />
      </div>
      <div id="faq" className="scroll-mt-20">
        <FaqSection data={site.faqSection} />
      </div>
      <div id="contact" className="scroll-mt-20">
        <ContactSection data={site.contactSection} />
      </div>
    </>
  );
}
