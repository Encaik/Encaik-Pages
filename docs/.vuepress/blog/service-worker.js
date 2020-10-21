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
    "revision": "32ccf4458fe23c5f3cf2702ca4ebfbe5"
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
    "url": "assets/js/11.ed7ff540.js",
    "revision": "28d69c9b038cca30f3ff6e52d8d4de7f"
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
    "url": "assets/js/14.a5501e55.js",
    "revision": "9cda4c4c16b429bbfa61459b5c5cf6fa"
  },
  {
    "url": "assets/js/15.5c53807d.js",
    "revision": "f60dd4bc68f3ac659e693d742f2d73dd"
  },
  {
    "url": "assets/js/16.a6f4d5c4.js",
    "revision": "532fcd298a3699f94e37e9ee70014cea"
  },
  {
    "url": "assets/js/17.b557a170.js",
    "revision": "758a07c147935c9be6158a22dd53adb0"
  },
  {
    "url": "assets/js/18.d9c879b2.js",
    "revision": "2ff305db5c67b80a01f5d5040ad76b37"
  },
  {
    "url": "assets/js/19.d840861c.js",
    "revision": "4313c6177d685e0ef8913610ba828d04"
  },
  {
    "url": "assets/js/2.590cb2e6.js",
    "revision": "751d2b659f08f666c8a20cf7e4b61f84"
  },
  {
    "url": "assets/js/20.5466fe38.js",
    "revision": "317d0de392d0e651d3b7fbf53314ad91"
  },
  {
    "url": "assets/js/21.a4c287db.js",
    "revision": "4805ba7ee36cf8caa89215b090ac309b"
  },
  {
    "url": "assets/js/22.6eac7f3b.js",
    "revision": "00555d2caee207dc3ea46a3269e12539"
  },
  {
    "url": "assets/js/23.73cc089f.js",
    "revision": "35c03e8b0478495cb663a2ff71c53a72"
  },
  {
    "url": "assets/js/24.5a371d4a.js",
    "revision": "eac45c34d35c18581c048e0b66ee8d2f"
  },
  {
    "url": "assets/js/25.e4a08eb5.js",
    "revision": "c6f49540e14524321f87bdd69616e6be"
  },
  {
    "url": "assets/js/26.b05909f2.js",
    "revision": "7d47ce71923ff646c0e1c85b41bf9201"
  },
  {
    "url": "assets/js/27.2f253b2e.js",
    "revision": "b7c71c0fdae4b1403c9823e7c3fe03c9"
  },
  {
    "url": "assets/js/28.97e715cc.js",
    "revision": "ab89661a8ea1eb08b82e02f0c32a0edd"
  },
  {
    "url": "assets/js/29.e69663cc.js",
    "revision": "ac3a363c4c8a9e6cbbd4b6926cd40e5e"
  },
  {
    "url": "assets/js/3.89568fe3.js",
    "revision": "2c19df1c865eae54f7dd8771c76a7a49"
  },
  {
    "url": "assets/js/30.16f07b91.js",
    "revision": "081d17b4d9e113f947fb817f68cd4970"
  },
  {
    "url": "assets/js/31.9842495b.js",
    "revision": "10f158b41fd4530e21cf375feba44e61"
  },
  {
    "url": "assets/js/32.b5be6718.js",
    "revision": "415e3c42a8462f521ed3f573c8560b88"
  },
  {
    "url": "assets/js/33.371bb827.js",
    "revision": "b392957acebc0b4bd960a1d647b91e1d"
  },
  {
    "url": "assets/js/34.1cc9bb3c.js",
    "revision": "6102e7f2dba26113b8d3e2538f1d6bda"
  },
  {
    "url": "assets/js/35.ec2c2b44.js",
    "revision": "c56e7d1695066c499fbe5014f2340723"
  },
  {
    "url": "assets/js/36.33beb24a.js",
    "revision": "e9d639f1f8870c02b00d3773e71b2928"
  },
  {
    "url": "assets/js/37.d8f0998d.js",
    "revision": "bda9f40b04751e1957327376ac3536c4"
  },
  {
    "url": "assets/js/38.60206009.js",
    "revision": "f75c06b2245bd101ec373b3bbb45fe08"
  },
  {
    "url": "assets/js/39.6ec10152.js",
    "revision": "023cd948c613805641aeb6a206ef8a40"
  },
  {
    "url": "assets/js/4.8eb3e90a.js",
    "revision": "4f3dba3e4e618a44ebc21e34548b9baf"
  },
  {
    "url": "assets/js/40.0de34a8f.js",
    "revision": "1b84f4f6ec7161c0c643603975c9daae"
  },
  {
    "url": "assets/js/41.2dcd7f0b.js",
    "revision": "e6f9de4cd0cb7b234a8a49274d614fad"
  },
  {
    "url": "assets/js/42.11d95687.js",
    "revision": "1fba359778499dab5f76eafd6fb2bc7c"
  },
  {
    "url": "assets/js/43.1109556c.js",
    "revision": "aecc179a92b1f21016745144b660ad35"
  },
  {
    "url": "assets/js/44.4d76efd3.js",
    "revision": "193b079bcc440a36463a820c3dfb33c7"
  },
  {
    "url": "assets/js/45.efd01b7e.js",
    "revision": "233a23c74043bf5fe28446af5ef126f8"
  },
  {
    "url": "assets/js/46.73b33028.js",
    "revision": "59428d760394db7c080d6243ec0fbff8"
  },
  {
    "url": "assets/js/47.fd519161.js",
    "revision": "e020f4d7a366bdaa55ee17cf44da050b"
  },
  {
    "url": "assets/js/48.b1b28e66.js",
    "revision": "f77b40522d2faf176cc9c92fb32cd7fa"
  },
  {
    "url": "assets/js/49.86a4671e.js",
    "revision": "01f13cd40b52bc1de32941c2ff1a92ba"
  },
  {
    "url": "assets/js/5.8ff02f63.js",
    "revision": "c0d2b8cf0a608dc8119fbc948b9e18aa"
  },
  {
    "url": "assets/js/50.b4875615.js",
    "revision": "d043c616a19ffe3740f5753f848ae16a"
  },
  {
    "url": "assets/js/51.be1e8109.js",
    "revision": "48e616150fe974d07c935b3f94fa59b6"
  },
  {
    "url": "assets/js/52.f9e3133f.js",
    "revision": "88dcaffb5d9352e212a5405c411a78c4"
  },
  {
    "url": "assets/js/53.183c44ad.js",
    "revision": "f9d39dd7e08f6bd9acdf983e720797ed"
  },
  {
    "url": "assets/js/54.20da8e29.js",
    "revision": "79bbb249767fb2dc1fa5f2840ada43b7"
  },
  {
    "url": "assets/js/55.110a713f.js",
    "revision": "7fc95704c7a8ba4bd71df4fc32c553a5"
  },
  {
    "url": "assets/js/56.52be78b1.js",
    "revision": "2b7121b42d443c2b0e4073279ac5edfa"
  },
  {
    "url": "assets/js/57.6e2b18dc.js",
    "revision": "217fff35f33f4cd847e288bd60022b6f"
  },
  {
    "url": "assets/js/58.62f019a4.js",
    "revision": "10b353d94d4f95468d7a820b2af1d3bd"
  },
  {
    "url": "assets/js/59.9164192a.js",
    "revision": "aa8279fbf3db5e833cbdde78199ae52e"
  },
  {
    "url": "assets/js/6.e9fe7882.js",
    "revision": "8ca752e20bd6f7e3efaef7b16ddf4bed"
  },
  {
    "url": "assets/js/60.717deb85.js",
    "revision": "2df592bdb6e0c38e54d069992b5ba7d2"
  },
  {
    "url": "assets/js/61.adad4150.js",
    "revision": "5210d42f516289dd534c971ba677f231"
  },
  {
    "url": "assets/js/62.dc4b38fa.js",
    "revision": "996cf4895506f16ac9f3aa64d19e863e"
  },
  {
    "url": "assets/js/63.0c56f3e2.js",
    "revision": "8950212bd242d69b5265b4466f02f27f"
  },
  {
    "url": "assets/js/64.2e44886d.js",
    "revision": "be007af062eddb861e8b30598460b97c"
  },
  {
    "url": "assets/js/65.86bde0c8.js",
    "revision": "68ac3bec5be22c531db36980397057c8"
  },
  {
    "url": "assets/js/66.33bf0fa4.js",
    "revision": "7612681984c94ff8eb245483f34f1546"
  },
  {
    "url": "assets/js/67.616cb1bc.js",
    "revision": "7bd51c1a8abf0d53085b8d3459dcae0d"
  },
  {
    "url": "assets/js/68.a8d9157f.js",
    "revision": "34653219d6cda4f4e4dc443227ad26ba"
  },
  {
    "url": "assets/js/69.719600a4.js",
    "revision": "7a0d8b3960a1f42c447e30812e598c30"
  },
  {
    "url": "assets/js/7.e5e5ff12.js",
    "revision": "503e67558dcddb5c6115bf721c2b6c6d"
  },
  {
    "url": "assets/js/70.401b5c15.js",
    "revision": "ae556c690476b8e3cf8e377520087b0d"
  },
  {
    "url": "assets/js/8.46fec6ec.js",
    "revision": "add67156ae81a539a587ab760a8e3eab"
  },
  {
    "url": "assets/js/9.ad4433e0.js",
    "revision": "cd7c4ae7c5753bffe5f2559f176c6240"
  },
  {
    "url": "assets/js/app.d56afe1d.js",
    "revision": "4eac28b4b16ecbfcd62ecc74cf25ffb7"
  },
  {
    "url": "blog/angular.html",
    "revision": "32c2689b08ac2639190027b4fd2af74a"
  },
  {
    "url": "blog/ast.html",
    "revision": "00c5d1e0b1f97876ddd0bd48601fb26a"
  },
  {
    "url": "blog/canvas.html",
    "revision": "28f21dd8f90b5ea267144eec360a5a86"
  },
  {
    "url": "blog/console.html",
    "revision": "f4a960e92116e8f0378029468dc9b10f"
  },
  {
    "url": "blog/csspre.html",
    "revision": "68ea3c21aacdf4f336003b6941482ced"
  },
  {
    "url": "blog/deno.html",
    "revision": "acae28627ae617c4741422c63dd99daf"
  },
  {
    "url": "blog/docker-compose.html",
    "revision": "5bf2441fe6b45ab0b5cc8004644a198f"
  },
  {
    "url": "blog/docker-project.html",
    "revision": "2cc4b57eaa7bb132bf6d1d8275dd6fff"
  },
  {
    "url": "blog/docker.html",
    "revision": "bec6be0136c08ffb51542a8e816f2a9e"
  },
  {
    "url": "blog/echarts.html",
    "revision": "60d896359e2184352a53c10e859d7f5f"
  },
  {
    "url": "blog/egg.html",
    "revision": "9d0defa0cb0f9299cef538f338dc96ae"
  },
  {
    "url": "blog/electron.html",
    "revision": "7bf7927f392dcfe6806b0f48479a29f5"
  },
  {
    "url": "blog/flutter.html",
    "revision": "7a28095cbc4837d9d1f1d2d8b71af1f8"
  },
  {
    "url": "blog/g6.html",
    "revision": "e2aca7e7874d78ad9852c7e5950a4a52"
  },
  {
    "url": "blog/git.html",
    "revision": "8bfb33396f14f88135f51b3bd36455a8"
  },
  {
    "url": "blog/golang.html",
    "revision": "71140eefa798caeaf7525bcd7695bc95"
  },
  {
    "url": "blog/http.html",
    "revision": "c7c339872af4810910f60c5775d34cb7"
  },
  {
    "url": "blog/index.html",
    "revision": "ae6f86e2097c63ce38c783e502fcc219"
  },
  {
    "url": "blog/koa2-learn.html",
    "revision": "f4aa4283b2853e272d5d88ea36e58392"
  },
  {
    "url": "blog/map.html",
    "revision": "f9f8f3c1aa5ed9f7ef6a99975e74e761"
  },
  {
    "url": "blog/nodecli.html",
    "revision": "0b6a86f9fb0951fe2269410ac55d1df5"
  },
  {
    "url": "blog/nodespider.html",
    "revision": "aec07480135242e1f5d4f804230d3ba1"
  },
  {
    "url": "blog/performance.html",
    "revision": "2c55b19b635beeb60c43f3e0174e7efc"
  },
  {
    "url": "blog/puppeteer.html",
    "revision": "3a890d5177ce630da9402ea4c8bd1946"
  },
  {
    "url": "blog/react-native.html",
    "revision": "74975e19a6596bd8e1335ae2d0e841d3"
  },
  {
    "url": "blog/react.html",
    "revision": "a2ae81511df0b9bfc1e21b60cc081cdc"
  },
  {
    "url": "blog/socketio.html",
    "revision": "073c7bd28aa13ab38c0f50398e33db21"
  },
  {
    "url": "blog/springboot.html",
    "revision": "b09282ab094982fd3d0c756be202dd48"
  },
  {
    "url": "blog/taro.html",
    "revision": "5ad080eca95aa9ef54b605162e39e25e"
  },
  {
    "url": "blog/tensorflow.html",
    "revision": "3d6d9cccf2b4bdeead92a13d89242aa2"
  },
  {
    "url": "blog/three.html",
    "revision": "5fb5dc5f5e21ecd67b2674ba1b3870be"
  },
  {
    "url": "blog/tonejs.html",
    "revision": "8090fb7c51ccb182a75dfbf2f32f6576"
  },
  {
    "url": "blog/tsspider.html",
    "revision": "a82adca183817588ce6861deba258ded"
  },
  {
    "url": "blog/vue2.html",
    "revision": "d3080a80c3d4cbb53544b94a5df6384e"
  },
  {
    "url": "blog/vue3.html",
    "revision": "6ca6157d028c1c25bbcf4447eaed82ae"
  },
  {
    "url": "blog/vuepress.html",
    "revision": "17b27b3be5f6338045b86135fac03351"
  },
  {
    "url": "blog/vuetestutils.html",
    "revision": "9599403d7be2eb607cd4043b242c43ce"
  },
  {
    "url": "blog/vuetestutils2.html",
    "revision": "17358f0afc981ae20b39514bf22e7ce3"
  },
  {
    "url": "blog/webpack.html",
    "revision": "885882cea87c62bcc6c630af51d670eb"
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
    "revision": "913be9c04b5b6e18e805829e0c820796"
  },
  {
    "url": "leecode/index.html",
    "revision": "0b8056aff9a944a168caebe92d924277"
  },
  {
    "url": "leecode/leecode.html",
    "revision": "94e2406d3b97fde00ae17ecb67b28d6c"
  },
  {
    "url": "live2d/wanko/assets/moc/wanko.1024/texture_00.png",
    "revision": "10b7047251205db46fdac7632b5d4642"
  },
  {
    "url": "note/dsaa.html",
    "revision": "fc04295ff940957598400c2369373a46"
  },
  {
    "url": "note/es.html",
    "revision": "c23a0e660e881ef8848ed47970ef2807"
  },
  {
    "url": "note/index.html",
    "revision": "72c6cafd931e1caa13cf38eed3b10462"
  },
  {
    "url": "note/lib.html",
    "revision": "675f7e379278522f53aa9a4c979f38c4"
  },
  {
    "url": "note/shixi.html",
    "revision": "5370d920b4dc54b6f93c4480d1761b3e"
  },
  {
    "url": "repo/chatdemo.html",
    "revision": "b9f69358b2e3c1508145e4d10520d7e4"
  },
  {
    "url": "repo/dachuang.html",
    "revision": "02de2d10ba2cc557730a4da158c52194"
  },
  {
    "url": "repo/electron.html",
    "revision": "aa4990d432f73af074cbcc3960a70c6e"
  },
  {
    "url": "repo/ibf.html",
    "revision": "7312544494453f26762fadb403aa50a9"
  },
  {
    "url": "repo/index.html",
    "revision": "27f5c97523053b8e8545e1228bda1165"
  },
  {
    "url": "repo/javaks.html",
    "revision": "ea8e6970180999b883f6d545b42da0c8"
  },
  {
    "url": "repo/ksh.html",
    "revision": "25c1352bdaa53af44c2093a1178b0413"
  },
  {
    "url": "repo/mddemo.html",
    "revision": "f9bf09ea554c55381d78d62025222350"
  },
  {
    "url": "repo/tenseflow.html",
    "revision": "2da78d8740a732bf6fff295b01fb85c9"
  },
  {
    "url": "repo/todo.html",
    "revision": "e5b64386dd2a274e82adfc99779f7936"
  },
  {
    "url": "repo/tongji.html",
    "revision": "c9f19b07ae2433dce5fa4f1056d94368"
  },
  {
    "url": "repo/webaudio.html",
    "revision": "2446f2baae9f0e9988e8ea274d0bbf27"
  },
  {
    "url": "repo/wkc.html",
    "revision": "3e1980a550b87d42af80c727c549ee46"
  },
  {
    "url": "road/checklist.html",
    "revision": "5cd6b24a3261c406d29b1a3f084d1f95"
  },
  {
    "url": "road/index.html",
    "revision": "dc064080db36807babc80ea90c11eea4"
  },
  {
    "url": "road/road.html",
    "revision": "88efbd9f245b0695c4fd18e0ef734c4a"
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
