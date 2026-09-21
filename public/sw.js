/* Only cache the offline notice; catalog and customer data stay network-only. */
const CACHE = "galaxy-offline-v1";
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.add("/offline.html")));
});
self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key.startsWith("galaxy-offline-") && key !== CACHE).map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener("fetch", (event) => {
  if (event.request.mode !== "navigate" || event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || /^\/(admin|api)(\/|$)/.test(url.pathname)) return;
  event.respondWith(fetch(event.request).catch(async () => {
    return (await caches.match("/offline.html")) || new Response("You are offline. Please reconnect.", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } });
  }));
});
