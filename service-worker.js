const CACHE_NAME = 'solartech-v1';
const FILES_TO_CACHE = [
  '/solartech-page/',
  '/solartech-page/index.html',
  '/solartech-page/login.html',
  '/solartech-page/styles.css',
  '/solartech-page/script.js',
  '/solartech-page/icon-192.png',
  '/solartech-page/icon-512.png',
  'https://upload.wikimedia.org/wikipedia/commons/4/4d/Solar_panels_roof_mounted.jpg'
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(resp => resp || fetch(evt.request))
  );
});


