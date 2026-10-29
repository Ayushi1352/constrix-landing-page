import Image from "next/image";
import { site, type ConstrixTestimonialsData, type SectionProps } from "@/data";
import TestimonialSlider from "@/components/TestimonialSlider";
import SectionHeading from "@/components/SectionHeading";

export default function TestimonialsSection({ data = site.testimonialsSection, className = "" }: SectionProps<ConstrixTestimonialsData>) {
  return (
    <section className={`bg-cream py-(--section-gap) ${className}`}>
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <div data-reveal className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-[5px] bg-copper sm:translate-x-4 sm:translate-y-4" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[5px]">
            <Image quality={90} src={data.image} alt={data.imageAlt} fill sizes="(min-width: 1024px) 440px, 90vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-8 right-0 rounded-[4px] bg-ink px-6 py-5 text-white shadow-xl sm:-right-8">
            <p className="font-display text-4xl font-extrabold text-copper-light">{data.rating.value}</p>
            <p className="text-xs font-medium uppercase tracking-wider text-white/80">{data.rating.label}</p>
          </div>
        </div>
        <div>
          <SectionHeading label={data.label} titleTop={data.titleTop} titleAccent={data.titleAccent} description={data.description} />
          <div data-reveal className="mt-14">
            <TestimonialSlider data={data} />
          </div>
        </div>
      </div>
    </section>
  );
}
