import { site, type ConstrixFaqData, type SectionProps } from "@/data";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";

/** Questions as native <details> (one open at a time via `name`), so the answers work and are findable without JavaScript */
export default function FaqSection({ data: faq = site.faqSection, className = "" }: SectionProps<ConstrixFaqData>) {
  return (
    <section className={`bg-page py-(--section-gap) ${className}`}>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
        <div>
          <SectionHeading label={faq.label} titleTop={faq.titleTop} titleAccent={faq.titleAccent} description={faq.description} />
          <div data-reveal className="mt-8 rounded-[5px] border-l-4 border-copper bg-ink p-7 text-white">
            <h3 className="font-display text-xl font-bold">{faq.help.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{faq.help.text}</p>
            <a
              href={faq.help.button.href}
              className="mt-6 inline-flex items-center gap-3 rounded-[3px] border border-copper bg-copper px-6 py-3 font-display text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-copper"
            >
              {faq.help.button.label}
              <Icon name="arrowRight" className="size-4" strokeWidth={2.2} />
            </a>
          </div>
        </div>

        <div className="grid content-start gap-4">
          {faq.items.map((item, index) => (
            <details
              key={item.question}
              name="faq"
              open={index === 0}
              data-reveal
              data-reveal-delay={(index % 3) * 80}
              className="group rounded-[5px] border border-line bg-cream transition-colors open:border-copper/40 open:bg-page open:shadow-[0_14px_34px_-22px_rgba(60,40,20,0.35)]"
            >
              <summary className="flex list-none items-center gap-4 px-5 py-5 sm:px-6 [&::-webkit-details-marker]:hidden">
                <span className="font-display text-sm font-extrabold text-copper">{String(index + 1).padStart(2, "0")}</span>
                <span className="flex-1 font-display font-bold text-ink">{item.question}</span>
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-peach text-copper transition-[rotate,background-color,color] duration-300 group-open:rotate-45 group-open:bg-copper group-open:text-white">
                  <Icon name="plus" className="size-4" strokeWidth={2.4} />
                </span>
              </summary>
              <p className="px-5 pb-6 pl-14 text-sm leading-relaxed text-slate sm:px-6 sm:pl-15">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
