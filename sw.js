const assets = [
  "./index.html",
  "./script.js",
  "./Images/animatedCustomTrophy.svg",
  "./Images/animatedHardTrophy.svg",
  "./Images/animatedNormalTrophy.svg",
  "./Images/background.webp",
  "./Fonts/Outfit-Regular.woff",
  "./Fonts/Outfit-Regular.woff2",
  "./Fonts/SigmarOne-Regular.woff",
  "./Fonts/SigmarOne-Regular.woff2",
];
const cacheName = "cacheStaticAssets";

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cacheRes) => {
      return cacheRes || fetch(e.request);
    })
  );
});

self.addEventListener("activate", (e) => {
  console.log("service worker activated", e);
});
