import type { FormEvent } from "react";
import { useNavigate } from "react-router";

export function SignInForm() {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/learning");
  }

  return (
    <main className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden bg-[#050814] px-4 py-10 md:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-fuchsia-600/30 blur-3xl" />
        <div className="absolute -bottom-28 right-[-5%] h-[28rem] w-[28rem] rounded-full bg-violet-500/25 blur-3xl" />
        <div className="absolute bottom-[-8%] left-[-6%] h-[24rem] w-[24rem] rounded-full bg-cyan-500/15 blur-3xl" />
      </div>

      <section className="relative mx-auto grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-white/10 shadow-[0_30px_120px_-40px_rgba(168,85,247,0.75)] backdrop-blur-2xl lg:grid-cols-[1.1fr_1fr]">
        <aside className="relative hidden lg:flex flex-col justify-between border-r border-white/10 bg-gradient-to-br from-fuchsia-500/25 via-violet-500/15 to-indigo-500/10 p-10">
          <div>
            <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-fuchsia-100">
              NetCom Secure Access
            </p>
            <h2 className="text-4xl font-semibold leading-tight text-white">
              Votre espace intelligent,
              <br />
              prêt en un instant.
            </h2>
            <p className="mt-4 max-w-md text-slate-200/90">
              Connectez-vous pour accéder à vos services, votre historique et vos outils d’assistance avancés.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-white/20 bg-black/20 p-4 text-sm text-slate-200">
            <p className="font-medium text-white">🔒 Sécurité renforcée</p>
            <p className="mt-1">Protection chiffrée et accès contrôlé pour vos données.</p>
          </div>
        </aside>

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="mx-auto w-full max-w-xl">
            <div className="mb-7 text-center lg:text-left">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Se connecter</h1>
              <p className="mt-3 text-base text-slate-300">
                Entrez vos identifiants pour accéder à votre tableau de bord NetCom.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-100">
                  Adresse e-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="vous@exemple.com"
                  className="w-full rounded-2xl border border-white/20 bg-slate-950/50 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-fuchsia-300/70 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-100">
                  Mot de passe
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-white/20 bg-slate-950/50 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-fuchsia-300/70 focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-1 w-full rounded-2xl border border-fuchsia-200/40 bg-gradient-to-r from-fuchsia-500/70 via-violet-500/70 to-indigo-500/70 px-5 py-3.5 text-base font-semibold text-white transition hover:from-fuchsia-500/90 hover:via-violet-500/90 hover:to-indigo-500/90"
              >
                Se connecter
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}