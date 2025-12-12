export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12">
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            About
          </p>
          <h1 className="text-3xl font-semibold text-white md:text-4xl">
            A selling starter built for Codex and Vercel.
          </h1>
          <p className="text-lg text-slate-300">
            This project pairs a dark, modern UI with a workflow that keeps
            content, offers, and admin access secure. Use it to launch quickly,
            validate messaging, and iterate with Codex while shipping to Vercel
            with minimal setup.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
            <p className="text-sm font-semibold text-white">What’s inside</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Landing page tuned for selling narratives and offers.</li>
              <li>Dedicated selling page with pricing cards and CTAs.</li>
              <li>User login page for gated experiences.</li>
              <li>Admin panel with credential and session protection.</li>
            </ul>
          </div>
          <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
            <p className="text-sm font-semibold text-white">Tech stack</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Next.js 16 (App Router)</li>
              <li>Tailwind CSS dark theme</li>
              <li>Vercel-ready build pipeline</li>
              <li>Secure admin session HMAC with environment secrets</li>
            </ul>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
          <p className="text-sm font-semibold text-white">Need to get started?</p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <a
              className="rounded-full bg-sky-500 px-4 py-2 text-slate-950 transition hover:bg-sky-400"
              href="/selling"
            >
              View the selling page
            </a>
            <a
              className="rounded-full border border-slate-700 px-4 py-2 text-slate-100 transition hover:border-sky-400"
              href="/login"
            >
              User login
            </a>
            <a
              className="rounded-full border border-slate-700 px-4 py-2 text-slate-100 transition hover:border-sky-400"
              href="/admin"
            >
              Admin panel
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
