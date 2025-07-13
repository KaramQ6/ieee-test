const CACHE_NAME = 'ieee-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/images/icon-192x192.webp',
  '/images/icon-512x512.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
