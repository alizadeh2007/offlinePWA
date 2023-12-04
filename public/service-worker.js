/* eslint-disable no-restricted-globals */
//! Static caches 
const CACHE_NAME = "Static_7";
const precachedResources = [
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
