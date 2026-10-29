/** Section intro used across the page: copper-lined label, bold title with a flame highlight, optional text */
export default function SectionHeading({
  label,
  titleTop,
  titleAccent,
  description,
  align = "left",
  tone = "dark",
  className = "",
}: {
  label: string;
  titleTop: string;
  titleAccent: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  const center = align === "center";
  const light = tone === "light";

  return (
    <div data-reveal className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-xl"} ${className}`}>
      <p
        className={`flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.3em] ${center ? "justify-center" : ""} ${
          light ? "text-copper-light" : "text-copper"
        }`}
      >
        <span className="h-0.5 w-8 bg-copper" aria-hidden="true" />
        {label}
        {center && <span className="h-0.5 w-8 bg-copper" aria-hidden="true" />}
      </p>
      <h2
        className={`mt-4 font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.02em] sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {titleTop} <span className="text-flame">{titleAccent}</span>
      </h2>
      {description && <p className={`mt-4 leading-relaxed ${light ? "text-white/70" : "text-slate"}`}>{description}</p>}
    </div>
  );
}
