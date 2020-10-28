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
    "revision": "db88015643cabd88b4f77514cc0ce8d0"
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
    "url": "assets/js/11.3d70bde8.js",
    "revision": "e3661479333a971d09269aab3cacb808"
  },
  {
    "url": "assets/js/12.74346c9b.js",
    "revision": "ab89f90b1af69a8af17a9ccadf9f8652"
  },
  {
    "url": "assets/js/13.8d720ff6.js",
    "revision": "1724974c16472c524e2dc0b3c482d6bb"
  },
  {
    "url": "assets/js/14.8e5ddade.js",
    "revision": "e4e937490136a5d1fea8b5529e948e11"
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
    "url": "assets/js/19.2ebd64a5.js",
    "revision": "4f0b2f6b02e1f42ed29a3d6a5a5190f6"
  },
  {
    "url": "assets/js/2.590cb2e6.js",
    "revision": "751d2b659f08f666c8a20cf7e4b61f84"
  },
  {
    "url": "assets/js/20.b69de88d.js",
    "revision": "c10e859cb4f6ed76a988794fc9880641"
  },
  {
    "url": "assets/js/21.3230ac30.js",
    "revision": "5fdd01d7af936ad6e17ac51979d8d1e8"
  },
  {
    "url": "assets/js/22.b1cb4404.js",
    "revision": "2a08f827670db2712ca8f4175a8dc40d"
  },
  {
    "url": "assets/js/23.3bfaa8ae.js",
    "revision": "de1872922d3c963faed1f0bda755f224"
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
    "url": "assets/js/26.350e2aec.js",
    "revision": "6967e45ab4d741c22f18f6594fd5c557"
  },
  {
    "url": "assets/js/27.a06e22ef.js",
    "revision": "5e9234e41e42a7a55f526fecec314eb7"
  },
  {
    "url": "assets/js/28.1dd2e537.js",
    "revision": "8d577c8876f86b0e84065519d2e47194"
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
    "url": "assets/js/31.d7405bbe.js",
    "revision": "6c5a6ead98b938ff1e4f8fd9485a341c"
  },
  {
    "url": "assets/js/32.0772f5f8.js",
    "revision": "f06726c2a24a857ff759053f788ba31b"
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
    "url": "assets/js/41.a7c7f7ee.js",
    "revision": "b2e81e1cd8fec44134e49f7b26d91325"
  },
  {
    "url": "assets/js/42.ae24fbfd.js",
    "revision": "9f028286392f11bff6b7b1990182b677"
  },
  {
    "url": "assets/js/43.20bd6535.js",
    "revision": "fcbbdbb4b02d3fd45d6aad3a61c62366"
  },
  {
    "url": "assets/js/44.bafbdb42.js",
    "revision": "8b9656f5ff6eab05219d8e4f5027f146"
  },
  {
    "url": "assets/js/45.c1e51217.js",
    "revision": "148ae4623c328b154b94ea76f7a6a3cc"
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
    "url": "assets/js/48.ab93c246.js",
    "revision": "6b654b27c5e6a271bb6e6085072c6c16"
  },
  {
    "url": "assets/js/49.63216e7e.js",
    "revision": "0fecda0709b436cc3b88fef8b05e62c0"
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
    "url": "assets/js/52.42a85e8d.js",
    "revision": "f7ec17cecebc7c2445cd4411d07b0ced"
  },
  {
    "url": "assets/js/53.a9b485bb.js",
    "revision": "b2d7dede62ca361aaf1abe6ad93dd889"
  },
  {
    "url": "assets/js/54.39169bf5.js",
    "revision": "d3ab0b868a7501aaf691579cfd6db459"
  },
  {
    "url": "assets/js/55.8ae5183a.js",
    "revision": "4e2eec1203ba65fdeb8cb665da82c178"
  },
  {
    "url": "assets/js/56.5e8f7cd8.js",
    "revision": "b78cfce87d7a647cd7eff17199f4ed32"
  },
  {
    "url": "assets/js/57.84dab489.js",
    "revision": "0f33abc00ae611d5dd4a047a914b9ba2"
  },
  {
    "url": "assets/js/58.718517e2.js",
    "revision": "96c968fded4f063945ee386dbc884093"
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
    "url": "assets/js/60.a49682ba.js",
    "revision": "830fd8850e26f1eb455376c39bac3ced"
  },
  {
    "url": "assets/js/61.884611f7.js",
    "revision": "49991286a891417584d55e8724ffaa60"
  },
  {
    "url": "assets/js/62.71fde174.js",
    "revision": "80d55ceba5351062b41671e031cbd810"
  },
  {
    "url": "assets/js/63.32f44225.js",
    "revision": "e3c0df1389c0b007a565d68a09f951ad"
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
    "url": "assets/js/68.b0f03bd2.js",
    "revision": "a9a172e691eb0b93252c584e93081c12"
  },
  {
    "url": "assets/js/69.dcd38c44.js",
    "revision": "5d251a76998d20f62f9aeea9974c9334"
  },
  {
    "url": "assets/js/7.82245d36.js",
    "revision": "7b124d9c8580891fca826cbafa3df10f"
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
    "url": "assets/js/8.cadfee04.js",
    "revision": "3024e2e7d9650d1af22012c97f905216"
  },
  {
    "url": "assets/js/9.cb584e83.js",
    "revision": "038dccdfe5deb0503e269cf986ac5fd9"
  },
  {
    "url": "assets/js/app.0d8ded7f.js",
    "revision": "b0921106e9f5b59133b5ebdca1eea137"
  },
  {
    "url": "blog/angular.html",
    "revision": "b7a74cefd01abbfb197782a933def97e"
  },
  {
    "url": "blog/ast.html",
    "revision": "51708168e08bc1507015bdaf7a652239"
  },
  {
    "url": "blog/canvas.html",
    "revision": "1c6ecf298714163d0bd1d3e4d7b4119f"
  },
  {
    "url": "blog/console.html",
    "revision": "2a1013a67e31295b421f884c0177de3f"
  },
  {
    "url": "blog/csspre.html",
    "revision": "b0dde9c4b68dd0f03e5bedbca58fef99"
  },
  {
    "url": "blog/deno.html",
    "revision": "6bc6e19759a8d28df75ff5492f58611c"
  },
  {
    "url": "blog/docker-compose.html",
    "revision": "0e861dccf2a50a21b59e7787fc0be80b"
  },
  {
    "url": "blog/docker-project.html",
    "revision": "642f70f530198b9570d243891abb4cef"
  },
  {
    "url": "blog/docker.html",
    "revision": "4f546f599230d7f6b4025fb01f7511d7"
  },
  {
    "url": "blog/echarts.html",
    "revision": "1f2ac9a1fbe8bc6e4febc86d9165b116"
  },
  {
    "url": "blog/egg.html",
    "revision": "ac13b43fb00031137bc12788213b7f64"
  },
  {
    "url": "blog/electron.html",
    "revision": "7f19cfc47f66724aaa914da17daa0bb6"
  },
  {
    "url": "blog/flex&grid.html",
    "revision": "1f6b961669e68de14efbbd2cfb2a02bf"
  },
  {
    "url": "blog/flutter.html",
    "revision": "464481609274962e80f055497f07742b"
  },
  {
    "url": "blog/g6.html",
    "revision": "96d16133c3d571688fbdb63729079129"
  },
  {
    "url": "blog/git.html",
    "revision": "2028784645b37f8f4c4371f63c17d088"
  },
  {
    "url": "blog/golang.html",
    "revision": "4b967b1226be642911ea4aad51c4b998"
  },
  {
    "url": "blog/http.html",
    "revision": "3907a02a600d4c6ac0ffa593702f2732"
  },
  {
    "url": "blog/index.html",
    "revision": "9d99ff4e499cb9966d41fd27099c162c"
  },
  {
    "url": "blog/koa2-learn.html",
    "revision": "8b813f54c008074eba3deb20515bcdd2"
  },
  {
    "url": "blog/map.html",
    "revision": "129e4e49e126c5ecdd2d764e7f2a4a64"
  },
  {
    "url": "blog/nodecli.html",
    "revision": "8495fba3c1f28307b6d68e54aab669fa"
  },
  {
    "url": "blog/nodespider.html",
    "revision": "ef3a4ecc34f9e20893b70c3899f97408"
  },
  {
    "url": "blog/performance.html",
    "revision": "22113a96be485f85b2c135f846f70eb2"
  },
  {
    "url": "blog/puppeteer.html",
    "revision": "edb9ea0378bd8d21906464dffe6e0b4e"
  },
  {
    "url": "blog/react-native.html",
    "revision": "4ed98dcc4d8ad6f695c26ad7d3e68664"
  },
  {
    "url": "blog/react.html",
    "revision": "96b379e82d47c0a442b6d256ca031f50"
  },
  {
    "url": "blog/socketio.html",
    "revision": "1fb4953f9df884fc4d4976c9cbc475cb"
  },
  {
    "url": "blog/springboot.html",
    "revision": "b5c46bcec26c4bb025bf4346f43dbb72"
  },
  {
    "url": "blog/taro.html",
    "revision": "79bf096aa8005b32ae0a4b36c0ed9b04"
  },
  {
    "url": "blog/tensorflow.html",
    "revision": "ac2c50824b2cebbfe07d598c9524c116"
  },
  {
    "url": "blog/three.html",
    "revision": "a16d9da872555137632a7534942eed93"
  },
  {
    "url": "blog/tonejs.html",
    "revision": "8f1602f9213b7ec315994f6c60b59b47"
  },
  {
    "url": "blog/tsspider.html",
    "revision": "1f502bf5a692371b2343f69546f6650a"
  },
  {
    "url": "blog/vue2.html",
    "revision": "20dfeb4f629fa8f3b52fa9072366a5cb"
  },
  {
    "url": "blog/vue3.html",
    "revision": "62c307a1bbe2e2b38e3ce7e0bda0b6a5"
  },
  {
    "url": "blog/vuepress.html",
    "revision": "ea9cf0108247a999b3cb2a5dfd41f488"
  },
  {
    "url": "blog/vuetestutils.html",
    "revision": "d1582b647d4244dd43b3df45b042cac6"
  },
  {
    "url": "blog/vuetestutils2.html",
    "revision": "fa757090f908ac880e84c7032ddd0368"
  },
  {
    "url": "blog/webpack.html",
    "revision": "2c5c5ee74df0626591db993266e993ac"
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
    "revision": "7c80d587ccf5af5a6f0df60ca8942a71"
  },
  {
    "url": "leecode/index.html",
    "revision": "b4fbcccfbd2de733734e4d7e4cc42724"
  },
  {
    "url": "leecode/leecode.html",
    "revision": "8ff929f759e2a0e9ca06d479ad18d768"
  },
  {
    "url": "live2d/wanko/assets/moc/wanko.1024/texture_00.png",
    "revision": "10b7047251205db46fdac7632b5d4642"
  },
  {
    "url": "note/dsaa.html",
    "revision": "be8e9aeec61b333147b34f5d37664d40"
  },
  {
    "url": "note/es.html",
    "revision": "851a3b2e41cf266dcca605cf368b4f1c"
  },
  {
    "url": "note/index.html",
    "revision": "578ca297bc708c24d46efdc2bc25baa0"
  },
  {
    "url": "note/lib.html",
    "revision": "5e6e64eaa8408b08505ce0595a384ef0"
  },
  {
    "url": "note/shixi.html",
    "revision": "6173d038744f2092caf6f1ab17c91513"
  },
  {
    "url": "repo/chatdemo.html",
    "revision": "1b6a31a47a88153dfda71ed173e2c90f"
  },
  {
    "url": "repo/dachuang.html",
    "revision": "2153dce2d7d8d5dfb45fd5bd71fc2d03"
  },
  {
    "url": "repo/electron.html",
    "revision": "c97472fd725d82f4914ed5b8ae4b372a"
  },
  {
    "url": "repo/ibf.html",
    "revision": "81c113f371cef89cb9b40902705fb738"
  },
  {
    "url": "repo/index.html",
    "revision": "ea69eae8d67f91a181aabade74705f2a"
  },
  {
    "url": "repo/javaks.html",
    "revision": "61443d0aee0cbba4d26b0a81c04f9135"
  },
  {
    "url": "repo/ksh.html",
    "revision": "b68def8dab6ed34fef5e5441e4df4f6d"
  },
  {
    "url": "repo/mddemo.html",
    "revision": "e4ae6ce31f1adb12cabf9b4b03fbae67"
  },
  {
    "url": "repo/tenseflow.html",
    "revision": "291235b50504402bb67d232f64e89c0f"
  },
  {
    "url": "repo/todo.html",
    "revision": "ff81dd91d54a089a7573fb0f3cb07188"
  },
  {
    "url": "repo/tongji.html",
    "revision": "bfb8091fbba22ffa41c9b6ea00da09a5"
  },
  {
    "url": "repo/webaudio.html",
    "revision": "458e14bb2d87d874fe151a59bfe2d541"
  },
  {
    "url": "repo/wkc.html",
    "revision": "460a98793f6a67c15e9dfd235dc4c1e4"
  },
  {
    "url": "road/checklist.html",
    "revision": "cec2b067b1d6c0c01262e9fc6b602bc6"
  },
  {
    "url": "road/index.html",
    "revision": "4d34b5b4c51f6ffdb93a4f3d95c5e087"
  },
  {
    "url": "road/road.html",
    "revision": "75b0c1a1534f2e20296104cf4cf7c813"
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
