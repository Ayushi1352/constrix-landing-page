import siteData from "./site.json";

// ── Root Schema Types ──
export type ConstrixSchema = typeof siteData.Constrix;
export type ConstrixSections = ConstrixSchema["sections"];

// ── Universal SectionProps Interface (ai-builder Standard) ──
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

// ── Strongly Typed Section Variant Data Models ──
export type ConstrixHeaderData = ConstrixSections["Header"]["variants"]["ConstrixHeader1"];
export type ConstrixHeroData = ConstrixSections["Hero"]["variants"]["ConstrixHero1"];
export type ConstrixAboutData = ConstrixSections["About"]["variants"]["ConstrixAbout1"];
export type ConstrixServicesData = ConstrixSections["Services"]["variants"]["ConstrixServices1"];
export type ConstrixProjectsData = ConstrixSections["Projects"]["variants"]["ConstrixProjects1"];
export type ConstrixTestimonialsData = ConstrixSections["Testimonials"]["variants"]["ConstrixTestimonials1"];
export type ConstrixFaqData = ConstrixSections["Faq"]["variants"]["ConstrixFaq1"];
export type ConstrixContactData = ConstrixSections["Contact"]["variants"]["ConstrixContact1"];
export type ConstrixEnquiryFormData = ConstrixSections["EnquiryForm"]["variants"]["ConstrixEnquiryForm1"];
export type ConstrixFooterData = ConstrixSections["Footer"]["variants"]["ConstrixFooter1"];

// ── Item-level types inferred from site.json ──
export type ConstrixLink = ConstrixHeaderData["navigation"][number];
export type ConstrixProject = ConstrixProjectsData["items"][number];
export type ConstrixTestimonial = ConstrixTestimonialsData["items"][number];

// ── Site Map for the single-page Constrix landing page ──
const sec = siteData.Constrix.sections;

const site = {
  theme: siteData.Constrix.theme,
  navbar: sec.Header.variants.ConstrixHeader1,
  hero: sec.Hero.variants.ConstrixHero1,
  aboutSection: sec.About.variants.ConstrixAbout1,
  servicesSection: sec.Services.variants.ConstrixServices1,
  projectsSection: sec.Projects.variants.ConstrixProjects1,
  testimonialsSection: sec.Testimonials.variants.ConstrixTestimonials1,
  faqSection: sec.Faq.variants.ConstrixFaq1,
  contactSection: sec.Contact.variants.ConstrixContact1,
  enquiryFormSection: sec.EnquiryForm.variants.ConstrixEnquiryForm1,
  footer: sec.Footer.variants.ConstrixFooter1,
};

export { site };
export default siteData;
