export default function LoginPage() {
  return (
    <div className="bg-gradient-to-b from-orange-950 via-rose-950 to-black text-amber-50">
      <div className="mx-auto flex max-w-xl flex-col gap-6 px-6 py-12">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">Customer access</p>
          <h1 className="text-3xl font-semibold text-white">Sign in</h1>
          <p className="text-sm text-amber-100/80">
            Track your orders, manage saved items, and get updates on new drops across Amazon, Temu, Shein, and more.
          </p>
        </div>

        <form className="space-y-4 rounded-2xl border border-orange-900/70 bg-amber-500/5 p-6 shadow-lg shadow-amber-900/30">
          <label className="space-y-1 text-sm text-amber-100/80">
            Email
            <input
              className="w-full rounded-lg border border-orange-900/70 bg-black/60 px-3 py-2 text-sm text-amber-50 outline-none ring-1 ring-transparent transition focus:border-amber-500 focus:ring-amber-500/40"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </label>
          <label className="space-y-1 text-sm text-amber-100/80">
            Password
            <input
              className="w-full rounded-lg border border-orange-900/70 bg-black/60 px-3 py-2 text-sm text-amber-50 outline-none ring-1 ring-transparent transition focus:border-amber-500 focus:ring-amber-500/40"
              type="password"
              name="password"
              placeholder="••••••••"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Continue
          </button>
          <p className="text-xs text-amber-200/80">
            Looking for admin access? Use the Admin link in the navigation to manage collections and suppliers.
          </p>
        </form>
      </div>
    </div>
  );
}
