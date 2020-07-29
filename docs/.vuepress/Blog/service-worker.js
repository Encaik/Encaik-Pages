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
    "revision": "6ea413e41a904676828640645b020bc8"
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
    "url": "assets/js/11.8322bb8d.js",
    "revision": "bffdba4e43820a044d4df79227ad7052"
  },
  {
    "url": "assets/js/12.7802f7a0.js",
    "revision": "b693ea8fba0eb1c2c5d9730ad7632786"
  },
  {
    "url": "assets/js/13.c8e6a4a1.js",
    "revision": "6fc11c52a9a63bbdfb69ec4cc6cf314f"
  },
  {
    "url": "assets/js/14.b8fa33f1.js",
    "revision": "984f5905351e358b2a52491723af291a"
  },
  {
    "url": "assets/js/15.c3775671.js",
    "revision": "dd940232ecb5eb902321cf2820057e34"
  },
  {
    "url": "assets/js/16.8c06d5c1.js",
    "revision": "63b69c498766ac31a359b40263a45fbd"
  },
  {
    "url": "assets/js/17.29177f12.js",
    "revision": "1b95431f9329e5c8eeea5f93e28876b3"
  },
  {
    "url": "assets/js/18.b8777953.js",
    "revision": "10ac4879134139c9d9b95ca414d9084f"
  },
  {
    "url": "assets/js/19.d3da015e.js",
    "revision": "fc17680126a94a85be0bc2fed843903b"
  },
  {
    "url": "assets/js/2.590cb2e6.js",
    "revision": "751d2b659f08f666c8a20cf7e4b61f84"
  },
  {
    "url": "assets/js/20.83317247.js",
    "revision": "e11b9b75edc0aeb7b593b4b9db985815"
  },
  {
    "url": "assets/js/21.a91d2600.js",
    "revision": "e7dd46c0fbcda02a220c98f3cc439fde"
  },
  {
    "url": "assets/js/22.3200bce7.js",
    "revision": "58a8cbeed0a627a0ffb81be6c738fdc9"
  },
  {
    "url": "assets/js/23.9c4e15cd.js",
    "revision": "7cbcc7d33bbd8405178c1691335fe184"
  },
  {
    "url": "assets/js/24.d7d2e496.js",
    "revision": "456903131ab8c935788e11eb396f718c"
  },
  {
    "url": "assets/js/25.3196196f.js",
    "revision": "343dedda640b6c85d4b35f43f04f2569"
  },
  {
    "url": "assets/js/26.b2d8e886.js",
    "revision": "687cdb186a601aa0bda303db399dd614"
  },
  {
    "url": "assets/js/27.c3008da0.js",
    "revision": "3b46e59b9b2eaac07833c45363bc9b68"
  },
  {
    "url": "assets/js/28.5fe6428f.js",
    "revision": "cfbf0c9b43fc41cebd0f7b6868ce2755"
  },
  {
    "url": "assets/js/29.b0d3ef7b.js",
    "revision": "1a1998487f3d410b836c7b3a1bcb86c7"
  },
  {
    "url": "assets/js/3.afab908d.js",
    "revision": "2c19df1c865eae54f7dd8771c76a7a49"
  },
  {
    "url": "assets/js/30.797ee9d2.js",
    "revision": "b80e28e9b7e2761a616da999ffa61e73"
  },
  {
    "url": "assets/js/31.1bbeb900.js",
    "revision": "3c81f14d9e4ea6b63c82574b4343d6ef"
  },
  {
    "url": "assets/js/32.508e68f5.js",
    "revision": "9c0246d363a60a4d5a7be132d6aa5ccf"
  },
  {
    "url": "assets/js/33.8ef76795.js",
    "revision": "22995455fd774d3fdb858b806a86eb55"
  },
  {
    "url": "assets/js/34.14fe06ee.js",
    "revision": "cf743b0940fe9b2d64ac1c821f5ccb83"
  },
  {
    "url": "assets/js/35.b09804c8.js",
    "revision": "297350cacb9a103c8dbd15ea44353425"
  },
  {
    "url": "assets/js/36.e47c0772.js",
    "revision": "71bd1b8a3941d5b437033370077684e1"
  },
  {
    "url": "assets/js/37.c5d51017.js",
    "revision": "bb685156d2e897e22038ac2eb63b3ff2"
  },
  {
    "url": "assets/js/38.c5061f83.js",
    "revision": "32636e657b841e31efba7900c9428460"
  },
  {
    "url": "assets/js/39.02b91b9c.js",
    "revision": "4439021f354dbab3755d18fe2f42d12e"
  },
  {
    "url": "assets/js/4.8eb3e90a.js",
    "revision": "4f3dba3e4e618a44ebc21e34548b9baf"
  },
  {
    "url": "assets/js/40.26d7fd63.js",
    "revision": "0ef9874556d942f5f8161d92d866223f"
  },
  {
    "url": "assets/js/41.742efdbe.js",
    "revision": "bfc1f4319be5c22fe31e6a047b2c77b2"
  },
  {
    "url": "assets/js/42.69826784.js",
    "revision": "c27f708c0ff5f989d5d9458334573029"
  },
  {
    "url": "assets/js/43.4ffe6f13.js",
    "revision": "52927569cbd15051edab6d0206f3317f"
  },
  {
    "url": "assets/js/44.08f0b293.js",
    "revision": "019807764c0312d06e0535501483b2e4"
  },
  {
    "url": "assets/js/45.51bf517d.js",
    "revision": "46dbb29bd376a2e6229adfea9b0341eb"
  },
  {
    "url": "assets/js/46.d3f92353.js",
    "revision": "b8df039bf27e983e44ff7318229ab5bd"
  },
  {
    "url": "assets/js/47.61ce9e2a.js",
    "revision": "15cffb9afa808c2efefe09c7f6fc3ab1"
  },
  {
    "url": "assets/js/48.ebd1fd38.js",
    "revision": "a216b03b125a5c7d233698888d6a8bcc"
  },
  {
    "url": "assets/js/49.eb6f978d.js",
    "revision": "48e58ecbe9501bb39b59a5e40bb619c7"
  },
  {
    "url": "assets/js/5.e4bee0ee.js",
    "revision": "4ae2c363e7fe9595af31eea30b51279d"
  },
  {
    "url": "assets/js/50.1fa61431.js",
    "revision": "9f27bb8737cdd47a9e32f4e8bdaf0c8c"
  },
  {
    "url": "assets/js/51.fd08af7c.js",
    "revision": "918d9a7160834feb32002549575bbce3"
  },
  {
    "url": "assets/js/52.a005ade0.js",
    "revision": "b0b46bcd51e2cf198ea5cb4a464ec3e3"
  },
  {
    "url": "assets/js/53.51346a28.js",
    "revision": "2c497134fb3b04d976bc88486bc8c137"
  },
  {
    "url": "assets/js/54.41d8b0dc.js",
    "revision": "384a5aa7939990d93a19daa835936849"
  },
  {
    "url": "assets/js/55.feb7a4aa.js",
    "revision": "e46ed18dacdca6ad3dc6fb44e5dd2891"
  },
  {
    "url": "assets/js/56.7f15d76f.js",
    "revision": "2350bdb32f8fb233c56c1bffd88927db"
  },
  {
    "url": "assets/js/57.cee7a274.js",
    "revision": "21f544684814ed72744899465da41a18"
  },
  {
    "url": "assets/js/58.96af15ef.js",
    "revision": "b20a8d6202fe632dae8f547a19b507bd"
  },
  {
    "url": "assets/js/59.0ebbc923.js",
    "revision": "6b5e40c7b17094ba46498c5e3378cc70"
  },
  {
    "url": "assets/js/6.e9fe7882.js",
    "revision": "8ca752e20bd6f7e3efaef7b16ddf4bed"
  },
  {
    "url": "assets/js/7.534e046d.js",
    "revision": "503e67558dcddb5c6115bf721c2b6c6d"
  },
  {
    "url": "assets/js/8.6f990310.js",
    "revision": "2e8b84903a8c5e17b046c6edfe2318cf"
  },
  {
    "url": "assets/js/9.ebfcf018.js",
    "revision": "582871de9a3d6d2f0b985e64d42c51b0"
  },
  {
    "url": "assets/js/app.772e09b6.js",
    "revision": "17f89b4e762830ca260b7d289de59528"
  },
  {
    "url": "blog/angular-learn.html",
    "revision": "7030ae174dade0f384beeabb1a8bf169"
  },
  {
    "url": "blog/ast.html",
    "revision": "0c69388489628de9eae3441fdd075524"
  },
  {
    "url": "blog/canvas.html",
    "revision": "f299f87022a8f5e7ae4599f1395d6512"
  },
  {
    "url": "blog/console.html",
    "revision": "a6df991cfccdaa3c67d80c02367fd644"
  },
  {
    "url": "blog/deno.html",
    "revision": "f014839ff7ff6620260e55cb9c22deab"
  },
  {
    "url": "blog/docker-compose.html",
    "revision": "065fcf24efc607fc6270aa5f61bbbddc"
  },
  {
    "url": "blog/docker-project.html",
    "revision": "b233732e12cbffed1510d8f004346744"
  },
  {
    "url": "blog/docker.html",
    "revision": "cd1fa2121a7b47d81983970af9b85950"
  },
  {
    "url": "blog/egg.html",
    "revision": "b2cac29762e11b613702595f3237bb77"
  },
  {
    "url": "blog/electron.html",
    "revision": "844bc7dcdc1175dee31b09c385cc2f87"
  },
  {
    "url": "blog/flutter.html",
    "revision": "0c62dcbf11c99c4dcd2c5ca6ce1f64e5"
  },
  {
    "url": "blog/g6.html",
    "revision": "e0c7c444f122b82bcccaa231e8d482f6"
  },
  {
    "url": "blog/git.html",
    "revision": "c3e95651acf2f26c42ab0d8b5a2b7b6b"
  },
  {
    "url": "blog/golang-learn.html",
    "revision": "b1d4626fa8feda65c6b3370cc16f82b0"
  },
  {
    "url": "blog/http.html",
    "revision": "73d4e843bd240a0b71ea83542ddb14d1"
  },
  {
    "url": "blog/index.html",
    "revision": "566140069997a112969940be737846d9"
  },
  {
    "url": "blog/koa2-learn.html",
    "revision": "6d49f2dd5e701cc750e051501676843b"
  },
  {
    "url": "blog/map.html",
    "revision": "a2d26ced971a924e46c3fc742662355a"
  },
  {
    "url": "blog/performance.html",
    "revision": "a123b3cab8731e9e8701e7e87f7e9473"
  },
  {
    "url": "blog/react-native.html",
    "revision": "1503579b81ae50028777e638b9ca4789"
  },
  {
    "url": "blog/react.html",
    "revision": "58dd8b6deace1d0a223ab4c34dd37943"
  },
  {
    "url": "blog/tensorflow.html",
    "revision": "9c91d5b1e947ffc899032db9838e299a"
  },
  {
    "url": "blog/three.html",
    "revision": "409bf7406b4f15a120dd78457ac2e7e7"
  },
  {
    "url": "blog/tonejs.html",
    "revision": "91778ab37641c20ff4ddcab37e011b16"
  },
  {
    "url": "blog/typescript.html",
    "revision": "401904d7dd7ecf0d34608f0e44331e17"
  },
  {
    "url": "blog/vue2.html",
    "revision": "3c5894f3b30d1826d6de18ef8bce7975"
  },
  {
    "url": "blog/vue3.html",
    "revision": "c513a22d30c0ac712ca05140bdfd2531"
  },
  {
    "url": "blog/vuepress.html",
    "revision": "c14d9a4cd3ae8c66fab387ff05d1ba39"
  },
  {
    "url": "blog/vuetestutils.html",
    "revision": "edd23696a2cc78228e65120716332803"
  },
  {
    "url": "blog/vuetestutils2.html",
    "revision": "9db02b6223a16e5cdf0d7c08c55a338f"
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
    "url": "img/repo/portfolio-1.jpg",
    "revision": "9bb458f7eed883a96e2a2848803a4755"
  },
  {
    "url": "img/repo/portfolio-2.jpg",
    "revision": "53e445a07df9ba14af59434ba3500e91"
  },
  {
    "url": "img/repo/portfolio-3.jpg",
    "revision": "459d4d640d0508053fd43958036f973e"
  },
  {
    "url": "img/repo/portfolio-4.jpg",
    "revision": "26c2a93fd95d949311130905499fe1c5"
  },
  {
    "url": "img/repo/portfolio-7.jpg",
    "revision": "796744d2d08938104b4f576aaaee8459"
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
    "revision": "05f39ac28b3fad2cc477fdea1e64f9a6"
  },
  {
    "url": "leecode/index.html",
    "revision": "4555ed33282a05a2981e3fa5b766b8f4"
  },
  {
    "url": "leecode/leecode.html",
    "revision": "2982362d14e771187cdaf1df5cf0a1e4"
  },
  {
    "url": "live2d/wanko/assets/moc/wanko.1024/texture_00.png",
    "revision": "10b7047251205db46fdac7632b5d4642"
  },
  {
    "url": "note/dsaa.html",
    "revision": "53f7b5348fd8c724719ba1dd39060c66"
  },
  {
    "url": "note/es.html",
    "revision": "8a55b93efd482b445bf95a8329e33dbc"
  },
  {
    "url": "note/index.html",
    "revision": "ad58efe6de403def11cf834c2a0bc7af"
  },
  {
    "url": "note/lib.html",
    "revision": "859c9caf6c514a01fecf5587d6aafa08"
  },
  {
    "url": "note/shixi.html",
    "revision": "2306e810b946dfafc4f83c12085beda7"
  },
  {
    "url": "repo/dachuang.html",
    "revision": "024442266a33363f81cfb38466f410d7"
  },
  {
    "url": "repo/electron.html",
    "revision": "a1dfb00744c60e05845e9f039ed68f26"
  },
  {
    "url": "repo/ibf.html",
    "revision": "58ad3d8c9053258cca4e6acbd7b25db8"
  },
  {
    "url": "repo/index.html",
    "revision": "16ae3e56e738117fd77a7413bc314c20"
  },
  {
    "url": "repo/javaks.html",
    "revision": "dc16f403e839a9dbd6499c40f98f2917"
  },
  {
    "url": "repo/ksh.html",
    "revision": "7a44d2d5fb53a5f2f979f57fc23957fe"
  },
  {
    "url": "repo/tenseflow.html",
    "revision": "8f4801fcc6e69a615f38d7eb6f33d68e"
  },
  {
    "url": "repo/todo.html",
    "revision": "4cdb67efc9fb3d3cd876d79811a896a1"
  },
  {
    "url": "repo/tongji.html",
    "revision": "0ea4dde07735c0a6de906296a3d73af4"
  },
  {
    "url": "repo/webaudio.html",
    "revision": "60888d6fa9dff64019b758d8f8d104b2"
  },
  {
    "url": "repo/wkc.html",
    "revision": "f10cfbcfa204b5ceafc27c08ab06117d"
  },
  {
    "url": "road/checklist.html",
    "revision": "b4792c67037692daed239349337f0d11"
  },
  {
    "url": "road/index.html",
    "revision": "303026a3a3ac3c9524b21ae5a715ed09"
  },
  {
    "url": "road/road.html",
    "revision": "4d178169674f9ecd462347ba529989f2"
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
