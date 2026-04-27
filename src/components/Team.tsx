export default function Team() {
  return (
    <section id="team" className="border-b border-rule py-20 md:py-[110px]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-8 px-8 md:grid-cols-2 md:gap-20">
        <div>
          <p className="label mb-5">Team</p>
          <h2 className="font-serif text-[clamp(32px,4.2vw,52px)] leading-[1.08] tracking-tight">
            Quant-trained.
            <br />
            Insurance-obsessed.
          </h2>
        </div>
        <div className="max-w-[54ch] space-y-4 text-[17px] leading-[1.7] text-ink-soft">
          <p>
            Promachon was founded by mathematicians, economists and computer
            scientists with operating experience across reinsurance,
            underwriting and quantitative finance.
          </p>
          <p>
            We are small by design. Every client works directly with a senior
            advisor — the same person who reads the policy wording, runs the
            analysis, and picks up the phone when something happens.
          </p>
        </div>
      </div>
    </section>
  );
}
