const CACHE_NAME = "science-dungeon-v1";

const FILES = [

    "./",
    "./index.html",
    "./game.html",
    "./character.html",
    "./dungeon.html",
    "./shop.html",
    "./inventory.html",

    "./manifest.json",

    "./css/main.css",
    "./css/game.css",

    "./js/main.js",
    "./js/game.js",
    "./js/player.js",
    "./js/enemies.js",
    "./js/questions.js",
    "./js/shop.js",
    "./js/inventory.js",
    "./js/save.js"

];


self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(FILES))

    );

});


self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys().then(keys =>

            Promise.all(

                keys
                .filter(key => key !== CACHE_NAME)
                .map(key => caches.delete(key))

            )

        )

    );

});


self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)
        .then(response => {

            return response ||
                fetch(event.request)
                .then(networkResponse => {

                    return networkResponse;

                })
                .catch(() => {

                    return caches.match("./index.html");

                });

        })

    );

});
