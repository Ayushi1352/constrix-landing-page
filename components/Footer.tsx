import Image from "next/image";
import { site, type ConstrixFooterData, type SectionProps } from "@/data";
import Icon from "@/components/Icon";

// The footer shows the white version of the header logo and the contact section's details
const { brand } = site.navbar;
const contactInfo = site.contactSection.info;

/** Fills `{year}` in the copyright line; cached so the footer can still be prerendered. */
async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

// on phones the two link columns sit side by side, so their text is a size smaller there
const heading = "font-display text-xs font-bold uppercase tracking-[0.15em] text-white sm:text-sm sm:tracking-[0.2em]";
const linkClass = "group inline-flex items-center gap-2 text-xs transition-colors hover:text-copper-light sm:text-sm";
const dash = <span className="h-0.5 w-3 bg-copper transition-all duration-300 group-hover:w-5" aria-hidden="true" />;

export default async function Footer({ data: footer = site.footer }: SectionProps<ConstrixFooterData>) {
  const copyright = footer.copyright.replace("{year}", String(await currentYear()));

  return (
    <footer className="relative overflow-hidden bg-night text-white/70">
      <div aria-hidden="true" className="pointer-events-none absolute -top-48 right-0 size-[34rem] rounded-full bg-copper/10 blur-3xl" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-copper via-flame to-copper-dark" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-12 px-4 py-(--section-gap) sm:px-6 lg:grid-cols-[1.4fr_1fr_1.3fr] lg:px-8">
        {/* the logo takes a full row below desktop, so Quick Links and Get In Touch share the next one */}
        <div className="col-span-2 lg:col-span-1">
          <Image src={brand.logo.srcLight} alt={brand.name} width={brand.logo.width} height={brand.logo.height} sizes="200px" className="h-auto w-44" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">{footer.tagline}</p>
          <div className="mt-6 flex gap-3">
            {footer.socials.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="grid size-10 place-items-center rounded-full border border-white/20 transition-colors hover:border-copper hover:bg-copper hover:text-white"
              >
                <Icon name={social.platform} className="size-4.5" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label={footer.quickLinksTitle}>
          <h2 className={heading}>{footer.quickLinksTitle}</h2>
          <ul className="mt-5 grid gap-3 sm:mt-6">
            {footer.quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {dash}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={heading}>{footer.contactTitle}</h2>
          <ul className="mt-5 grid gap-4 text-xs sm:mt-6 sm:gap-5 sm:text-sm">
            {contactInfo.map((item) => {
              const external = item.href.startsWith("http");
              // each line on its own row, so the address and hours wrap neatly in the narrow phone column
              const text = item.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ));
              return (
                <li key={item.title} className="flex min-w-0 items-start gap-2 sm:gap-3">
                  <Icon name={item.icon} className="mt-0.5 size-4 shrink-0 text-copper-light sm:size-4.5" />
                  {item.href ? (
                    <a
                      href={item.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="min-w-0 break-words transition-colors hover:text-copper-light hover:underline hover:underline-offset-4"
                    >
                      {text}
                    </a>
                  ) : (
                    <span>{text}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-xs sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p>{copyright}</p>
          <p className="font-display font-bold uppercase tracking-[0.35em] text-copper-light">
            {footer.motto.map((word, index) => (
              <span key={word}>
                {index > 0 && <span className="text-white/30"> / </span>}
                {word}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
