import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-canvas py-9 text-[13px] text-ink-muted">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-6 px-8">
        <div className="flex items-center gap-2.5 font-serif text-[18px] text-ink">
          <Logo size={26} />
          <span className="leading-none">Promachon AG</span>
        </div>
        <div className="flex flex-wrap gap-6">
          <span>© 2026 Promachon</span>
        </div>
      </div>
    </footer>
  );
}
