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
    "revision": "27b0d91773f91b6d425f809800ed932c"
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
    "url": "assets/js/10.e9b1f781.js",
    "revision": "17c44f04f7b1c8e8f32571dc834fd7a5"
  },
  {
    "url": "assets/js/11.2bf8e804.js",
    "revision": "cea3c1a89a299ae6be2d96bf480ca8dc"
  },
  {
    "url": "assets/js/12.eed0b117.js",
    "revision": "25f89f0cc4517e71eabf6bcca6a55b85"
  },
  {
    "url": "assets/js/13.cfbe29ba.js",
    "revision": "96c8769d67f479da76fe232a20e4714b"
  },
  {
    "url": "assets/js/14.b8fa33f1.js",
    "revision": "984f5905351e358b2a52491723af291a"
  },
  {
    "url": "assets/js/15.60efa529.js",
    "revision": "11d5c2de4cd717c847cf0ab5471d00dd"
  },
  {
    "url": "assets/js/16.52afbc26.js",
    "revision": "9f32a9720a3ebeccf93bc4f3a63a5185"
  },
  {
    "url": "assets/js/17.401845a5.js",
    "revision": "7e526caef12c08441660982b7dcd889b"
  },
  {
    "url": "assets/js/18.cc616e17.js",
    "revision": "647f74cc163e1bd3ae046b10d0c0f682"
  },
  {
    "url": "assets/js/19.80b4ee8b.js",
    "revision": "324849366c9cf81961e32d81dfaef976"
  },
  {
    "url": "assets/js/2.590cb2e6.js",
    "revision": "751d2b659f08f666c8a20cf7e4b61f84"
  },
  {
    "url": "assets/js/20.dc3243c8.js",
    "revision": "41e74d417a7f5c9f39089a84b6f020c0"
  },
  {
    "url": "assets/js/21.3f29f7ef.js",
    "revision": "c69a4acca70fddb2b375550fead8e7e4"
  },
  {
    "url": "assets/js/22.dabc06e9.js",
    "revision": "9dfe517e7e69fe53d22d775deb90805d"
  },
  {
    "url": "assets/js/23.3d68d5de.js",
    "revision": "2d426553ed127e7211ac4ff6dff4b20f"
  },
  {
    "url": "assets/js/24.4679777d.js",
    "revision": "f6e211e4d393d7d5d3aa2fb54fb43371"
  },
  {
    "url": "assets/js/25.7b1ef077.js",
    "revision": "25d84ff9276d80f3b2dded7343e88421"
  },
  {
    "url": "assets/js/26.b2d8e886.js",
    "revision": "687cdb186a601aa0bda303db399dd614"
  },
  {
    "url": "assets/js/27.ad669584.js",
    "revision": "6fac86f4f4e612c03bd548780bb0faa7"
  },
  {
    "url": "assets/js/28.488f135a.js",
    "revision": "2df9748b41e17dbe98363757dfc6170d"
  },
  {
    "url": "assets/js/29.bae5d8a6.js",
    "revision": "4c513a0499738d63a9b1498c2ba0eefa"
  },
  {
    "url": "assets/js/3.afab908d.js",
    "revision": "2c19df1c865eae54f7dd8771c76a7a49"
  },
  {
    "url": "assets/js/30.9858aec8.js",
    "revision": "4593d6ba4b274c25764f73f1bdb0a0ab"
  },
  {
    "url": "assets/js/31.9541676b.js",
    "revision": "4971ca8fdd34ff8e3e27c8042ad5c0d5"
  },
  {
    "url": "assets/js/32.b88923aa.js",
    "revision": "22e646adb47ad5d864390ec221582235"
  },
  {
    "url": "assets/js/33.56a0bd9a.js",
    "revision": "f95ed448e165e544f65d4d2a535ffdf1"
  },
  {
    "url": "assets/js/34.3e1aa8bb.js",
    "revision": "19f6eb66307c1933b7f0d98a9a8c8d4e"
  },
  {
    "url": "assets/js/35.4cb74e73.js",
    "revision": "a2fa3b0ceeea3b7434e5f7f7cf0c20f9"
  },
  {
    "url": "assets/js/36.844bb319.js",
    "revision": "9de8e1eec31be08a1c4fc91d2eefe7b3"
  },
  {
    "url": "assets/js/37.d9071382.js",
    "revision": "0b389dcebd0c187921f704e7b947a5ab"
  },
  {
    "url": "assets/js/38.7e3d5c97.js",
    "revision": "c3a5e90e27871e29338aab620ba48489"
  },
  {
    "url": "assets/js/39.5d48e164.js",
    "revision": "414c8c3e9116444bd2126e916aa80347"
  },
  {
    "url": "assets/js/4.8eb3e90a.js",
    "revision": "4f3dba3e4e618a44ebc21e34548b9baf"
  },
  {
    "url": "assets/js/40.90c3005b.js",
    "revision": "db424177b4bb3c7f27464374268ce57c"
  },
  {
    "url": "assets/js/41.8f8f10b9.js",
    "revision": "f62199dd2f565ac6d80f46bedae3cac9"
  },
  {
    "url": "assets/js/42.f62a6492.js",
    "revision": "eb3ae49a4a5d8daac2e3bac80025fcb4"
  },
  {
    "url": "assets/js/43.154edca1.js",
    "revision": "243fdc9935d9bbdf7d6cf3ff547a1a74"
  },
  {
    "url": "assets/js/44.1a183edd.js",
    "revision": "2af619147ac20b83c7d19fc697e12cb2"
  },
  {
    "url": "assets/js/45.806b8c75.js",
    "revision": "9b747b1f7b1918396d0330aec8b04d33"
  },
  {
    "url": "assets/js/46.42455462.js",
    "revision": "9540242860bb685adbb8e224a5d96334"
  },
  {
    "url": "assets/js/47.1274d976.js",
    "revision": "46c48b9d3028844734c506fea99fed41"
  },
  {
    "url": "assets/js/48.5403f5cc.js",
    "revision": "c6069477fc6358b33a7aa718b27cd7f3"
  },
  {
    "url": "assets/js/49.ed46faa3.js",
    "revision": "2d1b111cbd6285bbea21e6ca006c9170"
  },
  {
    "url": "assets/js/5.ba63e574.js",
    "revision": "955e921a6f16c0535ce658fee7be3ff7"
  },
  {
    "url": "assets/js/50.d2a541e0.js",
    "revision": "5a2a71cce99a6ec990657b67fb66d00b"
  },
  {
    "url": "assets/js/51.b37ba8df.js",
    "revision": "8f58a57603c388da6388c3f497fe2061"
  },
  {
    "url": "assets/js/52.084ef73b.js",
    "revision": "861852d10ee35edae905f422e9ca8dc4"
  },
  {
    "url": "assets/js/53.2f0dadbc.js",
    "revision": "bb68332cf96389301fe5e82054024b74"
  },
  {
    "url": "assets/js/54.9c7864a4.js",
    "revision": "1bb8bc38e151e84dfc2032ab700c4d46"
  },
  {
    "url": "assets/js/55.697cda2b.js",
    "revision": "c3cbf2c55ee8478b2c5daaa0f20d67bf"
  },
  {
    "url": "assets/js/56.c089e6f2.js",
    "revision": "db3595616f0d03aaebfbd8a81c78e2f8"
  },
  {
    "url": "assets/js/57.23c5110a.js",
    "revision": "9db51bd523d75b787a8ae187c24233f3"
  },
  {
    "url": "assets/js/58.5caa4e23.js",
    "revision": "9a4c6bbeb84a89b9803d123efea34b7b"
  },
  {
    "url": "assets/js/59.6e3d6636.js",
    "revision": "ae327bcff985fa40fdbff8e4491ca51c"
  },
  {
    "url": "assets/js/6.e9fe7882.js",
    "revision": "8ca752e20bd6f7e3efaef7b16ddf4bed"
  },
  {
    "url": "assets/js/60.7480a06d.js",
    "revision": "907416eeca846ab855a726a4fa44a84d"
  },
  {
    "url": "assets/js/61.d16a50ad.js",
    "revision": "6836c3974295d12db6a2b5f4a03e75b0"
  },
  {
    "url": "assets/js/62.03795cb5.js",
    "revision": "a9477894d029a7ed86a167b81a569dfb"
  },
  {
    "url": "assets/js/63.3ccd5fe3.js",
    "revision": "8c265ee21e2027a1df7f6b2043f6d911"
  },
  {
    "url": "assets/js/7.e5e5ff12.js",
    "revision": "503e67558dcddb5c6115bf721c2b6c6d"
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
    "url": "assets/js/app.d3f91d39.js",
    "revision": "05b16742293566226e705e73dc1a8951"
  },
  {
    "url": "blog/angular.html",
    "revision": "1b51781f0c7030c2b41a6d02e7e78320"
  },
  {
    "url": "blog/ast.html",
    "revision": "068b4eff61079576bd491779f3c02c2a"
  },
  {
    "url": "blog/canvas.html",
    "revision": "3192f47bced6a6ee9163856c3d0af301"
  },
  {
    "url": "blog/console.html",
    "revision": "08cea792856d4e15675234bc71c20691"
  },
  {
    "url": "blog/deno.html",
    "revision": "fb56ce0597cd1c71a343ab4ed580c28e"
  },
  {
    "url": "blog/docker-compose.html",
    "revision": "63bbc252bf34049c3a272ac4047488ab"
  },
  {
    "url": "blog/docker-project.html",
    "revision": "c31de9861a99275163924a045b988337"
  },
  {
    "url": "blog/docker.html",
    "revision": "31b616ef5345746a3db277f63e02cdf0"
  },
  {
    "url": "blog/egg.html",
    "revision": "bf35a31445b0614ae11216fa10ed4f76"
  },
  {
    "url": "blog/electron.html",
    "revision": "fe63a5d899435fa51167fd796b1dd675"
  },
  {
    "url": "blog/flutter.html",
    "revision": "c2c58e5f3f264d5d05124f0968aa56b7"
  },
  {
    "url": "blog/g6.html",
    "revision": "ce8793b33feef016fda41c1988a6e141"
  },
  {
    "url": "blog/git.html",
    "revision": "c7bd13d9d5c29e28da523abbf52247ce"
  },
  {
    "url": "blog/golang.html",
    "revision": "68db66b6544b6b9d752d8a4cb3247bee"
  },
  {
    "url": "blog/http.html",
    "revision": "838d1af1f67a8550dee44933e4e38880"
  },
  {
    "url": "blog/index.html",
    "revision": "58a09419388b5fb03cc2e0b7c1ac733d"
  },
  {
    "url": "blog/koa2-learn.html",
    "revision": "2004324bfa6be926f9d98a3dda4b0e53"
  },
  {
    "url": "blog/map.html",
    "revision": "81a37deb2e4cd18df7c1d0dbb90dc08d"
  },
  {
    "url": "blog/performance.html",
    "revision": "552067b50e693ad5ba1354522707be25"
  },
  {
    "url": "blog/react-native.html",
    "revision": "46e6f391710772fb31d13a7204604995"
  },
  {
    "url": "blog/react.html",
    "revision": "09c55fe29381b85417408039d16e3894"
  },
  {
    "url": "blog/socketio.html",
    "revision": "9c287e280abc23bc5cf1165ae15d1a14"
  },
  {
    "url": "blog/taro.html",
    "revision": "2ba49230d8ddc40b13189b92b96a5c2e"
  },
  {
    "url": "blog/tensorflow.html",
    "revision": "f0bebaa8b58cf6f938820c0c85df05f5"
  },
  {
    "url": "blog/three.html",
    "revision": "f9523f2a0e14b2b9afdbf71e42f6a826"
  },
  {
    "url": "blog/tonejs.html",
    "revision": "e0785fc39b93bcbe08e0fb46f7b673be"
  },
  {
    "url": "blog/typescript.html",
    "revision": "4f499b89d9d9de42a3daa6f6f3fc5442"
  },
  {
    "url": "blog/vue2.html",
    "revision": "bc5f99cdcda8799e2e38d7a03dcffdce"
  },
  {
    "url": "blog/vue3.html",
    "revision": "f2e51ba1843dd9c995150944d77feb8c"
  },
  {
    "url": "blog/vuepress.html",
    "revision": "a6a2e3f890d95ff103aff5395a4c7fbe"
  },
  {
    "url": "blog/vuetestutils.html",
    "revision": "6dc237b121c26b4eaf4c3df22b784254"
  },
  {
    "url": "blog/vuetestutils2.html",
    "revision": "02bba6dfc7ca47d1d43855f30d607219"
  },
  {
    "url": "img/blog/canvas-1.png",
    "revision": "2b0b3b1594fc368e9b06979f17e7a5ca"
  },
  {
    "url": "img/blog/flutter-1.jpg",
    "revision": "b001d1068719bf61540f610c8a9995aa"
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
    "revision": "cb5c315f0bb562cc01eca89660e14ede"
  },
  {
    "url": "leecode/index.html",
    "revision": "44354366e801bcf87185512f2d488ca8"
  },
  {
    "url": "leecode/leecode.html",
    "revision": "df1ecf55a78302406646169a08e5c31a"
  },
  {
    "url": "live2d/wanko/assets/moc/wanko.1024/texture_00.png",
    "revision": "10b7047251205db46fdac7632b5d4642"
  },
  {
    "url": "note/dsaa.html",
    "revision": "b1aae66b15132bed4fde0f721bab37a7"
  },
  {
    "url": "note/es.html",
    "revision": "9ed17a1aa0c89186940d3acc93f93206"
  },
  {
    "url": "note/index.html",
    "revision": "35808879cf63a1f20619313d0ac46c06"
  },
  {
    "url": "note/lib.html",
    "revision": "556523c0f046e7717e4bbb1a77e5bc5f"
  },
  {
    "url": "note/shixi.html",
    "revision": "85aec16e4ecd5702999a233f6e5e03c9"
  },
  {
    "url": "repo/chatdemo.html",
    "revision": "2ab7c30c686494b25f799fbbca95384e"
  },
  {
    "url": "repo/dachuang.html",
    "revision": "4d52c9facae575e192e922c6f4a2434d"
  },
  {
    "url": "repo/electron.html",
    "revision": "ce9ec4e68559f905520da3ea078e1aeb"
  },
  {
    "url": "repo/ibf.html",
    "revision": "9fe2af7427a1345b003a4b7cd249a382"
  },
  {
    "url": "repo/index.html",
    "revision": "1999745904ce02d9578699ddd4bea592"
  },
  {
    "url": "repo/javaks.html",
    "revision": "23db483788f4f1019187639eabce22b4"
  },
  {
    "url": "repo/ksh.html",
    "revision": "18bcc1d0f553dcce745c26ab52ad28e3"
  },
  {
    "url": "repo/mddemo.html",
    "revision": "504057bfac07893237b54987aa70e97f"
  },
  {
    "url": "repo/tenseflow.html",
    "revision": "c7373df64fd04bcd611c2ac06391a93a"
  },
  {
    "url": "repo/todo.html",
    "revision": "f19415f65f2b598f43d5afb175ad5b55"
  },
  {
    "url": "repo/tongji.html",
    "revision": "64d00313e78b768e8aa164ce34afa712"
  },
  {
    "url": "repo/webaudio.html",
    "revision": "bdba59bdcc3c6a7bd6a50f7a2757734a"
  },
  {
    "url": "repo/wkc.html",
    "revision": "0656bb605ebb517d9b8ade786dd09707"
  },
  {
    "url": "road/checklist.html",
    "revision": "60331bc1e0dd6be100e5edee94e7b82d"
  },
  {
    "url": "road/index.html",
    "revision": "6de08702dc116425de3ad6a018df2612"
  },
  {
    "url": "road/road.html",
    "revision": "70b481546bc044be1f8c4a43e300e5ab"
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
