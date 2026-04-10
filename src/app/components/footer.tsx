import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#080604] border-t border-amber-100/8 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-10">
          <div>
            <p className="font-serif italic text-amber-50/70 text-2xl mb-1">
              Tales of UJ
            </p>
            <p className="text-[9px] uppercase tracking-[0.4em] text-stone-600">
              Photography · Vol. I · Issue No. 01 · Kerala 2025
            </p>
          </div>

          <nav className="flex gap-8 text-[10px] uppercase tracking-[0.3em] text-stone-500">
            <Link
              href="https://www.instagram.com/talesofuj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-50/60 transition-colors duration-200"
            >
              Instagram
            </Link>
            <Link
              href="/me"
              className="hover:text-amber-50/60 transition-colors duration-200"
            >
              Portfolio
            </Link>
          </nav>
        </div>

        {/* Colophon bottom row */}
        <div className="border-t border-amber-100/6 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <span className="text-[9px] uppercase tracking-[0.28em] text-stone-600">
            © {new Date().getFullYear()} Ujual P S · All photographs reserved
          </span>
          <span className="font-serif italic text-stone-700 text-[11px]">
            www.talesofuj.com
          </span>
        </div>
      </div>
    </footer>
  );
}
