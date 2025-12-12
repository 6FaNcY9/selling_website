import AdminDashboard from "./AdminDashboard";
import { createHmac, randomUUID, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const isProduction = process.env.NODE_ENV === "production";

const DEV_FALLBACK_USERNAME = "admin";
const DEV_FALLBACK_PASSWORD = "fancyvinoadmin2025"; // Dev-only fallback
const DEV_FALLBACK_SESSION_SECRET = "change-me-secret"; // Dev-only fallback

const ADMIN_USERNAME =
  process.env.ADMIN_USERNAME ||
  (!isProduction ? DEV_FALLBACK_USERNAME : undefined);
const ADMIN_PASSWORD =
  process.env.ADMIN_PASSWORD ||
  (!isProduction ? DEV_FALLBACK_PASSWORD : undefined);
const ADMIN_SESSION_SECRET =
  process.env.ADMIN_SESSION_SECRET ||
  process.env.AUTH_SECRET ||
  (!isProduction ? DEV_FALLBACK_SESSION_SECRET : undefined) ||
  randomUUID();

type SearchParams = {
  error?: string;
};

const secureCookie = process.env.NODE_ENV === "production";

const baseContent = {
  hero: {
    headline: "Shape the selling story without touching code.",
    subheading:
      "Use the admin canvas to iterate on hero copy, CTAs, offers, and onboarding steps while Codex keeps the UI stable.",
    ctaLabel: "Preview changes",
  },
  offers: [
    {
      id: "launch",
      title: "Launch",
      price: "$0",
      note: "Draft-level edits for quick demos.",
      bullets: ["Hero + CTA copy", "Offer slots", "Preview-only publish"],
    },
    {
      id: "growth",
      title: "Growth",
      price: "$39",
      note: "Includes promo states and gated content.",
      bullets: ["Promo toggles", "Gated CTAs", "Analytics-ready"],
    },
  ],
  launchSteps: [
    "Store ADMIN_* secrets in GitHub and sync to Vercel environment variables.",
    "Log in with the admin credential to unlock editing controls.",
    "Add or remove offers, adjust hero copy, and capture new admin signups.",
  ],
};

const signToken = (nonce: string) =>
  createHmac("sha256", ADMIN_SESSION_SECRET).update(nonce).digest("hex");

const createSessionToken = () => {
  const nonce = randomUUID();
  const signature = signToken(nonce);
  return `${nonce}.${signature}`;
};

const isValidSessionToken = (token?: string) => {
  if (!token) return false;
  const [nonce, signature] = token.split(".");
  if (!nonce || !signature) return false;
  const expectedSignature = signToken(nonce);

  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expectedSignature);
  if (signatureBuffer.length !== expectedBuffer.length) return false;

  return timingSafeEqual(signatureBuffer, expectedBuffer);
};

async function login(formData: FormData) {
  "use server";

  const username = `${formData.get("username") || ""}`.trim();
  const password = `${formData.get("password") || ""}`.trim();

  if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
    redirect("/admin?error=invalid");
  }

  const cookieStore = await cookies();

  cookieStore.set({
    name: "admin-session",
    value: createSessionToken(),
    httpOnly: true,
    sameSite: "lax",
    secure: secureCookie,
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });

  redirect("/admin");
}

async function logout() {
  "use server";

  const cookieStore = await cookies();

  cookieStore.delete("admin-session");
  redirect("/admin");
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams?: SearchParams | Promise<SearchParams>;
}) {
  const resolvedSearchParams = (await searchParams) ?? undefined;

  const cookieStore = await cookies();
  const cookieValue = cookieStore.get("admin-session")?.value;
  const isAuthenticated = isValidSessionToken(cookieValue);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Admin control room
          </p>
          <h1 className="text-3xl font-semibold text-white md:text-4xl">
            Manage content, offers, and access from one panel.
          </h1>
          <p className="text-slate-300">
            Credentials are backed by environment secrets (GitHub & Vercel).
            Sign in with the admin account to start editing safely.
          </p>
        </div>

        {!isAuthenticated ? (
          <section className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-950/70 p-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-white">
                  Secure admin login
                </p>
                <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-200">
                  Protected
                </span>
              </div>
              {resolvedSearchParams?.error === "invalid" ? (
                <p className="rounded-lg border border-rose-500/50 bg-rose-500/10 px-3 py-2 text-sm text-rose-100">
                  Invalid credentials. Confirm the admin username/password stored
                  in your environment.
                </p>
              ) : null}
              <form action={login} className="space-y-4">
                <label className="space-y-1 text-sm text-slate-200">
                  Username
                  <input
                    className="w-full rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-1 ring-transparent transition focus:border-sky-500 focus:ring-sky-500/40"
                    name="username"
                    placeholder="admin"
                    autoComplete="username"
                    required
                  />
                </label>
                <label className="space-y-1 text-sm text-slate-200">
                  Password
                  <input
                    className="w-full rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-1 ring-transparent transition focus:border-sky-500 focus:ring-sky-500/40"
                    type="password"
                    name="password"
                    placeholder="••••••••••"
                    autoComplete="current-password"
                    required
                  />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
                >
                  Sign in as admin
                </button>
                {!isProduction ? (
                  <p className="text-xs text-slate-400">
                    Development defaults: admin / fancyvinoadmin2025. Always set
                    ADMIN_USERNAME and ADMIN_PASSWORD secrets for live
                    deployments.
                  </p>
                ) : null}
              </form>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">
                  Secure storage
                </p>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                  Secrets
                </span>
              </div>
              <p className="text-sm text-slate-300">
                Use GitHub Actions secrets and Vercel environment variables to
                avoid hard-coding credentials. The panel reads:
              </p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li className="flex items-start gap-2 rounded-lg border border-slate-800 bg-slate-900/60 p-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                  <code className="text-xs text-sky-100">ADMIN_USERNAME</code>
                </li>
                <li className="flex items-start gap-2 rounded-lg border border-slate-800 bg-slate-900/60 p-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                  <code className="text-xs text-sky-100">ADMIN_PASSWORD</code>
                </li>
                <li className="flex items-start gap-2 rounded-lg border border-slate-800 bg-slate-900/60 p-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                  <code className="text-xs text-sky-100">
                    ADMIN_SESSION_SECRET
                  </code>
                </li>
              </ul>
              <p className="text-sm text-slate-300">
                Set them in GitHub Secrets for CI and sync to Vercel Project →
                Settings → Environment Variables to keep production secure.
              </p>
            </div>
          </section>
        ) : (
          <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-lg font-semibold text-white">
                  Welcome, admin
                </p>
                <p className="text-sm text-slate-300">
                  Edit content safely. Changes stay in-memory until wired to
                  your CMS or deployment pipeline.
                </p>
              </div>
              <form action={logout}>
                <button
                  type="submit"
                  className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-400"
                >
                  Sign out
                </button>
              </form>
            </div>

            <AdminDashboard
              hero={baseContent.hero}
              offers={baseContent.offers}
              launchSteps={baseContent.launchSteps}
            />

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200">
              <p className="font-semibold text-white">Security notes</p>
              <ul className="mt-2 space-y-1 text-slate-300">
                <li>
                  Rotate <code className="text-xs text-sky-100">ADMIN_PASSWORD</code> and{" "}
                  <code className="text-xs text-sky-100">
                    ADMIN_SESSION_SECRET
                  </code>{" "}
                  via GitHub/Vercel secrets.
                </li>
                <li>Cookies are HTTP only and scoped to this site.</li>
                <li>
                  Publish edits by connecting these controls to your content
                  store or deployment workflow.
                </li>
              </ul>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
