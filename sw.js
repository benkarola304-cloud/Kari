const CACHE_NAME = 'sloth-v15-native';
const FILES = [
    './', './index.html', './manifest.json', './sloth.png',
    'https://unpkg.com/peerjs@1.5.2/dist/peerjs.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',
    'https://unpkg.com/html5-qrcode'
];
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(FILES))); });
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k!==CACHE_NAME?caches.delete(k):null)))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r||fetch(e.request))));
