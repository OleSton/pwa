
// named cache in Cache Storage
const CACHE_NAME = 'devtools-tips-v3';
const STATIC_CACHE_URLS = ["/pwa/", "/pwa/styles.css", "/pwa/index.html"];
self.addEventListener("install", (event) => {
  console.log("Service Worker installing.");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_CACHE_URLS))
  );
});

self.addEventListener("fetch", (event) => {
  // Cache-First Strategy
  event.respondWith(
    caches
      .match(event.request) // check if the request has already been cached
      .then((cached) => cached || fetch(event.request)) // otherwise request network
  );
});
