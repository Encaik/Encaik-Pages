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
    "revision": "af4e12eb3d1ab332508d6eb3d4654b00"
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
    "url": "assets/js/10.690acdac.js",
    "revision": "b32f8681d400e8178a66747790a9ca98"
  },
  {
    "url": "assets/js/11.3bfb8044.js",
    "revision": "1ca6e69dd76ec098f96d4dc0e0909ae5"
  },
  {
    "url": "assets/js/12.e6b51775.js",
    "revision": "8fcb253cded7918d227adf250cecb13a"
  },
  {
    "url": "assets/js/13.a49cb884.js",
    "revision": "f02d50e543fc1ad4224279cff1b198fe"
  },
  {
    "url": "assets/js/14.0e9fbf74.js",
    "revision": "0039c9067aff33be316b53c67f25e05d"
  },
  {
    "url": "assets/js/15.5c94c7ec.js",
    "revision": "317a93ceca714e38ef8241a824c5f4ad"
  },
  {
    "url": "assets/js/16.7e18cd62.js",
    "revision": "0733fc8b2f62525b20feb57ce0b1aea9"
  },
  {
    "url": "assets/js/17.ed949b04.js",
    "revision": "2f9afc77ac657e6abaf0fc882249f0e4"
  },
  {
    "url": "assets/js/18.3cf5450e.js",
    "revision": "cee38acac9d11bd28d763aa611e53ab8"
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
    "url": "assets/js/21.28c62a30.js",
    "revision": "6139b19e9608cfb6b63251f202a9c557"
  },
  {
    "url": "assets/js/22.2d8380f3.js",
    "revision": "d186a1ad198832a92dbe2d48f2cb36dd"
  },
  {
    "url": "assets/js/23.bf8f9e2e.js",
    "revision": "5f62cde776b5e5e3fa5db5710a2326b2"
  },
  {
    "url": "assets/js/24.fd6d0609.js",
    "revision": "4e94bc11f20707705d90dd82c6669c31"
  },
  {
    "url": "assets/js/25.510e213a.js",
    "revision": "65b1a3cc39f1680c6322ed69ac72f36e"
  },
  {
    "url": "assets/js/26.9918f64d.js",
    "revision": "951428ed3a584771b03ab663b9d0476a"
  },
  {
    "url": "assets/js/27.ed9ff302.js",
    "revision": "0e99c12b7fca239c5ff7460c975e2129"
  },
  {
    "url": "assets/js/28.24557260.js",
    "revision": "a5731bdd17f7a1222bebffa75b194545"
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
    "url": "assets/js/31.23a99bf1.js",
    "revision": "7893f782dd523d2389c563525f4abe8b"
  },
  {
    "url": "assets/js/32.9605e462.js",
    "revision": "61cd923a37ccfc54b8520f9ed2f2c4e2"
  },
  {
    "url": "assets/js/33.ecef0f8c.js",
    "revision": "9faee714dfb4495aeeaa866ae4c04a96"
  },
  {
    "url": "assets/js/34.e88105c5.js",
    "revision": "c0da05af2d9c5f5192c0f34a23702106"
  },
  {
    "url": "assets/js/35.4001fc75.js",
    "revision": "1e53689d5f68bf5fd4c260a5635323b3"
  },
  {
    "url": "assets/js/36.5db6ef1a.js",
    "revision": "c80069e4b808558d0826253298e5102f"
  },
  {
    "url": "assets/js/37.7b9d5cdf.js",
    "revision": "0c425a495c63c0a74683af1e727416a4"
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
    "url": "assets/js/40.d74d54ea.js",
    "revision": "aeb754c6e3fc3706947a6b149fdab6e0"
  },
  {
    "url": "assets/js/41.14c6e5ef.js",
    "revision": "02383fd813a2af2b7cf249fb18dd7c0b"
  },
  {
    "url": "assets/js/42.2b4a3733.js",
    "revision": "a3165a1a7811811265a1779b35da2611"
  },
  {
    "url": "assets/js/43.20bd6535.js",
    "revision": "fcbbdbb4b02d3fd45d6aad3a61c62366"
  },
  {
    "url": "assets/js/44.0af05366.js",
    "revision": "3c8919763b2f215d080a1d97d1327f9d"
  },
  {
    "url": "assets/js/45.4a21eae0.js",
    "revision": "53fddf3c07d53a2784d73576342884de"
  },
  {
    "url": "assets/js/46.30432bf0.js",
    "revision": "53db452ad75d25f20420237514df2da8"
  },
  {
    "url": "assets/js/47.d6a3c381.js",
    "revision": "c6ed52ed9e0ac91a0a06d6d5bb1f1281"
  },
  {
    "url": "assets/js/48.d4b7379a.js",
    "revision": "2aae2d9565df0ca010b753763a091ec0"
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
    "url": "assets/js/50.72bbec1f.js",
    "revision": "84b7034b76f02fbfd7cb34d0d9235098"
  },
  {
    "url": "assets/js/51.612fa2e1.js",
    "revision": "6fc16d2d64ebf1d816186f11afbfd8d6"
  },
  {
    "url": "assets/js/52.c49a756e.js",
    "revision": "a76c797150c88ed4d177483f775d0d85"
  },
  {
    "url": "assets/js/53.93ca1eea.js",
    "revision": "060cecaf28185658e06a09ebf47efcca"
  },
  {
    "url": "assets/js/54.e28b73cc.js",
    "revision": "35373533abdbfa91c981667ea15bd5ea"
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
    "url": "assets/js/58.cfc5559e.js",
    "revision": "ecea9bc70e132db1b9c74f662637e973"
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
    "url": "assets/js/60.8716c191.js",
    "revision": "e89a9d47052dafdb5b033ac1e2f23f74"
  },
  {
    "url": "assets/js/61.884611f7.js",
    "revision": "49991286a891417584d55e8724ffaa60"
  },
  {
    "url": "assets/js/62.cafebee8.js",
    "revision": "25572e151666fd0333f226ee9f8a436c"
  },
  {
    "url": "assets/js/63.30cef759.js",
    "revision": "35a7cbf2c2ac5fc0e17dc0d77f89e845"
  },
  {
    "url": "assets/js/64.4597c138.js",
    "revision": "e069d56056bfcbf5ed09ceb888055dde"
  },
  {
    "url": "assets/js/65.038522a0.js",
    "revision": "39efb7d15e9433a6ccc6cb40c746883f"
  },
  {
    "url": "assets/js/66.c70e82f7.js",
    "revision": "aca60f3a41f17499c6744b7da75e241c"
  },
  {
    "url": "assets/js/67.220bc0c4.js",
    "revision": "0e40f76536c9861a147e6ffcf21a5209"
  },
  {
    "url": "assets/js/68.04632a9e.js",
    "revision": "18df748b9f0ac7f345c9881208634bb3"
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
    "url": "assets/js/8.46fec6ec.js",
    "revision": "add67156ae81a539a587ab760a8e3eab"
  },
  {
    "url": "assets/js/9.c1d2c327.js",
    "revision": "fb44469b5909c09a07b1143a40aff557"
  },
  {
    "url": "assets/js/app.6af46626.js",
    "revision": "942fd158d4189e40aa766901738e2a4a"
  },
  {
    "url": "blog/angular.html",
    "revision": "1d0848cc413776db02b92539a09e8f45"
  },
  {
    "url": "blog/ast.html",
    "revision": "d12818436d76804d3239f82f73d5c1ec"
  },
  {
    "url": "blog/canvas.html",
    "revision": "1850de5bb3f4e1bed5b5419f017f0720"
  },
  {
    "url": "blog/console.html",
    "revision": "ade2e38d5672ee2ade72dd9e804defa4"
  },
  {
    "url": "blog/csspre.html",
    "revision": "f263163adaabdc82b7741ce869068c7b"
  },
  {
    "url": "blog/deno.html",
    "revision": "7259a1dadf36e692cb11656b9a0883b7"
  },
  {
    "url": "blog/docker-compose.html",
    "revision": "d95824e92a8a6eb9cdcccb4ae182fd58"
  },
  {
    "url": "blog/docker-project.html",
    "revision": "d56c39ffa99f63bbae9730f2436b15a7"
  },
  {
    "url": "blog/docker.html",
    "revision": "8a92ed1ad661a86d724dcb89b23e5342"
  },
  {
    "url": "blog/echarts.html",
    "revision": "3957ce4c763974f70f30ae808a80aba0"
  },
  {
    "url": "blog/egg.html",
    "revision": "d5cf2d2ae44ee01706978e6a51b04dcd"
  },
  {
    "url": "blog/electron.html",
    "revision": "66dfc62c8ef26057c71a93b0cbd88224"
  },
  {
    "url": "blog/flex&grid.html",
    "revision": "3d63a04544d29cfe4cef478329dd49a6"
  },
  {
    "url": "blog/flutter.html",
    "revision": "b21a6a88746bbf9972c77153b20fccdb"
  },
  {
    "url": "blog/g6.html",
    "revision": "77b34b84e45cbf9395dbdd79a25c0432"
  },
  {
    "url": "blog/git.html",
    "revision": "91eb5024d93dab675844d1ca53725006"
  },
  {
    "url": "blog/golang.html",
    "revision": "46f6449cf95683d48cf572550f6f1a05"
  },
  {
    "url": "blog/http.html",
    "revision": "e55248b4932977f45ac00833fc001ec9"
  },
  {
    "url": "blog/index.html",
    "revision": "896c1780b8490075c1870424b747e2d6"
  },
  {
    "url": "blog/koa2-learn.html",
    "revision": "e88a05cd2871c6a47f67caaf088cdec9"
  },
  {
    "url": "blog/map.html",
    "revision": "ff60100ec296e0c911bbb0ef06202b12"
  },
  {
    "url": "blog/nodecli.html",
    "revision": "c0fc2dc9a59cccd09b541515b7ef2d5f"
  },
  {
    "url": "blog/nodespider.html",
    "revision": "7b5fc770f89a77d0c9f4dd1150977025"
  },
  {
    "url": "blog/performance.html",
    "revision": "08817224701db99fbfc92a62fa53aa5e"
  },
  {
    "url": "blog/puppeteer.html",
    "revision": "fb3ca8df3c3ae683d12f84f4f5ac4eae"
  },
  {
    "url": "blog/react-native.html",
    "revision": "13c97eb0f186e190be2bc25cc5dcff0b"
  },
  {
    "url": "blog/react.html",
    "revision": "9dc340ff26ce783967c61cf39a60d128"
  },
  {
    "url": "blog/socketio.html",
    "revision": "37a0568f2c4a5f404e6a9617fb5e0990"
  },
  {
    "url": "blog/springboot.html",
    "revision": "3a74d3f993ed125abbca1817136a2ad3"
  },
  {
    "url": "blog/taro.html",
    "revision": "b8514326f08f6cdacd6929a35298ba40"
  },
  {
    "url": "blog/tensorflow.html",
    "revision": "f91cc808943259a45de1cf139c7026f2"
  },
  {
    "url": "blog/three.html",
    "revision": "0cd0dcb55cdb6a4057aed9132d825d07"
  },
  {
    "url": "blog/tonejs.html",
    "revision": "74925e9333ae564b570fdfc86f84466b"
  },
  {
    "url": "blog/tsspider.html",
    "revision": "d0d9f959068897c65a0b2f9141e44de7"
  },
  {
    "url": "blog/vue2.html",
    "revision": "8f96f820b08d5e3723034ebd0a8a1f6c"
  },
  {
    "url": "blog/vue3.html",
    "revision": "f5aeadbc4149f449d5d9bd17bfe20760"
  },
  {
    "url": "blog/vuepress.html",
    "revision": "f00ec3f40542a35f302568387635e3e6"
  },
  {
    "url": "blog/vuetestutils.html",
    "revision": "768745ea7cb001430fb25c5606cd9af2"
  },
  {
    "url": "blog/vuetestutils2.html",
    "revision": "cd343b1b6091aee925fbe4ad161b7ad5"
  },
  {
    "url": "blog/webpack.html",
    "revision": "069994686c4f5e3114dbbeb7bbc26ffb"
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
    "revision": "72d2b4b43c41810d959b8cd85021cfab"
  },
  {
    "url": "leecode/index.html",
    "revision": "3c8cd2d97b08066086bb76da60e51d37"
  },
  {
    "url": "leecode/leecode.html",
    "revision": "e0595bf25cd4cece7c0185c602cd16eb"
  },
  {
    "url": "live2d/wanko/assets/moc/wanko.1024/texture_00.png",
    "revision": "10b7047251205db46fdac7632b5d4642"
  },
  {
    "url": "note/dsaa.html",
    "revision": "5790a538024066e6827e4138a57067bb"
  },
  {
    "url": "note/es.html",
    "revision": "24693bf536343d55210b985405978d0e"
  },
  {
    "url": "note/index.html",
    "revision": "ecd681510124a207d2123d906ca7b26d"
  },
  {
    "url": "note/lib.html",
    "revision": "be9ebd27bda8d69f98f2518f259af5b4"
  },
  {
    "url": "note/shixi.html",
    "revision": "29a2d2571409aa71abaf7f209cff2c53"
  },
  {
    "url": "repo/chatdemo.html",
    "revision": "b96dea474b427afb2d15d79918ab72bb"
  },
  {
    "url": "repo/dachuang.html",
    "revision": "c228800a946c0eafbb86e68c07ef1fab"
  },
  {
    "url": "repo/electron.html",
    "revision": "66ff635d5a43894f7d51234dcb6b4cfc"
  },
  {
    "url": "repo/ibf.html",
    "revision": "3f21eb3ec95422caab27898f12225975"
  },
  {
    "url": "repo/index.html",
    "revision": "7c43581792aaa624146583eb1ad6e837"
  },
  {
    "url": "repo/javaks.html",
    "revision": "5aa4cd8bb90298c297d43c85e08be511"
  },
  {
    "url": "repo/ksh.html",
    "revision": "11881c4b1447badc14fad248c2a7725a"
  },
  {
    "url": "repo/mddemo.html",
    "revision": "11e9d8bd2afcd5eeb635de6716cab4d4"
  },
  {
    "url": "repo/tenseflow.html",
    "revision": "9760c993c909a314cce4acd4cad2d450"
  },
  {
    "url": "repo/todo.html",
    "revision": "9769d56dee7974bbd49d3e2d36e17449"
  },
  {
    "url": "repo/tongji.html",
    "revision": "c1ba57206225c5ef7c4d3b7b08ca566d"
  },
  {
    "url": "repo/webaudio.html",
    "revision": "c97164a4e828db3ba8fedd6aa88628d5"
  },
  {
    "url": "repo/wkc.html",
    "revision": "effca94b262b9609c571b38138de3baa"
  },
  {
    "url": "road/checklist.html",
    "revision": "6c7ec89fc7214532d8c65cb7ad5f0e46"
  },
  {
    "url": "road/index.html",
    "revision": "6d96108f4f970639c9114faf2e75b31b"
  },
  {
    "url": "road/road.html",
    "revision": "c14283d6207fc5ccf2e347f0462ce79d"
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
