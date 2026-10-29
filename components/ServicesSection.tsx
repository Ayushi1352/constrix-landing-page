import Image from "next/image";
import { site, type ConstrixServicesData, type SectionProps } from "@/data";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";

/** Service cards, each with a "Get a Quote" link down to the contact section, plus the featured band */
export default function ServicesSection({ data: services = site.servicesSection, className = "" }: SectionProps<ConstrixServicesData>) {
  const { featured } = services;

  return (
    <section className={`bg-cream py-(--section-gap) ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          label={services.label}
          titleTop={services.titleTop}
          titleAccent={services.titleAccent}
          description={services.description}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.cards.map((card, index) => (
            <article
              key={card.title}
              data-reveal
              data-reveal-delay={(index % 4) * 90}
              className="group flex flex-col overflow-hidden rounded-[5px] bg-page shadow-[0_2px_14px_rgba(60,40,20,0.06)] transition-shadow duration-500 hover:shadow-[0_18px_40px_-16px_rgba(60,40,20,0.3)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  quality={90}
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="grid size-14 place-items-center rounded-[5px] bg-copper text-white shadow-[0_6px_14px_rgba(212,121,48,0.4)] transition-colors group-hover:bg-ink">
                  <Icon name={card.icon} className="size-7" strokeWidth={1.4} />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-ink transition-colors group-hover:text-copper">{card.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{card.text}</p>
                <div className="mt-5 border-t border-line pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.12em] text-copper underline-offset-4 transition-colors hover:text-copper-dark hover:underline"
                  >
                    {services.cardButton}
                    <Icon name="arrowRight" className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Featured band */}
        <div data-reveal className="mt-20 grid overflow-hidden rounded-[5px] bg-ink lg:grid-cols-2">
          <div className="relative min-h-72 lg:min-h-[26rem]">
            <Image quality={90} src={featured.image} alt={featured.imageAlt} fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
          </div>
          <div className="relative p-8 sm:p-12">
            <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-copper" />
            <p className="flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.3em] text-copper-light">
              <span className="h-0.5 w-8 bg-copper" aria-hidden="true" />
              {featured.label}
            </p>
            <h3 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-white sm:text-4xl">
              {featured.titleTop} <span className="text-flame">{featured.titleAccent}</span>
            </h3>
            <p className="mt-4 max-w-md leading-relaxed text-white/70">{featured.description}</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {featured.features.map((feature) => (
                <li key={feature.title} className="flex items-center gap-3 rounded-[4px] bg-panel px-4 py-3 text-sm font-medium text-white">
                  <Icon name={feature.icon} className="size-5 shrink-0 text-copper-light" strokeWidth={1.7} />
                  {feature.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
