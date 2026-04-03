import { Link } from "react-router";

function BrandLogo() {
  return (
    <Link
      to="/"
      aria-label="Accueil NetCom"
      className="group flex items-center gap-2 rounded-lg px-2 py-1 transition hover:bg-white/5"
    >
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 ring-1 ring-fuchsia-300/40 shadow-md shadow-fuchsia-900/30">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            d="M5 17V7l7 7V7l7 10"
            fill="none"
            stroke="url(#brand-gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="brand-gradient" x1="0" y1="0" x2="24" y2="24">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="hidden sm:block leading-tight">
        <strong className="block text-sm text-slate-100">NetCom</strong>
        <span className="block text-[11px] text-slate-400 group-hover:text-fuchsia-100">Support intelligent</span>
      </span>
    </Link>
  );
}

const dropdownItemClass =
  "group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-fuchsia-100";

const buttonClass =
  "inline-flex items-center gap-2 rounded-full border border-fuchsia-300/25 bg-gradient-to-b from-white/10 to-white/5 px-3.5 py-2 text-sm font-medium text-slate-100 shadow-sm shadow-black/20 transition hover:-translate-y-0.5 hover:border-fuchsia-300/50 hover:from-fuchsia-400/20 hover:to-white/10";

export function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-fuchsia-400/20 bg-gradient-to-r from-[#0b1220]/95 via-[#111827]/95 to-[#1f1130]/95 backdrop-blur">
      <div className="grid h-16 w-full grid-cols-[auto_1fr_auto] items-center gap-3 px-2 md:px-4">
        <div className="flex items-center">
          <BrandLogo />
        </div>

        <div className="flex justify-center px-2">
          <label className="relative w-full max-w-md">
          
            <input
              type="search"
              placeholder="Rechercher..."
              className="w-full rounded-lg border border-white/10 bg-white/5 py-2 pr-3 pl-9 text-sm text-slate-100 placeholder:text-slate-400/80 focus:border-fuchsia-300/60 focus:outline-none"
            />
          </label>
        </div>

        <div className="flex items-center gap-2">
          <button className={buttonClass}>
           
            <span>A propos</span>
          </button>

          <details className="group relative">
            <summary className={buttonClass}>Menu ▾</summary>
            <nav className="absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl border border-fuchsia-300/30 bg-gradient-to-b from-[#111827]/95 to-[#0b1220]/95 p-2 shadow-2xl shadow-fuchsia-950/60 backdrop-blur-xl">
              <a className={dropdownItemClass} href="#">
                <span className="flex items-center gap-2">
                  
                  Accueil
                </span>
                <span className="h-2 w-2 rounded-full bg-fuchsia-400/60 opacity-0 transition group-hover:opacity-100" />
              </a>
              <a className={dropdownItemClass} href="#">
                <span className="flex items-center gap-2">
                 
                  Services
                </span>
                <span className="h-2 w-2 rounded-full bg-fuchsia-400/60 opacity-0 transition group-hover:opacity-100" />
              </a>
              <a className={dropdownItemClass} href="#">
                <span className="flex items-center gap-2">
                
                  Contact
                </span>
                <span className="h-2 w-2 rounded-full bg-fuchsia-400/60 opacity-0 transition group-hover:opacity-100" />
              </a>
            </nav>
          </details>

          <Link to="/sign-in" className={buttonClass}>
        
            Se connecter
          </Link>
        </div>
      </div>
    </header>
  );
}