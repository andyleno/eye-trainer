const CACHE = "eyetrainer-v3";
const ASSETS = ["/eye-trainer/", "/eye-trainer/index.html", "/eye-trainer/manifest.json"];

// Audio files are cached dynamically on first play (cache-then-network)
// This keeps the install lightweight while still supporting offline playback

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  // Cache-first for app shell; cache-then-network for audio files
  if(e.request.url.includes('/audio/')){
    e.respondWith(
      caches.open(CACHE).then(cache =>
        cache.match(e.request).then(cached => {
          if(cached) return cached;
          return fetch(e.request).then(resp => {
            cache.put(e.request, resp.clone());
            return resp;
          });
        })
      )
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request))
    );
  }
});
