export default function AccountPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Account</p>
          <h1 className="text-3xl font-semibold text-white md:text-4xl">Your workspace</h1>
          <p className="text-sm text-slate-300">Profile, addresses, saved payment methods, and carts—ready for wiring to real auth.</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Profile</p>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">Session demo</span>
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3">
                <p className="text-xs text-slate-400">Name</p>
                <p className="font-semibold text-white">Alex Rivera</p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3">
                <p className="text-xs text-slate-400">Email</p>
                <p className="font-semibold text-white">demo@shopper.test</p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3">
                <p className="text-xs text-slate-400">Preferences</p>
                <p>Shipping speed: Express • Marketing emails: Enabled</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Orders & activity</p>
              <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-200">Live</span>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="rounded-lg border border-slate-800 bg-slate-900/70 p-3">
                <p className="font-semibold text-white">#WS-1029</p>
                <p>Orbit Smart Lamp • Shipping: {" "}
                  <span className="text-emerald-300">Out for delivery</span>
                </p>
              </li>
              <li className="rounded-lg border border-slate-800 bg-slate-900/70 p-3">
                <p className="font-semibold text-white">#WS-1028</p>
                <p>Summit Packable Blanket • Shipping: Delivered</p>
              </li>
              <li className="rounded-lg border border-slate-800 bg-slate-900/70 p-3">
                <p className="font-semibold text-white">#WS-1027</p>
                <p>Aurora Wireless Headset • Status: Processing</p>
              </li>
            </ul>
          </section>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <section className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 space-y-3">
            <p className="text-sm font-semibold text-white">Addresses</p>
            <p className="text-sm text-slate-300">123 Market Street • Apt 5C • San Francisco, CA</p>
            <button className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-400">
              Manage addresses
            </button>
          </section>
          <section className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 space-y-3">
            <p className="text-sm font-semibold text-white">Payments</p>
            <p className="text-sm text-slate-300">Visa •••• 4242 • Default • Expires 06/28</p>
            <button className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-400">
              Update payment methods
            </button>
          </section>
          <section className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 space-y-3">
            <p className="text-sm font-semibold text-white">Basket</p>
            <p className="text-sm text-slate-300">Keep track of saved items before checkout.</p>
            <div className="space-y-2 text-xs text-slate-300">
              <p>• Aurora Wireless Headset</p>
              <p>• Cascade Pour-Over Set</p>
            </div>
            <button className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
              Go to cart
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
