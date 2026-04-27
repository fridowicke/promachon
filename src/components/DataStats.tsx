const stats = [
  {
    num: "10,000+",
    label: "Policy clauses analysed per placement — systematically, not by skim-reading.",
  },
  {
    num: "Days",
    label: "From brief to bound coverage. Not weeks, and not at renewal only.",
  },
  {
    num: "1:1",
    label: "Senior advisor per client. No junior hand-offs, no call centres.",
  },
  {
    num: "24 / 7",
    label: "Continuous monitoring of markets, conditions, and your portfolio.",
  },
];

export default function DataStats() {
  return (
    <section className="border-b border-rule bg-canvas-soft py-20 md:py-[110px]">
      <div className="mx-auto max-w-[1240px] px-8">
        <div className="max-w-[720px]">
          <p className="label mb-5">Built on data</p>
          <h2 className="font-serif text-[clamp(32px,4.2vw,52px)] leading-[1.08] tracking-tight">
            Human expertise. AI does the reading.
          </h2>
          <p className="mt-6 max-w-[58ch] text-[17px] leading-[1.7] text-ink-soft">
            We lead with judgement — AI just lets us read every clause, compare
            every carrier, and stay on top of conditions across your entire
            programme. The advice is ours. The coverage breadth is what the
            machines make possible.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-10 border-t border-rule pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.num}>
              <div className="mb-3 font-serif text-[clamp(36px,4vw,52px)] leading-none tracking-tight">
                {s.num}
              </div>
              <div className="max-w-[32ch] text-[14.5px] leading-[1.55] text-ink-soft">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
