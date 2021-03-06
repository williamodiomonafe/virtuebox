var CACHE_NAME = '/virtuebox-cache-v1';
var FILES_TO_CACHE = [
    'offline.html',
    'index.html',
    'style.css',
    'script.js',
    'shrine1.webp',
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            // console.log('[ServiceWorker] Pre-caching offline page');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});


// CODELAB: Remove previous cached data from disk.
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
            if (key !== CACHE_NAME) {
            // console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
            }
        }));
        })
    );
    self.clients.claim();
});


self.addEventListener('fetch', function(event) {
    if (event.request.mode !== 'navigate') {
        // Not a page navigation, bail.
        return;
      }
      event.respondWith(
          fetch(event.request)
              .catch(() => {
                return caches.open(CACHE_NAME)
                    .then((cache) => {
                      return cache.match('index.html');
                    });
              })
      );
})