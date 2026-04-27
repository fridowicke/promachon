import { useState, type FormEvent } from "react";

export default function LeadForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const company = String(fd.get("company") || "");
    const email = String(fd.get("email") || "");
    const phone = String(fd.get("phone") || "");
    const coverage = String(fd.get("coverage") || "");
    const notes = String(fd.get("notes") || "");

    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Coverage of interest: ${coverage}`,
      "",
      notes,
    ].join("\n");

    window.location.href = `mailto:hello@promachon.com?subject=${encodeURIComponent(
      `Coverage enquiry — ${company || name}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="quote" className="bg-ink px-8 py-24 text-canvas md:py-32">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 md:grid-cols-[1.05fr_1fr] md:gap-20">
        <div>
          <p className="mb-6 text-[12px] font-medium uppercase tracking-[0.18em] text-canvas/60">
            Get a quote
          </p>
          <h2 className="mb-6 font-serif text-[clamp(36px,5vw,64px)] leading-[1.05] tracking-tight">
            Let&rsquo;s look at your coverage.
          </h2>
          <p className="max-w-[48ch] text-[clamp(17px,1.5vw,19px)] leading-[1.6] text-canvas/75">
            If you&rsquo;ve been told it&rsquo;s &ldquo;too complex&rdquo; or
            &ldquo;too niche&rdquo; — we&rsquo;d like to take a look. A
            thirty-minute conversation is usually enough to tell whether we
            can improve on what you have today.
          </p>
          <div className="mt-10 space-y-3 text-[15px] text-canvas/80">
            <div>
              <a
                href="mailto:hello@promachon.com"
                className="border-b border-canvas/40 pb-0.5"
              >
                hello@promachon.com
              </a>
            </div>
            <div>
              <a href="tel:+41445005000" className="border-b border-canvas/40 pb-0.5">
                +41 44 500 50 00
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-5" noValidate>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field name="name" label="Name" required />
            <Field name="company" label="Company" required />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field name="email" label="Email" type="email" required />
            <Field name="phone" label="Phone" type="tel" />
          </div>
          <div>
            <label className="mb-2 block text-[12px] uppercase tracking-[0.18em] text-canvas/60">
              Coverage of interest
            </label>
            <select
              name="coverage"
              defaultValue=""
              className="w-full border-b border-canvas/30 bg-transparent py-2.5 text-[15px] text-canvas outline-none transition-colors focus:border-canvas"
            >
              <option value="" className="text-ink">Select…</option>
              <option className="text-ink">Full programme review</option>
              <option className="text-ink">Property & BI</option>
              <option className="text-ink">Liability / D&amp;O</option>
              <option className="text-ink">Cyber</option>
              <option className="text-ink">Employee Benefits / Pensions</option>
              <option className="text-ink">Transport & Cargo</option>
              <option className="text-ink">Other</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-[12px] uppercase tracking-[0.18em] text-canvas/60">
              Notes
            </label>
            <textarea
              name="notes"
              rows={4}
              className="w-full border-b border-canvas/30 bg-transparent py-2.5 text-[15px] text-canvas outline-none transition-colors focus:border-canvas"
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex items-center rounded-full bg-canvas px-6 py-3.5 text-[15px] text-ink transition-colors hover:bg-white hover:opacity-100"
          >
            {sent ? "Opening your mail client…" : "Send enquiry"}
          </button>
          <p className="text-[12px] text-canvas/50">
            We respond within one working day. Your details stay with
            Promachon — we don&rsquo;t share them with carriers until you
            authorise us to.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[12px] uppercase tracking-[0.18em] text-canvas/60"
      >
        {label} {required && <span className="text-canvas/40">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border-b border-canvas/30 bg-transparent py-2.5 text-[15px] text-canvas outline-none transition-colors focus:border-canvas"
      />
    </div>
  );
}
