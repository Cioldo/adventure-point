// Adventure Point service worker: the page works offline after the first visit.
// Page: network first (so updates show up), images and icons: cache first, fonts/libraries: stale-while-revalidate.
const VERSION = 'ap-v4';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png',
  ...['arcticescape','bybowling','fjellheisen','hero','ishavskatedralen','kajakk','kino','mack','nnkm','nordlys','polaria',
      'polarmuseet','prestvannet','sherpatrappa','tromsobadet','villmark','vitensenter'].map(n => `./img/${n}.jpg`)];
const SWR_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com', 'cdnjs.cloudflare.com'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { caches.open(VERSION).then(c => c.put('./index.html', r.clone())); return r; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  if (url.origin === location.origin) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
      if (r.ok) { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
      return r;
    })));
    return;
  }
  if (SWR_HOSTS.includes(url.hostname)) {
    e.respondWith(caches.open(VERSION).then(c => c.match(req).then(hit => {
      const net = fetch(req).then(r => { if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    })));
  }
  // Map tiles and everything else: straight to the network.
});
