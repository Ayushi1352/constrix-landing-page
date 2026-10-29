"use client";

import { useEffect, useState } from "react";
import { site, type ConstrixTestimonialsData, type SectionProps } from "@/data";
import Icon from "@/components/Icon";

const AUTOPLAY_MS = 6000;

/** One quote at a time; moves on by itself and waits while the visitor hovers it */
export default function TestimonialSlider({ data = site.testimonialsSection }: SectionProps<ConstrixTestimonialsData>) {
  const { items } = data;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const item = items[index];
  const go = (step: number) => setIndex((current) => (current + step + items.length) % items.length);

  useEffect(() => {
    if (paused || items.length < 2) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % items.length), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [index, paused, items.length]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="relative min-h-[16rem] sm:min-h-[13rem]" aria-live="polite">
        <Icon name="quote" className="absolute -left-1 -top-12 size-16 text-copper/15" />
        {/* keyed by slide, so each new quote fades in */}
        <blockquote key={index} className="relative transition-[opacity,translate] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-7 starting:opacity-0">
          <p className="text-lg leading-relaxed text-ink sm:text-xl">{item.quote}</p>
          <footer className="mt-7 flex items-center gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-copper font-display text-lg font-bold text-white">
              {item.name[0]}
            </span>
            <span>
              <span className="block font-display font-bold text-ink">{item.name}</span>
              <span className="text-sm text-subtle">{item.role}</span>
            </span>
            <span className="ml-auto hidden gap-0.5 text-copper sm:flex" role="img" aria-label={data.ratingLabel}>
              {Array.from({ length: 5 }, (_, n) => (
                <Icon key={n} name="starFill" className="size-4.5" />
              ))}
            </span>
          </footer>
        </blockquote>
      </div>

      <div className="mt-10 flex items-center gap-4">
        <button
          type="button"
          aria-label={data.previousLabel}
          onClick={() => go(-1)}
          className="grid size-11 place-items-center rounded-full border border-ink/20 text-ink transition-colors hover:border-copper hover:bg-copper hover:text-white"
        >
          <Icon name="chevronLeft" className="size-5" strokeWidth={2.2} />
        </button>
        <button
          type="button"
          aria-label={data.nextLabel}
          onClick={() => go(1)}
          className="grid size-11 place-items-center rounded-full border border-ink/20 text-ink transition-colors hover:border-copper hover:bg-copper hover:text-white"
        >
          <Icon name="chevronRight" className="size-5" strokeWidth={2.2} />
        </button>
        <div className="ml-2 flex gap-2">
          {items.map((testimonial, n) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={data.showLabel.replace("{name}", testimonial.name)}
              aria-current={n === index}
              onClick={() => setIndex(n)}
              className={`h-1.5 rounded-full transition-all duration-500 ${n === index ? "w-8 bg-copper" : "w-3 bg-ink/15 hover:bg-ink/35"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
