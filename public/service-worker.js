/* eslint-disable no-restricted-globals */
//! Static caches 
const CACHE_NAME = "Static_6";
const precachedResources = [
  "/offlinePWA/static/media/circles.fbbfe33606835357a1d59a4f67096356.svg",
  "/offlinePWA/static/media/three-dots.d495cf010a1763f1c105db06e1baa5c8.svg",
  "/offlinePWA/static/media/Discover.f6e626a675dedff1c43f65bd150dc637.svg",
  "/offlinePWA/static/media/DiscoverGerman.11a816be63b32808b5bde4b2f89113ba.svg",
  "/offlinePWA/static/media/logo.103b5fa18196d5665a7e12318285c916.svg",
  "/offlinePWA/static/media/play.9a6005b5efd5bf1592a599cbb2909e97.svg",
  "/offlinePWA/static/media/Result.54943f038ccfe6c7731aab221e3f16fb.svg",
  "/offlinePWA/static/media/ResultGermany.b3ad8bea018c29aae887f812efe2b944.svg",
  "/offlinePWA/static/media/selectSex.176a94a80b9f25b1e4dc7be32a6f4fb5.svg",
  // "/offlinePWA/static/media/man.8a39e0c9782789d35b74af33ef7d06ff.svg",
  "/offlinePWA/static/media/YourMuscleAge.aee3bfd345144de1bce957bb54441b5d.svg",
  "/offlinePWA/static/media/tik.26e655b9248266a1a06cf8fbe5b1ce07.svg",
  "/offlinePWA/",
  "/offlinePWA/index.html",
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
        return fetch(request).then(
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
