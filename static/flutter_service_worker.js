'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "03cabb4fd174cfa3a557d0e111233357",
"version.json": "c402bba54d73910ac0afdc14956d60b7",
"index.html": "7bd61f0a4c32eb2ae5bde98603bfa063",
"/": "7bd61f0a4c32eb2ae5bde98603bfa063",
"main.dart.js": "ea5188458de19f69e05fb1bf3d338d05",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4be22dc2f005c3fab05b7708678460d7",
"assets/AssetManifest.json": "9e237493d583a343c1b283b7d77d9921",
"assets/NOTICES": "e849b17eef8def852f56e25ac29706c8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "8579d6fde5dd7722456b38f0fdfac5fb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "31b7f8c7f580a991786eefd22c2f88e1",
"assets/fonts/MaterialIcons-Regular.otf": "3f9410a286c4f409ea4fc2a2b07d580a",
"assets/assets/images/banner_image.png": "9317ab30ce298d36b26ee9ce739ad436",
"assets/assets/images/projects/writeanddraw/1.jpeg": "2b3910be2724fbb75071ec8e79a5b648",
"assets/assets/images/projects/writeanddraw/project.json": "515fe72c8702a4b7b9a9da978def7c40",
"assets/assets/images/projects/writeanddraw/4.jpeg": "23e3504e22fdd0b7af87b8ee4cdcd240",
"assets/assets/images/projects/writeanddraw/5.jpeg": "ed7c1d029321ae4a38f7775ff3a50837",
"assets/assets/images/projects/writeanddraw/2.jpeg": "61139af58995b1f88931793024510aa3",
"assets/assets/images/projects/writeanddraw/logo.jpeg": "2b3910be2724fbb75071ec8e79a5b648",
"assets/assets/images/projects/writeanddraw/3.jpeg": "25299aeed9c1790f0ac762d86225f36e",
"assets/assets/images/projects/filesaccessanywhere/project.json": "fc6544991856176fa83f4fae11868255",
"assets/assets/images/projects/filesaccessanywhere/logo.png": "b37acb9a919ccaf775f3cfbbdcc55f03",
"assets/assets/images/projects/eandMoney/project.json": "af5c47a7a6a1b768b3dd547425beb598",
"assets/assets/images/projects/eandMoney/logo.png": "b176092cbe5bff9c60f8bb15a05deb65",
"assets/assets/images/projects/eandMoney/4.png": "9c46e296fccde7bf4804857b15434cf8",
"assets/assets/images/projects/eandMoney/5.png": "d3a4e336458b32b3653a84eea5d2164c",
"assets/assets/images/projects/eandMoney/7.png": "162a0032cdfd1ac507d7cacc2941c8c3",
"assets/assets/images/projects/eandMoney/6.png": "8c97ac2e5611f02561f0adc8f4028cd1",
"assets/assets/images/projects/eandMoney/2.png": "1d96b7a7a916b57fb5fc1f62e5662b29",
"assets/assets/images/projects/eandMoney/3.png": "27db257ec6ca040840c1597f4e1c3974",
"assets/assets/images/projects/eandMoney/1.png": "0476ad2e306052bdf4a15d690abc73c0",
"assets/assets/images/projects/letssavemoney/project.json": "20f0b29c9ef7a645f0b1b2c69778c7a6",
"assets/assets/images/projects/letssavemoney/logo.png": "4c90c042b3cda3e58bb7d25d8d216360",
"assets/assets/images/projects/letssavemoney/4.png": "905e1a4b68660233e280354c483c6887",
"assets/assets/images/projects/letssavemoney/5.png": "17450b322d8843ff8395f9a34cfd6031",
"assets/assets/images/projects/letssavemoney/2.png": "981dece1847d2e034a2ed6ae22efabf2",
"assets/assets/images/projects/letssavemoney/3.png": "a0cb5679344d487e219330383e0ab7e0",
"assets/assets/images/projects/letssavemoney/1.png": "2305b42362694b9366ad36b4669a88f0",
"assets/assets/images/projects/valuware/project.json": "045470f994a8297d5754afd88f95e8b9",
"assets/assets/images/projects/valuware/logo.png": "13c2044e9b9e1fa367fda21727e6f5b2",
"assets/assets/images/projects/valuware/4.png": "40f33e492cbf6f7535d99e2fd3217e94",
"assets/assets/images/projects/valuware/5.png": "a2786a02699a1be8d3fa0911c90de139",
"assets/assets/images/projects/valuware/2.png": "eab5309624fc0a064fb9931f41143bdd",
"assets/assets/images/projects/valuware/3.png": "e387d73b5ccf31450b7b4fdfee13906a",
"assets/assets/images/projects/valuware/1.png": "dbc935742ee8dce2432bc34f5c75711f",
"assets/assets/images/projects/goys/project.json": "3abf6e1a0a9783085d0c008ca97db098",
"assets/assets/images/projects/goys/logo.png": "c01fb2dc89e9910813f168eac0caf3a7",
"assets/assets/images/projects/goys/4.png": "77f6d230212fd895c93c6d624fe12ab4",
"assets/assets/images/projects/goys/5.png": "426c8db09d7524b7d0b9b1fb54a6c42e",
"assets/assets/images/projects/goys/2.png": "012926dc6fa00320c5ca0a635aa58b27",
"assets/assets/images/projects/goys/3.png": "0d7aeaec4c6810bda17cba722d9f9698",
"assets/assets/images/projects/goys/1.png": "b6427ee2a2e944555f5cbdad29acb17b",
"assets/assets/images/projects/sdtps/project.json": "549d243c7e64662bacf72c7bcf7606b7",
"assets/assets/images/projects/sdtps/logo.png": "f2bae10808494155fbde11bdf94748cf",
"assets/assets/images/projects/sdtps/4.jpg": "2a7706c06e988189ed5194560338d215",
"assets/assets/images/projects/sdtps/5.jpg": "45b251e3514a12d1c2b48e8a463672a8",
"assets/assets/images/projects/sdtps/2.jpg": "e1b3dd4d425d7487f2fcf936f5c2e400",
"assets/assets/images/projects/sdtps/3.jpg": "1f726fdb4b7d7870f2bfc489fabd1099",
"assets/assets/images/projects/sdtps/1.jpg": "4fa94562c5b360f252b0545dbfab5e4b",
"assets/assets/images/projects/oneload/project.json": "e9540019de5c5b0fa1291f7048908bcb",
"assets/assets/images/projects/oneload/logo.png": "dbd25ceadca9dc18f16d108efef2c831",
"assets/assets/images/projects/oneload/4.png": "50b4d8ebd6fb0aafc13f6353dcbc1554",
"assets/assets/images/projects/oneload/5.png": "37d38d020f884eac2ab50d864dd2dd80",
"assets/assets/images/projects/oneload/7.png": "60eec806001e89bc1a142a62f0aaacbb",
"assets/assets/images/projects/oneload/6.png": "3f258f621770c334f2e228c448653479",
"assets/assets/images/projects/oneload/2.png": "2bf290d2d6e9e1cd87ce239357aa95a2",
"assets/assets/images/projects/oneload/3.png": "7d91d8d824f9c97dda59a1fc9de2bb2a",
"assets/assets/images/projects/oneload/1.png": "51f1e4706daebf1b09e633f8d76c47e9",
"assets/assets/images/projects/stickynoteswithreminder/project.json": "b7d3d502a9a869ab0eda0c13725d4c9d",
"assets/assets/images/projects/stickynoteswithreminder/logo.png": "b37acb9a919ccaf775f3cfbbdcc55f03",
"assets/assets/images/projects/voicenotes/1.jpeg": "cf518e7c5c7427779421fa79a2893c76",
"assets/assets/images/projects/voicenotes/project.json": "ec9f01c7c0667c717d83e5fe8cb6e09c",
"assets/assets/images/projects/voicenotes/4.jpeg": "4fa6bf76157c0395c67d6ec8a87803a5",
"assets/assets/images/projects/voicenotes/5.jpeg": "cb2519871289a5e680a179ff92cd17a2",
"assets/assets/images/projects/voicenotes/2.jpeg": "258e95fd57a5bdc80a305da38c98a40b",
"assets/assets/images/projects/voicenotes/logo.jpeg": "cf518e7c5c7427779421fa79a2893c76",
"assets/assets/images/projects/voicenotes/3.jpeg": "9e5c68a391f959949ce3e933a1910fe0",
"assets/assets/images/projects/eandUAE/project.json": "cfb0913b0f5eb70f6490a49c2c2d31fc",
"assets/assets/images/projects/eandUAE/logo.png": "63ceb607d2dc8c13f9c6c81745f8540e",
"assets/assets/images/projects/eandUAE/4.png": "cc8f09e2cc0017f4fc8a4976a6170f35",
"assets/assets/images/projects/eandUAE/5.png": "eb3c580a09ab6740905ebc67ad99a544",
"assets/assets/images/projects/eandUAE/7.png": "798cd65d13aabdf27155468f2c42e95d",
"assets/assets/images/projects/eandUAE/6.png": "f72876face350be2cabace3fea5be8d9",
"assets/assets/images/projects/eandUAE/2.png": "50161ea74bad5ad8520f2904dcf4127f",
"assets/assets/images/projects/eandUAE/3.png": "9c1d2193c41a8fd2a0b0897181e96459",
"assets/assets/images/projects/eandUAE/1.png": "ca2cda6cf83395e99d073c24bd24cb6f",
"assets/assets/images/projects/letsspeakout/project.json": "4416e42e7f81222c5a5db61e0890d374",
"assets/assets/images/projects/letsspeakout/logo.png": "40d3f6466853a960bd4dff6ef08fbb04",
"assets/assets/images/projects/letsspeakout/4.png": "02f8ae996bf850574e2b6457402a36ae",
"assets/assets/images/projects/letsspeakout/5.png": "4d2d63690c6d0caf83c2e8e84522c922",
"assets/assets/images/projects/letsspeakout/2.png": "53d5a4da91e933852907aab0c5d5d13c",
"assets/assets/images/projects/letsspeakout/3.png": "6da59999d13ee5256f7a7dfc48f31714",
"assets/assets/images/projects/letsspeakout/1.png": "d0dcd37fead5d5a7912eadec8890f93c",
"assets/assets/images/projects/letsgoout/project.json": "39c88f093162cf3939c85823695c15eb",
"assets/assets/images/projects/letsgoout/logo.png": "2e5bb03b961f2ff1ddc518ccd58ad7aa",
"assets/assets/images/projects/letsgoout/4.png": "88ca2d1e31ca3dea83a4c20b65d9902e",
"assets/assets/images/projects/letsgoout/5.png": "65afe6af4b4c86968dd9d3a9af91befc",
"assets/assets/images/projects/letsgoout/7.png": "cf8027467b71d7a99aaa8ca2edba1914",
"assets/assets/images/projects/letsgoout/6.jpg": "0e5baf9b34b4059e7f32a7fb8289e34c",
"assets/assets/images/projects/letsgoout/2.png": "b6f61a06c29e84c80520c32f7e8d2c4a",
"assets/assets/images/projects/letsgoout/3.png": "d817d2a7902c0acd0052688cf0533ca9",
"assets/assets/images/projects/letsgoout/1.png": "f902948ef25f19248872d85455748457",
"assets/assets/images/muzammilpeer.jpg": "19834a3eb9ea5f56e8ee5333f240e28f",
"assets/assets/images/skills/docker.png": "aeddb8415d88de2cc5020270549b54db",
"assets/assets/images/skills/kubernetes.png": "ac90d197cee4e67054cb7d9c3a34f5b7",
"assets/assets/images/skills/python.png": "4ecaef9965be72491b30e40c711c63d7",
"assets/assets/images/skills/flutter.png": "b6630c3c56cbc16243246d550d706eea",
"assets/assets/images/skills/java.png": "c55a7990e76258ba1c794c79ed1cc9e8",
"assets/assets/images/skills/android.png": "36494e7400891d84cbdb1f0f7f2a2eaa",
"assets/assets/images/skills/js.png": "ca7bdd7c2ed33bfa2063eb7db606ed86",
"assets/assets/images/skills/postgresql.png": "3927e5c48e86d16bb75b0d78580ccf3f",
"assets/assets/images/skills/mysql.png": "8d66b278f3905b258e90eb78199b9b16",
"assets/assets/images/skills/django.png": "4179cbd9c657507970e374383251d078",
"assets/assets/images/skills/html.png": "9161780a1ddccd1e209e8ff8582d6b81",
"assets/assets/images/skills/swift.png": "8a9f39b64fffab1c93765308be21b387",
"assets/assets/images/skills/objectc.png": "cc1425f7d671ffd07ac9258fa1467f69",
"assets/assets/images/skills/ios.png": "a69cbe6c991dd020131f090856ad6902",
"assets/assets/images/skills/api.png": "b7220c24be12e8b2ae123d7e7b2eac66",
"assets/assets/images/skills/css.png": "6fad1cbdaf6f9e4cbc745bc78ac2a4b0",
"assets/assets/images/skills/dart.png": "2964fcb04a5a982c8652dc0468067b76",
"assets/assets/images/muzammilpeer_portfolio.png": "e92de3abc6b87a86e61b296558296a43",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
