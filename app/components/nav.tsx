import { useState } from "react";
import NavLogo from "./NavLogo.png"
export function NavBar() {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/70 bg-slate-950/85 backdrop-blur">
      <div className="grid h-16 w-full grid-cols-[auto_1fr_auto] items-center gap-3 px-2 md:px-4">
        <div className="flex items-center">
          <img src={NavLogo} alt="Assistant NetCom" className="h-14 w-auto object-contain mix-blend-screen" />
        </div>

        <div className="flex justify-center px-2">
          <label className="relative w-full max-w-md">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔎</span>
            <input
              type="search"
              placeholder="Rechercher..."
              className="w-full rounded-lg border border-slate-700 bg-slate-900/90 py-2 pr-3 pl-9 text-sm text-slate-100 placeholder:text-slate-400 focus:border-orange-400/70 focus:outline-none"
            />
          </label>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/90 px-3 py-2 text-sm text-slate-200 hover:bg-slate-800">
            <span>ℹ️</span>
            <span>A propos</span>
          </button>

          <details className="group relative">
            <summary className="cursor-pointer list-none rounded-lg border border-slate-700 bg-slate-900/90 px-3 py-2 text-sm text-slate-200 hover:bg-slate-800">
              Menu ▾
            </summary>
            <nav className="absolute right-0 mt-2 w-44 rounded-xl border border-slate-700 bg-slate-900 p-2 shadow-xl">
              <a className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-800" href="#">
                Accueil
              </a>
              <a className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-800" href="#">
                Services
              </a>
              <a className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-800" href="#">
                Contact
              </a>
            </nav>
          </details>

          <button
            type="button"
            onClick={() => setIsConnected((prev) => !prev)}
            className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/90 px-3 py-2 text-sm text-slate-100 hover:bg-slate-800"
          >
            <span className="text-base">👤</span>
            {isConnected ? "Se déconnecter" : "Se connecter"}
          </button>
        </div>
      </div>
    </header>
  );
}