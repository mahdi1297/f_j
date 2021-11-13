// const CACHE_NAME = "version-1";
// const utlToCatch = ["index.html", "offline.html"];

// const self = this;

// //installation
// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       console.log("cache opened");
//       return cache.addAll(utlToCatch);
//     })
//   );
// });

// //listening
// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then(() => {
//       return fetch(event.request).caches.match("offline.html");
//     })
//   );
// });

// //activate
// self.addEventListener("activate", (event) => {
//   const cacheWhiteList = [];
//   cacheWhiteList.push(CACHE_NAME);

//   event.waitUntil(
//     caches.keys().then((cachNames) => {
//       Promise.all(
//         cachNames.map((cachName) => {
//           if (!cacheWhiteList.includes(cachName)) {
//             return caches.delete(cachName);
//           }
//         })
//       );
//     })
//   );
// });
