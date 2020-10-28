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
    "revision": "4bd72922445109e9c2319acb9c61f37a"
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
    "url": "assets/js/11.3d70bde8.js",
    "revision": "e3661479333a971d09269aab3cacb808"
  },
  {
    "url": "assets/js/12.e6b51775.js",
    "revision": "8fcb253cded7918d227adf250cecb13a"
  },
  {
    "url": "assets/js/13.dce8a78f.js",
    "revision": "21307b408d2552abfff5ddc5e9747de1"
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
    "url": "assets/js/16.a6f4d5c4.js",
    "revision": "532fcd298a3699f94e37e9ee70014cea"
  },
  {
    "url": "assets/js/17.a9d1fbb9.js",
    "revision": "0d13a05d47e76aa0b0a8de8c38f0433a"
  },
  {
    "url": "assets/js/18.3cf5450e.js",
    "revision": "cee38acac9d11bd28d763aa611e53ab8"
  },
  {
    "url": "assets/js/19.c049f9f6.js",
    "revision": "96cdd61767646b2b85db3b866756d86d"
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
    "url": "assets/js/21.148ed577.js",
    "revision": "3559f82f60f8407da858ccf90066088e"
  },
  {
    "url": "assets/js/22.994326ad.js",
    "revision": "4dd358ca8b661201946bf45d4c844c1b"
  },
  {
    "url": "assets/js/23.ebb91bce.js",
    "revision": "53f57ef25bc19f9f0b980138e5fd7417"
  },
  {
    "url": "assets/js/24.5c5e288d.js",
    "revision": "0503dfe146ba3008a2ad67d2d532320e"
  },
  {
    "url": "assets/js/25.42720d18.js",
    "revision": "eef1a062c96ed05d06597e7c6e709e28"
  },
  {
    "url": "assets/js/26.516e9983.js",
    "revision": "4eae0b44956aed119d0a103d1f3b9bd9"
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
    "url": "assets/js/31.cef1ed6b.js",
    "revision": "804bb46cbb6723747984e137d2e7a606"
  },
  {
    "url": "assets/js/32.f480af5e.js",
    "revision": "aa5a288a3590fe1351ba43b9d74f1c26"
  },
  {
    "url": "assets/js/33.faee3eaf.js",
    "revision": "883cd2f8d2da09e237b7abe293ac7dae"
  },
  {
    "url": "assets/js/34.2bc01d97.js",
    "revision": "e83a072767badb5231b58ef0f3813c82"
  },
  {
    "url": "assets/js/35.4001fc75.js",
    "revision": "1e53689d5f68bf5fd4c260a5635323b3"
  },
  {
    "url": "assets/js/36.52d6bd45.js",
    "revision": "684dcd8a6c3d98bc30d2465b0d986947"
  },
  {
    "url": "assets/js/37.c5b9e739.js",
    "revision": "bc0a7c34aa00e6687d1be351539d6373"
  },
  {
    "url": "assets/js/38.5b27d9cc.js",
    "revision": "b04bd0f99e49e9fd7913664914fb08f4"
  },
  {
    "url": "assets/js/39.9606796e.js",
    "revision": "c2d02f93ebdd5483881e8ea2405f7ddc"
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
    "url": "assets/js/42.db377b0d.js",
    "revision": "b0ee02462f2ed8ec8b46059164e77881"
  },
  {
    "url": "assets/js/43.af1a8ab9.js",
    "revision": "447d5e366a1a7ed1f9a68fbea323ada8"
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
    "url": "assets/js/46.30432bf0.js",
    "revision": "53db452ad75d25f20420237514df2da8"
  },
  {
    "url": "assets/js/47.5a80d60e.js",
    "revision": "a9e0e380d222e928770874b4ad918677"
  },
  {
    "url": "assets/js/48.ab93c246.js",
    "revision": "6b654b27c5e6a271bb6e6085072c6c16"
  },
  {
    "url": "assets/js/49.a1cc89d8.js",
    "revision": "b044614101ca76a70795ca9ff2c6bd92"
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
    "url": "assets/js/54.9210abf2.js",
    "revision": "2159e22bee657b8a4ac50d68aa462d76"
  },
  {
    "url": "assets/js/55.042546d5.js",
    "revision": "1731b8a8f89331ca92781df62346ca14"
  },
  {
    "url": "assets/js/56.a6f50275.js",
    "revision": "f10515abcdaf1df4f17e98f74c0f55f4"
  },
  {
    "url": "assets/js/57.3741a8bb.js",
    "revision": "3dd672e05469cfe52b84ad02dae85c6c"
  },
  {
    "url": "assets/js/58.f1eb94d8.js",
    "revision": "09aabf9dcc06a621b2f54950c8163977"
  },
  {
    "url": "assets/js/59.16658b30.js",
    "revision": "13691f2d6a700ec04812cbb662571230"
  },
  {
    "url": "assets/js/6.e9fe7882.js",
    "revision": "8ca752e20bd6f7e3efaef7b16ddf4bed"
  },
  {
    "url": "assets/js/60.bd778053.js",
    "revision": "528daf26242969fdabc5f6a24a5c0cd3"
  },
  {
    "url": "assets/js/61.65973c0e.js",
    "revision": "f82bba2db7c628bb40a9d433b91931ce"
  },
  {
    "url": "assets/js/62.16cda833.js",
    "revision": "fb3341d32a9f671db76db6f2ba2f2bba"
  },
  {
    "url": "assets/js/63.32f44225.js",
    "revision": "e3c0df1389c0b007a565d68a09f951ad"
  },
  {
    "url": "assets/js/64.f6f03c24.js",
    "revision": "b2421929b6e8fae9ce086d71c17c394a"
  },
  {
    "url": "assets/js/65.19d1b23d.js",
    "revision": "7a744047df50b3b937f8d676ace535c9"
  },
  {
    "url": "assets/js/66.6dcd010f.js",
    "revision": "663d1665dd509747c1bc173a9b879158"
  },
  {
    "url": "assets/js/67.ed7fbe09.js",
    "revision": "cc21ed3c400ea73e47bb9ed0f7d65b2e"
  },
  {
    "url": "assets/js/68.476367ca.js",
    "revision": "3c3d9a756545e880f2146b492917a9f4"
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
    "url": "assets/js/70.2b6b74c2.js",
    "revision": "173e4b1fe1780020dad171c3e6bc670f"
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
    "url": "assets/js/app.27034c22.js",
    "revision": "db53247ecadf4caa94f098e57f37f13b"
  },
  {
    "url": "blog/angular.html",
    "revision": "31439a64779bba554ffdb0dedc871d76"
  },
  {
    "url": "blog/ast.html",
    "revision": "321e96f47001c5936a88085099a7f7b5"
  },
  {
    "url": "blog/canvas.html",
    "revision": "050e1c6c16f0dbe97a89615ffe80b157"
  },
  {
    "url": "blog/console.html",
    "revision": "c1fa6ef73e849bdb3b41736a7d7aa47c"
  },
  {
    "url": "blog/csspre.html",
    "revision": "4f1e9e52aad57a6b2711b32ff93e0810"
  },
  {
    "url": "blog/deno.html",
    "revision": "893c3389e488a75072968674b629c83a"
  },
  {
    "url": "blog/docker-compose.html",
    "revision": "c7328d15e12db8d6b6f393cd3c35e43c"
  },
  {
    "url": "blog/docker-project.html",
    "revision": "1cb72434169ac9488124ef5ac2111eb0"
  },
  {
    "url": "blog/docker.html",
    "revision": "6af36ae6e6ea34c3ec9dccc90bb50f03"
  },
  {
    "url": "blog/echarts.html",
    "revision": "1438973d6674cfbf3fa298320a95a7d9"
  },
  {
    "url": "blog/egg.html",
    "revision": "8864588cf1b61091554e832d05987e59"
  },
  {
    "url": "blog/electron.html",
    "revision": "d49e7352e4da85c5a5b84856e1b7ae7a"
  },
  {
    "url": "blog/flex&grid.html",
    "revision": "37d947b44d2f3300eb167fd57e62fe94"
  },
  {
    "url": "blog/flutter.html",
    "revision": "55e9ccc85f4e2456867537b13152b76a"
  },
  {
    "url": "blog/g6.html",
    "revision": "c8c00080e3c4227f5d424490e02a1895"
  },
  {
    "url": "blog/git.html",
    "revision": "fd0a10001988a2939104eece1f68e5eb"
  },
  {
    "url": "blog/golang.html",
    "revision": "8d72de37d513781898cf39819f30f657"
  },
  {
    "url": "blog/http.html",
    "revision": "70ac431bd71191e8704ac1ce258a0992"
  },
  {
    "url": "blog/index.html",
    "revision": "64a625286f2b117f307103b776fe8219"
  },
  {
    "url": "blog/koa2-learn.html",
    "revision": "9aa1f551ecef9fd8d656fa2b49b48e1a"
  },
  {
    "url": "blog/map.html",
    "revision": "55b9c987ea8678b917ce690d08c34568"
  },
  {
    "url": "blog/nodecli.html",
    "revision": "782bd375c70c288cf019d1ab19b9b7b2"
  },
  {
    "url": "blog/nodespider.html",
    "revision": "c51ae3bbff1fc0e5b04a5ffe5a061f1e"
  },
  {
    "url": "blog/performance.html",
    "revision": "f1a83052e71cd6e9176d8eb490ce6375"
  },
  {
    "url": "blog/puppeteer.html",
    "revision": "79fdd003f2f6cd2a4d8e01ef58e523f4"
  },
  {
    "url": "blog/react-native.html",
    "revision": "474935d14e7739d6689959345ceef25a"
  },
  {
    "url": "blog/react.html",
    "revision": "123b7042d84c5bc628b6355c1b036f41"
  },
  {
    "url": "blog/socketio.html",
    "revision": "03129333b1d75d5168512922bf24cda0"
  },
  {
    "url": "blog/springboot.html",
    "revision": "fb97a98c2a2e0c9671ca895989137591"
  },
  {
    "url": "blog/taro.html",
    "revision": "4503f403273bbd1a80fa38bd4cdb2988"
  },
  {
    "url": "blog/tensorflow.html",
    "revision": "89e018fdc0f0fe22fcd00e6f9ececb9f"
  },
  {
    "url": "blog/three.html",
    "revision": "2ef9f7456a799367748ae1e6ff90dc77"
  },
  {
    "url": "blog/tonejs.html",
    "revision": "285361c45e9d8ebe5d937a2bfc6d82bd"
  },
  {
    "url": "blog/tsspider.html",
    "revision": "9c2a031304d2794827db393632989a99"
  },
  {
    "url": "blog/vue2.html",
    "revision": "a31e95acb418757312358c9b257961c1"
  },
  {
    "url": "blog/vue3.html",
    "revision": "d18787717e631a3263cb1289fa6f8380"
  },
  {
    "url": "blog/vuepress.html",
    "revision": "44e88bdfe4e849a254c185c948dbff23"
  },
  {
    "url": "blog/vuetestutils.html",
    "revision": "3cf6a5cad9eedc99ad90ac834a61a8df"
  },
  {
    "url": "blog/vuetestutils2.html",
    "revision": "e5536cf5610ecf9aa2f478101a1740fa"
  },
  {
    "url": "blog/webpack.html",
    "revision": "bd9b8139fb2829da2c00314b830295dc"
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
    "revision": "56123dde7132e8d05cbc50053469c3c2"
  },
  {
    "url": "leecode/index.html",
    "revision": "c36ae65ca8b07c4df8bda8ba27f9bf28"
  },
  {
    "url": "leecode/leecode.html",
    "revision": "2a51281ea7f2f25ef5163a2a687d7664"
  },
  {
    "url": "live2d/wanko/assets/moc/wanko.1024/texture_00.png",
    "revision": "10b7047251205db46fdac7632b5d4642"
  },
  {
    "url": "note/dsaa.html",
    "revision": "0a6192475f05e41db2f0fec26af6a6db"
  },
  {
    "url": "note/es.html",
    "revision": "620398b4545c1212e2120df235b8c224"
  },
  {
    "url": "note/index.html",
    "revision": "64944463030f649421fd3e8147b796bf"
  },
  {
    "url": "note/lib.html",
    "revision": "3b3b98c664df0551a452cb7b9f67aa0e"
  },
  {
    "url": "note/shixi.html",
    "revision": "e78a68697721f6b3e13aeb9ea70bad65"
  },
  {
    "url": "repo/chatdemo.html",
    "revision": "02d7e8bb4253beb910942fce89cfbf16"
  },
  {
    "url": "repo/dachuang.html",
    "revision": "b3028541259bbae0d26429aa9bcfe750"
  },
  {
    "url": "repo/electron.html",
    "revision": "78cb01442f9386fd470499915cf40793"
  },
  {
    "url": "repo/ibf.html",
    "revision": "8b085027983d90d8798c777049ac0bd4"
  },
  {
    "url": "repo/index.html",
    "revision": "3dd6f41d4ffc809cfec0daa522584062"
  },
  {
    "url": "repo/javaks.html",
    "revision": "aa7d0a3b60653aab7313d3250b15b03c"
  },
  {
    "url": "repo/ksh.html",
    "revision": "b8c36ef8abf2e50c426cea9823ef38b6"
  },
  {
    "url": "repo/mddemo.html",
    "revision": "995bdfd35e64bd190275285f02d4f410"
  },
  {
    "url": "repo/tenseflow.html",
    "revision": "cb960b891efc194e7489ffb5992f75ff"
  },
  {
    "url": "repo/todo.html",
    "revision": "1b9024a0d91380edc5f44b658f12c10f"
  },
  {
    "url": "repo/tongji.html",
    "revision": "fc9053d4649583b4504f67ed35155630"
  },
  {
    "url": "repo/webaudio.html",
    "revision": "3d0cb9f713dcee8bd8557d26e0b640aa"
  },
  {
    "url": "repo/wkc.html",
    "revision": "14568da4efd355b4e813dec1f6a3a558"
  },
  {
    "url": "road/checklist.html",
    "revision": "cbd14e388084174701d5415940bc3e50"
  },
  {
    "url": "road/index.html",
    "revision": "a0acd71eb27e4538fd7d7326f63f50a4"
  },
  {
    "url": "road/road.html",
    "revision": "28cb0edf7e10b8981b00ec99bebca82f"
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
