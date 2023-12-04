/* eslint-disable no-restricted-globals */
//! Static caches 
const CACHE_NAME = "Static_4";
const precachedResources = [
  "/offlinePWA/",
  "/offlinePWA/index.html",
  "/offlinePWA/static/media/circles.fbbfe33606835357a1d59a4f67096356.svg",
  "/offlinePWA/static/media/three-dots.d495cf010a1763f1c105db06e1baa5c8.svg"
];

//! Cache
self.addEventListener("install", (event) => {
   event.waitUntil((async () => {
      const cache = await caches.open(CACHE_NAME);
      return cache.addAll(precachedResources);
   })());
});

//! Fetch and Updating | Dynamicy
self.addEventListener("fetch", (event) => {
  const request= event.request

  if (event.request.method !== "POST") {
    event.respondWith(
      caches.match(request).then( response => {
        // Return the cached response if found
        if (response) {
          return response
        }

        //! Fetch the resource and cache it
        return fetch(request, { mode: "no-cors" }).then(
          (fetchResponse) => {
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, fetchResponse.clone());
              return fetchResponse;
            });
          }
        );
      })
    );
  }
});

//! Activate 
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
