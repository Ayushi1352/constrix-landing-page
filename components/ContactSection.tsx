import { site, type ConstrixContactData, type SectionProps } from "@/data";
import EnquiryForm from "@/components/EnquiryForm";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";

/** Contact details and the quote request form (the website's Contact Us and Get a Quote pages in one) */
export default function ContactSection({ data: contact = site.contactSection, className = "" }: SectionProps<ConstrixContactData>) {
  return (
    <section className={`bg-cream py-(--section-gap) ${className}`}>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <div>
          <SectionHeading label={contact.label} titleTop={contact.titleTop} titleAccent={contact.titleAccent} description={contact.description} />
          <ul data-reveal className="mt-8 grid gap-4 sm:grid-cols-2">
            {contact.info.map((item) => {
              const external = item.href.startsWith("http");
              const body = (
                <>
                  <span className="grid size-12 shrink-0 place-items-center rounded-[4px] bg-copper text-white transition-colors group-hover:bg-ink">
                    <Icon name={item.icon} className="size-5" />
                  </span>
                  <span>
                    <span className="block font-display font-bold text-ink">{item.title}</span>
                    {item.lines.map((line) => (
                      <span key={line} className="block text-sm text-slate underline-offset-4 group-hover:text-copper group-hover:underline">
                        {line}
                      </span>
                    ))}
                  </span>
                </>
              );
              const box = "flex h-full items-start gap-4 rounded-[5px] border border-line bg-page p-5 transition-colors";
              return (
                <li key={item.title}>
                  {/* working hours have no link, so they show as a plain card */}
                  {item.href ? (
                    <a
                      href={item.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className={`group ${box} hover:border-copper`}
                    >
                      {body}
                    </a>
                  ) : (
                    <div className={box}>{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
          <ul data-reveal className="mt-8 grid gap-3">
            {contact.benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-sm font-medium text-ink">
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-copper text-white">
                  <Icon name="check" className="size-3" strokeWidth={3} />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* on desktop the form card stretches to the height of the left column, so both end on the same line */}
        <div data-reveal className="relative flex flex-col overflow-hidden rounded-[5px] bg-page p-6 shadow-[0_24px_60px_-34px_rgba(10,28,38,0.45)] sm:p-10">
          <div aria-hidden="true" className="absolute left-0 top-0 h-1 w-full bg-linear-to-r from-copper via-flame to-copper-dark" />
          <p className="flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.3em] text-copper">
            <span className="h-0.5 w-8 bg-copper" aria-hidden="true" />
            {contact.form.label}
          </p>
          <h3 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.02em] text-ink">{contact.form.title}</h3>
          <p className="mt-2 text-sm text-slate">{contact.form.description}</p>
          <EnquiryForm data={site.enquiryFormSection} />
        </div>
      </div>
    </section>
  );
}
