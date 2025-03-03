
// named cache in Cache Storage
const CACHE_NAME = 'devtools-tips-v3';

// list of requests whose responses will be pre-cached at install
const INITIAL_CACHED_RESOURCES = [
    
    '/pwa/styles.css',
    '/pwa/index.html'
    
];

// install event handler (note async operation)
// opens named cache, pre-caches identified resources above
self.addEventListener('install', (event) => {
    event.waitUntil(
        (async () => {
            const cache = await caches.open(CACHE_NAME);
            cache.addAll(INITIAL_CACHED_RESOURCES);
        })(),
    );
});


self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);

  // Don't care about other-origin URLs.
  if (url.origin !== location.origin) {
    return;
  }

  // Don't care about anything else than GET.
  if (event.request.method !== 'GET') {
    return;
  }

  // Don't care about widget requests.
  if (url.pathname.includes("/widgets/")) {
    return;
  }

 
});
