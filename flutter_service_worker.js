'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"main.dart.js": "f1b68e81556c8f2ca78a5cfaba0e3480",
"favicon.png": "a5e4a03e876b10ee363c72a1efdda979",
"splash/style.css": "41fff3bbf4cb3007d93b4f441f3bda91",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/img/light-2x.png": "5e968d3f3829e2a40dfbed2b2d6e1d95",
"splash/img/dark-4x.png": "8ae63b569dcb31a2a6705ee076c43558",
"splash/img/light-1x.png": "974c82f9d2299f876d0a11b20af5e566",
"splash/img/light-4x.png": "8ae63b569dcb31a2a6705ee076c43558",
"splash/img/dark-1x.png": "974c82f9d2299f876d0a11b20af5e566",
"splash/img/light-3x.png": "f3f752693ee5939b7435cd71e72365a9",
"splash/img/dark-2x.png": "5e968d3f3829e2a40dfbed2b2d6e1d95",
"splash/img/dark-3x.png": "f3f752693ee5939b7435cd71e72365a9",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"index.html": "ba7f7e466b271bcebd9d39e74f47b313",
"/": "ba7f7e466b271bcebd9d39e74f47b313",
"version.json": "c1ca17db15a37b2092bf0c67bc4bd387",
"main.dart.js_1.part.js": "f4c6d50776651b05562bbb65dbacda6d",
"assets/AssetManifest.bin.json": "992421871cae1188cead379310d19c04",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/fonts/MaterialIcons-Regular.otf": "7145f3e87150fa5261b5efbfab184db8",
"assets/AssetManifest.bin": "e960ec085c89c8093a9f0c0c99ca6802",
"assets/AssetManifest.json": "3f5150e281da800a85fb4f645b0eb9a4",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/assets/background/ayano.png": "044abd9006288183074a324f673a1d0a",
"assets/assets/background/arasuji.gif": "a6998fb19d9c6bb64ad4f2471631c10f",
"assets/assets/background/four_mili.png": "b8e855d9bb99a8d7e04df5900b4fe096",
"assets/assets/background/background.png": "33970c3689c36cefc20486d4513ff6ef",
"assets/assets/background/author.png": "f502b6cee2434e65e9ffadf8c27b55ab",
"assets/assets/background/logo.png": "2b87e0c469967b3fae3cd69e64d6dfc1",
"assets/assets/background/tachie.png": "00fc7592fe2fd674eed1f3e2ec01492c",
"assets/assets/background/ten_mili.png": "ed26bd2bf33b7182255d6422f3bef6e6",
"assets/assets/json/data.json": "be24b201db17b4511d33081cbac63767",
"assets/assets/character/sachi.jpeg": "061f033e4b92fd8b77ba3bb2ce60200b",
"assets/assets/character/ayano.jpeg": "fcac0bca7ab3556e0d23f7fbc9ab0e39",
"assets/assets/character/ayumi.jpeg": "e0bd62a3aefe531a2acd48abd7c78daf",
"assets/assets/character/mei.jpeg": "35960900bbfe8025855188424b11fe85",
"assets/assets/character/kohei.jpeg": "04ecc19edffcd725dedea42766890f3f",
"icons/Icon-512.png": "25a02088af5997f56ff80fd607cf7b30",
"icons/favicon.png": "c53309b4c37e4564eec7de67aa46cf66",
"icons/Icon-192.png": "6f09e8ddc7feef8da8a168e827d888a6",
"icons/Icon-maskable-512.png": "25a02088af5997f56ff80fd607cf7b30",
"icons/Icon-maskable-192.png": "6f09e8ddc7feef8da8a168e827d888a6",
"manifest.json": "b3731e8b09b283b369ff09ac5fa8a114"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
