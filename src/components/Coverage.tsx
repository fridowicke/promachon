const items = [
  {
    title: "Property & Business Interruption",
    body: "Buildings, contents, machinery and lost margin when operations stop.",
  },
  {
    title: "General Liability",
    body: "Third-party injury and property damage arising from your operations.",
  },
  {
    title: "Directors & Officers",
    body: "Personal liability protection for your board and executive team.",
  },
  {
    title: "Professional Indemnity",
    body: "Errors & omissions cover for advisory, engineering and professional services.",
  },
  {
    title: "Cyber & Data",
    body: "Breach response, business interruption, extortion and third-party claims.",
  },
  {
    title: "Employee Benefits & Pensions",
    body: "Pension, accident and health programmes — placed and administered.",
  },
  {
    title: "Transport & Cargo",
    body: "Goods in transit, marine and supply-chain exposures, domestic and international.",
  },
  {
    title: "Fleet & Motor",
    body: "Commercial vehicle programs with centralised admin and claims handling.",
  },
];

export default function Coverage() {
  return (
    <section
      id="coverage"
      className="border-b border-rule bg-canvas-soft py-20 md:py-[110px]"
    >
      <div className="mx-auto max-w-[1240px] px-8">
        <div className="md:flex md:items-end md:justify-between md:gap-12">
          <div>
            <p className="label mb-5">Coverage</p>
            <h2 className="font-serif text-[clamp(32px,4.2vw,52px)] leading-[1.08] tracking-tight">
              What we place.
            </h2>
          </div>
          <p className="mt-6 max-w-[44ch] text-[16px] leading-[1.65] text-ink-soft md:mt-0">
            The full commercial programme, placed with international
            carriers — tailored to your risk, not to a product catalogue.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 border-t border-rule sm:grid-cols-2 lg:grid-cols-4">
          {items.map((c, i) => {
            const col = i % 4;
            const row = Math.floor(i / 4);
            const isLastRow = row === Math.floor((items.length - 1) / 4);
            return (
              <article
                key={c.title}
                className={[
                  "py-8 md:py-10",
                  // horizontal rules between columns (lg)
                  col !== 3 ? "lg:border-r lg:border-rule" : "",
                  col !== 1 ? "sm:border-r sm:border-rule lg:border-r-0" : "",
                  col === 1 ? "sm:border-r-0" : "",
                  col % 2 === 0 ? "sm:pr-8" : "sm:pl-8",
                  "lg:px-6",
                  // bottom border except last row
                  isLastRow ? "border-b border-rule lg:border-b-0" : "border-b border-rule",
                ].join(" ")}
              >
                <h3 className="mb-3 font-serif text-[22px] leading-[1.2]">
                  {c.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-ink-soft">
                  {c.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
