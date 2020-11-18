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
    "revision": "d6dd7d86282966b15434958607b94842"
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
    "url": "assets/js/10.67f81b95.js",
    "revision": "0b8a6f07b8e037763cd0c4ba8644a09b"
  },
  {
    "url": "assets/js/11.c1f3a02b.js",
    "revision": "42149d9dd839e49ef6d7bb8c73806324"
  },
  {
    "url": "assets/js/12.cd78be8f.js",
    "revision": "2d1a5facb1a700dfbeec2ce61117023a"
  },
  {
    "url": "assets/js/13.73a1fbaa.js",
    "revision": "5e2840346f9e36d33433dd58a9b734e9"
  },
  {
    "url": "assets/js/14.d6a048f5.js",
    "revision": "ab828665eac614c2ca8b0d609a9aa737"
  },
  {
    "url": "assets/js/15.015cdb1b.js",
    "revision": "c83b8f59785ba98c2bf4b502ad3d6196"
  },
  {
    "url": "assets/js/16.70c3caa1.js",
    "revision": "3f5ff8e60d5bf06d0cc4d6c67d3643de"
  },
  {
    "url": "assets/js/17.eccba52a.js",
    "revision": "39c800528c3c9b18494df50482ce35c6"
  },
  {
    "url": "assets/js/18.2123c17b.js",
    "revision": "a38fbe50a0a7a393dd3c4c6614e9f46b"
  },
  {
    "url": "assets/js/19.b9f243a3.js",
    "revision": "d27f302639a63dd65d360f82d7e56e8d"
  },
  {
    "url": "assets/js/2.590cb2e6.js",
    "revision": "751d2b659f08f666c8a20cf7e4b61f84"
  },
  {
    "url": "assets/js/20.8cb354ca.js",
    "revision": "67b80464205cd7817b24be8e41564f0c"
  },
  {
    "url": "assets/js/21.7d5682a8.js",
    "revision": "d68755e29de2e6af0053930891c34de9"
  },
  {
    "url": "assets/js/22.80697f28.js",
    "revision": "fb439c47b9b23aca5a4941987d588cf3"
  },
  {
    "url": "assets/js/23.7a555249.js",
    "revision": "c2efc2660d00df40ea8139551f2163c7"
  },
  {
    "url": "assets/js/24.df351bbb.js",
    "revision": "4183027a559f6f40ab5c405bf3b6e340"
  },
  {
    "url": "assets/js/25.cb8cdb28.js",
    "revision": "b121a485852cbfd624d625181167bcdd"
  },
  {
    "url": "assets/js/26.99a86933.js",
    "revision": "383af6884c5eae61fc5371da93fc370d"
  },
  {
    "url": "assets/js/27.b221d527.js",
    "revision": "19eb347eba810a9553666c152a160a43"
  },
  {
    "url": "assets/js/28.310354a4.js",
    "revision": "2865fb026523164da1d17710a96d0412"
  },
  {
    "url": "assets/js/29.bee3e9e1.js",
    "revision": "fd17569f92b0ae85a81a2eca40f53996"
  },
  {
    "url": "assets/js/3.89568fe3.js",
    "revision": "2c19df1c865eae54f7dd8771c76a7a49"
  },
  {
    "url": "assets/js/30.cb3f7896.js",
    "revision": "d9de5f56f5393b943711db7ba1fe6384"
  },
  {
    "url": "assets/js/31.51e5623e.js",
    "revision": "9b35ccc8a11a0a7d72e3dd285de27778"
  },
  {
    "url": "assets/js/32.1d2ff201.js",
    "revision": "19423e2fbfe28a39a757f2f5d80db664"
  },
  {
    "url": "assets/js/33.42a05811.js",
    "revision": "c114fdf28581f5be807bca2fbfdb8d0e"
  },
  {
    "url": "assets/js/34.bf94ae31.js",
    "revision": "96ea12184260bdc9e7ea63fcf6a42816"
  },
  {
    "url": "assets/js/35.ce72b27a.js",
    "revision": "d52c5031cbc8ab4b41b202fb404cb452"
  },
  {
    "url": "assets/js/36.6ae95f9c.js",
    "revision": "2db5b4f8f8ea2b23e08707a4b96adaf1"
  },
  {
    "url": "assets/js/37.bd9b8948.js",
    "revision": "895e61d99201262daeea4c55c6dba543"
  },
  {
    "url": "assets/js/38.aec5628c.js",
    "revision": "6535d8fa1952774101d84f6f4add3c87"
  },
  {
    "url": "assets/js/39.6cc7561f.js",
    "revision": "4ad74273408b7960b0a4394207e16577"
  },
  {
    "url": "assets/js/4.8eb3e90a.js",
    "revision": "4f3dba3e4e618a44ebc21e34548b9baf"
  },
  {
    "url": "assets/js/40.0981cc37.js",
    "revision": "f2bcedd48fb174a8bc93686b2277b12e"
  },
  {
    "url": "assets/js/41.63d924c2.js",
    "revision": "9d7a0f2af1a4141e35b0f37c1da2841f"
  },
  {
    "url": "assets/js/42.65679dd4.js",
    "revision": "a365036c0fab4c1e43ecc8dc1c090ac4"
  },
  {
    "url": "assets/js/43.e36d71bd.js",
    "revision": "846a352222b964d1910dbe13fd0ec301"
  },
  {
    "url": "assets/js/44.4b444c6c.js",
    "revision": "6ff488d58e740a2e41117aa44daabee1"
  },
  {
    "url": "assets/js/45.3d90bc93.js",
    "revision": "1b85d369118bf08184d61caba8bc5e21"
  },
  {
    "url": "assets/js/46.33d44d24.js",
    "revision": "fda4563429491855011226c56ecff8a8"
  },
  {
    "url": "assets/js/47.97b8e6b6.js",
    "revision": "6888024d616c54b333cd3155762882cc"
  },
  {
    "url": "assets/js/48.9e4ee534.js",
    "revision": "af843ae396c56400023d437b9a39cb44"
  },
  {
    "url": "assets/js/49.276b7df7.js",
    "revision": "0381c9012ff2bb83b45be6df55216f4f"
  },
  {
    "url": "assets/js/5.2e0b7a0a.js",
    "revision": "cba26ce5bba38e2569c1afe08b52e795"
  },
  {
    "url": "assets/js/50.4e68ca90.js",
    "revision": "97e235583ea0bc589b49dfbac4d4d2be"
  },
  {
    "url": "assets/js/51.984f4497.js",
    "revision": "8e00087abfee6f23df8136c51b8ed643"
  },
  {
    "url": "assets/js/52.448539ec.js",
    "revision": "3fd7c06d15a02269c35740e3e0876b19"
  },
  {
    "url": "assets/js/53.4d2dde9b.js",
    "revision": "25e3a3fec18afe2143ce81019c40de7a"
  },
  {
    "url": "assets/js/54.1f8b357b.js",
    "revision": "ba529e5f16caed8138fe51ebee029227"
  },
  {
    "url": "assets/js/55.2cebf054.js",
    "revision": "3fcee6ee1886f86236d3884b6d9280b3"
  },
  {
    "url": "assets/js/56.ba6eb7d9.js",
    "revision": "d14aec5a6ce6cf633666bf4b099344b6"
  },
  {
    "url": "assets/js/57.23e4622e.js",
    "revision": "c3615bfdc747e1d3466f0dad57be06a1"
  },
  {
    "url": "assets/js/58.271b1e16.js",
    "revision": "b7e0ed7422066b330b9f84df9ad65c17"
  },
  {
    "url": "assets/js/59.b608148f.js",
    "revision": "43cd0f2ff5473988c4fafd57022c6c05"
  },
  {
    "url": "assets/js/6.e9fe7882.js",
    "revision": "8ca752e20bd6f7e3efaef7b16ddf4bed"
  },
  {
    "url": "assets/js/60.a8541df2.js",
    "revision": "12d42516c7e3b4e58c340fd9e16b5469"
  },
  {
    "url": "assets/js/61.020079a9.js",
    "revision": "93d2c1d74c9d9f41a1ba5e13c056d493"
  },
  {
    "url": "assets/js/62.1dd102eb.js",
    "revision": "0e2a64ec9a1d15d35b1f87d9e3f554c7"
  },
  {
    "url": "assets/js/63.b00d4bd6.js",
    "revision": "51d003fb13756737db07f288e5d9eaad"
  },
  {
    "url": "assets/js/64.0dacf643.js",
    "revision": "0162d2367abadcf0956ffe1a84f1d651"
  },
  {
    "url": "assets/js/65.915e224a.js",
    "revision": "c25bd753d9866eb133dc9bd9e1ededaf"
  },
  {
    "url": "assets/js/66.219de246.js",
    "revision": "ab753f469de3750f894169fee709c356"
  },
  {
    "url": "assets/js/67.ad084755.js",
    "revision": "5e8cdd865880f0a3c4a4d8293c3f70c2"
  },
  {
    "url": "assets/js/68.c4c48ab9.js",
    "revision": "31a3799c0aae92c1c8326780b2b04043"
  },
  {
    "url": "assets/js/69.754df546.js",
    "revision": "d43d35b04cd6b303afc1c332d0e5aefd"
  },
  {
    "url": "assets/js/7.bef429c4.js",
    "revision": "81dadcdace78a3f0b6521f818aff3fc5"
  },
  {
    "url": "assets/js/70.2427cde6.js",
    "revision": "4da136c0d7fa64f0ceb9b85e1fd0086e"
  },
  {
    "url": "assets/js/71.0c6d8686.js",
    "revision": "82ebe2522269c7dc0621aa33d0f38122"
  },
  {
    "url": "assets/js/72.1772e3ac.js",
    "revision": "e167b4d49071814732f04b0af5b388dc"
  },
  {
    "url": "assets/js/73.4dcc9d29.js",
    "revision": "f55f74bd078b15c4e19742d1a4e210ee"
  },
  {
    "url": "assets/js/8.32eda590.js",
    "revision": "b995f81b4d0eb5a9cd75c3178e9d009e"
  },
  {
    "url": "assets/js/9.f7977bb9.js",
    "revision": "6224ecf63625bf25949e525e1d56b315"
  },
  {
    "url": "assets/js/app.26f86a73.js",
    "revision": "750316d5f4944efca645409659416bae"
  },
  {
    "url": "blog/amap.html",
    "revision": "0021f5471b5290cb6c8a270be1c37439"
  },
  {
    "url": "blog/angular.html",
    "revision": "5e7c722b73d2a9c63d0f311021971890"
  },
  {
    "url": "blog/ast.html",
    "revision": "001f48bcf2f2eeff14ad93758a4150cb"
  },
  {
    "url": "blog/canvas.html",
    "revision": "03497386bb6bf38540dfe32a02f2c6c8"
  },
  {
    "url": "blog/console.html",
    "revision": "a0e56ca8e06ef47cd238d868f5da19ce"
  },
  {
    "url": "blog/csspre.html",
    "revision": "e7f4f7d37f4ef8c35eddce6d45cb4add"
  },
  {
    "url": "blog/deno.html",
    "revision": "3f58b56ddd33d0be34028e5fef6d3696"
  },
  {
    "url": "blog/docker-compose.html",
    "revision": "7ee3ee111cbc222e500f154313dd90c4"
  },
  {
    "url": "blog/docker-project.html",
    "revision": "f58ed5e817f297afd40d4bba443c3770"
  },
  {
    "url": "blog/docker.html",
    "revision": "3df67609873e45a578a9c35d0c322027"
  },
  {
    "url": "blog/echarts.html",
    "revision": "5a00ae33da7b04665412ea818c833b2b"
  },
  {
    "url": "blog/egg.html",
    "revision": "24e4d8ec45ec53a6891e0073c24b282d"
  },
  {
    "url": "blog/electron-angular.html",
    "revision": "f80e0f6a1f110abe31172d16c6acdd10"
  },
  {
    "url": "blog/electron-vue.html",
    "revision": "a8283996baf41fa0b7302872029c5695"
  },
  {
    "url": "blog/flex&grid.html",
    "revision": "6b744718c9058deb76fa5c6c252aa822"
  },
  {
    "url": "blog/flutter.html",
    "revision": "0615572b1286bc4fc514c8ad77715690"
  },
  {
    "url": "blog/g6.html",
    "revision": "bfe96a3b10317af38622a3af0c82ea82"
  },
  {
    "url": "blog/git.html",
    "revision": "0e3b806182acea0607e08e548875564d"
  },
  {
    "url": "blog/golang.html",
    "revision": "b2a80b06874225ee80ddec1742521add"
  },
  {
    "url": "blog/http.html",
    "revision": "c96053690ceeea31588e8dd40a26f67f"
  },
  {
    "url": "blog/index.html",
    "revision": "74e056de88839a411a11b6d1f63cded2"
  },
  {
    "url": "blog/koa2-learn.html",
    "revision": "4a7c98126f76ae8827bf1d61827809a3"
  },
  {
    "url": "blog/nodecli.html",
    "revision": "22208db421f13ca201540265a9937a83"
  },
  {
    "url": "blog/nodespider.html",
    "revision": "eee5e0631c8b49b71e4deea00e93e488"
  },
  {
    "url": "blog/performance.html",
    "revision": "3ac1d20ec369786c3b039dbff612b3ab"
  },
  {
    "url": "blog/puppeteer.html",
    "revision": "b67d17f6e2a16acbed3123bb98cedc15"
  },
  {
    "url": "blog/react-native.html",
    "revision": "b97916f0acb0806177b598310f7c93db"
  },
  {
    "url": "blog/react.html",
    "revision": "ea42d84ec4a0fa8085098a9c859dc588"
  },
  {
    "url": "blog/socketio.html",
    "revision": "1ba008fd56233bd25f6031ac5025b097"
  },
  {
    "url": "blog/springboot.html",
    "revision": "d97e45fd91372e97e9cfc5dd6d0d7316"
  },
  {
    "url": "blog/taro.html",
    "revision": "9fd027870c71f477348646892b86764a"
  },
  {
    "url": "blog/tdt&cesium.html",
    "revision": "b4ddf0686e249bb6cd9f78417edcb3bb"
  },
  {
    "url": "blog/tensorflow.html",
    "revision": "0ff4c1337c7dc992e57d482f40df3249"
  },
  {
    "url": "blog/three.html",
    "revision": "f73ac90d483e6fd59dbdd5926ac84b99"
  },
  {
    "url": "blog/tonejs.html",
    "revision": "f075ee059c6cc1d054f35b7ab1755580"
  },
  {
    "url": "blog/tsspider.html",
    "revision": "40a27b87112674770bfb1400db3949a9"
  },
  {
    "url": "blog/vue2.html",
    "revision": "5d8b87753ded9aa3781460ed3157dd40"
  },
  {
    "url": "blog/vue3.html",
    "revision": "775b9f62d4e5c26e0bd017f6aa41259f"
  },
  {
    "url": "blog/vuepress.html",
    "revision": "2cff4a2dda5ff6a846614fe174afc61a"
  },
  {
    "url": "blog/vuetestutils.html",
    "revision": "e3866a9dd105e07632e69e8a85476cf5"
  },
  {
    "url": "blog/vuetestutils2.html",
    "revision": "49fce8cce896c1a78973f63b1371a0e3"
  },
  {
    "url": "blog/webpack.html",
    "revision": "e524ff4ad72f128835cb4e90254e8b29"
  },
  {
    "url": "img/blog/amap.png",
    "revision": "efdd1921561538fc2d26cd053c4a04ea"
  },
  {
    "url": "img/blog/amap/1.png",
    "revision": "0118857d9a590d67d75be9d3037fe3ad"
  },
  {
    "url": "img/blog/amap/10.png",
    "revision": "0583bd02a669c91ebe909e911e7ad956"
  },
  {
    "url": "img/blog/amap/11.png",
    "revision": "ae5a68faf0a60d67e8cf1e21ef7091ab"
  },
  {
    "url": "img/blog/amap/3.png",
    "revision": "cc1a8e969868caf38e7ca98996c50f54"
  },
  {
    "url": "img/blog/amap/4.png",
    "revision": "478e99de4f83eb7f629ff23d349ec9aa"
  },
  {
    "url": "img/blog/amap/5.png",
    "revision": "0b0b3b4eec349a7cc88ca0aca960b106"
  },
  {
    "url": "img/blog/amap/6.png",
    "revision": "a6ae88b412d86a72e8b7a66d155573e6"
  },
  {
    "url": "img/blog/amap/7.png",
    "revision": "8bed1bbc9ec39534809e7e37f5c50aaa"
  },
  {
    "url": "img/blog/amap/8.png",
    "revision": "e55e9e223e86ebfd9411d0429171938f"
  },
  {
    "url": "img/blog/amap/9.png",
    "revision": "161e5109a348fa08185cf485347516a2"
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
    "url": "img/blog/electron-angular.png",
    "revision": "6a5a16a8e428bf9c0743adbda18b34d6"
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
    "url": "img/blog/flex&grid/23.png",
    "revision": "a87959e299ec3fcb606c771013ca10d0"
  },
  {
    "url": "img/blog/flex&grid/24.png",
    "revision": "153abb3c0511bd9658127243531d64af"
  },
  {
    "url": "img/blog/flex&grid/25.png",
    "revision": "769d0bfabbd9b2d2610d7157dd1971e6"
  },
  {
    "url": "img/blog/flex&grid/26.png",
    "revision": "a5cc79215771907f8c9ff275ddc71561"
  },
  {
    "url": "img/blog/flex&grid/27.png",
    "revision": "b27e0004e212aebd03b87eb681d439f2"
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
    "url": "img/blog/three.png",
    "revision": "3f3d40540f6a72cff63c6a2d955278a9"
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
    "revision": "8d99db6a1320e2da5f45d20e45fdcaad"
  },
  {
    "url": "leecode/index.html",
    "revision": "5d4d7bcbb7ccf3e8487e929ec8b2cd38"
  },
  {
    "url": "leecode/leecode.html",
    "revision": "d8211110fb762c694b59d69639a93187"
  },
  {
    "url": "live2d/wanko/assets/moc/wanko.1024/texture_00.png",
    "revision": "10b7047251205db46fdac7632b5d4642"
  },
  {
    "url": "note/dsaa.html",
    "revision": "1c4ceae5505621c29b5e84c0d6b418f8"
  },
  {
    "url": "note/es.html",
    "revision": "627bd7f46643f6c9b2d4c443cbd5cc77"
  },
  {
    "url": "note/index.html",
    "revision": "32b7dc3a707c6e44eb2caa10023e2fc0"
  },
  {
    "url": "note/lib.html",
    "revision": "eef3156a3ebabd2658061eece0cb6dc4"
  },
  {
    "url": "note/shixi.html",
    "revision": "4d192c5e19b8c39d06efc5913f2e9b34"
  },
  {
    "url": "repo/chatdemo.html",
    "revision": "154840fd139b2dd50c10f0877a035048"
  },
  {
    "url": "repo/dachuang.html",
    "revision": "3749c4a4e6e05123450b597541e3d3c9"
  },
  {
    "url": "repo/electron.html",
    "revision": "28186e787402f003ac7a24df50bef3ea"
  },
  {
    "url": "repo/ibf.html",
    "revision": "d738a8bf0ae215aa873dd04f94cb2ef3"
  },
  {
    "url": "repo/index.html",
    "revision": "ae6662972b38ab3807fbd24d3ad4c5aa"
  },
  {
    "url": "repo/javaks.html",
    "revision": "d243049bccef5a022e785bdcb4b42728"
  },
  {
    "url": "repo/ksh.html",
    "revision": "d149738fb8d15073bec0faa2ce3928c0"
  },
  {
    "url": "repo/mddemo.html",
    "revision": "a23fd3efaaf060f355cf130c43b5f623"
  },
  {
    "url": "repo/tenseflow.html",
    "revision": "2d5dffb34aa714889196066fa3a69f10"
  },
  {
    "url": "repo/todo.html",
    "revision": "9649c0603d086ec67e132f5805900183"
  },
  {
    "url": "repo/tongji.html",
    "revision": "a729ed3554e8a817413be4d07549f656"
  },
  {
    "url": "repo/webaudio.html",
    "revision": "405e5f815e350754cd53784f51784fdf"
  },
  {
    "url": "repo/wkc.html",
    "revision": "b9926ed7aa997b38f5d65a4ce4e7ab40"
  },
  {
    "url": "road/checklist.html",
    "revision": "9c70d5347e691801d296c3a51be21830"
  },
  {
    "url": "road/index.html",
    "revision": "df93185469cab71d4c377ed9797b92ce"
  },
  {
    "url": "road/road.html",
    "revision": "aabe4ff645387c21410ede9f8a6b1de8"
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
