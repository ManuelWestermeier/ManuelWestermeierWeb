const CACHE_NAME = `auto-cache-${import.meta.env.VITE_BUILD_HASH}`;

self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll([]);
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.map(key => {
                if (key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            }))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    // Für "/" oder "/index.html": Network-First, sonst Cache
    if (url.pathname === '/' || url.pathname === '/index.html') {
        event.respondWith(
            fetch(event.request)
                .then(networkResponse => {
                    // Cache aktualisieren
                    return caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                })
                .catch(() => {
                    // Fallback auf Cache
                    return caches.match(event.request);
                })
        );
        return;
    }

    // Für alle anderen Ressourcen: Cache First
    event.respondWith(
        caches.match(event.request).then(cached => {
            return cached || fetch(event.request).then(response => {
                return caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        }).catch(() => {
            return new Response('Offline und Ressource nicht im Cache.', {
                status: 503,
                statusText: 'Service Unavailable'
            });
        })
    );
});
