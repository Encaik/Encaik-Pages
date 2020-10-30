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
    "revision": "ffc5969439d769b9ce5eab15ee0189c7"
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
    "url": "assets/js/10.58919e17.js",
    "revision": "c96de6fd41081d3a3d7196ad86bc731a"
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
    "url": "assets/js/13.ea21ee83.js",
    "revision": "83b84221b8b35214eee6d417f578912e"
  },
  {
    "url": "assets/js/14.0e9fbf74.js",
    "revision": "0039c9067aff33be316b53c67f25e05d"
  },
  {
    "url": "assets/js/15.ad0d987d.js",
    "revision": "92b70fa647059633921561047f7f45c9"
  },
  {
    "url": "assets/js/16.a6f4d5c4.js",
    "revision": "532fcd298a3699f94e37e9ee70014cea"
  },
  {
    "url": "assets/js/17.27eb96cc.js",
    "revision": "d91bd62887c9a0811f93910252e83ad8"
  },
  {
    "url": "assets/js/18.3cf5450e.js",
    "revision": "cee38acac9d11bd28d763aa611e53ab8"
  },
  {
    "url": "assets/js/19.97825e6a.js",
    "revision": "12dc4bb9307a1cd2ba2d2dda1fb0a7ec"
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
    "url": "assets/js/21.3b1fdba1.js",
    "revision": "46c7eb0f69e18c999dc166ecb0656697"
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
    "url": "assets/js/25.075b5e67.js",
    "revision": "a5c7bdb1e216edd2dffd99af57e5d4f1"
  },
  {
    "url": "assets/js/26.40fe971e.js",
    "revision": "36358148f52f9abe028cfbe9356a1a08"
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
    "url": "assets/js/30.3847b30f.js",
    "revision": "c3f764b1bb0f01bec46ceff934236396"
  },
  {
    "url": "assets/js/31.b5070d7f.js",
    "revision": "49fdc4ce7c8c0afe7a54643bb1cbaa5f"
  },
  {
    "url": "assets/js/32.f480af5e.js",
    "revision": "aa5a288a3590fe1351ba43b9d74f1c26"
  },
  {
    "url": "assets/js/33.d419b16b.js",
    "revision": "ee48c3284aad5951574edfbe616abb41"
  },
  {
    "url": "assets/js/34.2bc01d97.js",
    "revision": "e83a072767badb5231b58ef0f3813c82"
  },
  {
    "url": "assets/js/35.052d55fd.js",
    "revision": "ac396550f43e79a13a1ba49b1717967e"
  },
  {
    "url": "assets/js/36.65b69dc1.js",
    "revision": "c6ba06a889f8b4db65d0114f8fa6a5b7"
  },
  {
    "url": "assets/js/37.0d7c5628.js",
    "revision": "8aebc9a16f51cf2b6ca2a3eebeb6df71"
  },
  {
    "url": "assets/js/38.0cb8260e.js",
    "revision": "6794d3eeb6cba8efa5744330dee3f494"
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
    "url": "assets/js/40.c1844809.js",
    "revision": "48f46007f74fb3e7ed6cc038c3c679cc"
  },
  {
    "url": "assets/js/41.8536558b.js",
    "revision": "882164f49fdcbc20e47c9d96271d8f12"
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
    "url": "assets/js/46.df3d3e8e.js",
    "revision": "5085c2653cfa1e291d36b3faf50563a4"
  },
  {
    "url": "assets/js/47.d6a3c381.js",
    "revision": "c6ed52ed9e0ac91a0a06d6d5bb1f1281"
  },
  {
    "url": "assets/js/48.0c2e9c0d.js",
    "revision": "243e667222d37a9d9cda4db668994224"
  },
  {
    "url": "assets/js/49.1dcef4cc.js",
    "revision": "15a7adb0c85c580d5fc241c2334c2e26"
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
    "url": "assets/js/51.7719355b.js",
    "revision": "613027368e410d8be6f75fcbcab385b4"
  },
  {
    "url": "assets/js/52.0248c820.js",
    "revision": "65a563090955899d5769c8e5a0ab2586"
  },
  {
    "url": "assets/js/53.a9b485bb.js",
    "revision": "b2d7dede62ca361aaf1abe6ad93dd889"
  },
  {
    "url": "assets/js/54.bb5869ae.js",
    "revision": "2e4efef15e1be16e507492f9916abf5e"
  },
  {
    "url": "assets/js/55.042546d5.js",
    "revision": "1731b8a8f89331ca92781df62346ca14"
  },
  {
    "url": "assets/js/56.5e8f7cd8.js",
    "revision": "b78cfce87d7a647cd7eff17199f4ed32"
  },
  {
    "url": "assets/js/57.a99de40e.js",
    "revision": "92f38a57a5438d49cb4219e7e81a07ea"
  },
  {
    "url": "assets/js/58.f1eb94d8.js",
    "revision": "09aabf9dcc06a621b2f54950c8163977"
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
    "url": "assets/js/61.8fcad0f5.js",
    "revision": "3a1e8c3d3d896b8acb36c9509353b8ad"
  },
  {
    "url": "assets/js/62.fd12d486.js",
    "revision": "d747ed53ba38152b4a72cf635ed523d8"
  },
  {
    "url": "assets/js/63.da63cd6d.js",
    "revision": "ee13c9bf3692b3c107eba3f57d323ec8"
  },
  {
    "url": "assets/js/64.d9a92d13.js",
    "revision": "811bc56e76fa72d734bc5122ffab3f5c"
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
    "url": "assets/js/67.220bc0c4.js",
    "revision": "0e40f76536c9861a147e6ffcf21a5209"
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
    "url": "assets/js/9.8668cf5c.js",
    "revision": "2874cf8a9f2637a23dd54fc9d1b722f1"
  },
  {
    "url": "assets/js/app.7e3227f6.js",
    "revision": "dcd2af8ba0c5395ca023165f2095344b"
  },
  {
    "url": "blog/angular.html",
    "revision": "318adaf0c9f148f7e4c6066390bf3873"
  },
  {
    "url": "blog/ast.html",
    "revision": "f72114106b8bc5fa08d1250741f9f747"
  },
  {
    "url": "blog/canvas.html",
    "revision": "26aa551866e26a517ad22b5ef0025105"
  },
  {
    "url": "blog/console.html",
    "revision": "1f9de8f9a9ebbc15ea670d1f7dedc47c"
  },
  {
    "url": "blog/csspre.html",
    "revision": "60f674825b067467c9fc7e882623adae"
  },
  {
    "url": "blog/deno.html",
    "revision": "79a5cc779aa03cb807f62c3744ec9940"
  },
  {
    "url": "blog/docker-compose.html",
    "revision": "5c8f871ede9b72b50238ad1b1e56c631"
  },
  {
    "url": "blog/docker-project.html",
    "revision": "701cd4707acdce695749835fdd6f870f"
  },
  {
    "url": "blog/docker.html",
    "revision": "f1f2d35e903fbb6586cc0b8dc1dfc955"
  },
  {
    "url": "blog/echarts.html",
    "revision": "2f7b3ba3be5ff0dad477a80f4d551395"
  },
  {
    "url": "blog/egg.html",
    "revision": "539c9943f7b57e75e9e1c990c4301350"
  },
  {
    "url": "blog/electron.html",
    "revision": "04d9a040eefe48c9dca1ef34d8990e33"
  },
  {
    "url": "blog/flex&grid.html",
    "revision": "f58692ee5e7589af242b2f55900dd4ff"
  },
  {
    "url": "blog/flutter.html",
    "revision": "c5002a9f1f158f0881068c4db0af7f63"
  },
  {
    "url": "blog/g6.html",
    "revision": "ccf4e3ba4c7735ecf4b602856526ccd0"
  },
  {
    "url": "blog/git.html",
    "revision": "da500590c3ada46b9b2a606cbdcf0008"
  },
  {
    "url": "blog/golang.html",
    "revision": "c792c870e4d122e311f9dadf41ad6412"
  },
  {
    "url": "blog/http.html",
    "revision": "0cffe493c5c4434ebc8fc02ce5b67477"
  },
  {
    "url": "blog/index.html",
    "revision": "1aad52b55624dd07bf9fc053a7c86c5e"
  },
  {
    "url": "blog/koa2-learn.html",
    "revision": "2ff8bf8f0e7061adbe886fae5f35c846"
  },
  {
    "url": "blog/map.html",
    "revision": "5b4dea57729154013535a27ecc2210e8"
  },
  {
    "url": "blog/nodecli.html",
    "revision": "dec8be28b2a5d62372690a7fb51062f8"
  },
  {
    "url": "blog/nodespider.html",
    "revision": "4ce864ae65304bf29487bafadec1f918"
  },
  {
    "url": "blog/performance.html",
    "revision": "c55c5c970b20c59db738be477d53847a"
  },
  {
    "url": "blog/puppeteer.html",
    "revision": "c13de8f4c426719cd2dfe3937f1ffcbb"
  },
  {
    "url": "blog/react-native.html",
    "revision": "171b78b31c3318f96451efc5015c87d8"
  },
  {
    "url": "blog/react.html",
    "revision": "981b50874df7983c851ced9a8e6b1336"
  },
  {
    "url": "blog/socketio.html",
    "revision": "53e81ae9559d624a61c5a1902bbeeb1d"
  },
  {
    "url": "blog/springboot.html",
    "revision": "a0593308ff66261a5fd535c16693b26a"
  },
  {
    "url": "blog/taro.html",
    "revision": "80b5984dcd9b2788c8dc85e3505ca6a1"
  },
  {
    "url": "blog/tensorflow.html",
    "revision": "278c003995a8da25c30a85c29f74c385"
  },
  {
    "url": "blog/three.html",
    "revision": "33a3b166cecea227f5097c615a3839c8"
  },
  {
    "url": "blog/tonejs.html",
    "revision": "aad58e7efc975d20a8d3e88763013a13"
  },
  {
    "url": "blog/tsspider.html",
    "revision": "a8fee6d25dc6d4bee9323bd12c12d1ba"
  },
  {
    "url": "blog/vue2.html",
    "revision": "a57532c84da9cb553ac1ea49b069f7cc"
  },
  {
    "url": "blog/vue3.html",
    "revision": "0ace992319c7252ce497241eb69d2c3b"
  },
  {
    "url": "blog/vuepress.html",
    "revision": "03a2c11211822cf059653839a123ddab"
  },
  {
    "url": "blog/vuetestutils.html",
    "revision": "d1744a00a6fc738bbb7157a257dbe76d"
  },
  {
    "url": "blog/vuetestutils2.html",
    "revision": "5d24ff799319bf1aa1614d159477b72c"
  },
  {
    "url": "blog/webpack.html",
    "revision": "09faa81f3cbc801df9df852cce98b1ee"
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
    "revision": "cc1aef187ee2226a0624fd0af62b137f"
  },
  {
    "url": "leecode/index.html",
    "revision": "018fe4e0377bf215d186cd922aac500b"
  },
  {
    "url": "leecode/leecode.html",
    "revision": "2db24c601607ad2a6f4a21e80020c01d"
  },
  {
    "url": "live2d/wanko/assets/moc/wanko.1024/texture_00.png",
    "revision": "10b7047251205db46fdac7632b5d4642"
  },
  {
    "url": "note/dsaa.html",
    "revision": "04cdfc6a3d69e07f01a901d204e25b5b"
  },
  {
    "url": "note/es.html",
    "revision": "54258f3ea9df71589f4aac923de3b910"
  },
  {
    "url": "note/index.html",
    "revision": "9f94babc20a9859a3bc8857d6fbebc47"
  },
  {
    "url": "note/lib.html",
    "revision": "04b85fa4b40ec4fb446a695db34cf40c"
  },
  {
    "url": "note/shixi.html",
    "revision": "b2fcd26feeb45a680200dea470df0715"
  },
  {
    "url": "repo/chatdemo.html",
    "revision": "911c2204aedf788b74cfa0de77d7e37f"
  },
  {
    "url": "repo/dachuang.html",
    "revision": "0fb21e307b9e96e74c88e2bf8716c2a1"
  },
  {
    "url": "repo/electron.html",
    "revision": "22feb156f96de647d02f60a84cf9156b"
  },
  {
    "url": "repo/ibf.html",
    "revision": "bc9f83922bab0d63d20e6283144339da"
  },
  {
    "url": "repo/index.html",
    "revision": "cc5548b6c6e26efcf5753b42b687ca0d"
  },
  {
    "url": "repo/javaks.html",
    "revision": "8b7b486a21d1d9a39a58d8f4d75e21b2"
  },
  {
    "url": "repo/ksh.html",
    "revision": "9ea0547b405fb52e4ccd94008dca0b6f"
  },
  {
    "url": "repo/mddemo.html",
    "revision": "a30b56f1065c88e4a4c8ceb441663312"
  },
  {
    "url": "repo/tenseflow.html",
    "revision": "0a8f20069188e828d6eccd2cc28a919e"
  },
  {
    "url": "repo/todo.html",
    "revision": "91f18f39da8804b699bef0b0905047ff"
  },
  {
    "url": "repo/tongji.html",
    "revision": "2cf3c9426668d5b924b455c0ae51fa76"
  },
  {
    "url": "repo/webaudio.html",
    "revision": "cb1c1974deb4319e8e3b40063fff4796"
  },
  {
    "url": "repo/wkc.html",
    "revision": "a283745a02e58f0990fc8899363fbd9a"
  },
  {
    "url": "road/checklist.html",
    "revision": "4d84d31c06a0514204171fadc4ec1549"
  },
  {
    "url": "road/index.html",
    "revision": "01f1845ca5dbaf6333e68f41ee5de692"
  },
  {
    "url": "road/road.html",
    "revision": "aed699f58e3b76810a6a8009d59a7728"
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
