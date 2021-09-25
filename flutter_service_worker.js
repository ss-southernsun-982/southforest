'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "85c858f8c458875868ef2d7ae3f6b54d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "809c0445983c20550077d7ee4ffa78ae",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2f67c47f6a2edc56b0d94a341b48f002",
".git/logs/refs/heads/main": "4cc04f03d7117f1207e9e8f31131fe27",
".git/logs/refs/remotes/origin/main": "032c54d6cd4930aba7372853727e9e61",
".git/objects/0a/bc546d3f8ab76f3508851539325c0f96728cbd": "5bf6e539c22fea8b0c33a913b23d9643",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/41/46e813794e2970f8ad37055491069b778d975b": "77b3c77b25740056f98ad2c66ba341dd",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/6c/5ea1239a8cfd0dd8043bb1a98718eff72f2fa4": "d044b3f1b4123421175f59f5ea6ba702",
".git/objects/86/52dd4376e35861a3531631f964fdcc3229b724": "0b8cbb22bbad89d01d9cc9918f5304e4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a9/8b8c9df67872fb4697a3685832f1cce43b9071": "72ad5fc0c4427b3b8774b97f3e0fd0d4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/d9/b87c836c24050f4ce5aa38970e2513c87eb11f": "93d826614b6d4389126882711a0e3913",
".git/refs/heads/main": "117c72180d2a9105fca04b06549f3d7d",
".git/refs/remotes/origin/main": "117c72180d2a9105fca04b06549f3d7d",
"assets/AssetManifest.json": "e43f1f6a2b01db335c1d908a260fbdd5",
"assets/assets/beef_steak.jpg": "df989e89566d21b8534e9c52acbe4b90",
"assets/assets/beef_steak.svg": "ad7cbf4ec4d30ff5cb2078b6bb778bdf",
"assets/assets/chicken_avocado.jpg": "8a0ead899a8de487ee2e16e5e04f5762",
"assets/assets/chicken_avocado.svg": "1540a5a6600dad675ff56804d8fbce6c",
"assets/assets/french_fry.jpg": "46af3234febdd054e207ba375f98192e",
"assets/assets/french_fry.svg": "1e8211c8d5cb5bc29ac04342822be238",
"assets/assets/honey_garlic.jpg": "c3d2b0f516e6be7c338703327ca4fa5b",
"assets/assets/honey_garlic.svg": "ce655cb037232edcf11c2554f9db4ffc",
"assets/assets/ic_coffee_cup.svg": "70a0c90b1eb6a4bc2150b71ff51c40b8",
"assets/assets/ic_facebook.svg": "e44d4dd6594e6ae6718a89059f29cdc7",
"assets/assets/ic_food_service.svg": "e5cc172568dca964f1ed9d466708faf0",
"assets/assets/ic_instagram.svg": "04f1d8728b781908558c8f1442c665ed",
"assets/assets/ic_meal.svg": "44723cef217d21de38bc1544f296a810",
"assets/assets/ic_pinterest.svg": "9134e7f32d515d0c48d6ce671ca37291",
"assets/assets/ic_twitter.svg": "182d5ef4d173a3cd93897242a6fd56a5",
"assets/assets/ic_youtube.svg": "44d3b6b54c4fb59bb5d875108d6c0e22",
"assets/assets/logo.png": "0b8433766b3ccbcb7936f9c054cb59bd",
"assets/assets/pork_burger.jpg": "f83d266c5d2fab6ec75fd0835666a717",
"assets/assets/pork_burger.svg": "23748ee3a0fb5877d2d2a38a3df04aca",
"assets/assets/ramen_noodles.jpg": "610c8990b9d62265fd2b82543fdb3baa",
"assets/assets/ramen_noodles.svg": "02c6501930d60013b0cf857bfbb0a842",
"assets/assets/salmon_burgers.jpg": "fd2fd02129b9567635ce2d109e181c35",
"assets/assets/salmon_burgers.svg": "336afc82b2734fe1b3b2dfecedebabb1",
"assets/assets/strawberry_brownie.jpg": "1d3759dbe11ef9ec6a5f0dbfb24034a5",
"assets/assets/strawberry_brownie.svg": "5efd6b560ab509db47afe9e0a035bbd4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "d8d96b0381050057b63114a9cb5bf88f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "eb2a0bbc6bc0986edc74cca8d7501189",
"/": "eb2a0bbc6bc0986edc74cca8d7501189",
"logo.png": "0b8433766b3ccbcb7936f9c054cb59bd",
"main.dart.js": "0ae48c1500027bcabe8975477f6052b1",
"manifest.json": "4fa51589913b5136cdb58c0a0f01b0e2",
"version.json": "522a1adc05f00d085336684a3aaac380"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
