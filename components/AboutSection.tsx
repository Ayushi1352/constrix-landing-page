"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { site, type ConstrixAboutData, type SectionProps } from "@/data";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";

/** Counts up to `value` the first time it scrolls into view (shows the final number without JS or with reduced motion) */
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 1800, 1);
        setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    // only counts when it starts below the screen, so a number already in view never jumps back to 0
    if (el.getBoundingClientRect().top > window.innerHeight) {
      frame = requestAnimationFrame(() => setDisplay(0));
      observer.observe(el);
    }
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export default function AboutSection({ data: about = site.aboutSection, className = "" }: SectionProps<ConstrixAboutData>) {
  return (
    <section className={`bg-page py-(--section-gap) ${className}`}>
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* two overlapping photos with the experience badge */}
        <div data-reveal className="relative mx-auto w-full max-w-lg pb-16 sm:pb-20">
          <div className="relative aspect-[4/5] w-[78%] overflow-hidden rounded-[4px]">
            <Image quality={90} src={about.primaryImage} alt={about.primaryImageAlt} fill sizes="(min-width: 1024px) 400px, 70vw" className="object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 aspect-[4/5] w-[52%] overflow-hidden rounded-[4px] border-8 border-page shadow-2xl">
            <Image quality={90} src={about.secondaryImage} alt={about.secondaryImageAlt} fill sizes="(min-width: 1024px) 270px, 45vw" className="object-cover" />
          </div>
          <div className="absolute left-[62%] top-8 -translate-x-1/2 rounded-[4px] bg-copper px-5 py-4 text-center text-white shadow-[0_20px_40px_-18px_rgba(169,94,30,0.8)]">
            <p className="font-display text-4xl font-extrabold leading-none">{about.badge.value}</p>
            <p className="mt-1.5 max-w-24 text-[0.7rem] font-medium uppercase leading-tight tracking-wider">{about.badge.label}</p>
          </div>
          <span aria-hidden="true" className="absolute -left-3 bottom-24 hidden h-40 w-3 bg-copper sm:block" />
        </div>

        <div>
          <SectionHeading label={about.label} titleTop={about.titleTop} titleAccent={about.titleAccent} />
          <div data-reveal className="mt-6 space-y-4 leading-relaxed text-slate">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul data-reveal className="mt-7 grid gap-3 sm:grid-cols-2">
            {about.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm font-medium text-ink">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-copper text-white">
                  <Icon name="check" className="size-3" strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <dl data-reveal className="mt-10 grid grid-cols-2 gap-4 border-y border-line py-6 sm:grid-cols-4">
            {about.stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-extrabold text-copper sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </dd>
                <dd aria-hidden="true" className="mt-1 text-[0.7rem] font-medium uppercase tracking-wider text-subtle">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Why choose Constrix */}
      <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p data-reveal className="flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.3em] text-copper">
          <span className="h-0.5 w-8 bg-copper" aria-hidden="true" />
          {about.whyLabel}
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {about.whyChoose.map((item, index) => (
            <div
              key={item.title}
              data-reveal
              data-reveal-delay={index * 90}
              className="group relative overflow-hidden rounded-[4px] border border-line bg-cream p-6 transition-colors duration-500 hover:border-ink hover:bg-ink"
            >
              <span className="grid size-13 place-items-center rounded-[4px] bg-copper text-white shadow-[0_6px_14px_rgba(212,121,48,0.35)]">
                <Icon name={item.icon} className="size-6" strokeWidth={1.6} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink transition-colors duration-500 group-hover:text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate transition-colors duration-500 group-hover:text-white/70">{item.text}</p>
              <span aria-hidden="true" className="absolute right-5 top-5 font-display text-3xl font-extrabold text-ink/5 transition-colors duration-500 group-hover:text-white/10">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
