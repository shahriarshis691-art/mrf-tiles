"use client";

import { Capacitor } from "@capacitor/core";
import { useEffect, useRef, useState } from "react";

type InstallEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export default function InstallApp() {
  const promptRef = useRef<InstallEvent | null>(null);
  const [visible, setVisible] = useState(false);
  const [ios, setIos] = useState(false);
  const [help, setHelp] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (Capacitor.isNativePlatform()) return;
    const standalone = window.matchMedia("(display-mode: standalone)");
    const isInstalled = () => standalone.matches ||
      Boolean((navigator as Navigator & { standalone?: boolean }).standalone);
    const isIos = /iPhone|iPad|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    let dismissed = false;
    try { dismissed = sessionStorage.getItem("galaxy-install-dismissed") === "1"; } catch {}
    const frame = requestAnimationFrame(() => {
      setIos(isIos);
      setVisible(!dismissed && !isInstalled());
    });
    const onPrompt = (event: Event) => {
      event.preventDefault();
      promptRef.current = event as InstallEvent;
      if (!dismissed && !isInstalled()) setVisible(true);
    };
    const onInstalled = () => {
      promptRef.current = null;
      setVisible(false);
    };
    const onDisplayChange = () => { if (isInstalled()) onInstalled(); };
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    standalone.addEventListener("change", onDisplayChange);
    if ("serviceWorker" in navigator && window.isSecureContext && process.env.NODE_ENV === "production") {
      navigator.serviceWorker.register("/sw.js", { scope: "/", updateViaCache: "none" })
        .catch((error: unknown) => console.warn("Offline support unavailable", error));
    }
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
      standalone.removeEventListener("change", onDisplayChange);
    };
  }, []);

  async function install() {
    const event = promptRef.current;
    if (!event) { setHelp((value) => !value); return; }
    promptRef.current = null;
    setBusy(true);
    try {
      await event.prompt();
      const choice = await event.userChoice;
      if (choice.outcome === "accepted") setVisible(false);
    } catch { setHelp(true); }
    finally { setBusy(false); }
  }

  if (!visible) return null;

  return (
    <aside lang="bn" aria-label="অ্যাপ ইনস্টল" className="fixed inset-x-3 bottom-20 z-40 mx-auto max-w-sm rounded-2xl border border-zinc-200 bg-white p-4 text-zinc-950 shadow-xl md:left-auto md:right-4 md:mx-0 md:w-80">
      <button type="button" aria-label="ইনস্টল বার বন্ধ করুন" className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center rounded-full text-xl focus-visible:outline-2" onClick={() => {
        setVisible(false);
        try { sessionStorage.setItem("galaxy-install-dismissed", "1"); } catch {}
      }}>×</button>
      <p className="pr-8 text-sm font-bold">MRF Galaxy আপনার ফোনে</p>
      <p className="mt-1 text-xs leading-5 text-zinc-600">হোম স্ক্রিন থেকে সহজেই খুলুন</p>
      <button type="button" disabled={busy} onClick={install} aria-expanded={help} aria-controls="install-help" className="mt-3 min-h-11 w-full rounded-xl bg-[#1c1a17] px-4 py-3 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 disabled:opacity-60">
        {busy ? "অপেক্ষা করুন…" : "অ্যাপ ইনস্টল করুন"}
      </button>
      <div id="install-help" hidden={!help} aria-live="polite" className="mt-3 text-sm leading-6 text-zinc-700">
        {ios
          ? "Safari-তে সাইটটি খুলুন → Share চাপুন → Add to Home Screen → Add।"
          : "Chrome বা Edge-এ সাইটটি খুলুন → মেনু (⋮) → Install app অথবা Add to Home screen। অপশন না থাকলে কিছুক্ষণ পরে আবার চেষ্টা করুন।"}
        <p className="mt-2 text-xs">Facebook বা Messenger-এর ভিতরে খুললে আগে বাইরের ব্রাউজারে খুলুন।</p>
      </div>
    </aside>
  );
}
