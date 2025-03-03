/*
'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["index.html","styles.css"]);

toolbox.router.get('/images/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
*/
// named cache in Cache Storage
const CACHE_NAME = 'devtools-tips-v3';

// list of requests whose responses will be pre-cached at install
const INITIAL_CACHED_RESOURCES = [
    '/',
    '/offline/',
    '/all/',
    '/browser/edge/',
    '/browser/safari/',
    '/browser/firefox/',
    '/browser/chrome/',
    '/pwa/styles.css',
    '/pwa/index.html',
    
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
