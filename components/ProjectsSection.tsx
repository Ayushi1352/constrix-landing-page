import { site, type ConstrixProjectsData, type SectionProps } from "@/data";
import ProjectsGrid from "@/components/ProjectsGrid";
import SectionHeading from "@/components/SectionHeading";

export default function ProjectsSection({ data: projects = site.projectsSection, className = "" }: SectionProps<ConstrixProjectsData>) {
  return (
    <section className={`relative overflow-hidden bg-ink py-(--section-gap) ${className}`}>
      {/* faint watermark word behind the heading, as on the Constrix website */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 select-none font-display text-[6rem] font-extrabold uppercase leading-none text-white/[0.03] sm:text-[10rem]"
      >
        {projects.titleAccent}
      </span>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          tone="light"
          label={projects.label}
          titleTop={projects.titleTop}
          titleAccent={projects.titleAccent}
          description={projects.description}
        />
        <div data-reveal className="mt-10">
          <ProjectsGrid data={projects} />
        </div>
      </div>
    </section>
  );
}
