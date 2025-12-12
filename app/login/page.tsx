export default function LoginPage() {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">User access</p>
          <h1 className="text-3xl font-semibold text-white">Sign in or create an account</h1>
          <p className="text-sm text-slate-300">
            Demo the shopper workflow—profile, basket, and order history views are ready for real authentication wiring.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <form className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg shadow-sky-900/30">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Log in</p>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">Secure</span>
            </div>
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
            <div className="flex flex-wrap items-center justify-between text-xs text-slate-400">
              <a className="font-semibold text-sky-200 hover:text-white" href="#">
                Create account
              </a>
              <a className="font-semibold text-sky-200 hover:text-white" href="#">
                Forgot password?
              </a>
            </div>
          </form>

          <div className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
            <p className="text-sm font-semibold text-white">What you unlock</p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                <span>Access to the Account workspace with profile, address, and payment placeholders.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                <span>Cart and wishlist entry points that you can connect to your API of choice.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                <span>Order activity feed to showcase drop-shipping fulfillment steps.</span>
              </li>
            </ul>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300">
              <p className="font-semibold text-white">Admin access</p>
              <p className="mt-1">Admins share the same entry point—use the Admin link in the header to manage catalog copy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
