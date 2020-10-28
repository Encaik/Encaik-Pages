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
    "revision": "f08e2dd9cee5d14c112f356eafb03600"
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
    "url": "assets/js/10.c773ce76.js",
    "revision": "15225469b6978744ca084195d06d8ec3"
  },
  {
    "url": "assets/js/11.3d70bde8.js",
    "revision": "e3661479333a971d09269aab3cacb808"
  },
  {
    "url": "assets/js/12.994f1f21.js",
    "revision": "12cd13dd363f34cff19a7b218dd85b06"
  },
  {
    "url": "assets/js/13.ea21ee83.js",
    "revision": "83b84221b8b35214eee6d417f578912e"
  },
  {
    "url": "assets/js/14.4d5fbb4a.js",
    "revision": "5652a56025a0c954b23bab8ced9e5777"
  },
  {
    "url": "assets/js/15.5c53807d.js",
    "revision": "f60dd4bc68f3ac659e693d742f2d73dd"
  },
  {
    "url": "assets/js/16.7e18cd62.js",
    "revision": "0733fc8b2f62525b20feb57ce0b1aea9"
  },
  {
    "url": "assets/js/17.27eb96cc.js",
    "revision": "d91bd62887c9a0811f93910252e83ad8"
  },
  {
    "url": "assets/js/18.5deffd01.js",
    "revision": "89e749e80d5d550fa8e50f739d31c456"
  },
  {
    "url": "assets/js/19.b6d2ed49.js",
    "revision": "d901ce849fe0c86751bc842c6abaf84e"
  },
  {
    "url": "assets/js/2.590cb2e6.js",
    "revision": "751d2b659f08f666c8a20cf7e4b61f84"
  },
  {
    "url": "assets/js/20.f4b863c7.js",
    "revision": "f303447f2c2adf360a31c974f5451213"
  },
  {
    "url": "assets/js/21.3230ac30.js",
    "revision": "5fdd01d7af936ad6e17ac51979d8d1e8"
  },
  {
    "url": "assets/js/22.df78bd80.js",
    "revision": "0de8471d9fac37ec972e71d1ca5f7ca6"
  },
  {
    "url": "assets/js/23.5a2dc359.js",
    "revision": "ff9abc6a685fc48bbb7fada2b4006f7a"
  },
  {
    "url": "assets/js/24.fd6d0609.js",
    "revision": "4e94bc11f20707705d90dd82c6669c31"
  },
  {
    "url": "assets/js/25.075b5e67.js",
    "revision": "a5c7bdb1e216edd2dffd99af57e5d4f1"
  },
  {
    "url": "assets/js/26.350e2aec.js",
    "revision": "6967e45ab4d741c22f18f6594fd5c557"
  },
  {
    "url": "assets/js/27.ed9ff302.js",
    "revision": "0e99c12b7fca239c5ff7460c975e2129"
  },
  {
    "url": "assets/js/28.11b38e9a.js",
    "revision": "2f8c8565cb6d789584cdd5e2b5756514"
  },
  {
    "url": "assets/js/29.25e8799c.js",
    "revision": "4943eaa6d4e600e83c3661736ac6b112"
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
    "url": "assets/js/32.9605e462.js",
    "revision": "61cd923a37ccfc54b8520f9ed2f2c4e2"
  },
  {
    "url": "assets/js/33.d419b16b.js",
    "revision": "ee48c3284aad5951574edfbe616abb41"
  },
  {
    "url": "assets/js/34.5e481472.js",
    "revision": "798000ed253cbf25d74fa040ccebd226"
  },
  {
    "url": "assets/js/35.052d55fd.js",
    "revision": "ac396550f43e79a13a1ba49b1717967e"
  },
  {
    "url": "assets/js/36.5db6ef1a.js",
    "revision": "c80069e4b808558d0826253298e5102f"
  },
  {
    "url": "assets/js/37.0d7c5628.js",
    "revision": "8aebc9a16f51cf2b6ca2a3eebeb6df71"
  },
  {
    "url": "assets/js/38.5b27d9cc.js",
    "revision": "b04bd0f99e49e9fd7913664914fb08f4"
  },
  {
    "url": "assets/js/39.5541eebd.js",
    "revision": "e44ab5473631ebd005f0dc27e48f8c70"
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
    "url": "assets/js/42.ae24fbfd.js",
    "revision": "9f028286392f11bff6b7b1990182b677"
  },
  {
    "url": "assets/js/43.fdf963ca.js",
    "revision": "f26458facf50af4b07f187ebe0d02baa"
  },
  {
    "url": "assets/js/44.bafbdb42.js",
    "revision": "8b9656f5ff6eab05219d8e4f5027f146"
  },
  {
    "url": "assets/js/45.341965ba.js",
    "revision": "e0f340db9b12d77adccae2063bffb9f1"
  },
  {
    "url": "assets/js/46.7a867198.js",
    "revision": "c8d812221fb1e207f041a08e8cd04659"
  },
  {
    "url": "assets/js/47.d6a3c381.js",
    "revision": "c6ed52ed9e0ac91a0a06d6d5bb1f1281"
  },
  {
    "url": "assets/js/48.dc97bfef.js",
    "revision": "5ecc6230a2106b6fe8916c0044d0b8ad"
  },
  {
    "url": "assets/js/49.da86170d.js",
    "revision": "1fb741b3aa33d64a2e218a7bd68db11c"
  },
  {
    "url": "assets/js/5.46ef5b70.js",
    "revision": "32e508d26d546c9aac90dbd28260a438"
  },
  {
    "url": "assets/js/50.8dcceb77.js",
    "revision": "07ba83d6d3a60e4d9725d8e334284ebc"
  },
  {
    "url": "assets/js/51.c8d0f9d8.js",
    "revision": "df7adb35b41b7f089fcf7900a5c2b28c"
  },
  {
    "url": "assets/js/52.8e1ea700.js",
    "revision": "fe5a48406465fc2e34d303a047848343"
  },
  {
    "url": "assets/js/53.93ca1eea.js",
    "revision": "060cecaf28185658e06a09ebf47efcca"
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
    "url": "assets/js/56.2e869fc8.js",
    "revision": "19c43750698c4b190ff8cdfca7380d3c"
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
    "url": "assets/js/60.453e4ff2.js",
    "revision": "83fd8f04bf76b768b998c0362f13a21e"
  },
  {
    "url": "assets/js/61.8fcad0f5.js",
    "revision": "3a1e8c3d3d896b8acb36c9509353b8ad"
  },
  {
    "url": "assets/js/62.16cda833.js",
    "revision": "fb3341d32a9f671db76db6f2ba2f2bba"
  },
  {
    "url": "assets/js/63.bac9e2b1.js",
    "revision": "d2fbfe0f84bb7c365f777b7797497099"
  },
  {
    "url": "assets/js/64.5af8e937.js",
    "revision": "56f8a384b400fd5fdb9f38458da83874"
  },
  {
    "url": "assets/js/65.038522a0.js",
    "revision": "39efb7d15e9433a6ccc6cb40c746883f"
  },
  {
    "url": "assets/js/66.c5dc9e5b.js",
    "revision": "40ac3d6976b1a9f0ddef9f4d348cd0dd"
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
    "url": "assets/js/7.1d0e33b2.js",
    "revision": "a2c003a944ddce0042cd64ca98840d22"
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
    "url": "assets/js/app.b63cf1b4.js",
    "revision": "3253916603ef897e8b99b398c8ad7a26"
  },
  {
    "url": "blog/angular.html",
    "revision": "bfc868abc417bf9ef082947d043379b2"
  },
  {
    "url": "blog/ast.html",
    "revision": "0010a1bb7b41965129a58d523c3bfd44"
  },
  {
    "url": "blog/canvas.html",
    "revision": "e9465b46e6795c5dc81c842a933cad61"
  },
  {
    "url": "blog/console.html",
    "revision": "05d7be72535d44fe866c44576f61ef74"
  },
  {
    "url": "blog/csspre.html",
    "revision": "52d2b2c538c273d9fc39654446452f38"
  },
  {
    "url": "blog/deno.html",
    "revision": "1ca76da908bd4dad658217ba4c159cd2"
  },
  {
    "url": "blog/docker-compose.html",
    "revision": "8d899c2ed78ccb6c534540b036299047"
  },
  {
    "url": "blog/docker-project.html",
    "revision": "14e1ac5115689bfda550bfd0046827a1"
  },
  {
    "url": "blog/docker.html",
    "revision": "ee2da70472abfad82f687c64f1a2e08f"
  },
  {
    "url": "blog/echarts.html",
    "revision": "a2975832cd4e81f829ea6a2c984cd42c"
  },
  {
    "url": "blog/egg.html",
    "revision": "0d69e829481797dce086fa19307ffa45"
  },
  {
    "url": "blog/electron.html",
    "revision": "37c31994f4476c675c3a6d0e203352d2"
  },
  {
    "url": "blog/flex&grid.html",
    "revision": "5e47fca25bfb8abe70ac6ce234e0e9ad"
  },
  {
    "url": "blog/flutter.html",
    "revision": "2ab9479eaf9dd1ea9d360d55580b02fd"
  },
  {
    "url": "blog/g6.html",
    "revision": "75be33c6567e2a8b6c78b2ba9fb995af"
  },
  {
    "url": "blog/git.html",
    "revision": "23dcf8b93122ba2004efa5c11bf871a6"
  },
  {
    "url": "blog/golang.html",
    "revision": "92f7b8756c25355bd9c7b69d69c838e5"
  },
  {
    "url": "blog/http.html",
    "revision": "8cc02edcdd1e2b08ab2c2af2574704e3"
  },
  {
    "url": "blog/index.html",
    "revision": "2d7befea89f68190dfd0ce6ff22f22db"
  },
  {
    "url": "blog/koa2-learn.html",
    "revision": "0ee1e08b8de0d2f8a9c1a3ca8b9f5bf2"
  },
  {
    "url": "blog/map.html",
    "revision": "05885f02a17a074b38c847afeed991cc"
  },
  {
    "url": "blog/nodecli.html",
    "revision": "e29084d6746e7d79e3ac9f6c3ae781d1"
  },
  {
    "url": "blog/nodespider.html",
    "revision": "4a7813b42060dddec79453dae711d566"
  },
  {
    "url": "blog/performance.html",
    "revision": "6833e58bed832bb443d197b201e04c15"
  },
  {
    "url": "blog/puppeteer.html",
    "revision": "456122e5ce5cafe45e861751d857f984"
  },
  {
    "url": "blog/react-native.html",
    "revision": "c24e1932195866b736beee6439e793c2"
  },
  {
    "url": "blog/react.html",
    "revision": "049ef9c921300df5e99d23b3a06c94d3"
  },
  {
    "url": "blog/socketio.html",
    "revision": "d31120a0f8be144dbb87c2e2bdaeca76"
  },
  {
    "url": "blog/springboot.html",
    "revision": "1497cc1d87eb3801fcb988825338882e"
  },
  {
    "url": "blog/taro.html",
    "revision": "1473a7750d5bd74f3292c98513a5ccdc"
  },
  {
    "url": "blog/tensorflow.html",
    "revision": "991e2bc06be5124b81f2548371e74670"
  },
  {
    "url": "blog/three.html",
    "revision": "d6d4b0f7649f8824c59dfdb12e0d58ee"
  },
  {
    "url": "blog/tonejs.html",
    "revision": "787cc0b8cbc63c89691c7ffda7c2d21f"
  },
  {
    "url": "blog/tsspider.html",
    "revision": "94debd9d592ec99711d79d6d7e8e05f8"
  },
  {
    "url": "blog/vue2.html",
    "revision": "89e926c2adf49c22f2982537cd40c5cd"
  },
  {
    "url": "blog/vue3.html",
    "revision": "2c5159d145660f29370a3291fe2de845"
  },
  {
    "url": "blog/vuepress.html",
    "revision": "532065f98269a2b7c1cfef5d0277c88a"
  },
  {
    "url": "blog/vuetestutils.html",
    "revision": "44acae067ef92d7b67d9ce7140ce8447"
  },
  {
    "url": "blog/vuetestutils2.html",
    "revision": "30650c1f06c6898c724c59e75934dd26"
  },
  {
    "url": "blog/webpack.html",
    "revision": "bd1f306feec7577c213305fffee79072"
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
    "url": "img/blog/flex&grid/2.png",
    "revision": "d9f03b9488b7ed497eb85f7122a46c17"
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
    "revision": "9632a04eaa71461ec9a4cf91041bd801"
  },
  {
    "url": "leecode/index.html",
    "revision": "f9327bcbfb9a2ccae392d1875060d80f"
  },
  {
    "url": "leecode/leecode.html",
    "revision": "b61a56812d13baf08e67a5decb6c26f3"
  },
  {
    "url": "live2d/wanko/assets/moc/wanko.1024/texture_00.png",
    "revision": "10b7047251205db46fdac7632b5d4642"
  },
  {
    "url": "note/dsaa.html",
    "revision": "cc5566d0f0e70898758c8642d3e62701"
  },
  {
    "url": "note/es.html",
    "revision": "8d29c743f8f126753453d68fad0d0c94"
  },
  {
    "url": "note/index.html",
    "revision": "668065096c4e07841cd7493f69862fce"
  },
  {
    "url": "note/lib.html",
    "revision": "e198b3db923f0e5a1d046dda4b4a4d34"
  },
  {
    "url": "note/shixi.html",
    "revision": "7f94117c411bdb2ecd37af398f17fb8b"
  },
  {
    "url": "repo/chatdemo.html",
    "revision": "c23f495eb0f0e4fa20af2ce97f342b3b"
  },
  {
    "url": "repo/dachuang.html",
    "revision": "905b1460f642823fdc6236fe2c797d7b"
  },
  {
    "url": "repo/electron.html",
    "revision": "085eff50723632dc7e7fcff3dcbce406"
  },
  {
    "url": "repo/ibf.html",
    "revision": "539baac80a62e9ab18bc6dff43019f36"
  },
  {
    "url": "repo/index.html",
    "revision": "a598485c1332ce55ec8e7c9656844294"
  },
  {
    "url": "repo/javaks.html",
    "revision": "718514fd35ac257a5588117ba1252c61"
  },
  {
    "url": "repo/ksh.html",
    "revision": "72544f521264777a0ed43caee0e1fba4"
  },
  {
    "url": "repo/mddemo.html",
    "revision": "0e76eded9da888dee3fb0799d09e844a"
  },
  {
    "url": "repo/tenseflow.html",
    "revision": "fe1cebfbf9749e32a85e826258256270"
  },
  {
    "url": "repo/todo.html",
    "revision": "8cf8e6ca84221431f7a1730f10e9a82e"
  },
  {
    "url": "repo/tongji.html",
    "revision": "81c717b8493a439b5f6c59d5aa94e479"
  },
  {
    "url": "repo/webaudio.html",
    "revision": "9398c87d4778f0f3a2ab55d68e3cb2f7"
  },
  {
    "url": "repo/wkc.html",
    "revision": "22ab03eb42d98e87af8635a01998dfee"
  },
  {
    "url": "road/checklist.html",
    "revision": "e2299238c1433ccc42a7f5291f903fc5"
  },
  {
    "url": "road/index.html",
    "revision": "44d6770023923e64262f88f20c1c9b07"
  },
  {
    "url": "road/road.html",
    "revision": "ce24bcf84e7cea6a856b23640f61c2bb"
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
