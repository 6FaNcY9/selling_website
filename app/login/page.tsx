export default function LoginPage() {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-100">
      <div className="mx-auto flex max-w-xl flex-col gap-6 px-6 py-12">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            User access
          </p>
          <h1 className="text-3xl font-semibold text-white">Sign in</h1>
          <p className="text-sm text-slate-300">
            Enter your credentials to access gated content. Admins can also use
            this login and still access the public site.
          </p>
        </div>

        <form className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg shadow-sky-900/30">
          <label className="space-y-1 text-sm text-slate-200">
            Email
            <input
              className="w-full rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-1 ring-transparent transition focus:border-sky-500 focus:ring-sky-500/40"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </label>
          <label className="space-y-1 text-sm text-slate-200">
            Password
            <input
              className="w-full rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-1 ring-transparent transition focus:border-sky-500 focus:ring-sky-500/40"
              type="password"
              name="password"
              placeholder="••••••••"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            Continue
          </button>
          <p className="text-xs text-slate-400">
            Need admin access? Use the Admin link in the navigation for elevated
            controls.
          </p>
        </form>
      </div>
    </div>
  );
}
