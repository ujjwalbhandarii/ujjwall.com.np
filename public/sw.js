if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + '.js', n).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, i) => {
    const t =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[t]) return;
    let c = {};
    const l = (e) => a(e, t),
      r = { module: { uri: t }, exports: c, require: l };
    s[t] = Promise.all(n.map((e) => r[e] || l(e))).then((e) => (i(...e), c));
  };
}
define(['./workbox-1bb06f5e'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/Tomato_Grotesk/TomatoGrotesk-Bold.otf',
          revision: 'b3ef76fc6a4718cedad8f2d190fb9ec1',
        },
        {
          url: '/_next/app-build-manifest.json',
          revision: '94d1049b3d337aa61ea6e7de40cadfe3',
        },
        {
          url: '/_next/static/chunks/117-3eb052ff8150b47e.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/39aecf79-9497b510948ba091.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/569-79c584e53ca53367.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/594-937a5b4f6f07a10c.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/6-c6f184ee600d403b.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/605-e7aea6f7e304ff2e.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/64-37d79cd143964826.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/878-a7cb032ed4a0caea.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/911-548648b5d1396f98.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/972-cebf344913439db9.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/app/(homepage)/page-41d23caa7c08ba7d.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/app/(private)/dashboard/page-694cdbd42d1e392f.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/app/(private)/dashboard/projects/create/page-2db901f060567259.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/app/(public)/blog/page-cb15f0de77eca21d.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/app/(public)/contact/page-ea748a608ae80c0e.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/app/(public)/projects/page-4a782483d77d49aa.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/app/(public)/ujjwal-bhandari/page-55c57f96829e704c.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-f6f0014cfac08bd1.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/app/layout-d764de402c7bcaac.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/app/not-found-c421950674fdee73.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/b5c10047-858d512d59fa369b.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/fd9d1056-23d93bdf6b6572f3.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/framework-f66176bb897dc684.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/main-5552507e61bb14ed.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/main-app-04d55f278728512a.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/pages/_app-72b849fbd24ac258.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/pages/_error-7ba65e1336b92748.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-ebbdbfa315a950ff.js',
          revision: 'lhJKuEs6PNSlUlWNZMztj',
        },
        {
          url: '/_next/static/css/8a44ee232bacca1b.css',
          revision: '8a44ee232bacca1b',
        },
        {
          url: '/_next/static/lhJKuEs6PNSlUlWNZMztj/_buildManifest.js',
          revision: 'c155cce658e53418dec34664328b51ac',
        },
        {
          url: '/_next/static/lhJKuEs6PNSlUlWNZMztj/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/media/26a46d62cd723877-s.woff2',
          revision: 'befd9c0fdfa3d8a645d5f95717ed6420',
        },
        {
          url: '/_next/static/media/55c55f0601d81cf3-s.woff2',
          revision: '43828e14271c77b87e3ed582dbff9f74',
        },
        {
          url: '/_next/static/media/581909926a08bbc8-s.woff2',
          revision: 'f0b86e7c24f455280b8df606b89af891',
        },
        {
          url: '/_next/static/media/6d93bde91c0c2823-s.woff2',
          revision: '621a07228c8ccbfd647918f1021b4868',
        },
        {
          url: '/_next/static/media/97e0cb1ae144a2a9-s.woff2',
          revision: 'e360c61c5bd8d90639fd4503c829c2dc',
        },
        {
          url: '/_next/static/media/a34f9d1faa5f3315-s.p.woff2',
          revision: 'd4fe31e6a2aebc06b8d6e558c9141119',
        },
        {
          url: '/_next/static/media/cpnuml.fcb59cf8.png',
          revision: '8e31cf2374714522d1b75ca5bef81cfa',
        },
        {
          url: '/_next/static/media/df0a9ae256c0569c-s.woff2',
          revision: 'd54db44de5ccb18886ece2fda72bdfe0',
        },
        {
          url: '/_next/static/media/lumbinisandesh.f7540bc5.png',
          revision: '27384d8f5cad22150be909524a90cbcf',
        },
        {
          url: '/_next/static/media/ujjwall.eb444eb3.png',
          revision: 'a8b3968e7ce47f07cae1f9d46c3c49ff',
        },
        {
          url: '/bestCursor.png',
          revision: 'd5615941ff12069d6d79c19e872783fb',
        },
        { url: '/dp.jpg', revision: '796ee988858f080adf19ade06d6a4864' },
        {
          url: '/hover-white.png',
          revision: '2e788dcdf61b0a5b74fc1c4679af25c7',
        },
        {
          url: '/icon-192x192.png',
          revision: '788bfa8346a8d9095cdfb5211a05de80',
        },
        {
          url: '/icon-256x256.png',
          revision: '151fdd50eb6cf434128ba27f1456ebde',
        },
        {
          url: '/icon-384x384.png',
          revision: '23ef11728dc3798e27600a5232340a48',
        },
        {
          url: '/icon-512x512.png',
          revision: 'a83bcf323231b052e75286548d13058f',
        },
        { url: '/manifest.json', revision: 'bac356630e4f2be822806a9661180ae2' },
        { url: '/navlogo.png', revision: '09dc18442e25d65a04046159f990334b' },
        { url: '/online.png', revision: '80e3b03270c74b8236dfc97a7a25af5c' },
        { url: '/robots.txt', revision: 'bc7e323546e399b11f666c16ef4935fa' },
        { url: '/sitemap-0.xml', revision: 'e606ca3964641ac517c2975ab3293d86' },
        { url: '/sitemap.xml', revision: '582137782b8e0651dc3f107f04e2c94b' },
        {
          url: '/tools/nextjs.png',
          revision: 'e93f4ba12b0d07f54f5ffbda11b23f5d',
        },
        {
          url: '/works/ankit.png',
          revision: '08375226247d8cf3d2e4c7e7b67ce14a',
        },
        { url: '/works/anu.png', revision: 'ff2bc9dc4532d35d8de1c62d2e94fa6a' },
        {
          url: '/works/cpnuml.png',
          revision: '8e31cf2374714522d1b75ca5bef81cfa',
        },
        {
          url: '/works/lumbinisandesh.png',
          revision: '27384d8f5cad22150be909524a90cbcf',
        },
        {
          url: '/works/nepwonders.png',
          revision: 'e8a94255f3d1e3256dddeabfdd78abae',
        },
        {
          url: '/works/onlinestore.png',
          revision: 'daf3a2afaa8cd148f1a22f14550eed12',
        },
        {
          url: '/works/travlog.png',
          revision: '1e2291defa4787446957d270c10c6e7e',
        },
        {
          url: '/works/ujjwall.png',
          revision: 'a8b3968e7ce47f07cae1f9d46c3c49ff',
        },
        {
          url: '/works/woodmart-clone.png',
          revision: '0243d3b0466c1c10b59e897a5b7cf961',
        },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: n,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET',
    );
});
