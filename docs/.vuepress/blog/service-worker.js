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
    "revision": "bb003d8b22ece5daa7153329a66168a9"
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
    "url": "assets/js/12.909768e4.js",
    "revision": "f20c5c50a06785652f85640d6c05d113"
  },
  {
    "url": "assets/js/13.85b6dd4a.js",
    "revision": "4aea049a9a94069ed1838f79c23b849d"
  },
  {
    "url": "assets/js/14.2947e1a7.js",
    "revision": "0e64a6f2effb4656ae522b76c1b385b6"
  },
  {
    "url": "assets/js/15.a357d9a2.js",
    "revision": "2a87ee29175b755b783d95832f2f8b74"
  },
  {
    "url": "assets/js/16.b803031d.js",
    "revision": "16baeab4ffb6cbc0f65d81cae48c8090"
  },
  {
    "url": "assets/js/17.d1b295cc.js",
    "revision": "a7765f6176243dc214924224534d8b43"
  },
  {
    "url": "assets/js/18.2123c17b.js",
    "revision": "a38fbe50a0a7a393dd3c4c6614e9f46b"
  },
  {
    "url": "assets/js/19.afc93348.js",
    "revision": "ab0dbeabdf005b6e2e1e82e44d9d5ef8"
  },
  {
    "url": "assets/js/2.590cb2e6.js",
    "revision": "751d2b659f08f666c8a20cf7e4b61f84"
  },
  {
    "url": "assets/js/20.7081984a.js",
    "revision": "fc6da77520436046d1c8b8d291ab9ffc"
  },
  {
    "url": "assets/js/21.d8531a84.js",
    "revision": "84e0f6bdee72fc709b90afaa1ada89ca"
  },
  {
    "url": "assets/js/22.b27f32a9.js",
    "revision": "8e710a54d658318365e2ccacac11c094"
  },
  {
    "url": "assets/js/23.0a07341b.js",
    "revision": "797b5121c4d805f1fe423315b62971de"
  },
  {
    "url": "assets/js/24.e2892f0f.js",
    "revision": "51bf052e3a798cf1c8340ab688334f3b"
  },
  {
    "url": "assets/js/25.65e74cbf.js",
    "revision": "709bb0c208d2f5d6cd3db342da2c71a5"
  },
  {
    "url": "assets/js/26.de99efa9.js",
    "revision": "c6dba872214ff9dca0fea6749110ac07"
  },
  {
    "url": "assets/js/27.600625ee.js",
    "revision": "e2f77eecfdbf5ab444efe70faf4dc59c"
  },
  {
    "url": "assets/js/28.1dd2e537.js",
    "revision": "8d577c8876f86b0e84065519d2e47194"
  },
  {
    "url": "assets/js/29.c0348a81.js",
    "revision": "c6b66a8093972d357449af1f8c387052"
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
    "url": "assets/js/32.9605e462.js",
    "revision": "61cd923a37ccfc54b8520f9ed2f2c4e2"
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
    "url": "assets/js/37.37becea6.js",
    "revision": "2ac7ee5c45e5a87f3acff81eecbcb62b"
  },
  {
    "url": "assets/js/38.48b6577a.js",
    "revision": "bff3febdffeecd39088cfe01887cc122"
  },
  {
    "url": "assets/js/39.a35228c2.js",
    "revision": "7de1acebf96fd73563fd59393c542ec9"
  },
  {
    "url": "assets/js/4.8eb3e90a.js",
    "revision": "4f3dba3e4e618a44ebc21e34548b9baf"
  },
  {
    "url": "assets/js/40.1c458338.js",
    "revision": "e66f7f40bb537e4a1f50acf649120595"
  },
  {
    "url": "assets/js/41.a4533192.js",
    "revision": "a630651038df3d01dc001d9447d54efb"
  },
  {
    "url": "assets/js/42.eb795a58.js",
    "revision": "7f0cd7571398f70116d4d95485323426"
  },
  {
    "url": "assets/js/43.29157dd8.js",
    "revision": "ef14ee0c2df5e9f5e2f68e235ce196ab"
  },
  {
    "url": "assets/js/44.a1b42885.js",
    "revision": "7e609804157c9168c1fa66094351ec01"
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
    "url": "assets/js/48.73c2013e.js",
    "revision": "9e14b3602c0becff8a3bab6b51739371"
  },
  {
    "url": "assets/js/49.472c12e2.js",
    "revision": "3f32643dbd6a32fbd0bebf6e38a25dff"
  },
  {
    "url": "assets/js/5.ceb39980.js",
    "revision": "c358d6822f02eee2de68ae3a48b9e765"
  },
  {
    "url": "assets/js/50.0f81f10a.js",
    "revision": "fbf40d4d27e8aa09947f479708856ae1"
  },
  {
    "url": "assets/js/51.d9367df2.js",
    "revision": "e40600032ac341fe3b662c31e095f6b4"
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
    "url": "assets/js/54.72e2ab58.js",
    "revision": "20bcfac55cb08d7364b05134b8fa1345"
  },
  {
    "url": "assets/js/55.907f6688.js",
    "revision": "84e97b1c34337eeb8965cd0cf63ccfe7"
  },
  {
    "url": "assets/js/56.89d75bfa.js",
    "revision": "a2bdfcc2162e00ddcfaf1350f1235df0"
  },
  {
    "url": "assets/js/57.275edf16.js",
    "revision": "e6242c3d908f48056f5a7774683a8ad9"
  },
  {
    "url": "assets/js/58.3dddb620.js",
    "revision": "8fff26571767cb11f28bdb04d81601bc"
  },
  {
    "url": "assets/js/59.053c2020.js",
    "revision": "278365438982899ca563c250bdbf8f8c"
  },
  {
    "url": "assets/js/6.e9fe7882.js",
    "revision": "8ca752e20bd6f7e3efaef7b16ddf4bed"
  },
  {
    "url": "assets/js/60.6ee885a8.js",
    "revision": "22e3948bbb013bcda233b36c58bda047"
  },
  {
    "url": "assets/js/61.2fd09e84.js",
    "revision": "323b07375a75d32d7bd77cfd51f52f1f"
  },
  {
    "url": "assets/js/62.53a9499f.js",
    "revision": "1c1a4080aea11210701372e9868f18f2"
  },
  {
    "url": "assets/js/63.6e25174d.js",
    "revision": "ae6ee6ab872583787bde07ad5c8c39f4"
  },
  {
    "url": "assets/js/64.369dd9cb.js",
    "revision": "b78d5a4ad7a0b5f64cdd713c15496554"
  },
  {
    "url": "assets/js/65.b06cef87.js",
    "revision": "5a6ca245ec0e74191e3d1dd0adb576ed"
  },
  {
    "url": "assets/js/66.b684366e.js",
    "revision": "fdc835d605436efe528476601cc9a4a7"
  },
  {
    "url": "assets/js/67.c3e6a01a.js",
    "revision": "b21463b28f291f86adb13eb32fd01df0"
  },
  {
    "url": "assets/js/68.ba7a9d76.js",
    "revision": "2256007176c4844e8de821cdb054b64b"
  },
  {
    "url": "assets/js/69.b5ab7373.js",
    "revision": "a7340daeb8bb8eba53caf2072068870a"
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
    "url": "assets/js/71.776cf9cf.js",
    "revision": "888b09e8264e8b1c4d3a86c6e7b215eb"
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
    "url": "assets/js/9.7e6ddf2c.js",
    "revision": "d3ca679ac26fb2e308c2d8815c67b840"
  },
  {
    "url": "assets/js/app.dfb5a5a7.js",
    "revision": "1b02e2b908efd077f1dcf4c5cafe0efe"
  },
  {
    "url": "blog/amap.html",
    "revision": "3f08a260b5da2cb8200a17313a91ecdf"
  },
  {
    "url": "blog/angular.html",
    "revision": "330e1935ec398babf5172a2925bdeb70"
  },
  {
    "url": "blog/ast.html",
    "revision": "e1bd7251e776d4d652a9a3486aa08156"
  },
  {
    "url": "blog/canvas.html",
    "revision": "16573c2c1c525a2ca99f27fb070e1d8a"
  },
  {
    "url": "blog/console.html",
    "revision": "2aadf1e9e41ebbe15edc2aa5a9b65aaa"
  },
  {
    "url": "blog/csspre.html",
    "revision": "ab5888a4132fc9956706315bf401619c"
  },
  {
    "url": "blog/deno.html",
    "revision": "855228c26acfd46cb4080e2805c28200"
  },
  {
    "url": "blog/docker-compose.html",
    "revision": "d66020aaf4a2bd49d2b57bb369b7935a"
  },
  {
    "url": "blog/docker-project.html",
    "revision": "07d283944bc3f2cec15314298a6f0e8c"
  },
  {
    "url": "blog/docker.html",
    "revision": "b66dc9a4ae76833e515008eae605cb16"
  },
  {
    "url": "blog/echarts.html",
    "revision": "7c8b82e7048d14ae185357382db43637"
  },
  {
    "url": "blog/egg.html",
    "revision": "ba8d6205ce256b18f056e5b4dabd207d"
  },
  {
    "url": "blog/electron.html",
    "revision": "208123fb8353ddf71bf03d690eaa783d"
  },
  {
    "url": "blog/flex&grid.html",
    "revision": "12929927d12118e893f1f0429a41bfd5"
  },
  {
    "url": "blog/flutter.html",
    "revision": "9fd0bfa14795bac3f860cb20ff62bf09"
  },
  {
    "url": "blog/g6.html",
    "revision": "e3a5c688f788a308f57792ff68bf5ee2"
  },
  {
    "url": "blog/git.html",
    "revision": "72389677f3a07e00978254b0c50f6de6"
  },
  {
    "url": "blog/golang.html",
    "revision": "43e1703373b03016071d841feb5a8991"
  },
  {
    "url": "blog/http.html",
    "revision": "47c686cb6008f37fa434c4126d8c8c8d"
  },
  {
    "url": "blog/index.html",
    "revision": "fd2b01cd841e30220f0b544ab350ade9"
  },
  {
    "url": "blog/koa2-learn.html",
    "revision": "c710799ee3232a73335c8b4dbc7cff40"
  },
  {
    "url": "blog/nodecli.html",
    "revision": "34aa48e806347f6685d953e514414b28"
  },
  {
    "url": "blog/nodespider.html",
    "revision": "7e27f0797c88fc6891f33ebb2466855c"
  },
  {
    "url": "blog/performance.html",
    "revision": "200142e54312ec5743bff6bed0bf1718"
  },
  {
    "url": "blog/puppeteer.html",
    "revision": "e3bb3b9ac74038b156006d483f201dc6"
  },
  {
    "url": "blog/react-native.html",
    "revision": "4210f14d270581080aec581e722edc54"
  },
  {
    "url": "blog/react.html",
    "revision": "8d56e643df6e00f719108025335d1aa3"
  },
  {
    "url": "blog/socketio.html",
    "revision": "f198d79ab95442941ed71d3fef314d89"
  },
  {
    "url": "blog/springboot.html",
    "revision": "963eae9ff1e7b5d134b1425492c843d0"
  },
  {
    "url": "blog/taro.html",
    "revision": "7699ce6e28d8e334c9564882c35ecf96"
  },
  {
    "url": "blog/tdt&cesium.html",
    "revision": "2a6ab66087c3a505887eec43688aa3be"
  },
  {
    "url": "blog/tensorflow.html",
    "revision": "fc2b0117f6e63e7467136a1b9f17fbf4"
  },
  {
    "url": "blog/three.html",
    "revision": "44a52c46ffcd3e95a9920cc4df4cdb7b"
  },
  {
    "url": "blog/tonejs.html",
    "revision": "c47357caadfde16eac17ff5704f097c6"
  },
  {
    "url": "blog/tsspider.html",
    "revision": "c028e4b3a7bf3a41486275297d65d2c3"
  },
  {
    "url": "blog/vue2.html",
    "revision": "1cb17d67649cedad0414cec2942bcd30"
  },
  {
    "url": "blog/vue3.html",
    "revision": "39b8feb16711b8e67ebf7743bebbb064"
  },
  {
    "url": "blog/vuepress.html",
    "revision": "a3c51d84cff296758388aa6d7180f65d"
  },
  {
    "url": "blog/vuetestutils.html",
    "revision": "00aef7f0145ff48b72f876f1437446c2"
  },
  {
    "url": "blog/vuetestutils2.html",
    "revision": "d0f340b9388d1d723c19af8e38d891fb"
  },
  {
    "url": "blog/webpack.html",
    "revision": "25ecfa43865ab06ab8dff2bb75a64c52"
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
    "revision": "97386ef2fe6c46d8b7cebb55b4c7fe3a"
  },
  {
    "url": "leecode/index.html",
    "revision": "f112e6fbf540646c47fe3283e66069c8"
  },
  {
    "url": "leecode/leecode.html",
    "revision": "a4e3c46b9d708b1e510da689a2e50144"
  },
  {
    "url": "live2d/wanko/assets/moc/wanko.1024/texture_00.png",
    "revision": "10b7047251205db46fdac7632b5d4642"
  },
  {
    "url": "note/dsaa.html",
    "revision": "1cdc3c51f85f8934d805203c9a97407c"
  },
  {
    "url": "note/es.html",
    "revision": "4dcf1a6346fac6bcfd279d8c150d8d7e"
  },
  {
    "url": "note/index.html",
    "revision": "918c5bb7b16836707977c24299ad88ef"
  },
  {
    "url": "note/lib.html",
    "revision": "a4927346f8177ef8a834d69ebd2253c1"
  },
  {
    "url": "note/shixi.html",
    "revision": "c0d6172a01379ada110f43dbae093022"
  },
  {
    "url": "repo/chatdemo.html",
    "revision": "f89629e1b8db8e7474a91a2574c46923"
  },
  {
    "url": "repo/dachuang.html",
    "revision": "14c96f1aea140f11b43ebc0cad07a6a7"
  },
  {
    "url": "repo/electron.html",
    "revision": "aa713b41c17bf51c5b3625f2f26752b0"
  },
  {
    "url": "repo/ibf.html",
    "revision": "86e6c3c2a5cf7f2a612c655cd64a38eb"
  },
  {
    "url": "repo/index.html",
    "revision": "c4ebbbe417cde4bf9aa204c99e9fab38"
  },
  {
    "url": "repo/javaks.html",
    "revision": "b814ba3b1c536cfbeb9712076772f10c"
  },
  {
    "url": "repo/ksh.html",
    "revision": "fb3f8b4073e98116ec7aba34b9536fa2"
  },
  {
    "url": "repo/mddemo.html",
    "revision": "06ca94797440084056e72947aab194b9"
  },
  {
    "url": "repo/tenseflow.html",
    "revision": "06b26fac8f64f8d2361a9e6a2c9b989d"
  },
  {
    "url": "repo/todo.html",
    "revision": "04094ed3441b673811abfb6e0587b638"
  },
  {
    "url": "repo/tongji.html",
    "revision": "0f02c97151b9dbb51ffa8b1807ea7f60"
  },
  {
    "url": "repo/webaudio.html",
    "revision": "ae90ae1acc03e1151223e9570e399f1d"
  },
  {
    "url": "repo/wkc.html",
    "revision": "998f5a3eba63a9c917b7f409599a40dd"
  },
  {
    "url": "road/checklist.html",
    "revision": "653282eb9f72684127aa984cd8bb54bd"
  },
  {
    "url": "road/index.html",
    "revision": "9ab07b4ffb9f72108947c93ac4b9a8ea"
  },
  {
    "url": "road/road.html",
    "revision": "774ef420e11820d2b90632255be4b19d"
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
