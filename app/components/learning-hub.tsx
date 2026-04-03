const learningFiles = [
  {
    title: "Guide d'intégration API",
    type: "PDF",
    level: "Intermédiaire",
    progress: 72,
  },
  {
    title: "Plan de formation onboarding",
    type: "DOCX",
    level: "Débutant",
    progress: 38,
  },
  {
    title: "Checklist qualité des données",
    type: "XLSX",
    level: "Avancé",
    progress: 56,
  },
  {
    title: "Bonnes pratiques sécurité",
    type: "PDF",
    level: "Essentiel",
    progress: 84,
  },
];

export function LearningHub() {
  return (
    <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-[#040812] px-4 py-10 md:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-8rem] left-[20%] h-80 w-80 rounded-full bg-fuchsia-500/25 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10rem] right-[10%] h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl animate-pulse" />
      </div>

      <section className="relative mx-auto max-w-7xl space-y-8">
        <header className="rounded-3xl border border-white/15 bg-gradient-to-r from-fuchsia-500/20 via-violet-500/15 to-indigo-500/20 p-6 shadow-2xl shadow-fuchsia-950/40 backdrop-blur-xl md:p-8">
          <p className="mb-2 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-fuchsia-100">
            Learning Workspace
          </p>
          <h1 className="text-3xl font-semibold text-white md:text-4xl">Espace Documents & Formation</h1>
          <p className="mt-2 max-w-3xl text-slate-200">
            Retrouvez tous vos fichiers d'apprentissage, vos supports et votre progression dans un espace unique,
            moderne et orienté productivité.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-xl md:p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Documents récents</h2>
              <span className="rounded-full border border-fuchsia-300/30 bg-fuchsia-500/15 px-3 py-1 text-xs text-fuchsia-100">
                {learningFiles.length} fichiers
              </span>
            </div>

            <div className="space-y-3">
              {learningFiles.map((file) => (
                <article
                  key={file.title}
                  className="group rounded-2xl border border-white/10 bg-slate-900/50 p-4 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-300/40 hover:bg-slate-900/80"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-medium text-slate-100">{file.title}</h3>
                      <p className="mt-1 text-xs text-slate-400">
                        {file.type} • Niveau {file.level}
                      </p>
                    </div>
                    <span className="rounded-full border border-indigo-300/30 bg-indigo-500/15 px-2.5 py-1 text-[11px] text-indigo-100">
                      {file.progress}%
                    </span>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-fuchsia-400 to-indigo-400 transition-all duration-700 group-hover:from-fuchsia-300 group-hover:to-indigo-300"
                      style={{ width: `${file.progress}%` }}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-xl backdrop-blur-xl">
              <h2 className="text-lg font-semibold text-white">Progression globale</h2>
              <p className="mt-1 text-sm text-slate-300">Vous avez terminé 4 modules sur 7 ce mois-ci.</p>
              <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[58%] rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-400 animate-pulse" />
              </div>
              <p className="mt-2 text-xs text-fuchsia-100">58% complété</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl">
              <h2 className="text-lg font-semibold text-white">Actions rapides</h2>
              <div className="mt-4 grid gap-3">
                <button className="rounded-xl border border-white/15 bg-slate-950/50 px-4 py-2.5 text-left text-sm text-slate-100 transition hover:border-fuchsia-300/40 hover:bg-slate-900/80">
                  📂 Importer un nouveau document
                </button>
                <button className="rounded-xl border border-white/15 bg-slate-950/50 px-4 py-2.5 text-left text-sm text-slate-100 transition hover:border-fuchsia-300/40 hover:bg-slate-900/80">
                  🧠 Démarrer un parcours guidé
                </button>
                <button className="rounded-xl border border-white/15 bg-slate-950/50 px-4 py-2.5 text-left text-sm text-slate-100 transition hover:border-fuchsia-300/40 hover:bg-slate-900/80">
                  📊 Voir les statistiques complètes
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}