/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f376b6a563375d81aeb6e38aa42463b3"
  },
  {
    "url": "assets/css/0.styles.dc595e24.css",
    "revision": "15c5e3d969740eb441ad3122a85111ef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e71482f2.js",
    "revision": "5475bd581179a3d8c19defd3a2355f14"
  },
  {
    "url": "assets/js/11.3bfb8044.js",
    "revision": "1ca6e69dd76ec098f96d4dc0e0909ae5"
  },
  {
    "url": "assets/js/12.5d18e77d.js",
    "revision": "6c085aac3538081b706b24843528d75b"
  },
  {
    "url": "assets/js/13.5f0e6adc.js",
    "revision": "56920038e7ef6cc24b7fed88e4ea75d9"
  },
  {
    "url": "assets/js/14.0e9fbf74.js",
    "revision": "0039c9067aff33be316b53c67f25e05d"
  },
  {
    "url": "assets/js/15.1fd564a1.js",
    "revision": "5ae94f976b3533e254ce3f3c95997fb6"
  },
  {
    "url": "assets/js/16.7e18cd62.js",
    "revision": "0733fc8b2f62525b20feb57ce0b1aea9"
  },
  {
    "url": "assets/js/17.b557a170.js",
    "revision": "758a07c147935c9be6158a22dd53adb0"
  },
  {
    "url": "assets/js/18.9879de0d.js",
    "revision": "445c94e1cfde99733d75a1386a9b5067"
  },
  {
    "url": "assets/js/19.adbfe219.js",
    "revision": "30b97738579c6f4dc3f4bbe6dac4f1d4"
  },
  {
    "url": "assets/js/2.590cb2e6.js",
    "revision": "751d2b659f08f666c8a20cf7e4b61f84"
  },
  {
    "url": "assets/js/20.86636d79.js",
    "revision": "65443260a5cf16caa51c6bfad83d13f8"
  },
  {
    "url": "assets/js/21.4e858681.js",
    "revision": "6c65dd116c5a42a731d4461e3808a725"
  },
  {
    "url": "assets/js/22.64cbda4f.js",
    "revision": "17bf64b96f2401dd9f04cb79e8dfae8b"
  },
  {
    "url": "assets/js/23.9d0b3710.js",
    "revision": "d6ff2c0e6712e9df7cf9379257bb1f92"
  },
  {
    "url": "assets/js/24.5c5e288d.js",
    "revision": "0503dfe146ba3008a2ad67d2d532320e"
  },
  {
    "url": "assets/js/25.831e04a2.js",
    "revision": "478ce95a04c1f6f19f1804ff5651bf72"
  },
  {
    "url": "assets/js/26.2d7288df.js",
    "revision": "cfa0fa3b2fd745634fd828167127862b"
  },
  {
    "url": "assets/js/27.2b63d82c.js",
    "revision": "991a1e2f2d769fd2e8d995372f90e40e"
  },
  {
    "url": "assets/js/28.11b38e9a.js",
    "revision": "2f8c8565cb6d789584cdd5e2b5756514"
  },
  {
    "url": "assets/js/29.b41d3ac2.js",
    "revision": "a4f2c1e8895f73e0125e9560c8cfd9e2"
  },
  {
    "url": "assets/js/3.89568fe3.js",
    "revision": "2c19df1c865eae54f7dd8771c76a7a49"
  },
  {
    "url": "assets/js/30.5b83edda.js",
    "revision": "1fa3db416e562024ba04b3ea12935f7c"
  },
  {
    "url": "assets/js/31.23a99bf1.js",
    "revision": "7893f782dd523d2389c563525f4abe8b"
  },
  {
    "url": "assets/js/32.e5b26e52.js",
    "revision": "fa9e6b2d917e99c00b8eff379cba35f1"
  },
  {
    "url": "assets/js/33.d419b16b.js",
    "revision": "ee48c3284aad5951574edfbe616abb41"
  },
  {
    "url": "assets/js/34.cfb6ef10.js",
    "revision": "98a8588f0d57183e2954b12a9f4661ba"
  },
  {
    "url": "assets/js/35.052d55fd.js",
    "revision": "ac396550f43e79a13a1ba49b1717967e"
  },
  {
    "url": "assets/js/36.562756ea.js",
    "revision": "0cf6c0620714eb880ce21ced262337a0"
  },
  {
    "url": "assets/js/37.b7e88f9a.js",
    "revision": "2148f02feac488b204a8e43732b6ec7c"
  },
  {
    "url": "assets/js/38.1750d24d.js",
    "revision": "9f6aaab30a3d2d2c0d0bc64b686d4f45"
  },
  {
    "url": "assets/js/39.87810266.js",
    "revision": "8659d6b70027b66784ed5d9c6861001b"
  },
  {
    "url": "assets/js/4.8eb3e90a.js",
    "revision": "4f3dba3e4e618a44ebc21e34548b9baf"
  },
  {
    "url": "assets/js/40.268b9858.js",
    "revision": "f66a05ebeed5ad13c7b59452dd5591a3"
  },
  {
    "url": "assets/js/41.055fc944.js",
    "revision": "666707066b77f206060211177b81be8a"
  },
  {
    "url": "assets/js/42.db377b0d.js",
    "revision": "b0ee02462f2ed8ec8b46059164e77881"
  },
  {
    "url": "assets/js/43.0522fc90.js",
    "revision": "2a94ec8ea7bac724374f73633f7f9014"
  },
  {
    "url": "assets/js/44.43703684.js",
    "revision": "7324f4ee24ef49e96d02a1fb7d3ba86d"
  },
  {
    "url": "assets/js/45.94f7821d.js",
    "revision": "d06cebead7107422882d1785cd031b32"
  },
  {
    "url": "assets/js/46.fd9db8bb.js",
    "revision": "6158aad7eee12fed87562079dafe8820"
  },
  {
    "url": "assets/js/47.e8f5a9a5.js",
    "revision": "457d55bd574ff361b664e5b1e7629422"
  },
  {
    "url": "assets/js/48.aff3b0d6.js",
    "revision": "1606db28d1d811fc0c0b4e3817755437"
  },
  {
    "url": "assets/js/49.d17f87e1.js",
    "revision": "406f19a96bec75b6becac1d80703301a"
  },
  {
    "url": "assets/js/5.46ef5b70.js",
    "revision": "32e508d26d546c9aac90dbd28260a438"
  },
  {
    "url": "assets/js/50.d01b2d65.js",
    "revision": "7c897af9bd27b812b4357f018a1de72f"
  },
  {
    "url": "assets/js/51.c8d0f9d8.js",
    "revision": "df7adb35b41b7f089fcf7900a5c2b28c"
  },
  {
    "url": "assets/js/52.7641a0bc.js",
    "revision": "7fa4d79814cef231b8e6c5792cb900c9"
  },
  {
    "url": "assets/js/53.d7b0662b.js",
    "revision": "195b37592f9abeebb674c66ee18cff8d"
  },
  {
    "url": "assets/js/54.390fffd4.js",
    "revision": "15f0ebd4e747d607d1127bca7d8517e9"
  },
  {
    "url": "assets/js/55.abacb4cc.js",
    "revision": "f7d8be8a6693f5d29b15a694d607322e"
  },
  {
    "url": "assets/js/56.5e8f7cd8.js",
    "revision": "b78cfce87d7a647cd7eff17199f4ed32"
  },
  {
    "url": "assets/js/57.050435b3.js",
    "revision": "5d7f4a918b8f1e409947959bcf49bb52"
  },
  {
    "url": "assets/js/58.3dcc769f.js",
    "revision": "86a0286884c6a8b4680eab4e2dd90871"
  },
  {
    "url": "assets/js/59.78f886d0.js",
    "revision": "f166936990d78ca5f2ab85ccbf41c733"
  },
  {
    "url": "assets/js/6.e9fe7882.js",
    "revision": "8ca752e20bd6f7e3efaef7b16ddf4bed"
  },
  {
    "url": "assets/js/60.b56f70a7.js",
    "revision": "664cf24384d691cefc8d3f6b11dc2cd9"
  },
  {
    "url": "assets/js/61.af29024b.js",
    "revision": "6d9afb2e1ed10dcf24514ea598c6670c"
  },
  {
    "url": "assets/js/62.71fde174.js",
    "revision": "80d55ceba5351062b41671e031cbd810"
  },
  {
    "url": "assets/js/63.bac9e2b1.js",
    "revision": "d2fbfe0f84bb7c365f777b7797497099"
  },
  {
    "url": "assets/js/64.122918f2.js",
    "revision": "81422144ef4e8f205d4834c8cd315713"
  },
  {
    "url": "assets/js/65.038522a0.js",
    "revision": "39efb7d15e9433a6ccc6cb40c746883f"
  },
  {
    "url": "assets/js/66.d937a41b.js",
    "revision": "9e3c9528893f4e8f34868bddddbc2a16"
  },
  {
    "url": "assets/js/67.ed7fbe09.js",
    "revision": "cc21ed3c400ea73e47bb9ed0f7d65b2e"
  },
  {
    "url": "assets/js/68.b0f03bd2.js",
    "revision": "a9a172e691eb0b93252c584e93081c12"
  },
  {
    "url": "assets/js/69.dcd38c44.js",
    "revision": "5d251a76998d20f62f9aeea9974c9334"
  },
  {
    "url": "assets/js/7.e5e5ff12.js",
    "revision": "503e67558dcddb5c6115bf721c2b6c6d"
  },
  {
    "url": "assets/js/70.07eed22a.js",
    "revision": "2ccfb09d3c2a82f08c7e80d1df632afc"
  },
  {
    "url": "assets/js/71.f7563970.js",
    "revision": "b3efc39f50bcfcac6598f199cb6c7495"
  },
  {
    "url": "assets/js/8.e291d4da.js",
    "revision": "9e40c06ccf19307cd4914babad536e7d"
  },
  {
    "url": "assets/js/9.cb584e83.js",
    "revision": "038dccdfe5deb0503e269cf986ac5fd9"
  },
  {
    "url": "assets/js/app.5c82f21d.js",
    "revision": "25ace3325c1c72f982fde7efccab1afd"
  },
  {
    "url": "blog/angular.html",
    "revision": "7155bf570578f91a9776e88af910c5fc"
  },
  {
    "url": "blog/ast.html",
    "revision": "8fc66bbf05fbe8580eed662923fcd0a5"
  },
  {
    "url": "blog/canvas.html",
    "revision": "c28c730e640e7d708c5978b2669656b3"
  },
  {
    "url": "blog/console.html",
    "revision": "2ca6ff4af77ae27ae7f43f75546e7919"
  },
  {
    "url": "blog/csspre.html",
    "revision": "56c000b3f5b0166f0425fb9c1486c588"
  },
  {
    "url": "blog/deno.html",
    "revision": "f403c8f0973796a34c080066f2b6efaa"
  },
  {
    "url": "blog/docker-compose.html",
    "revision": "df01deebcf3af444d36703f7ee93c103"
  },
  {
    "url": "blog/docker-project.html",
    "revision": "96872d645fcbdfa26f5ab4c4633d57a5"
  },
  {
    "url": "blog/docker.html",
    "revision": "c519e05a1aa223ddfefc5fc21642b8e8"
  },
  {
    "url": "blog/echarts.html",
    "revision": "159042f8f5b5dd84aca783908155f021"
  },
  {
    "url": "blog/egg.html",
    "revision": "cc0677661b41c63579e2eec36ff55f8d"
  },
  {
    "url": "blog/electron.html",
    "revision": "b1906781401f85d6de84bbe1b9ab9d10"
  },
  {
    "url": "blog/flex&grid.html",
    "revision": "9b586b61921455a00addd572cdc57f88"
  },
  {
    "url": "blog/flutter.html",
    "revision": "3a0b35de9d460c22f7edac836c489dca"
  },
  {
    "url": "blog/g6.html",
    "revision": "3d3a71399e7b38651d1e3bccb6cbe76c"
  },
  {
    "url": "blog/git.html",
    "revision": "3cfe4086f00c1d46527e385199220b64"
  },
  {
    "url": "blog/golang.html",
    "revision": "a815aed1d67531b59d801078d0f06f6e"
  },
  {
    "url": "blog/http.html",
    "revision": "fd95c94c300c66370031474122b2234b"
  },
  {
    "url": "blog/index.html",
    "revision": "669f521475e8dc15788bce4ac059f86b"
  },
  {
    "url": "blog/koa2-learn.html",
    "revision": "45ead3c3e76ac74cfd4dbe9a3815795c"
  },
  {
    "url": "blog/map.html",
    "revision": "7a68ca533fbbb1523f0171cbf53ca5f8"
  },
  {
    "url": "blog/nodecli.html",
    "revision": "b08fd90eff339d6b838a7941b9cea54e"
  },
  {
    "url": "blog/nodespider.html",
    "revision": "2f8bcba25535b32cde6582b16ab7124f"
  },
  {
    "url": "blog/performance.html",
    "revision": "eb5d592a6305049b52f388710e63a693"
  },
  {
    "url": "blog/puppeteer.html",
    "revision": "13ff43e157766f3d37e064fd389e3a1f"
  },
  {
    "url": "blog/react-native.html",
    "revision": "f0a9aa42fe7a02b05c643a8d900ca0ba"
  },
  {
    "url": "blog/react.html",
    "revision": "36c22fb977ea4324600a146f950a5af5"
  },
  {
    "url": "blog/socketio.html",
    "revision": "efb14762f02567e19cbcf3323ba6cec8"
  },
  {
    "url": "blog/springboot.html",
    "revision": "b5853d78c3d4cbe7f31f087bfaf40b25"
  },
  {
    "url": "blog/taro.html",
    "revision": "f021bf349deecce0ca80c390380bacfb"
  },
  {
    "url": "blog/tensorflow.html",
    "revision": "7c6b71881afc38bc2754d6f533ac8dfc"
  },
  {
    "url": "blog/three.html",
    "revision": "7b30adb3d670fecf45134e92602eb45c"
  },
  {
    "url": "blog/tonejs.html",
    "revision": "ef16dc339d5d776b531023376b05539f"
  },
  {
    "url": "blog/tsspider.html",
    "revision": "614cb4a6df2e0b1dd83a96864aea75e9"
  },
  {
    "url": "blog/vue2.html",
    "revision": "f167824d687d63f08af8e799fbe5b56c"
  },
  {
    "url": "blog/vue3.html",
    "revision": "e9df7446ddec4087283f4ea277232ee5"
  },
  {
    "url": "blog/vuepress.html",
    "revision": "ed9b87fe819c8897cc552b4abfd548e9"
  },
  {
    "url": "blog/vuetestutils.html",
    "revision": "f6955e6330357f58e824bf783c3ddf9a"
  },
  {
    "url": "blog/vuetestutils2.html",
    "revision": "c8da31cb626f63ccb49f728512516974"
  },
  {
    "url": "blog/webpack.html",
    "revision": "7e01805a1a9de56fa112302d8f09f94c"
  },
  {
    "url": "img/blog/canvas-1.png",
    "revision": "2b0b3b1594fc368e9b06979f17e7a5ca"
  },
  {
    "url": "img/blog/csspre.png",
    "revision": "73f95ff4b4e0db20764109d4de252247"
  },
  {
    "url": "img/blog/echarts.png",
    "revision": "b3ef9749557df16eefb9effad871eb05"
  },
  {
    "url": "img/blog/flex&grid.png",
    "revision": "21b02b3b373d5ce8753fded15cd472e4"
  },
  {
    "url": "img/blog/flex&grid/1.png",
    "revision": "7683fd18049063c3686281bceb2c41f4"
  },
  {
    "url": "img/blog/flex&grid/10.png",
    "revision": "0e9c60d78429c64bf9ff75064615a71b"
  },
  {
    "url": "img/blog/flex&grid/11.png",
    "revision": "f5485827db81ac7545daf4dc060cd4ae"
  },
  {
    "url": "img/blog/flex&grid/12.png",
    "revision": "1df1fc49d91c9b95d1dee6624142ccd5"
  },
  {
    "url": "img/blog/flex&grid/13.png",
    "revision": "37cf68397758193aa68ef4514f0560b4"
  },
  {
    "url": "img/blog/flex&grid/14.png",
    "revision": "12a245fabdb2fca56b309ab64c213f7e"
  },
  {
    "url": "img/blog/flex&grid/15.png",
    "revision": "6082b78cdd1bfabb91eed7e203e7d29b"
  },
  {
    "url": "img/blog/flex&grid/16.png",
    "revision": "a8c5a6bd20d36945090919d124d3be4a"
  },
  {
    "url": "img/blog/flex&grid/17.png",
    "revision": "2a9101338bb9268d433036a0faf64caa"
  },
  {
    "url": "img/blog/flex&grid/18.png",
    "revision": "e8e39a1ea15a377e6bfce4675045c659"
  },
  {
    "url": "img/blog/flex&grid/19.png",
    "revision": "e0e1e6a8488f5cddc0cd9d33ceed62f2"
  },
  {
    "url": "img/blog/flex&grid/2.png",
    "revision": "d9f03b9488b7ed497eb85f7122a46c17"
  },
  {
    "url": "img/blog/flex&grid/20.png",
    "revision": "23bac7dbc8239af9e7bd59ca01af76e2"
  },
  {
    "url": "img/blog/flex&grid/21.png",
    "revision": "f69d2ec15facc3bb03bf65cd559fcb0e"
  },
  {
    "url": "img/blog/flex&grid/22.png",
    "revision": "d3f0cb626786256ef81251cf9da275cd"
  },
  {
    "url": "img/blog/flex&grid/3.png",
    "revision": "309bbff48b0060f12ad8d58f9de583b0"
  },
  {
    "url": "img/blog/flex&grid/4.png",
    "revision": "13c66853a8f7732ad6cd577efcbcf6b1"
  },
  {
    "url": "img/blog/flex&grid/5.png",
    "revision": "f67220d844b9cfcfee7b6e2515c9ee8f"
  },
  {
    "url": "img/blog/flex&grid/6.png",
    "revision": "e2c3685a3ae1720dcd1ebdb83260de7e"
  },
  {
    "url": "img/blog/flex&grid/7.png",
    "revision": "a83d7799e6757a6a232600938e9eb873"
  },
  {
    "url": "img/blog/flex&grid/8.png",
    "revision": "38752f4d892abb7a1a8c0dd8c37f49f9"
  },
  {
    "url": "img/blog/flex&grid/9.png",
    "revision": "21974ce73ba49597cb126ac388926584"
  },
  {
    "url": "img/blog/flutter-1.jpg",
    "revision": "b001d1068719bf61540f610c8a9995aa"
  },
  {
    "url": "img/blog/g6.png",
    "revision": "f551d315f6bcf2b05fff01d7ef905979"
  },
  {
    "url": "img/blog/git-1.png",
    "revision": "04c5f749a8da471ea3bda88377be00e3"
  },
  {
    "url": "img/blog/git.png",
    "revision": "64347cb9a58aae4bb51e54d62791ca42"
  },
  {
    "url": "img/blog/index.png",
    "revision": "d1b0e0c7ee2a5467933b2c04bfcdfe0d"
  },
  {
    "url": "img/blog/pupeteer.png",
    "revision": "8b025a55a6efd96cf4627902035a699d"
  },
  {
    "url": "img/blog/socketio.png",
    "revision": "7ba323d5a8a38a0d6cc32fbb63cd7070"
  },
  {
    "url": "img/blog/taro.png",
    "revision": "e03b603da7bdd9ac678b78246a317e20"
  },
  {
    "url": "img/blog/tensorflow.png",
    "revision": "c0a14db68c2689c4c661bf84cb6bfb62"
  },
  {
    "url": "img/blog/vue2-1.png",
    "revision": "b94d747fd273ec8224e6349f701430fd"
  },
  {
    "url": "img/head.png",
    "revision": "69e0159ed21d684bda13dee25103aeb5"
  },
  {
    "url": "img/leecode/index.png",
    "revision": "78ff26ad102f6b31f5fbf6a4a12fcc76"
  },
  {
    "url": "img/lib/1.jpg",
    "revision": "2d9ef660e814b1443839044ccf851ae9"
  },
  {
    "url": "img/lib/10.jpg",
    "revision": "f55d2d905f51110899022b9139b1106b"
  },
  {
    "url": "img/lib/11.jpg",
    "revision": "4b29d8b41702c6d8191dceafd416ee4f"
  },
  {
    "url": "img/lib/12.jpg",
    "revision": "1fc293cc321607a1b7fc7f294562fe86"
  },
  {
    "url": "img/lib/13.jpg",
    "revision": "4cc03bfdf0e74b49b4196be8152fb01d"
  },
  {
    "url": "img/lib/14.jpg",
    "revision": "da5f4e47eef81610844252af7b9eb1ef"
  },
  {
    "url": "img/lib/15.jpg",
    "revision": "5c6d27bd282dda83db17d9d6f7c00717"
  },
  {
    "url": "img/lib/2.jpg",
    "revision": "283f0a816c4f13a05843db7f621aedce"
  },
  {
    "url": "img/lib/3.jpg",
    "revision": "61c154518d007264c518e4ee5e93cc51"
  },
  {
    "url": "img/lib/4.jpg",
    "revision": "0bf9f239531234dfcfe2fdf36fad74bd"
  },
  {
    "url": "img/lib/5.jpg",
    "revision": "fe78d25e8f951c4b9b315baf1c3ae815"
  },
  {
    "url": "img/lib/6.jpg",
    "revision": "fbf9f7c96177a1b6f4dffd425bf4c4c6"
  },
  {
    "url": "img/lib/7.jpg",
    "revision": "816d0a7b8ec1937271108862bfbb9e49"
  },
  {
    "url": "img/lib/8.jpg",
    "revision": "b0863a3f1e7b8c961339efbe67e78074"
  },
  {
    "url": "img/lib/9.jpg",
    "revision": "eae5f4f8ba9fca920645bbaa106a6540"
  },
  {
    "url": "img/repo/electron.jpg",
    "revision": "459d4d640d0508053fd43958036f973e"
  },
  {
    "url": "img/repo/todo.jpg",
    "revision": "53e445a07df9ba14af59434ba3500e91"
  },
  {
    "url": "img/repo/tone.jpg",
    "revision": "26c2a93fd95d949311130905499fe1c5"
  },
  {
    "url": "img/repo/tongji.jpg",
    "revision": "796744d2d08938104b4f576aaaee8459"
  },
  {
    "url": "img/repo/vuepress.jpg",
    "revision": "9bb458f7eed883a96e2a2848803a4755"
  },
  {
    "url": "img/road/1.jpg",
    "revision": "9dfd4f9940bcee33d2423b5093406b08"
  },
  {
    "url": "img/road/1.png",
    "revision": "4240f76fa39d86e3f607ba5f032ccb29"
  },
  {
    "url": "img/road/frontdev.jpg",
    "revision": "e09db97b43530edf0cf76876f9be3652"
  },
  {
    "url": "index.html",
    "revision": "144188618413ef9254fdb4f84971d076"
  },
  {
    "url": "leecode/index.html",
    "revision": "c0c7791d8c8df0bb2333cfd68654e001"
  },
  {
    "url": "leecode/leecode.html",
    "revision": "4f2fcb1ec43c95db8fe34e1cadc32cd2"
  },
  {
    "url": "live2d/wanko/assets/moc/wanko.1024/texture_00.png",
    "revision": "10b7047251205db46fdac7632b5d4642"
  },
  {
    "url": "note/dsaa.html",
    "revision": "5380086c21caf42b4d7948fb038148f8"
  },
  {
    "url": "note/es.html",
    "revision": "42d44e4e238b63e665eb026c80dfbef1"
  },
  {
    "url": "note/index.html",
    "revision": "9df99298ebf0012317be525cb76b9c05"
  },
  {
    "url": "note/lib.html",
    "revision": "da9bf008da734fea7798830d0fce2f5f"
  },
  {
    "url": "note/shixi.html",
    "revision": "fc93402fc3acfa9f716e458ae98d14ee"
  },
  {
    "url": "repo/chatdemo.html",
    "revision": "dc6770b2abd6b9744d544399ba1715c3"
  },
  {
    "url": "repo/dachuang.html",
    "revision": "c4fdb0f41014b8ce877bbb626c18c76c"
  },
  {
    "url": "repo/electron.html",
    "revision": "6d76014bb53f43db358afe5813739770"
  },
  {
    "url": "repo/ibf.html",
    "revision": "885e339df64d3dcacc68fa08bb5a7dff"
  },
  {
    "url": "repo/index.html",
    "revision": "cde87ab5bd8adbdca93a8788769f4d17"
  },
  {
    "url": "repo/javaks.html",
    "revision": "55a86db90660f59d00f0973cccd6feda"
  },
  {
    "url": "repo/ksh.html",
    "revision": "82367ef23b2b100a0ddfbbaca48c4d3d"
  },
  {
    "url": "repo/mddemo.html",
    "revision": "81af1b6f33e3086d218094a8cadc3850"
  },
  {
    "url": "repo/tenseflow.html",
    "revision": "1140382bcae19a01c6ffdb652e78d519"
  },
  {
    "url": "repo/todo.html",
    "revision": "f96f8c5daa43f37eebdd6091778fad74"
  },
  {
    "url": "repo/tongji.html",
    "revision": "5f03548d4a40b41b549f0dedec62f39a"
  },
  {
    "url": "repo/webaudio.html",
    "revision": "ddba3749635dbc607036ee4aad4ccf0d"
  },
  {
    "url": "repo/wkc.html",
    "revision": "7a617030a9227e001d3d1e38880ae61b"
  },
  {
    "url": "road/checklist.html",
    "revision": "08912a48d3f9de9551288c2cff4826ce"
  },
  {
    "url": "road/index.html",
    "revision": "0c96be1245da66962f99951a7a6cf124"
  },
  {
    "url": "road/road.html",
    "revision": "b44bdf691f4d9917f5c8a5892f30b004"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
