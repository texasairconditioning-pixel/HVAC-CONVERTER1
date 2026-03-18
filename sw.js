self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('hvac-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/Rounded HVAC logo ic.png'  // adjust filename
      ]);
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