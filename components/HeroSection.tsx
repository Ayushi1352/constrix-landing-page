import Image from "next/image";
import { site, type ConstrixHeroData, type SectionProps } from "@/data";
import Icon from "@/components/Icon";

/** Plays once on load (CSS @starting-style), so the hero never waits for JavaScript */
const enter = "transition-[opacity,translate] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-7 starting:opacity-0";

export default function HeroSection({ data: hero = site.hero, className = "" }: SectionProps<ConstrixHeroData>) {
  return (
    <section className={`relative isolate overflow-hidden bg-ink pt-20 ${className}`}>
      <Image src={hero.image} alt="" fill preload quality={90} sizes="100vw" className="-z-20 object-cover object-[70%_center]" />
      {/* dark fade from the left keeps the text readable without editing the photo */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/75 lg:bg-transparent lg:bg-linear-to-r lg:from-ink lg:from-25% lg:via-ink/80 lg:via-50% lg:to-ink/10" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-linear-to-t from-night via-night/60 to-transparent" />

      <div className="mx-auto flex max-w-7xl items-center px-4 py-(--section-gap) sm:px-6 lg:min-h-[40rem] lg:px-8">
        <div className={`w-full min-w-0 ${enter}`}>
          <p className="flex items-center gap-3 font-display text-xs font-medium uppercase tracking-[0.24em] text-white sm:gap-4 sm:text-sm sm:tracking-[0.32em]">
            <span className="h-0.5 w-10 bg-copper" aria-hidden="true" /> {hero.label}
          </p>
          {/* on phones the size follows the screen width, so the long word "TOMORROW" always fits on one line */}
          <h1 className="mt-5 font-display text-[length:min(3rem,calc((100vw-2rem)/6.8))] font-extrabold uppercase leading-[1.02] tracking-[-0.03em] sm:text-7xl lg:text-[6rem]">
            <span className="block text-white">{hero.titleTop}</span>
            <span className="block bg-linear-to-b from-copper-light to-copper bg-clip-text text-transparent">{hero.titleAccent}</span>
          </h1>
          {/* the one call-to-action scrolls down to the contact section */}
          <a
            href={hero.button.href}
            className="mt-9 inline-flex items-center justify-center gap-3 rounded-[3px] border border-copper bg-copper px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-[0_10px_30px_-12px_rgba(212,121,48,0.8)] transition-colors hover:bg-white hover:text-copper"
          >
            {hero.button.label}
            <Icon name="arrowRight" className="size-4.5" strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </section>
  );
}
