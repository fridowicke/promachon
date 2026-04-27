import heroVisual from "@/assets/hero-visual.png";

export default function Hero() {
  return (
    <section className="border-b border-rule px-8 py-20 md:py-28">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1.25fr] md:gap-16">
        <div>
          <p className="eyebrow mb-8">
            Insurance Brokerage &amp; Risk Management
          </p>
          <h1 className="mb-7 font-sans font-bold text-[clamp(44px,6.6vw,92px)] leading-[0.98] tracking-[-0.04em]">
            Right coverage.
            <br />
            Right price.
            <br />
            Right <span className="text-ink-muted">now</span>.
          </h1>
          <p className="mb-9 max-w-[52ch] text-[clamp(17px,1.5vw,20px)] leading-[1.55] text-ink-soft">
            We run your business profile against the full market so you
            don&rsquo;t have to. Data-driven brokerage for SMBs who have
            better things to do.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#quote" className="btn btn-primary">
              Get a quote
            </a>
            <a href="#approach" className="btn btn-ghost">
              How we work →
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <img
            src={heroVisual}
            alt="Your business profile, matched against the full market"
            className="h-auto w-full max-w-[900px] mix-blend-multiply select-none"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
