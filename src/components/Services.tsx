const pillars = [
  {
    n: "01",
    title: "Risk Analysis",
    body: "A structured review of the exposures that actually matter to your business — quantified, prioritised, and documented.",
  },
  {
    n: "02",
    title: "Placement",
    body: "We negotiate with international carriers on your behalf. Comprehensive market comparison, clear recommendations, coverage bound in days rather than weeks.",
  },
  {
    n: "03",
    title: "Continuous Monitoring",
    body: "Markets move, your business moves, regulations move. We watch the conditions and renegotiate as soon as a better outcome is available — not just at renewal.",
  },
  {
    n: "04",
    title: "Claims Advocacy",
    body: "When a claim occurs, we represent your interests. Preparation, documentation, and direct negotiation with the carrier until the matter is resolved.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-rule py-20 md:py-[110px]">
      <div className="mx-auto max-w-[1180px] px-8">
        <p className="label mb-5">Services</p>
        <h2 className="font-serif text-[clamp(32px,4.2vw,52px)] leading-[1.08] tracking-tight">
          What we do
        </h2>

        <div className="mt-14 grid grid-cols-1 border-t border-rule md:grid-cols-2">
          {pillars.map((p, i) => {
            const odd = i % 2 === 0;
            const isLastRow = i >= pillars.length - 2;
            return (
              <article
                key={p.n}
                className={[
                  "py-10 md:py-11",
                  odd ? "md:border-r md:border-rule md:pr-12" : "md:pl-12",
                  isLastRow ? "border-b border-rule md:border-b-0" : "border-b border-rule",
                ].join(" ")}
              >
                <div className="mb-3.5 font-serif text-[14px] tracking-wide text-ink-muted">
                  {p.n}
                </div>
                <h3 className="mb-3.5 font-serif text-[28px] leading-[1.15]">
                  {p.title}
                </h3>
                <p className="max-w-[42ch] text-[16px] leading-[1.65] text-ink-soft">
                  {p.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
