/* eslint-disable no-restricted-globals */
//! Static caches 
const CACHE_NAME = "Static_7";
const precachedResources = [
  '/static/media/logo.103b5fa18196d5665a7e12318285c916.svg',
  "/",
  "/index.html",
];

//! Cache
self.addEventListener("install", (event) => {
   event.waitUntil((async () => {
      const cache = await caches.open(CACHE_NAME);
      return cache.addAll(precachedResources);
   })());
});
