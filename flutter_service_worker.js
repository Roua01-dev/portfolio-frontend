'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "51326313e2a4572263c9c17251846f8c",
".git/config": "59c61e5c7d7a681da481be7567f4876a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "78b78aa8a0c3982b31ffea26c7bbe783",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9096763a34502453d66649bed9ddc6b8",
".git/logs/refs/heads/master": "9096763a34502453d66649bed9ddc6b8",
".git/logs/refs/remotes/origin/main": "aafc9dd755907532c32af264ddef3163",
".git/objects/03/0d4c250d178249902d247f5e55e588dc645b58": "5d5d461defc16d6d465d171a106246fd",
".git/objects/06/c57e42021b099728bb8a750788fa1c12a16d2e": "731ad2b905a84b81f973adc942742568",
".git/objects/0a/e6b2b4a6a6da5b706dde01c66da09bfffdac20": "5184e02706f3be9d7de9ec3e8362dcd3",
".git/objects/0c/78b0fcab30db58d497981f016d03fda7d29e05": "24bb338d6fd11584c6a0516a5ff08e34",
".git/objects/10/8f3eb25449524b04e6bd0bef7a3a5a96f3c67b": "e09c4d699057aa9d9aa59a76f0a8e21d",
".git/objects/13/cee14d7a6dea0be579e0daff21d14589bb5ca0": "651ec660ad11d6d8621b990670aaf318",
".git/objects/1c/d4f5e1c7a17108fff75e7d0dcfc7b525d56c9f": "e9c0a3f1e494280d2df6d8c149395210",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/23/f964ff206d1442a10486dbc78e3f62f2005f9b": "63d0eb5c3c7a20ef5f46b05f7582ff6f",
".git/objects/24/0cc3ad7cf11419f1ecbefe7f2d48836fc3e678": "c8c4fa91bfd1db5ce98a99cbc4d82fb1",
".git/objects/27/105217e3dffe70cb8a96ab617bd213ff19d62d": "d830f59f0763fe820a68a2c2591beaac",
".git/objects/29/c7daa125235c451166e76cb2778eba186ceb8b": "96feaa92a104de1e2021520f544c0995",
".git/objects/2a/75c4fba28ceb223989de03228829e0b315853e": "5ee0feb2ec3a09dff2c551212d1fdefd",
".git/objects/2f/64eee4b744732ab956c619b4fd167bd268e66e": "7757aef494ed7ca23b9e5f6f0bfb18ab",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/14e9c0b7eaf02129e4c96ed90cefcc90d7a762": "7146920cc38afedc0b65382ec6bae5b8",
".git/objects/38/cf598cea5ae48c10a4caa4c2516a4467788444": "0e1b22eb5ef9229f6b301852555622a3",
".git/objects/3d/163d15789a5fb6f373998049bf4932e54d4b5b": "67420e1f39adb98c1520dfafc53b02c4",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/42/f29adb9ca69af331ebc6a48492b0671fedfbec": "03c09d739308ddec03068475b3ddefb9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/f5310f712e22f47a648ae3b2ffddca38e3d61a": "67a8b52ebb30be9bb92badbb55083874",
".git/objects/4d/6103f18a852b2c8c15b3b906851a666c7879fe": "6125270103890c5420f3c7171fa2d87f",
".git/objects/4d/89efe15a8dd6677d45a7f6c28606e9e1e5f42b": "df4ffafec93fc5c4680da0e927d19031",
".git/objects/4d/bc64d737b2734d3099de250424708328e9f801": "9d52df2604ef382ecf9e780adc7c7840",
".git/objects/51/50f5757a976ed7dd29ac04f47e08d299af6ea2": "9c3f91243f6ff48d2b8f180ed567462a",
".git/objects/55/61a4ddd434b73af76dfb106adb01e53a49e87f": "b7ccf847b9620fe018efc10d16222b56",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5c/0745275bf766bab38f8afbf312e935b0f1dbd2": "7acc4326db7b68c5f384ee7461532b43",
".git/objects/5c/639efdcaded6d155f9d21703a46639df39a1a3": "596982be5d542616be4efdbe758f7840",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/79/57128fdc00961ec63248525bc3e2a62f5b472b": "8ccdb2df088b348ab314b94948ce6c4d",
".git/objects/7b/514cad17d0267d794d735f621a17135f25eb8f": "97811061643fde884ba76f1644484c1d",
".git/objects/83/4176bd53542a90f47495973e31f1ba527e9822": "165540a15f4d0db30f6a301383f638d0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d2d8373ac09705aeeec5ad03ff65a8876d190f": "6922455e790dc6ddd40adc7e35ff44ff",
".git/objects/8a/dcea42032a5cae6016ef4015bfec217be38b8b": "7980e53b6444e588fc13c67df9b11079",
".git/objects/8e/7dc35ccc5f2232c506bb147e4419b5eafacfc8": "e4b43a97b27b91a7db2440d631262eb0",
".git/objects/8e/dbe966ac9e5d7acdaa563586627a732cb4a4a3": "83b50aed67bdf36c93528b76ada2c54c",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/a4/4d68049d3b7f4e2df3fe68b492d9a43b197864": "c60de89ef08f5e567b51315bb1e9d7b0",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ae/00aa10eac4fde2f57478543c7a64ee789ae163": "0487760393ca05c6ea80bfb49ba20a9f",
".git/objects/b4/59bed868e69878c5c08974234038f24ca97413": "481357adc367c7c8337f22aa8c70e142",
".git/objects/b4/9847a77d476e6b72647c8466819fb87cdf9762": "e6568aa3382ca964c544804e21f7d488",
".git/objects/b7/009ea18e653630b52e3347c1fdf47f3f775eb7": "7c58ed43f33e602e872315d0699bc7de",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c2/6f57e8033605e5541e388849a05f34bdf5874f": "28411617d168510c933380631269ac26",
".git/objects/c2/a8984d8ec2552e60b5c7c9d9d5fa6b90e612ec": "69386af3c9a3959a71fa81a052161649",
".git/objects/cb/e0c81f4ff4674a3e9407d2ea21c83344235611": "823ff7c0bc7642010ebdfc62005d4cf9",
".git/objects/d1/5cb285783fb85b2066ef9b9d9490cdbdd4f61e": "94bda2eb9e9fa2575ec4e4463290769a",
".git/objects/d4/07b6a6909f55f900ce6fa9b3b3d05eff5e7ff6": "9b244b34e9a2eff911a0b768a9bdd9be",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/d5efc707a670524bb6ef4a039ff5a0fbe6c316": "7c928a69c6b5f4b23918cdfdab12e3da",
".git/objects/dd/0cbfaa508442c195df24b5abec486c29392f72": "448027c4cd8a34d03c23602d68bf877c",
".git/objects/e3/63a0170baccbace09060c1351fdca975c19a09": "5de9885d9d14ec8765d9a21092d58ad8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/ca6555df289cdd916fac31a58fb5b1f85692a5": "ed68556aadb312d7e4febb49bdf64133",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/6568ad7ac776d76e502b825462ad38fcc9c53b": "66006af52a31c223de44dc81a230bb4f",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f1/60c4b877941ebb585f2d86cdbecf09c79ee8c0": "798c2f558e568c55e854a094a64b037a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/6484a9a791a6ff6a19e1ecf721ae6441064e93": "4a409896b9c3add0e49b22ccf2270f70",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f9/367e1f48bbdafbed035ba2f8de1994530d3fd7": "81a3ce4ee40c6fcb186e897b9d4e6b6b",
".git/objects/fe/b7e3817c8ddf634f80ca990b9e1fe159b06d0b": "6b8a729bf21591a1f54fda747cf91231",
".git/refs/heads/master": "0633cbf523b90ed7c30b015e8050ab01",
".git/refs/remotes/origin/main": "0633cbf523b90ed7c30b015e8050ab01",
".vercel/project.json": "579142b4baed30cc379b8967ab13a18f",
".vercel/README.txt": "2b13c79d37d6ed82a3255b83b6815034",
"assets/AssetManifest.bin": "d27444147ad761b947b3e446d8a8245d",
"assets/AssetManifest.bin.json": "f73e6aadbd00dea128e685dc3ca799ee",
"assets/AssetManifest.json": "128b44fd266ec4453afc763147baed70",
"assets/assets/images/roua.png": "0e0b91d9e080e61be004cd34f4e2ed2d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d11aaf432772867f737ed7de376bd307",
"assets/NOTICES": "957e5762f8998a11b1c451e1abed53ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "788e15e9b40e41aaae3c0a9eb4bdcab7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f549b67ed7b80520cc3ed1b086134a7d",
"/": "f549b67ed7b80520cc3ed1b086134a7d",
"main.dart.js": "a96b9f900e846fad18a4b2afe089def1",
"manifest.json": "75ddf561701309cd388dc71fbe615148",
"vercel.json": "eec5f102a7aa86ca09adc0ca120d08b1",
"version.json": "7804eb643eb875d188221832d4ff86c5"};
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
