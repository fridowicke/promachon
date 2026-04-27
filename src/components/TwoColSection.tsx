import type { ReactNode } from "react";

type Props = {
  id?: string;
  label: string;
  heading: ReactNode;
  children: ReactNode;
  soft?: boolean;
};

export default function TwoColSection({ id, label, heading, children, soft }: Props) {
  return (
    <section
      id={id}
      className={`border-b border-rule py-20 md:py-[110px] ${soft ? "bg-canvas-soft" : ""}`}
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-8 px-8 md:grid-cols-2 md:gap-20">
        <div>
          <p className="label mb-5">{label}</p>
          <h2 className="font-serif text-[clamp(32px,4.2vw,52px)] leading-[1.08] tracking-tight">
            {heading}
          </h2>
        </div>
        <div className="max-w-[54ch] space-y-4 text-[17px] leading-[1.7] text-ink-soft">
          {children}
        </div>
      </div>
    </section>
  );
}
