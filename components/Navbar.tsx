"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site, type ConstrixHeaderData, type SectionProps } from "@/data";
import Icon from "@/components/Icon";

/** id of the landing page section a link points to ("#about" → "about") */
const sectionId = (href: string) => href.replace(/^#/, "");

/** Look of the header "Get a Quote" button (filled copper, turns white on hover) */
const ctaClass =
  "inline-flex items-center justify-center gap-2 rounded-[3px] border border-copper bg-copper font-display text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-[0_10px_30px_-12px_rgba(212,121,48,0.7)] transition-colors hover:bg-white hover:text-copper";

/** Keeps track of the section in the middle of the screen, so its link is shown as the current one */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export default function Navbar({ data = site.navbar }: SectionProps<ConstrixHeaderData>) {
  const { brand, navigation: links, cta, labels } = data;
  const [ids] = useState(() => links.map((link) => sectionId(link.href)));
  // the "Get a Quote" button already leads to the contact section, so its link is left out of both menus
  const menuLinks = links.filter((link) => link.href !== cta.href);
  const active = useActiveSection(ids);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // over the dark hero the header is see-through with white text; once scrolled (or with the menu open) it turns white
  const solid = scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /** The logo scrolls back to the top and drops any "#section" from the address bar, without reloading the page */
  const goHome = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    window.scrollTo({ top: 0 });
    if (window.location.hash) history.pushState(null, "", window.location.pathname + window.location.search);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 mx-auto max-w-[1920px] transition-all duration-300 ${
        solid ? "bg-page/95 shadow-[0_8px_30px_-18px_rgba(10,28,38,0.45)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* both logos are in the page, so switching between them never waits for a download */}
        <Link href="/" onClick={goHome} aria-label={labels.home} className="relative">
          <Image
            src={brand.logo.src}
            alt={brand.logo.alt}
            width={brand.logo.width}
            height={brand.logo.height}
            preload
            sizes="200px"
            className={`h-auto w-36 transition-opacity duration-300 sm:w-40 ${solid ? "opacity-100" : "opacity-0"}`}
          />
          <Image
            src={brand.logo.srcLight}
            alt=""
            width={brand.logo.width}
            height={brand.logo.height}
            preload
            sizes="200px"
            className={`absolute inset-0 h-auto w-36 transition-opacity duration-300 sm:w-40 ${solid ? "opacity-0" : "opacity-100"}`}
          />
        </Link>

        <nav aria-label={labels.mainNav} className="hidden items-center gap-1 lg:flex">
          {menuLinks.map((link) => {
            const current = sectionId(link.href) === active;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={current ? "location" : undefined}
                className={`relative px-3 py-2 font-display text-[0.8rem] font-semibold uppercase tracking-[0.08em] transition-colors after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-center after:bg-copper after:transition-transform after:duration-300 ${
                  current
                    ? "text-copper after:scale-x-100"
                    : `${solid ? "text-ink" : "text-white"} after:scale-x-0 hover:text-copper`
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a href={cta.href} className={`${ctaClass} px-6 py-3 max-sm:hidden`}>
            {cta.label}
            <Icon name="arrowRight" className="size-4" strokeWidth={2.2} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? labels.closeMenu : labels.openMenu}
            className={`grid size-11 place-items-center rounded-[3px] border transition-colors lg:hidden ${
              solid ? "border-line text-ink" : "border-white/40 text-white"
            }`}
          >
            <Icon name={open ? "close" : "menu"} className="size-6" />
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label={labels.mobileNav}
        // when open it fills the whole screen below the header, so the page behind it does not show through
        className={`overflow-y-auto border-t bg-page transition-[height] duration-500 lg:hidden ${
          open ? "h-[calc(100dvh-5rem)] border-line" : "h-0 border-transparent"
        }`}
      >
        <ul className="flex flex-col px-4 py-4 sm:px-6">
          {menuLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between border-b border-line py-3.5 font-display text-sm font-semibold uppercase tracking-[0.1em] transition-colors hover:text-copper ${
                  sectionId(link.href) === active ? "text-copper" : "text-ink/85"
                }`}
              >
                {link.label}
                <Icon name="chevronRight" className="size-4 text-copper" strokeWidth={2.2} />
              </a>
            </li>
          ))}
          <li className="pt-5 sm:hidden">
            <a href={cta.href} onClick={() => setOpen(false)} className={`${ctaClass} w-full px-7 py-3.5`}>
              {cta.label}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
