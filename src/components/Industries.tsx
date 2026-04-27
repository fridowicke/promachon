const verticals = [
  { name: "Technology & Software", note: "SaaS, fintech, deeptech, scale-ups" },
  { name: "Financial Services", note: "Asset managers, VC/PE, family offices" },
  { name: "Life Sciences & Medtech", note: "Clinical trials, device makers, biotech" },
  { name: "Real Estate", note: "Owners, developers, property managers" },
  { name: "Industrial Manufacturing", note: "Process industry, precision engineering" },
  { name: "Professional Services", note: "Consulting, legal, architecture, engineering" },
];

export default function Industries() {
  return (
    <section id="industries" className="border-b border-rule py-20 md:py-[110px]">
      <div className="mx-auto max-w-[1240px] px-8">
        <div className="md:flex md:items-end md:justify-between md:gap-12">
          <div>
            <p className="label mb-5">Industries</p>
            <h2 className="font-serif text-[clamp(32px,4.2vw,52px)] leading-[1.08] tracking-tight">
              Who we work with.
            </h2>
          </div>
          <p className="mt-6 max-w-[44ch] text-[16px] leading-[1.65] text-ink-soft md:mt-0">
            Growth-stage and mid-market companies where exposure is
            meaningful and off-the-shelf coverage isn&rsquo;t enough.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 border-t border-rule sm:grid-cols-2 lg:grid-cols-3">
          {verticals.map((v, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            const isLastRow = row === Math.floor((verticals.length - 1) / 3);
            return (
              <li
                key={v.name}
                className={[
                  "py-9 md:py-10",
                  col !== 2 ? "lg:border-r lg:border-rule" : "",
                  col === 0 ? "sm:border-r sm:border-rule lg:border-r" : "",
                  col === 1 ? "sm:border-r-0 lg:border-r lg:border-rule" : "",
                  col % 2 === 0 ? "sm:pr-8" : "sm:pl-8",
                  "lg:px-8",
                  isLastRow ? "border-b border-rule lg:border-b-0" : "border-b border-rule",
                ].join(" ")}
              >
                <div className="font-serif text-[26px] leading-[1.2]">
                  {v.name}
                </div>
                <div className="mt-2 text-[14px] text-ink-muted">{v.note}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
