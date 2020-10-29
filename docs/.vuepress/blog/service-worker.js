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
    "revision": "45a1717e3a59aafee9754730fe285217"
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
    "url": "assets/js/11.1f848ad1.js",
    "revision": "368e5b6df99c1da20015888b9c3475b7"
  },
  {
    "url": "assets/js/12.5d18e77d.js",
    "revision": "6c085aac3538081b706b24843528d75b"
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
    "url": "assets/js/15.c4941435.js",
    "revision": "5768678a127c97dc4a3f00763ff7f888"
  },
  {
    "url": "assets/js/16.23b3fe13.js",
    "revision": "7854b042b4823613f4381f823729e04c"
  },
  {
    "url": "assets/js/17.ed949b04.js",
    "revision": "2f9afc77ac657e6abaf0fc882249f0e4"
  },
  {
    "url": "assets/js/18.5deffd01.js",
    "revision": "89e749e80d5d550fa8e50f739d31c456"
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
    "url": "assets/js/23.5a2dc359.js",
    "revision": "ff9abc6a685fc48bbb7fada2b4006f7a"
  },
  {
    "url": "assets/js/24.5c5e288d.js",
    "revision": "0503dfe146ba3008a2ad67d2d532320e"
  },
  {
    "url": "assets/js/25.510e213a.js",
    "revision": "65b1a3cc39f1680c6322ed69ac72f36e"
  },
  {
    "url": "assets/js/26.2d7288df.js",
    "revision": "cfa0fa3b2fd745634fd828167127862b"
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
    "url": "assets/js/30.5b83edda.js",
    "revision": "1fa3db416e562024ba04b3ea12935f7c"
  },
  {
    "url": "assets/js/31.20334dc7.js",
    "revision": "46db3df4f3595fa45069353c49dad2b8"
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
    "url": "assets/js/41.055fc944.js",
    "revision": "666707066b77f206060211177b81be8a"
  },
  {
    "url": "assets/js/42.2b4a3733.js",
    "revision": "a3165a1a7811811265a1779b35da2611"
  },
  {
    "url": "assets/js/43.fdf963ca.js",
    "revision": "f26458facf50af4b07f187ebe0d02baa"
  },
  {
    "url": "assets/js/44.43703684.js",
    "revision": "7324f4ee24ef49e96d02a1fb7d3ba86d"
  },
  {
    "url": "assets/js/45.c1e51217.js",
    "revision": "148ae4623c328b154b94ea76f7a6a3cc"
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
    "url": "assets/js/48.a363565d.js",
    "revision": "229eee906feea4adb7add60a9f1cb5ce"
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
    "url": "assets/js/56.0508e37a.js",
    "revision": "0657315a08e134434e2be9615a888675"
  },
  {
    "url": "assets/js/57.a99de40e.js",
    "revision": "92f38a57a5438d49cb4219e7e81a07ea"
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
    "url": "assets/js/7.a41b2170.js",
    "revision": "97cd74c759a96e43d071aac2e232a7ab"
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
    "url": "assets/js/8.785f5792.js",
    "revision": "6e72e148280b96069eb354eb8c2022e5"
  },
  {
    "url": "assets/js/9.cb584e83.js",
    "revision": "038dccdfe5deb0503e269cf986ac5fd9"
  },
  {
    "url": "assets/js/app.98dd4c22.js",
    "revision": "1dbe36eae69b8e4f0935023992d65109"
  },
  {
    "url": "blog/angular.html",
    "revision": "143361b687ee687f2f9cd454db75ca66"
  },
  {
    "url": "blog/ast.html",
    "revision": "93ee6dba304d31ac3f9915752f4f003f"
  },
  {
    "url": "blog/canvas.html",
    "revision": "569ac8c90d419ec6c183164464af85bd"
  },
  {
    "url": "blog/console.html",
    "revision": "f66b97ed26fe64e8bdeae28b445a0db9"
  },
  {
    "url": "blog/csspre.html",
    "revision": "32870b0b92bdf16d8613956ae660d0e1"
  },
  {
    "url": "blog/deno.html",
    "revision": "a65055d1eeb0722543f87d4590643ab1"
  },
  {
    "url": "blog/docker-compose.html",
    "revision": "acf2faa1a13f23b473dc206667ec1353"
  },
  {
    "url": "blog/docker-project.html",
    "revision": "80d0edeb08399fe2c42f5658a67d4e6e"
  },
  {
    "url": "blog/docker.html",
    "revision": "378410270e93059567636fa3cf3e39a0"
  },
  {
    "url": "blog/echarts.html",
    "revision": "04f161788274aa3d83b2f0855814eaab"
  },
  {
    "url": "blog/egg.html",
    "revision": "901e098872816e71ffed66055739d243"
  },
  {
    "url": "blog/electron.html",
    "revision": "c8eef6385bd1ca6fd745ba2db746e70e"
  },
  {
    "url": "blog/flex&grid.html",
    "revision": "ccb3affc384c3b8beaa7f962e427d0e8"
  },
  {
    "url": "blog/flutter.html",
    "revision": "aedabcb5a10e478ba1e4282ce32a57e6"
  },
  {
    "url": "blog/g6.html",
    "revision": "87ba1c16e030cd485e4996a6e1e5e19d"
  },
  {
    "url": "blog/git.html",
    "revision": "f2b136ffc4b15e940492eee151e517ae"
  },
  {
    "url": "blog/golang.html",
    "revision": "6e5804555d49142cef86749f32ecb9bb"
  },
  {
    "url": "blog/http.html",
    "revision": "d462cc5435bb88697d6f560b5b14dff8"
  },
  {
    "url": "blog/index.html",
    "revision": "b9ecb4637e7d17221f445445b7c49a03"
  },
  {
    "url": "blog/koa2-learn.html",
    "revision": "369d84e3050d2cb2ec0d20a20dd604bf"
  },
  {
    "url": "blog/map.html",
    "revision": "964108c7c2488d6134dd4e5917d1498f"
  },
  {
    "url": "blog/nodecli.html",
    "revision": "67ce4905598cf9e95cc52634b1fae20e"
  },
  {
    "url": "blog/nodespider.html",
    "revision": "9529a5b40b3e1e38f2ed5dd5f91f0d3e"
  },
  {
    "url": "blog/performance.html",
    "revision": "09b73e2e7a20ae6aa4df92f8bb2ec941"
  },
  {
    "url": "blog/puppeteer.html",
    "revision": "84612ebc44dbd3b735c555478fd81b02"
  },
  {
    "url": "blog/react-native.html",
    "revision": "e220b9bf357e74fc06ce1b49cabff658"
  },
  {
    "url": "blog/react.html",
    "revision": "46cfdc5b5790013980f1840e08fd1aac"
  },
  {
    "url": "blog/socketio.html",
    "revision": "fee7ecd0acecdb144752fa4c3a04242d"
  },
  {
    "url": "blog/springboot.html",
    "revision": "faa65945dbc32a22172e8444cb0c74e9"
  },
  {
    "url": "blog/taro.html",
    "revision": "c4f0f93e9950a391188325eb4f6a823a"
  },
  {
    "url": "blog/tensorflow.html",
    "revision": "20382e058cf013d406bd9228efc4f184"
  },
  {
    "url": "blog/three.html",
    "revision": "120c97ee5df725386bd598952a11c3cd"
  },
  {
    "url": "blog/tonejs.html",
    "revision": "1c996e078435e0921f64afd00d7b1fb4"
  },
  {
    "url": "blog/tsspider.html",
    "revision": "77113a8064e96b382389d39c2a813b22"
  },
  {
    "url": "blog/vue2.html",
    "revision": "86d215086e1b06e7cfe29a1cffc040ef"
  },
  {
    "url": "blog/vue3.html",
    "revision": "a8805556781bb138a92b84c6079d0c68"
  },
  {
    "url": "blog/vuepress.html",
    "revision": "8186a5f4f6188aadc7d6ce560a8909fb"
  },
  {
    "url": "blog/vuetestutils.html",
    "revision": "0bb5e431822eead8611ef90b4f4fcb79"
  },
  {
    "url": "blog/vuetestutils2.html",
    "revision": "137034aeee22a2a4c03e904cdffbfeb6"
  },
  {
    "url": "blog/webpack.html",
    "revision": "4a04cffe145961569058ba37c005e8b0"
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
    "revision": "f30382f01da592727c6c8f7bcfd74e48"
  },
  {
    "url": "leecode/index.html",
    "revision": "ee9d03d7177e03d36640d7f527d28a39"
  },
  {
    "url": "leecode/leecode.html",
    "revision": "307adadfd26d95fca719630d0e348a7f"
  },
  {
    "url": "live2d/wanko/assets/moc/wanko.1024/texture_00.png",
    "revision": "10b7047251205db46fdac7632b5d4642"
  },
  {
    "url": "note/dsaa.html",
    "revision": "d72e2315df9944ff0b0e0cd7b5f21a34"
  },
  {
    "url": "note/es.html",
    "revision": "3d76a3301337c72c06ddfca1a1d039ca"
  },
  {
    "url": "note/index.html",
    "revision": "1fe54d3b726c337a3982d44503f0d317"
  },
  {
    "url": "note/lib.html",
    "revision": "f5e9b27b095a0ac1bb40fc3d65128999"
  },
  {
    "url": "note/shixi.html",
    "revision": "792ad275213038257558c6b3dca83053"
  },
  {
    "url": "repo/chatdemo.html",
    "revision": "e87cec7f77130b2c3619ae5682a79141"
  },
  {
    "url": "repo/dachuang.html",
    "revision": "42ae1be13c460d2d01e39106b84465bb"
  },
  {
    "url": "repo/electron.html",
    "revision": "f5e7ce49948c5d06640d05143707f802"
  },
  {
    "url": "repo/ibf.html",
    "revision": "da5999f6cbc65e584477ece39937f133"
  },
  {
    "url": "repo/index.html",
    "revision": "5b2ee62e385e49a596b79bab8b900b4a"
  },
  {
    "url": "repo/javaks.html",
    "revision": "f76ced6f9ed11fc303c58cf593b118b3"
  },
  {
    "url": "repo/ksh.html",
    "revision": "af227889b30bbccbe21b1da5968badba"
  },
  {
    "url": "repo/mddemo.html",
    "revision": "3850f28f3ea71c70d11ee9386cb0c372"
  },
  {
    "url": "repo/tenseflow.html",
    "revision": "1c0ba5ed52eb44f6430e8bad2adaaa5a"
  },
  {
    "url": "repo/todo.html",
    "revision": "2b2f78376c1925e7974b066b01986c9f"
  },
  {
    "url": "repo/tongji.html",
    "revision": "028f24e31664404395878424181741a4"
  },
  {
    "url": "repo/webaudio.html",
    "revision": "308f0f8c5eda799edacb2cfeac150957"
  },
  {
    "url": "repo/wkc.html",
    "revision": "e9bfc2836276d6437d76c45cabddb992"
  },
  {
    "url": "road/checklist.html",
    "revision": "a0f9271fa702c4e3aefaf3ff006c45ec"
  },
  {
    "url": "road/index.html",
    "revision": "c4665f8b7591a1ddb9f0610e1478b722"
  },
  {
    "url": "road/road.html",
    "revision": "04e0d620778e3aa4111499f182983365"
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
