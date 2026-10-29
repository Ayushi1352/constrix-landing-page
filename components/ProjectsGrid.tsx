"use client";

import Image from "next/image";
import { useRef, useState, type ReactNode } from "react";
import { site, type ConstrixProjectsData, type SectionProps } from "@/data";
import Icon from "@/components/Icon";

function ViewerButton({ label, className, onClick, children }: { label: string; className: string; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`absolute grid size-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-copper ${className}`}
    >
      {children}
    </button>
  );
}

/** Category tabs over a project grid; each project opens in a full-screen viewer that steps through the current tab */
export default function ProjectsGrid({ data = site.projectsSection }: SectionProps<ConstrixProjectsData>) {
  const [category, setCategory] = useState(data.allLabel);
  const [index, setIndex] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const tabs = [data.allLabel, ...data.categories];
  const projects = category === data.allLabel ? data.items : data.items.filter((item) => item.category === category);

  const show = (i: number) => {
    setIndex(i);
    dialog.current?.showModal();
  };
  const step = (delta: number) => setIndex((i) => (i === null ? i : (i + delta + projects.length) % projects.length));
  const project = index === null ? null : projects[index];

  return (
    <>
      <div role="group" aria-label={data.filterLabel} className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            aria-pressed={tab === category}
            onClick={() => setCategory(tab)}
            className={`rounded-[3px] border px-5 py-2.5 font-display text-xs font-bold uppercase tracking-[0.12em] transition-colors ${
              tab === category ? "border-copper bg-copper text-white" : "border-white/20 text-white/80 hover:border-copper hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* keyed by tab, so a new selection fades in */}
      <div key={category} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((item, i) => (
          <button
            key={item.title}
            type="button"
            onClick={() => show(i)}
            aria-label={data.openLabel.replace("{title}", item.title)}
            style={{ transitionDelay: `${(i % 3) * 70}ms` }}
            className={`group relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-[4px] bg-panel transition-[opacity,translate] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-5 starting:opacity-0 ${
              // in "All", the 1st, 9th, 17th… project spans two columns on desktop to break the rhythm; with 10 projects every row fills
              category === data.allLabel && i % 8 === 0 && i < projects.length - 1 ? "lg:col-span-2 lg:aspect-auto" : ""
            }`}
          >
            <Image
              quality={90}
              src={item.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
            />
            <span className="absolute inset-0 bg-linear-to-t from-night/90 via-night/20 to-transparent" />
            <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-left">
              <span>
                <span className="block font-display text-[0.7rem] font-bold uppercase tracking-[0.2em] text-copper-light">{item.category}</span>
                <span className="mt-1 block font-display text-lg font-bold leading-snug text-white sm:text-xl">{item.title}</span>
              </span>
              <span className="grid size-10 shrink-0 translate-y-2 place-items-center rounded-full bg-copper text-white opacity-0 transition-[opacity,translate] duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                <Icon name="plus" className="size-5" strokeWidth={2.2} />
              </span>
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialog}
        aria-label={data.viewerLabel}
        onClose={() => setIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
        className="m-auto h-[min(85dvh,900px)] w-[calc(100%-2rem)] max-w-5xl bg-transparent p-0 backdrop:bg-black/85 open:transition-[opacity,translate] open:duration-500 open:ease-[cubic-bezier(0.22,1,0.36,1)] open:starting:translate-y-5 open:starting:opacity-0"
      >
        {project && index !== null && (
          <figure className="relative flex h-full flex-col">
            <div className="relative flex-1">
              <Image quality={90} src={project.image} alt={project.title} fill sizes="100vw" className="object-contain" />
            </div>
            <figcaption className="pt-4 text-center font-display text-lg font-bold text-white">
              <span className="mr-3 text-xs font-bold uppercase tracking-[0.2em] text-copper-light">{project.category}</span>
              {project.title}
              <span className="ml-3 font-sans text-xs font-normal text-white/60">
                {index + 1} / {projects.length}
              </span>
            </figcaption>
            <ViewerButton label={data.closeLabel} className="right-2 top-2" onClick={() => dialog.current?.close()}>
              <Icon name="close" className="size-5" />
            </ViewerButton>
            {projects.length > 1 && (
              <>
                <ViewerButton label={data.previousLabel} className="left-2 top-1/2 -translate-y-1/2" onClick={() => step(-1)}>
                  <Icon name="chevronLeft" className="size-5" strokeWidth={2.2} />
                </ViewerButton>
                <ViewerButton label={data.nextLabel} className="right-2 top-1/2 -translate-y-1/2" onClick={() => step(1)}>
                  <Icon name="chevronRight" className="size-5" strokeWidth={2.2} />
                </ViewerButton>
              </>
            )}
          </figure>
        )}
      </dialog>
    </>
  );
}
