import AdminDashboard from "./AdminDashboard";
import { createHmac, randomUUID, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const isProduction = process.env.NODE_ENV === "production";

const DEV_FALLBACK_USERNAME = "admin";
const DEV_FALLBACK_PASSWORD = "fancyvinoadmin2025"; // Dev-only fallback
const DEV_FALLBACK_SESSION_SECRET = "change-me-secret"; // Dev-only fallback

/**
 * Session secret precedence:
 * 1) ADMIN_SESSION_SECRET or AUTH_SECRET (preferred)
 * 2) Dev-only fallback secret when not in production
 * 3) Salted HMAC of admin credentials for deterministic fallback in production
 *    (set ADMIN_SESSION_SALT in production to avoid the static salt fallback)
 */
const getSessionSecret = () => {
  const envSecret = process.env.ADMIN_SESSION_SECRET || process.env.AUTH_SECRET;
  if (envSecret) return envSecret;

  if (!isProduction) return DEV_FALLBACK_SESSION_SECRET;

  if (!process.env.ADMIN_USERNAME || !process.env.ADMIN_PASSWORD) return undefined;

  const credentialKey = JSON.stringify([
    process.env.ADMIN_USERNAME,
    process.env.ADMIN_PASSWORD,
  ]);

  const saltBase =
    process.env.ADMIN_SESSION_SALT ||
    process.env.VERCEL_URL ||
    "admin-session-salt";

  const salt = createHmac("sha256", saltBase)
    .update(credentialKey)
    .digest("hex");

  return createHmac("sha256", salt).update(credentialKey).digest("hex");
};

const ADMIN_USERNAME =
  process.env.ADMIN_USERNAME ||
  (!isProduction ? DEV_FALLBACK_USERNAME : undefined);
const ADMIN_PASSWORD =
  process.env.ADMIN_PASSWORD ||
  (!isProduction ? DEV_FALLBACK_PASSWORD : undefined);
const ADMIN_SESSION_SECRET = getSessionSecret();

type SearchParams = {
  error?: string;
};

const secureCookie = process.env.NODE_ENV === "production";

const baseContent = {
  hero: {
    headline: "Curate drops and suppliers without touching code.",
    subheading:
      "Use the admin canvas to refresh AmberDrops collections, set supplier priorities, and keep customers updated with clear shipping windows.",
    ctaLabel: "Preview storefront",
  },
  offers: [
    {
      id: "starter",
      title: "Starter Finds",
      price: "Free",
      note: "Curated essentials with weekly drops.",
      bullets: ["Amazon & Temu picks", "Clear delivery windows", "Email tracking"],
    },
    {
      id: "priority",
      title: "Priority Drops",
      price: "$29/mo",
      note: "Early access to new collections and bundled shipping options.",
      bullets: ["Early access releases", "Bundled shipping", "Priority support"],
    },
  ],
  launchSteps: [
    "Store ADMIN_* secrets securely, then sign in to unlock the panel.",
    "Curate collections, set supplier preferences, and save the hero story.",
    "Publish updates so shoppers see fresh drops and accurate shipping windows.",
  ],
};

const signToken = (nonce: string) => {
  if (!ADMIN_SESSION_SECRET) {
    throw new Error(
      "Admin session secret is missing. Configure ADMIN_SESSION_SECRET or AUTH_SECRET.",
    );
  }

  return createHmac("sha256", ADMIN_SESSION_SECRET).update(nonce).digest("hex");
};

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

  if (!ADMIN_USERNAME || !ADMIN_PASSWORD) {
    redirect("/admin?error=setup");
  }

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
    <div className="min-h-screen bg-gradient-to-b from-orange-950 via-rose-950 to-black text-amber-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">
            Admin control room
          </p>
          <h1 className="text-3xl font-semibold text-white md:text-4xl">
            Manage drops, suppliers, and access from one panel.
          </h1>
          <p className="text-amber-100/80">
            Credentials are backed by environment secrets. Sign in to refresh collections, shipping windows, and supplier
            priorities without touching code.
          </p>
        </div>

        {!isAuthenticated ? (
          <section className="grid gap-6 rounded-3xl border border-orange-900/70 bg-amber-500/5 p-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-white">
                  Secure admin login
                </p>
                <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-200">
                  Protected
                </span>
              </div>
              {resolvedSearchParams?.error === "invalid" ? (
                <p className="rounded-lg border border-rose-500/50 bg-rose-500/10 px-3 py-2 text-sm text-rose-100">
                  Invalid credentials. Confirm the admin username/password stored
                  in your environment.
                </p>
              ) : null}
              {resolvedSearchParams?.error === "setup" ? (
                <p className="rounded-lg border border-amber-500/50 bg-amber-500/10 px-3 py-2 text-sm text-amber-100">
                  Admin credentials are not configured. Set ADMIN_USERNAME and
                  ADMIN_PASSWORD as environment variables, and optionally
                  ADMIN_SESSION_SECRET for a stable session key.
                </p>
              ) : null}
              <form action={login} className="space-y-4">
                <label className="space-y-1 text-sm text-amber-100/80">
                  Username
                  <input
                    className="w-full rounded-lg border border-orange-900/70 bg-black/60 px-3 py-2 text-sm text-amber-50 outline-none ring-1 ring-transparent transition focus:border-amber-500 focus:ring-amber-500/40"
                    name="username"
                    placeholder="admin"
                    autoComplete="username"
                    required
                  />
                </label>
                <label className="space-y-1 text-sm text-amber-100/80">
                  Password
                  <input
                    className="w-full rounded-lg border border-orange-900/70 bg-black/60 px-3 py-2 text-sm text-amber-50 outline-none ring-1 ring-transparent transition focus:border-amber-500 focus:ring-amber-500/40"
                    type="password"
                    name="password"
                    placeholder="••••••••••"
                    autoComplete="current-password"
                    required
                  />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                >
                  Sign in as admin
                </button>
                {!isProduction ? (
                  <p className="text-xs text-amber-200/80">
                    Development defaults: admin / fancyvinoadmin2025. Always set ADMIN_USERNAME and ADMIN_PASSWORD
                    secrets for live deployments.
                  </p>
                ) : null}
              </form>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-orange-900/70 bg-amber-500/5 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">
                  Secure storage
                </p>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                  Secrets
                </span>
              </div>
              <p className="text-sm text-amber-100/80">
                Use GitHub Actions secrets and environment variables to avoid hard-coding credentials. The panel reads:
              </p>
              <ul className="space-y-2 text-sm text-amber-100/80">
                <li className="flex items-start gap-2 rounded-lg border border-orange-900/70 bg-black/50 p-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                  <code className="text-xs text-amber-100">ADMIN_USERNAME</code>
                </li>
                <li className="flex items-start gap-2 rounded-lg border border-orange-900/70 bg-black/50 p-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                  <code className="text-xs text-amber-100">ADMIN_PASSWORD</code>
                </li>
                <li className="flex items-start gap-2 rounded-lg border border-orange-900/70 bg-black/50 p-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                  <code className="text-xs text-amber-100">
                    ADMIN_SESSION_SECRET
                  </code>
                </li>
              </ul>
              <p className="text-sm text-amber-100/80">
                Set them in GitHub Secrets for CI and sync to your hosting environment to keep production secure.
              </p>
            </div>
          </section>
        ) : (
          <section className="space-y-6 rounded-3xl border border-orange-900/70 bg-amber-500/5 p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-lg font-semibold text-white">
                  Welcome, admin
                </p>
                <p className="text-sm text-amber-100/80">
                  Edit content safely. Changes stay in-memory until wired to your CMS or deployment workflow.
                </p>
              </div>
              <form action={logout}>
                <button
                  type="submit"
                  className="rounded-lg border border-orange-900/70 px-4 py-2 text-sm font-semibold text-amber-50 transition hover:border-amber-400"
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

            <div className="rounded-2xl border border-orange-900/70 bg-black/50 p-4 text-sm text-amber-100/80">
              <p className="font-semibold text-white">Security notes</p>
              <ul className="mt-2 space-y-1 text-amber-100/80">
                <li>
                  Rotate <code className="text-xs text-amber-100">ADMIN_PASSWORD</code> and{" "}
                  <code className="text-xs text-amber-100">
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
