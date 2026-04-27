import Logo from "./Logo";

const links = [
  { href: "#coverage", label: "Coverage" },
  { href: "#industries", label: "Industries" },
  { href: "#approach", label: "Approach" },
  { href: "#team", label: "Team" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-canvas/85 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-8">
        <a href="#top" aria-label="Promachon home" className="flex items-center gap-3">
          <Logo size={32} />
          <span className="font-serif text-[22px] leading-none">Promachon</span>
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-[34px] text-[14.5px] text-ink-soft">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-5">
          <a
            href="tel:+41445005000"
            className="hidden text-[14px] text-ink-soft md:inline"
          >
            +41 44 500 50 00
          </a>
          <a
            href="#quote"
            className="rounded-full border border-ink px-[18px] py-2.5 text-[14px] transition-colors hover:bg-ink hover:text-canvas hover:opacity-100"
          >
            Get a quote
          </a>
        </div>
      </div>
    </header>
  );
}
