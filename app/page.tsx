export default function Home() {
  const capabilityPillars = [
    {
      title: "Dynamic instruction engine",
      description:
        "Map goals, guardrails, and success signals into one adaptive brief Codex can refine in real-time.",
      items: ["Structured prompts", "Role-based voice", "Automatic validation"],
    },
    {
      title: "Full feature surface",
      description:
        "Expose design systems, API hooks, and deployment toggles so Codex can ship production-grade UI without friction.",
      items: ["UI primitives", "Data contracts", "Observability hooks"],
    },
    {
      title: "Delivery-ready handoff",
      description:
        "Generate preview links, deployment checks, and change logs automatically for every Codex iteration.",
      items: ["Preview pipelines", "Changelogs", "One-click deploy"],
    },
  ];

  const launchSteps = [
    {
      title: "Define the selling story",
      detail:
        "Pin the product value, audience, and differentiation. Codex keeps these context blocks live across sessions.",
    },
    {
      title: "Wire up dynamic prompts",
      detail:
        "Feed Codex feature flags, tone, and content sources. It produces UI copy, sections, and offers on demand.",
    },
    {
      title: "Deploy with Vercel",
      detail:
        "Connect your repo, sync environment variables, and promote the optimized build straight to Vercel Edge.",
    },
  ];

  const deployChecklist = [
    "Install dependencies with npm and run `npm run build`",
    "Connect the repository to Vercel for automatic previews",
    "Promote the production build with a single click",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-slate-800/70 px-3 py-1 text-xs font-semibold text-sky-300">
              Codex Web
            </span>
            <p className="text-sm text-slate-300">
              Base selling experience • AI-ready & Vercel-deployable
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-medium">
            <a
              className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-sky-400 hover:text-white"
              href="#deploy"
            >
              Deploy with Vercel
            </a>
            <a
              className="rounded-full bg-sky-500 px-4 py-2 text-slate-950 transition hover:bg-sky-400"
              href="#instructions"
            >
              View dynamic brief
            </a>
          </div>
        </header>

        <main className="grid gap-10">
          <section className="grid gap-8 rounded-3xl border border-slate-800/80 bg-slate-900/60 p-8 shadow-2xl shadow-sky-900/30 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Selling site starter
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                Launch a Codex-driven selling website with a modern dark UI.
              </h1>
              <p className="text-lg text-slate-300">
                Give Codex a full instruction set, unlock every build feature,
                and ship directly to Vercel. This base layout keeps content,
                offers, and design tokens dynamic so you can start coding
                immediately.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  className="rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-900/50 transition hover:bg-sky-400"
                  href="#blueprint"
                >
                  See the build blueprint
                </a>
                <a
                  className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400"
                  href="#vercel-ready"
                >
                  Vercel-ready steps
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-slate-300 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                  <p className="text-xs text-slate-400">Setup time</p>
                  <p className="text-xl font-semibold text-white">10 min</p>
                  <p className="text-xs text-slate-400">From clone to deploy</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                  <p className="text-xs text-slate-400">Dynamic inputs</p>
                  <p className="text-xl font-semibold text-white">Live</p>
                  <p className="text-xs text-slate-400">Prompt & schema ready</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                  <p className="text-xs text-slate-400">Delivery target</p>
                  <p className="text-xl font-semibold text-white">Vercel</p>
                  <p className="text-xs text-slate-400">Edge optimized</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-100">
                  Dynamic instruction canvas
                </p>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                  Real-time
                </span>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-4 text-sm text-slate-200">
                <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-sky-100">
{`Persona: Codex Web engineer
Voice: direct, confident, helpful
Goals:
  - Ship a dark, modern selling site for Codex
  - Keep hero, offers, and CTAs editable via structured prompts
  - Prepare Vercel deploy with zero manual steps
Guardrails:
  - No broken links, no unused assets
  - Use accessible contrast and keyboard-friendly controls`}
                </pre>
              </div>
              <div className="grid gap-3 text-xs text-slate-200 md:grid-cols-2">
                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3">
                  <p className="font-semibold text-white">Live content slots</p>
                  <p className="text-slate-300">
                    Hero copy, offer cards, and CTA labels all mapped for Codex
                    to regenerate.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3">
                  <p className="font-semibold text-white">Deployment intent</p>
                  <p className="text-slate-300">
                    Build commands, linting, and preview URLs streamlined for
                    Vercel’s pipeline.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="blueprint"
            className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 md:grid-cols-3"
          >
            {capabilityPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/50 p-5"
              >
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-white">
                    {pillar.title}
                  </p>
                  <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs text-sky-200">
                    Codex ready
                  </span>
                </div>
                <p className="text-sm text-slate-300">{pillar.description}</p>
                <div className="flex flex-wrap gap-2">
                  {pillar.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section
            id="instructions"
            className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div className="space-y-5">
              <p className="text-sm font-semibold text-slate-200">
                Dynamic instruction flow
              </p>
              <div className="space-y-4">
                {launchSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-950/50 p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/20 text-sm font-semibold text-sky-200">
                      {index + 1}
                    </div>
                    <div className="space-y-1">
                      <p className="text-base font-semibold text-white">
                        {step.title}
                      </p>
                      <p className="text-sm text-slate-300">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">
                  Real-time signals
                </p>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-200">
                  Synced
                </span>
              </div>
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  Codex updates section copy, CTA labels, and offers using the
                  mapped instruction set.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  Structured prompts keep accessibility, tone, and deployment
                  requirements enforced.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  Preview builds surface instantly with Vercel to validate each
                  Codex iteration.
                </li>
              </ul>
            </div>
          </section>

          <section
            id="vercel-ready"
            className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 lg:grid-cols-[1fr_1.2fr]"
          >
            <div className="space-y-4">
              <p className="text-sm font-semibold text-slate-200">
                Vercel-ready by default
              </p>
              <p className="text-lg text-slate-300">
                Build and deploy in minutes. Scripts are already configured for
                <span className="font-semibold text-white"> npm run build</span>{" "}
                and linting, with zero extra setup.
              </p>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-sm text-slate-200">
                <code className="block whitespace-pre font-mono text-xs leading-6 text-sky-100">
                  {`npm install
npm run lint
npm run build`}
                </code>
                <p className="mt-3 text-slate-300">
                  Connect the repo to Vercel → import project → set framework to
                  Next.js → deploy.
                </p>
              </div>
            </div>

            <div
              id="deploy"
              className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-950/50 p-6"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">
                  Deployment checklist
                </p>
                <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs text-purple-200">
                  Guided
                </span>
              </div>
              <ul className="space-y-3 text-sm text-slate-200">
                {deployChecklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://vercel.com/new"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Deploy on Vercel
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
