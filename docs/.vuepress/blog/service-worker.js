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
    "revision": "40cf56b726ff7b865c3f67aa477f8a6e"
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
    "url": "assets/js/13.8d720ff6.js",
    "revision": "1724974c16472c524e2dc0b3c482d6bb"
  },
  {
    "url": "assets/js/14.916d3ace.js",
    "revision": "1a7f01540c0b87b850996f1daf95cb0e"
  },
  {
    "url": "assets/js/15.4e2879ae.js",
    "revision": "776cd2dbdaa2aa211ff974a873ddf423"
  },
  {
    "url": "assets/js/16.46c7f0db.js",
    "revision": "e09415dfc156c87bef1cb05da63dfbc4"
  },
  {
    "url": "assets/js/17.ed949b04.js",
    "revision": "2f9afc77ac657e6abaf0fc882249f0e4"
  },
  {
    "url": "assets/js/18.a0a230dd.js",
    "revision": "cd6501c01658100c2e0e3e0d629e4954"
  },
  {
    "url": "assets/js/19.b2171e6a.js",
    "revision": "b5e06e546afb93c8bbc35ea438a96d79"
  },
  {
    "url": "assets/js/2.590cb2e6.js",
    "revision": "751d2b659f08f666c8a20cf7e4b61f84"
  },
  {
    "url": "assets/js/20.6292b7bb.js",
    "revision": "f43aaedfa371658b55d59c39d7bc3473"
  },
  {
    "url": "assets/js/21.910c5658.js",
    "revision": "a0917cd6c953a96d6d392bfc150b8209"
  },
  {
    "url": "assets/js/22.62f69230.js",
    "revision": "307bcd1489d7aa31a18001e1a469a309"
  },
  {
    "url": "assets/js/23.8b7982ec.js",
    "revision": "1c7addc2f1990fbedff0e38855a60abf"
  },
  {
    "url": "assets/js/24.983dc02a.js",
    "revision": "30fd644d412a2f13c9ee57e2c6d04d32"
  },
  {
    "url": "assets/js/25.271f49ac.js",
    "revision": "ea8644a8cb0c28901e67eec895854057"
  },
  {
    "url": "assets/js/26.3967ea35.js",
    "revision": "7c14f16ac20cb40a78a1b32d1988947a"
  },
  {
    "url": "assets/js/27.a2bb854a.js",
    "revision": "da0f294210d1289488e83d796ef33db4"
  },
  {
    "url": "assets/js/28.97e715cc.js",
    "revision": "ab89661a8ea1eb08b82e02f0c32a0edd"
  },
  {
    "url": "assets/js/29.28f9000c.js",
    "revision": "aa9b6cf3d78a0a91984d9131f9b76384"
  },
  {
    "url": "assets/js/3.89568fe3.js",
    "revision": "2c19df1c865eae54f7dd8771c76a7a49"
  },
  {
    "url": "assets/js/30.8bd60ef2.js",
    "revision": "98e52f67ea1c13ab5a1038d0349b01fd"
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
    "url": "assets/js/33.40bd0447.js",
    "revision": "4e572887ac73ae01b66bea778d2cccb4"
  },
  {
    "url": "assets/js/34.32c3da0b.js",
    "revision": "cc0f8df3be16fff472fa1a616fd76f12"
  },
  {
    "url": "assets/js/35.e6e0f450.js",
    "revision": "9fa393bead38a16a1de5b09c1297b99f"
  },
  {
    "url": "assets/js/36.921b7340.js",
    "revision": "2c8baa328b9ec7fff3608d6e0daf653f"
  },
  {
    "url": "assets/js/37.d8f0998d.js",
    "revision": "bda9f40b04751e1957327376ac3536c4"
  },
  {
    "url": "assets/js/38.d49b8c34.js",
    "revision": "872819c7233b8d8afb933d7104077893"
  },
  {
    "url": "assets/js/39.fff34425.js",
    "revision": "961a49e894e745a5e4be08713a4c2caf"
  },
  {
    "url": "assets/js/4.8eb3e90a.js",
    "revision": "4f3dba3e4e618a44ebc21e34548b9baf"
  },
  {
    "url": "assets/js/40.3f62d09f.js",
    "revision": "cc123bbb361ef924055ec4c9f452a153"
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
    "url": "assets/js/44.e2399cef.js",
    "revision": "d27fd9c873916f049c261a86b2c83b81"
  },
  {
    "url": "assets/js/45.7a679a51.js",
    "revision": "f8a691aa21a145f323b925f498ca5f61"
  },
  {
    "url": "assets/js/46.73b33028.js",
    "revision": "59428d760394db7c080d6243ec0fbff8"
  },
  {
    "url": "assets/js/47.76703b22.js",
    "revision": "4d2a0f69d943c7f1fd08e611b4dd69fe"
  },
  {
    "url": "assets/js/48.6a797bf3.js",
    "revision": "74aaea1e7587d35fe43bbd8a419821fd"
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
    "url": "assets/js/50.33e09178.js",
    "revision": "2d5613f6d873b0e0604c67b9fd68ee37"
  },
  {
    "url": "assets/js/51.4e47ab79.js",
    "revision": "13d32bc37058c57b633ad09beeb319e0"
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
    "url": "assets/js/58.b27c624a.js",
    "revision": "aaaaf11bc209dfa73d4e76abd01d772d"
  },
  {
    "url": "assets/js/59.15fc8ad4.js",
    "revision": "5a349101b93f0531b71c2f0d95af7a65"
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
    "url": "assets/js/64.cab18ab2.js",
    "revision": "3e99128ed6f0eb5d842e84f525dd77af"
  },
  {
    "url": "assets/js/65.73c0efc0.js",
    "revision": "1cb42ee2d39c16fbc4be60a714b7fe5b"
  },
  {
    "url": "assets/js/66.8a1a29d2.js",
    "revision": "a5652429067a68a2c2240a0c207720f8"
  },
  {
    "url": "assets/js/67.83c4e3ea.js",
    "revision": "5dc26d46abb546dbd1d1b747417c8226"
  },
  {
    "url": "assets/js/68.3efddadf.js",
    "revision": "3daa6d4c5ef9c0ce567399cedc6631be"
  },
  {
    "url": "assets/js/69.69e6f7a7.js",
    "revision": "5f31a6014cf208b6c6bde4448ea72f22"
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
    "url": "assets/js/9.ebfcf018.js",
    "revision": "582871de9a3d6d2f0b985e64d42c51b0"
  },
  {
    "url": "assets/js/app.ad10be70.js",
    "revision": "18ff1ef6e6914f789604bc1087df824e"
  },
  {
    "url": "blog/angular.html",
    "revision": "d01774a27dfffc49d130003dd98ddd12"
  },
  {
    "url": "blog/ast.html",
    "revision": "98d2583d5c11a5ae5451e4eafe091fcd"
  },
  {
    "url": "blog/canvas.html",
    "revision": "3b1aed978d4edaf481b065ff632132ae"
  },
  {
    "url": "blog/console.html",
    "revision": "59c200f218b9d1d23113b57b6be79450"
  },
  {
    "url": "blog/csspre.html",
    "revision": "cb3c524de4effe2137dcf70f09425358"
  },
  {
    "url": "blog/deno.html",
    "revision": "f231d9f228dd3554a9ece1b2726258ae"
  },
  {
    "url": "blog/docker-compose.html",
    "revision": "f1d26b8fb27c4d1e8ae11ef7b7617408"
  },
  {
    "url": "blog/docker-project.html",
    "revision": "52737fb04a9fbb5c1f7c825fe64e8f49"
  },
  {
    "url": "blog/docker.html",
    "revision": "fcdda8a6df030ab8d1370ade11109a49"
  },
  {
    "url": "blog/echarts.html",
    "revision": "5dd243853e50f2da97679b58a8e7e2d6"
  },
  {
    "url": "blog/egg.html",
    "revision": "d8f9cc57c5216c03977bf69b15238270"
  },
  {
    "url": "blog/electron.html",
    "revision": "149ba2b6b5d1cc9eabdf6b54bf32f38a"
  },
  {
    "url": "blog/flutter.html",
    "revision": "5723832ca4a45b904301d0e0cd7feafd"
  },
  {
    "url": "blog/g6.html",
    "revision": "193934f1028bfe427ee5964d71789ed2"
  },
  {
    "url": "blog/git.html",
    "revision": "801993b5f8c20e0a5c840270da8e175c"
  },
  {
    "url": "blog/golang.html",
    "revision": "4f8ae2b3e3cf7055e7308bf495bf6266"
  },
  {
    "url": "blog/http.html",
    "revision": "666fa477130c8984e22197483109771d"
  },
  {
    "url": "blog/index.html",
    "revision": "bc5e8c9a25b127b2f75fb3c0a95e680f"
  },
  {
    "url": "blog/koa2-learn.html",
    "revision": "29bc75d81cb6a8849b73608495d02535"
  },
  {
    "url": "blog/map.html",
    "revision": "c2316f0c803b0435037b9a9efc2436d2"
  },
  {
    "url": "blog/nodecli.html",
    "revision": "f2bd64197ba0eed0980aefeaad34d891"
  },
  {
    "url": "blog/nodespider.html",
    "revision": "86417916a548f2df5ce72b1daf083b6d"
  },
  {
    "url": "blog/performance.html",
    "revision": "cdb6c83cc7ac4f91260ff65439f0d1c7"
  },
  {
    "url": "blog/puppeteer.html",
    "revision": "6c7d30ca571526012362df21e8bad75b"
  },
  {
    "url": "blog/react-native.html",
    "revision": "2f321f3045447c6d1141e84538c70e4f"
  },
  {
    "url": "blog/react.html",
    "revision": "b507c7118fd25f19d0f67cca4ef183b7"
  },
  {
    "url": "blog/socketio.html",
    "revision": "fc081a90328c3bbbecf404599dd32f5e"
  },
  {
    "url": "blog/springboot.html",
    "revision": "59c739ba5b3be7a00be79689ab1ef0f3"
  },
  {
    "url": "blog/taro.html",
    "revision": "072193bb36d55fb05c54be2458b79be5"
  },
  {
    "url": "blog/tensorflow.html",
    "revision": "4cd648c077d704f43bc6c34e0fd85fdf"
  },
  {
    "url": "blog/three.html",
    "revision": "da4f1d69d42ce3620623e35018ba92c6"
  },
  {
    "url": "blog/tonejs.html",
    "revision": "1a382417f6f276df6c57182f28cf4ed6"
  },
  {
    "url": "blog/tsspider.html",
    "revision": "b0be92a1953ac4720e0130c13461e5ce"
  },
  {
    "url": "blog/vue2.html",
    "revision": "ab311f3289ecceb78f753cb893b2df3b"
  },
  {
    "url": "blog/vue3.html",
    "revision": "b8c58e66b92b79934cd853b0d212fc79"
  },
  {
    "url": "blog/vuepress.html",
    "revision": "0dbd9386263214a6306b9310b7ca602f"
  },
  {
    "url": "blog/vuetestutils.html",
    "revision": "094349b0becd0b076ecd8fda8b626dc5"
  },
  {
    "url": "blog/vuetestutils2.html",
    "revision": "36dcc887e7a48faf2a72bb978c16266f"
  },
  {
    "url": "blog/webpack.html",
    "revision": "332f27306d8e90b7f370b21e34cd601f"
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
    "revision": "31047bd3a09fe43d8a6591eda4de1fd3"
  },
  {
    "url": "leecode/index.html",
    "revision": "36590dfcf4c11de4cb7e3f54f7653e07"
  },
  {
    "url": "leecode/leecode.html",
    "revision": "cfbdfe0addeedeb764758f9d1b0f7de9"
  },
  {
    "url": "live2d/wanko/assets/moc/wanko.1024/texture_00.png",
    "revision": "10b7047251205db46fdac7632b5d4642"
  },
  {
    "url": "note/dsaa.html",
    "revision": "3e7be7131a404b405419df8424de554d"
  },
  {
    "url": "note/es.html",
    "revision": "b4dec61dc9963bf6f7d91b3f7c9b17a5"
  },
  {
    "url": "note/index.html",
    "revision": "159fa41fdb9f3ae566dfa63d9a03ace0"
  },
  {
    "url": "note/lib.html",
    "revision": "5af3e7c06bf1f28867ab9e62d51d112d"
  },
  {
    "url": "note/shixi.html",
    "revision": "6c411b379c3f55d236da1179c7ff950a"
  },
  {
    "url": "repo/chatdemo.html",
    "revision": "e121a6844820979256a274e58f52bbe8"
  },
  {
    "url": "repo/dachuang.html",
    "revision": "585ab82818389552ba1bcac8d03fd339"
  },
  {
    "url": "repo/electron.html",
    "revision": "4bd6b684ca11f7aa92228b1332fc0448"
  },
  {
    "url": "repo/ibf.html",
    "revision": "e5b1114538762df362c529dd89b41335"
  },
  {
    "url": "repo/index.html",
    "revision": "ef23b7bd8978e8b874112aeda088a1fc"
  },
  {
    "url": "repo/javaks.html",
    "revision": "c7b41f083805b01b26fdc7d107852fb5"
  },
  {
    "url": "repo/ksh.html",
    "revision": "f45f0e7534e951f6f75d3cb55df2fbea"
  },
  {
    "url": "repo/mddemo.html",
    "revision": "9345f7adc0592facc58f312a3a398c34"
  },
  {
    "url": "repo/tenseflow.html",
    "revision": "c3e49173b19bf624641ff86bd08892e4"
  },
  {
    "url": "repo/todo.html",
    "revision": "58fa9c532181a6fa75a848fc6431df84"
  },
  {
    "url": "repo/tongji.html",
    "revision": "0d608a0b77dabf2e89f1ff197eeed24b"
  },
  {
    "url": "repo/webaudio.html",
    "revision": "c3c19a0204ee00cc1d85189bd40785cb"
  },
  {
    "url": "repo/wkc.html",
    "revision": "d35c3538d8c38b2afc2609488a305116"
  },
  {
    "url": "road/checklist.html",
    "revision": "e0e629a3a7ea756fb40e0c4e59ec294a"
  },
  {
    "url": "road/index.html",
    "revision": "80e45bd792f030da658a5c928c45e2bd"
  },
  {
    "url": "road/road.html",
    "revision": "46e2a1d43ea5791987f027afce2a30a1"
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
