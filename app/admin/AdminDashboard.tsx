"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";

type HeroContent = {
  headline: string;
  subheading: string;
  ctaLabel: string;
};

type Offer = {
  id: string;
  title: string;
  price: string;
  note: string;
  bullets: string[];
};

type AdminDashboardProps = {
  hero: HeroContent;
  offers: Offer[];
  launchSteps: string[];
};

const makeId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  if (typeof crypto !== "undefined" && "getRandomValues" in crypto) {
    const buffer = new Uint32Array(4);
    crypto.getRandomValues(buffer);
    return Array.from(buffer, (value) => value.toString(16)).join("-");
  }

  throw new Error("Secure random generator unavailable for ID creation.");
};

export default function AdminDashboard({
  hero,
  offers,
  launchSteps,
}: AdminDashboardProps) {
  const [heroDraft, setHeroDraft] = useState(hero);
  const [offerDrafts, setOfferDrafts] = useState(offers);
  const [newOffer, setNewOffer] = useState({
    title: "",
    price: "",
    note: "",
  });
  const [activity, setActivity] = useState<string[]>([
    "Synced existing homepage content from the live build.",
    "Ready to preview edits before publishing.",
  ]);
  const [accessRequest, setAccessRequest] = useState({
    email: "",
    note: "",
  });
  const [accessStatus, setAccessStatus] = useState("");

  const previewHero = useMemo(
    () => ({
      headline: heroDraft.headline.trim() || hero.headline,
      subheading: heroDraft.subheading.trim() || hero.subheading,
      ctaLabel: heroDraft.ctaLabel.trim() || hero.ctaLabel,
    }),
    [heroDraft, hero],
  );

  const addActivity = (entry: string) => {
    setActivity((prev) => [entry, ...prev].slice(0, 8));
  };

  const addOffer = () => {
    if (!newOffer.title.trim()) return;

    const entry: Offer = {
      id: makeId(),
      title: newOffer.title.trim(),
      price: newOffer.price.trim() || "$0",
      note: newOffer.note.trim() || "Custom note",
      bullets: ["Draft feature", "Publish-ready once synced"],
    };

    setOfferDrafts((prev) => [...prev, entry]);
    setNewOffer({ title: "", price: "", note: "" });
    addActivity(`Added new offer "${entry.title}" to the preview list.`);
  };

  const removeOffer = (id: string) => {
    const removed = offerDrafts.find((offer) => offer.id === id);
    setOfferDrafts((prev) => prev.filter((offer) => offer.id !== id));
    if (removed) {
      addActivity(`Removed offer "${removed.title}" from the preview list.`);
    }
  };

  const handleAccessRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!accessRequest.email.trim()) return;

    setAccessStatus("Saved locally — wire this to email or webhook next.");
    addActivity(
      `Captured access request for ${accessRequest.email} to review later.`,
    );
    setAccessRequest({ email: "", note: "" });
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6 shadow-xl shadow-sky-900/20">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-white">
                Hero + CTA content
              </p>
              <p className="text-sm text-slate-300">
                Edit headline, supporting copy, and primary call-to-action.
              </p>
            </div>
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">
              Draft
            </span>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <label className="space-y-1 text-sm text-slate-200">
              Headline
              <input
                className="w-full rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-1 ring-transparent transition focus:border-sky-500 focus:ring-sky-500/40"
                value={heroDraft.headline}
                onChange={(event) =>
                  setHeroDraft((prev) => ({
                    ...prev,
                    headline: event.target.value,
                  }))
                }
                placeholder="Hero headline"
              />
            </label>
            <label className="space-y-1 text-sm text-slate-200">
              CTA label
              <input
                className="w-full rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-1 ring-transparent transition focus:border-sky-500 focus:ring-sky-500/40"
                value={heroDraft.ctaLabel}
                onChange={(event) =>
                  setHeroDraft((prev) => ({
                    ...prev,
                    ctaLabel: event.target.value,
                  }))
                }
                placeholder="Start building"
              />
            </label>
          </div>
          <label className="mt-4 block space-y-1 text-sm text-slate-200">
            Supporting copy
            <textarea
              className="w-full rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-1 ring-transparent transition focus:border-sky-500 focus:ring-sky-500/40"
              value={heroDraft.subheading}
              onChange={(event) =>
                setHeroDraft((prev) => ({
                  ...prev,
                  subheading: event.target.value,
                }))
              }
              rows={3}
              placeholder="What should visitors know?"
            />
          </label>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 shadow-xl shadow-sky-900/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Live preview</p>
              <p className="text-sm text-slate-300">
                Mirrors what will render on the public homepage once synced.
              </p>
            </div>
            <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-200">
              Preview only
            </span>
          </div>
          <div className="mt-4 space-y-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
            <p className="text-xl font-semibold text-white">
              {previewHero.headline}
            </p>
            <p className="text-sm text-slate-300">{previewHero.subheading}</p>
            <button className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
              {previewHero.ctaLabel}
            </button>
          </div>
          <div className="mt-4 space-y-2 text-sm text-slate-300">
            <p className="font-semibold text-white">Launch steps</p>
            <ul className="space-y-1">
              {launchSteps.map((step) => (
                <li
                  key={step}
                  className="flex items-start gap-2 rounded-lg border border-slate-800 bg-slate-900/70 p-2"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6 shadow-xl shadow-sky-900/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Offers</p>
              <p className="text-sm text-slate-300">
                Add, remove, or tweak offer cards before publishing.
              </p>
            </div>
            <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-200">
              Editable
            </span>
          </div>

          <div className="mt-4 space-y-3">
            {offerDrafts.map((offer) => (
              <div
                key={offer.id}
                className="flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="text-base font-semibold text-white">
                    {offer.title}{" "}
                    <span className="text-sm text-sky-200">{offer.price}</span>
                  </p>
                  <p className="text-sm text-slate-300">{offer.note}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {offer.bullets.slice(0, 3).map((bullet) => (
                    <span
                      key={bullet}
                      className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-200"
                    >
                      {bullet}
                    </span>
                  ))}
                  <button
                    type="button"
                    onClick={() => removeOffer(offer.id)}
                    className="rounded-lg border border-rose-500/60 px-3 py-1 text-xs font-semibold text-rose-200 transition hover:border-rose-400 hover:text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 md:grid-cols-3">
            <label className="space-y-1 text-sm text-slate-200">
              Title
              <input
                className="w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none ring-1 ring-transparent transition focus:border-sky-500 focus:ring-sky-500/40"
                value={newOffer.title}
                onChange={(event) =>
                  setNewOffer((prev) => ({ ...prev, title: event.target.value }))
                }
                placeholder="Growth"
              />
            </label>
            <label className="space-y-1 text-sm text-slate-200">
              Price
              <input
                className="w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none ring-1 ring-transparent transition focus:border-sky-500 focus:ring-sky-500/40"
                value={newOffer.price}
                onChange={(event) =>
                  setNewOffer((prev) => ({ ...prev, price: event.target.value }))
                }
                placeholder="$39"
              />
            </label>
            <label className="space-y-1 text-sm text-slate-200 md:col-span-1">
              Note
              <input
                className="w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none ring-1 ring-transparent transition focus:border-sky-500 focus:ring-sky-500/40"
                value={newOffer.note}
                onChange={(event) =>
                  setNewOffer((prev) => ({ ...prev, note: event.target.value }))
                }
                placeholder="For fast experiments"
              />
            </label>
            <button
              type="button"
              onClick={addOffer}
              className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 md:col-span-3"
            >
              Add offer to preview
            </button>
          </div>
        </section>

        <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/60 p-6 shadow-xl shadow-sky-900/20">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-white">Access + signups</p>
            <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-200">
              Capture
            </span>
          </div>

          <form
            className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
            onSubmit={handleAccessRequest}
          >
            <p className="text-sm text-slate-300">
              Track who needs admin access. Wire this into GitHub/Vercel email
              flows next.
            </p>
            <label className="space-y-1 text-sm text-slate-200">
              Work email
              <input
                className="w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none ring-1 ring-transparent transition focus:border-sky-500 focus:ring-sky-500/40"
                value={accessRequest.email}
                onChange={(event) =>
                  setAccessRequest((prev) => ({
                    ...prev,
                    email: event.target.value,
                  }))
                }
                placeholder="admin@company.com"
                type="email"
                required
              />
            </label>
            <label className="space-y-1 text-sm text-slate-200">
              Notes / scope
              <textarea
                className="w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none ring-1 ring-transparent transition focus:border-sky-500 focus:ring-sky-500/40"
                value={accessRequest.note}
                onChange={(event) =>
                  setAccessRequest((prev) => ({
                    ...prev,
                    note: event.target.value,
                  }))
                }
                rows={3}
                placeholder="What should this admin control?"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Save signup request
            </button>
            {accessStatus ? (
              <p className="text-xs text-emerald-200">{accessStatus}</p>
            ) : null}
          </form>

          <div className="space-y-2 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Activity</p>
              <span className="rounded-full bg-slate-800 px-2 py-1 text-[11px] text-slate-200">
                Last {activity.length} updates
              </span>
            </div>
            <ul className="space-y-2 text-sm text-slate-200">
              {activity.map((entry) => (
                <li
                  key={entry}
                  className="flex items-start gap-2 rounded-lg border border-slate-800 bg-slate-950/70 p-2"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                  {entry}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
