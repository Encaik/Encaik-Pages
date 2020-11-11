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
    "revision": "841752c6ebdb81f66be1dad926fd6cbb"
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
    "url": "assets/js/10.b1570dad.js",
    "revision": "8de1ac1c2ac01927ca60792762db5085"
  },
  {
    "url": "assets/js/11.124d7f98.js",
    "revision": "ecf77b935a4424a06dc717ec243ce2ce"
  },
  {
    "url": "assets/js/12.cd78be8f.js",
    "revision": "2d1a5facb1a700dfbeec2ce61117023a"
  },
  {
    "url": "assets/js/13.8156fbe2.js",
    "revision": "e501766b754c3017413d39ba5a8c3ef6"
  },
  {
    "url": "assets/js/14.733317e6.js",
    "revision": "a06de34f2d1e771d9592aad5a4e78ead"
  },
  {
    "url": "assets/js/15.a3b26d2c.js",
    "revision": "4f6994cf61d6aee641a9e636d5fceed6"
  },
  {
    "url": "assets/js/16.2d5bc795.js",
    "revision": "2f20d05b0e387badd9f0834cb58d89c8"
  },
  {
    "url": "assets/js/17.8978be56.js",
    "revision": "3ba3470b701da0dde6cb4423a5b58c3a"
  },
  {
    "url": "assets/js/18.2e5c5246.js",
    "revision": "e73208823461d633ac61f235bf148b49"
  },
  {
    "url": "assets/js/19.ecb865c0.js",
    "revision": "8d0739b66e6cbf2e4bc85d6456ac5cc6"
  },
  {
    "url": "assets/js/2.590cb2e6.js",
    "revision": "751d2b659f08f666c8a20cf7e4b61f84"
  },
  {
    "url": "assets/js/20.b9f8504f.js",
    "revision": "278277ed64265fb2f0c38475599b57a9"
  },
  {
    "url": "assets/js/21.e4e99f5f.js",
    "revision": "d81abd3b5b209af15e876d315f5e2847"
  },
  {
    "url": "assets/js/22.71a4f62c.js",
    "revision": "88b0a0373cc409d820a3a24551583873"
  },
  {
    "url": "assets/js/23.6abe0d10.js",
    "revision": "df38ef9c0527133ebd7435261aa0c476"
  },
  {
    "url": "assets/js/24.f605847f.js",
    "revision": "36cebeb784cd479b43bc75c1ebd45b2e"
  },
  {
    "url": "assets/js/25.13539658.js",
    "revision": "71f05000e024176c528c233a328b4b2c"
  },
  {
    "url": "assets/js/26.f1f91087.js",
    "revision": "8183c47e2a31f346a66d0cc8e86d8a00"
  },
  {
    "url": "assets/js/27.58465054.js",
    "revision": "6de75d91da3a04ea07e05e933c8ed511"
  },
  {
    "url": "assets/js/28.906bf30f.js",
    "revision": "5fa9e9257bebb1484fa23dcaa3c3a47b"
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
    "url": "assets/js/30.32eee80a.js",
    "revision": "8bb2fe76b8ae117ed9679469e4c3fd19"
  },
  {
    "url": "assets/js/31.24e54de9.js",
    "revision": "5c81f0f1f45c2a980176eae45ec7155b"
  },
  {
    "url": "assets/js/32.0772f5f8.js",
    "revision": "f06726c2a24a857ff759053f788ba31b"
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
    "url": "assets/js/35.b207ef81.js",
    "revision": "aff773a8546a7e395ca14cea57540b5d"
  },
  {
    "url": "assets/js/36.504cc170.js",
    "revision": "0f1297dce53e54e8bc120f2dbe9ff779"
  },
  {
    "url": "assets/js/37.58b80211.js",
    "revision": "fa6c4031f1d0f2ce264170d723570341"
  },
  {
    "url": "assets/js/38.f9587910.js",
    "revision": "1b8598eeaac650ac6f6d4da98aa65b9a"
  },
  {
    "url": "assets/js/39.52ecfca5.js",
    "revision": "91a74351bacad05e50acf354895447b7"
  },
  {
    "url": "assets/js/4.8eb3e90a.js",
    "revision": "4f3dba3e4e618a44ebc21e34548b9baf"
  },
  {
    "url": "assets/js/40.6968816d.js",
    "revision": "9800b9451e360de3544dc678b8d2e6f8"
  },
  {
    "url": "assets/js/41.9ae74586.js",
    "revision": "dd41c1088c19b1fd5bad8311c9a09eb9"
  },
  {
    "url": "assets/js/42.eb795a58.js",
    "revision": "7f0cd7571398f70116d4d95485323426"
  },
  {
    "url": "assets/js/43.cf863710.js",
    "revision": "54b381688361e37c72b3561b802ed531"
  },
  {
    "url": "assets/js/44.22abd7c9.js",
    "revision": "125bae02c69dd5db8adeaa43a6bd9fe0"
  },
  {
    "url": "assets/js/45.7cf55627.js",
    "revision": "43d0b704ce008a5671e50c6994d564cd"
  },
  {
    "url": "assets/js/46.db0b821f.js",
    "revision": "e6a33c80c8c714e572364f1fbe4bb3b1"
  },
  {
    "url": "assets/js/47.da2ce271.js",
    "revision": "9ab68e724e227ba0c95548d41c42f5b6"
  },
  {
    "url": "assets/js/48.4f6ee4cb.js",
    "revision": "fe2d6a60cd7e7e2b5aca73b9f9409c6a"
  },
  {
    "url": "assets/js/49.94f2ca19.js",
    "revision": "57c803bb990132b8376329db4e51bff1"
  },
  {
    "url": "assets/js/5.ceb39980.js",
    "revision": "c358d6822f02eee2de68ae3a48b9e765"
  },
  {
    "url": "assets/js/50.e5e79544.js",
    "revision": "43efad70982f8f6a6d8e42ca07a77706"
  },
  {
    "url": "assets/js/51.1275836b.js",
    "revision": "002e6528b46a3a4f81467826dcb4c6bd"
  },
  {
    "url": "assets/js/52.f1e53978.js",
    "revision": "7f6f8f8fca0cf01883103974bfdb8539"
  },
  {
    "url": "assets/js/53.1277d780.js",
    "revision": "0245ab0ea91d8bbcef8831415b830274"
  },
  {
    "url": "assets/js/54.d2c349c3.js",
    "revision": "13e2ee40291e360832cb4cabdaf4900a"
  },
  {
    "url": "assets/js/55.ecbd1def.js",
    "revision": "ae29c74002e865af28239b27582bc1ab"
  },
  {
    "url": "assets/js/56.b0db1456.js",
    "revision": "dfa66386b09294142479b3cbcf5687db"
  },
  {
    "url": "assets/js/57.16067af6.js",
    "revision": "cbc8f26ea1b09770ba86509b80924fe8"
  },
  {
    "url": "assets/js/58.c2e8cfb6.js",
    "revision": "c3979f4d2e81d0769ac09e703fb20554"
  },
  {
    "url": "assets/js/59.564d9c53.js",
    "revision": "ec96cfc6975470035f65b4daf081722b"
  },
  {
    "url": "assets/js/6.e9fe7882.js",
    "revision": "8ca752e20bd6f7e3efaef7b16ddf4bed"
  },
  {
    "url": "assets/js/60.4251b394.js",
    "revision": "9bf7d4afd952314bdb5f4e2691384b16"
  },
  {
    "url": "assets/js/61.5fcad6ac.js",
    "revision": "2219653cdb0169b354545414f0e30e61"
  },
  {
    "url": "assets/js/62.2d7c98d4.js",
    "revision": "c38f2ad9b85e32930d7c5c5aea356c6d"
  },
  {
    "url": "assets/js/63.750da734.js",
    "revision": "3a6d23ccd1816e7ad32ae2ffd81e202f"
  },
  {
    "url": "assets/js/64.369dd9cb.js",
    "revision": "b78d5a4ad7a0b5f64cdd713c15496554"
  },
  {
    "url": "assets/js/65.5cfedc07.js",
    "revision": "deb31f8892a41cf95eb97d02739b2a3f"
  },
  {
    "url": "assets/js/66.06e07ebf.js",
    "revision": "9fd5b375a2b0f9356fb50401c27cb115"
  },
  {
    "url": "assets/js/67.a0e6b20e.js",
    "revision": "df6975cc8f9c0205bf540c9f523257c7"
  },
  {
    "url": "assets/js/68.41112fe5.js",
    "revision": "8db517ae123fda28071b17171ebfff55"
  },
  {
    "url": "assets/js/69.4e8d560f.js",
    "revision": "9d3a01374dacbc5786d43e2e3cb5b26a"
  },
  {
    "url": "assets/js/7.8076b8b4.js",
    "revision": "dfdd303a75d6778f0558159c44f2fc64"
  },
  {
    "url": "assets/js/70.3d2af899.js",
    "revision": "455000655a3280a456bc5d4e610ec90a"
  },
  {
    "url": "assets/js/71.b02128b8.js",
    "revision": "06049f652aae3f9a4d1d192eaaef703c"
  },
  {
    "url": "assets/js/72.0920a49a.js",
    "revision": "ab88a690f17ba025bbd0402155dfc5e8"
  },
  {
    "url": "assets/js/8.dc05b494.js",
    "revision": "5d6efc846ca748fa36b96f062531dbbc"
  },
  {
    "url": "assets/js/9.55cf5307.js",
    "revision": "b0968e165d8c7b7f09a25a8e3daacea6"
  },
  {
    "url": "assets/js/app.56d34377.js",
    "revision": "3eb1edeba523a176f0852962167b7615"
  },
  {
    "url": "blog/amap.html",
    "revision": "900f02e47fc6f91e133db10c37569433"
  },
  {
    "url": "blog/angular.html",
    "revision": "33be1d9b71ed06fbd8aa9f91d5025704"
  },
  {
    "url": "blog/ast.html",
    "revision": "0e03a7de97ea80bafbcfa40762104930"
  },
  {
    "url": "blog/canvas.html",
    "revision": "8e850d1a41ebfe4f3c7e74e7496e92da"
  },
  {
    "url": "blog/console.html",
    "revision": "832e39a5856d47cbb4c9d1af8db216e1"
  },
  {
    "url": "blog/csspre.html",
    "revision": "c97c735dc2b2d27bc5363bddd1f1544b"
  },
  {
    "url": "blog/deno.html",
    "revision": "9dc0db794f4cf97b76d21cf288ac288d"
  },
  {
    "url": "blog/docker-compose.html",
    "revision": "491728e9f410f4bba94712684841eecb"
  },
  {
    "url": "blog/docker-project.html",
    "revision": "ec5e3d414cb04c73ec4d800d008c413f"
  },
  {
    "url": "blog/docker.html",
    "revision": "234a4bd4345c16ee95c2883d95375314"
  },
  {
    "url": "blog/echarts.html",
    "revision": "9766507a07f71b84d8beb66e7272dd6c"
  },
  {
    "url": "blog/egg.html",
    "revision": "2120375c82c4a9c200c3e5eb80026272"
  },
  {
    "url": "blog/electron.html",
    "revision": "960b9ca133cf98bac367635a94d4447c"
  },
  {
    "url": "blog/flex&grid.html",
    "revision": "59444e8bab4df5d1cd0cb82c8b34989e"
  },
  {
    "url": "blog/flutter.html",
    "revision": "09f70190908d94b90f8837dc7bddcf2d"
  },
  {
    "url": "blog/g6.html",
    "revision": "e55a7c9233636ec2d047ce9595635dfe"
  },
  {
    "url": "blog/git.html",
    "revision": "cd671ffaa692f15bdbde01f64e6d18d0"
  },
  {
    "url": "blog/golang.html",
    "revision": "9889947470e441155d25fd7b4f75c9ed"
  },
  {
    "url": "blog/http.html",
    "revision": "91be33b8d63d630a672823870ada8997"
  },
  {
    "url": "blog/index.html",
    "revision": "41fa32e497e8a97fd4d5e739baa10184"
  },
  {
    "url": "blog/koa2-learn.html",
    "revision": "24df23e3fe4076aa4d668474dc223afa"
  },
  {
    "url": "blog/nodecli.html",
    "revision": "270bc9947b9967387188565eeaa7ab2e"
  },
  {
    "url": "blog/nodespider.html",
    "revision": "5f44e9e4df0fe76a27920e1bbac00196"
  },
  {
    "url": "blog/performance.html",
    "revision": "ab0eee74f1892c755e1e4f28e59fa336"
  },
  {
    "url": "blog/puppeteer.html",
    "revision": "03b365bd3b2ce23273c7294d09c27107"
  },
  {
    "url": "blog/react-native.html",
    "revision": "4141b6913203e24ab2f00b683e83fbb4"
  },
  {
    "url": "blog/react.html",
    "revision": "bb75cd40141aa9d823a0621056316e26"
  },
  {
    "url": "blog/socketio.html",
    "revision": "bcf89a60a7043d125683fdc90a728ffe"
  },
  {
    "url": "blog/springboot.html",
    "revision": "527cc1a91af643cdeed486ce577d2b56"
  },
  {
    "url": "blog/taro.html",
    "revision": "1ee769877039c29226c82f21aa258303"
  },
  {
    "url": "blog/tdt&cesium.html",
    "revision": "f17f80f16a2ab38f74110b438c456aea"
  },
  {
    "url": "blog/tensorflow.html",
    "revision": "65ef8f843142dc36bdb351828d9cae7f"
  },
  {
    "url": "blog/three.html",
    "revision": "9b8d709ec7213bc1a1b5fb546f73300a"
  },
  {
    "url": "blog/tonejs.html",
    "revision": "3167e6340ed514181dd9c9e112eb005e"
  },
  {
    "url": "blog/tsspider.html",
    "revision": "ec4f56386be3fcbe867b604ec0319d99"
  },
  {
    "url": "blog/vue2.html",
    "revision": "ecbf13a660afde3481ac5c32a8224d80"
  },
  {
    "url": "blog/vue3.html",
    "revision": "fd9f3520a1f79dac9e08a4b6bc5113b5"
  },
  {
    "url": "blog/vuepress.html",
    "revision": "e4983f46e50547c7d445f07be5ba2183"
  },
  {
    "url": "blog/vuetestutils.html",
    "revision": "c3d1adf30cc2b3f0972ce9fdfa0cc4df"
  },
  {
    "url": "blog/vuetestutils2.html",
    "revision": "2f9468ab7f98f44fe40abcd558d8349a"
  },
  {
    "url": "blog/webpack.html",
    "revision": "94c0843e16b3da4a060cadcb50538461"
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
    "revision": "80e072d3369baf474c6d22e6a766db42"
  },
  {
    "url": "leecode/index.html",
    "revision": "3d3f4fd9c0b43a76fb42f0de184bfc20"
  },
  {
    "url": "leecode/leecode.html",
    "revision": "961a65d6900a8166f3626f38eadc1aa3"
  },
  {
    "url": "live2d/wanko/assets/moc/wanko.1024/texture_00.png",
    "revision": "10b7047251205db46fdac7632b5d4642"
  },
  {
    "url": "note/dsaa.html",
    "revision": "6f017bda3f2c3719ef7489d08d3fbd11"
  },
  {
    "url": "note/es.html",
    "revision": "c41c4b7adb6fa6fbde23db23ddf81ce6"
  },
  {
    "url": "note/index.html",
    "revision": "29f6ab9e1e36785f868d20fae2530279"
  },
  {
    "url": "note/lib.html",
    "revision": "bfc3ed06e828332f2d9a76911b15f77a"
  },
  {
    "url": "note/shixi.html",
    "revision": "d58f39361b2bf83bc2648493ecc4a25d"
  },
  {
    "url": "repo/chatdemo.html",
    "revision": "557fb519441624b74ec41c7d93704465"
  },
  {
    "url": "repo/dachuang.html",
    "revision": "bfbb8616f28d15ff57dcba72ee4ea095"
  },
  {
    "url": "repo/electron.html",
    "revision": "af806df96b443a344b0d902bd33fca76"
  },
  {
    "url": "repo/ibf.html",
    "revision": "2e8189c19171e3643808846abd049e15"
  },
  {
    "url": "repo/index.html",
    "revision": "ab17d1b3bb5c7fe0df2626cf88b5e7d3"
  },
  {
    "url": "repo/javaks.html",
    "revision": "8c99ad80bc49df3453fcbfc98c466f06"
  },
  {
    "url": "repo/ksh.html",
    "revision": "2cd90670b996e5148399e94d1bd4c858"
  },
  {
    "url": "repo/mddemo.html",
    "revision": "dde0b8b910a71f072d8e5c7f8357e4bd"
  },
  {
    "url": "repo/tenseflow.html",
    "revision": "52f410e5aa3776740abd11950feaa43a"
  },
  {
    "url": "repo/todo.html",
    "revision": "0139bacde44b1bf062677a4e0e046257"
  },
  {
    "url": "repo/tongji.html",
    "revision": "31e5f8b0df5ea5b6f71b1e8813fcb62f"
  },
  {
    "url": "repo/webaudio.html",
    "revision": "ac490381087a2b2f1a60585ce34e173e"
  },
  {
    "url": "repo/wkc.html",
    "revision": "2ee1f64986904f27c01ff522f5f80b27"
  },
  {
    "url": "road/checklist.html",
    "revision": "5e1075c85d64a265692a8dd5ca3494b7"
  },
  {
    "url": "road/index.html",
    "revision": "58f5c916f0ed83df16522f507fa89033"
  },
  {
    "url": "road/road.html",
    "revision": "b7fabf08ad33693e2ac7fc046119fbce"
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
