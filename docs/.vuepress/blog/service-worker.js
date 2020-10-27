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
    "revision": "6a888c7ca5469d0eb7b92ffa6e5679c1"
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
    "url": "assets/js/10.86e3eeec.js",
    "revision": "a8f40cad2491b25c99b2cc60e143b6a7"
  },
  {
    "url": "assets/js/11.1f848ad1.js",
    "revision": "368e5b6df99c1da20015888b9c3475b7"
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
    "url": "assets/js/14.4d5fbb4a.js",
    "revision": "5652a56025a0c954b23bab8ced9e5777"
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
    "url": "assets/js/17.b557a170.js",
    "revision": "758a07c147935c9be6158a22dd53adb0"
  },
  {
    "url": "assets/js/18.9879de0d.js",
    "revision": "445c94e1cfde99733d75a1386a9b5067"
  },
  {
    "url": "assets/js/19.58313f81.js",
    "revision": "803ab6e2237ed8e97ad1b70c3c80781b"
  },
  {
    "url": "assets/js/2.590cb2e6.js",
    "revision": "751d2b659f08f666c8a20cf7e4b61f84"
  },
  {
    "url": "assets/js/20.2e3040bb.js",
    "revision": "d766c8c04e181a6695d035ec268232dd"
  },
  {
    "url": "assets/js/21.e902845f.js",
    "revision": "c31b2eb9b6b33961d42840d8e97babec"
  },
  {
    "url": "assets/js/22.bcacea6f.js",
    "revision": "343c0e7e753de637bc8ccc96b25e57df"
  },
  {
    "url": "assets/js/23.8b7982ec.js",
    "revision": "1c7addc2f1990fbedff0e38855a60abf"
  },
  {
    "url": "assets/js/24.40989ef0.js",
    "revision": "3821f424d011c9609f3398b4940e9fef"
  },
  {
    "url": "assets/js/25.271f49ac.js",
    "revision": "ea8644a8cb0c28901e67eec895854057"
  },
  {
    "url": "assets/js/26.c8cb884b.js",
    "revision": "3e0dd5176a6bd49d6c646ec7f2459d39"
  },
  {
    "url": "assets/js/27.6308cdb7.js",
    "revision": "20de1f44c113999db21e78268689180c"
  },
  {
    "url": "assets/js/28.49696390.js",
    "revision": "35a62ef349bbfdc224bd03970ea50ad6"
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
    "url": "assets/js/30.090dcdd9.js",
    "revision": "cdb8433a9de099d92e8e177ca566db33"
  },
  {
    "url": "assets/js/31.e742e483.js",
    "revision": "c9dc1081993245889e4938900844d808"
  },
  {
    "url": "assets/js/32.017ea997.js",
    "revision": "2e480ace131749bd9462968ce5ad5155"
  },
  {
    "url": "assets/js/33.a35563fa.js",
    "revision": "1ec81794f6ba17433a4e2c1e7bde1b3d"
  },
  {
    "url": "assets/js/34.4b93b85a.js",
    "revision": "c93ea66655dd0929ff85e994bd3ec302"
  },
  {
    "url": "assets/js/35.a13166c0.js",
    "revision": "d7870da30e3ce66f04cb75d11bf2b4ea"
  },
  {
    "url": "assets/js/36.9104eaae.js",
    "revision": "f0a413dc8aec75acef0da71b28a72e81"
  },
  {
    "url": "assets/js/37.41f28fea.js",
    "revision": "86ffb7e66ecad3a5e8e2077d118f69c9"
  },
  {
    "url": "assets/js/38.0d8fb2f8.js",
    "revision": "4861c95cbc214673aa05e8a20ba78fd1"
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
    "url": "assets/js/47.fd8b7e88.js",
    "revision": "2409a684d8adb36b12354a21d8b57d6a"
  },
  {
    "url": "assets/js/48.047b0104.js",
    "revision": "e51a277cd41c8fba213fcf62e381837c"
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
    "url": "assets/js/64.2e44886d.js",
    "revision": "be007af062eddb861e8b30598460b97c"
  },
  {
    "url": "assets/js/65.8be7291f.js",
    "revision": "8e8f4da2ef6d12a376d0fd8392f24224"
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
    "url": "assets/js/9.8668cf5c.js",
    "revision": "2874cf8a9f2637a23dd54fc9d1b722f1"
  },
  {
    "url": "assets/js/app.387aa8f1.js",
    "revision": "1e4e778c84e5449fecd813d41bd56fff"
  },
  {
    "url": "blog/angular.html",
    "revision": "cdad75e5dd7e43cdc8b4757e9482fcd8"
  },
  {
    "url": "blog/ast.html",
    "revision": "e43e398d9ee2825786a20abd0fbc9e15"
  },
  {
    "url": "blog/canvas.html",
    "revision": "601c932068e886506cb1c04e9d4d4c92"
  },
  {
    "url": "blog/console.html",
    "revision": "e3c9173852f8bba96896d95faf231e27"
  },
  {
    "url": "blog/csspre.html",
    "revision": "50ea532be75364e600ba934cafc5f8a2"
  },
  {
    "url": "blog/deno.html",
    "revision": "26d202344cd9257c2de044de33712dde"
  },
  {
    "url": "blog/docker-compose.html",
    "revision": "bc41c4dbd556ba3afb4f354e84a23467"
  },
  {
    "url": "blog/docker-project.html",
    "revision": "b2d4fa9f025305bb6ae0511cfd199188"
  },
  {
    "url": "blog/docker.html",
    "revision": "259a5d3590842f5aba241f8b82671d63"
  },
  {
    "url": "blog/echarts.html",
    "revision": "d4477173fc865017c786fb3ff4d21887"
  },
  {
    "url": "blog/egg.html",
    "revision": "48e63787e1a8716ef31d4d0aef644267"
  },
  {
    "url": "blog/electron.html",
    "revision": "c528392f2953a8ce28d8d0e98ed15077"
  },
  {
    "url": "blog/flutter.html",
    "revision": "f72f0ebd829bb1e2829a88aa4a9b7253"
  },
  {
    "url": "blog/g6.html",
    "revision": "6101d702d98d4a7ae19822f4c8278fdb"
  },
  {
    "url": "blog/git.html",
    "revision": "072d17571bf34a314815657095c07d90"
  },
  {
    "url": "blog/golang.html",
    "revision": "8ded53b62589716a00fd3a6a1584157e"
  },
  {
    "url": "blog/http.html",
    "revision": "f1dcad8969b63b7b4a8b9944347df3cf"
  },
  {
    "url": "blog/index.html",
    "revision": "a74b8218f87c0d84ab35a0ce5d22ab07"
  },
  {
    "url": "blog/koa2-learn.html",
    "revision": "a26a1cc513bdb06cbb3a7f3b62c3f157"
  },
  {
    "url": "blog/map.html",
    "revision": "e4610ef88672d7ab5f9017d219088e53"
  },
  {
    "url": "blog/nodecli.html",
    "revision": "d7a8fb317cb13d4f4850c69dac9f3a2c"
  },
  {
    "url": "blog/nodespider.html",
    "revision": "1ea1f07a9724835543cbf72659bfb66d"
  },
  {
    "url": "blog/performance.html",
    "revision": "e6046971dac4cb4a102f1baf6589bc79"
  },
  {
    "url": "blog/puppeteer.html",
    "revision": "686f7a69139ed2ca4b8601490bf2bfc2"
  },
  {
    "url": "blog/react-native.html",
    "revision": "e8bee9f7fdbf9daa73e7ffc32d5d6efb"
  },
  {
    "url": "blog/react.html",
    "revision": "9d3b2ca58eb3e6c701d4ba0b3830a417"
  },
  {
    "url": "blog/socketio.html",
    "revision": "b91a0bb13c964aa8c19fe589927df46f"
  },
  {
    "url": "blog/springboot.html",
    "revision": "7237bfe90bf7370308ba8f598a33256a"
  },
  {
    "url": "blog/taro.html",
    "revision": "29f5fff3804fcadfb971b65d75928474"
  },
  {
    "url": "blog/tensorflow.html",
    "revision": "9aeaf869d76f26e6bb85b52489ceb01c"
  },
  {
    "url": "blog/three.html",
    "revision": "72120b16a976ee16409241479bd969d3"
  },
  {
    "url": "blog/tonejs.html",
    "revision": "1dd50b9f783fe20cf4a0a7f082f668fa"
  },
  {
    "url": "blog/tsspider.html",
    "revision": "ac6e431d6a824229605aac0623928844"
  },
  {
    "url": "blog/vue2.html",
    "revision": "2a547b16b4f136d8b0dde30443c3d097"
  },
  {
    "url": "blog/vue3.html",
    "revision": "3ae0c4378543d3f71d85cae6fe679f9c"
  },
  {
    "url": "blog/vuepress.html",
    "revision": "1f53ad30bb90cfa202203e18f17ca1bf"
  },
  {
    "url": "blog/vuetestutils.html",
    "revision": "6f70ac493cfe7e4c9738aae8dab135a6"
  },
  {
    "url": "blog/vuetestutils2.html",
    "revision": "c93ceaa4c269c252800147732a080374"
  },
  {
    "url": "blog/webpack.html",
    "revision": "da9dcc21be4b7666af543cdba604c0e1"
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
    "revision": "c395f58eab28f0699bf9ad1b89c47489"
  },
  {
    "url": "leecode/index.html",
    "revision": "0763d7bcce49fd4a021b920e3ecc95e1"
  },
  {
    "url": "leecode/leecode.html",
    "revision": "f34ad5bc7413a0f125efe69c6e0b7841"
  },
  {
    "url": "live2d/wanko/assets/moc/wanko.1024/texture_00.png",
    "revision": "10b7047251205db46fdac7632b5d4642"
  },
  {
    "url": "note/dsaa.html",
    "revision": "b647bbb3ae16975a8ec46b10430128d6"
  },
  {
    "url": "note/es.html",
    "revision": "6004649f4acb3a60c4654b8e6a96ab0f"
  },
  {
    "url": "note/index.html",
    "revision": "bda9a97f905e5c4de0dc068835613527"
  },
  {
    "url": "note/lib.html",
    "revision": "b3da95826dfa77d008d941859ce152e5"
  },
  {
    "url": "note/shixi.html",
    "revision": "4ba68b60f12b11020c2df43abb50c5ca"
  },
  {
    "url": "repo/chatdemo.html",
    "revision": "0359b4d86f398c0a9adce022900b184f"
  },
  {
    "url": "repo/dachuang.html",
    "revision": "78ebb5feb03a7b28e39c8c6c9bc28117"
  },
  {
    "url": "repo/electron.html",
    "revision": "1c18fda89ae25381c86e83267b4776c4"
  },
  {
    "url": "repo/ibf.html",
    "revision": "725d20f6afae9c15367a72c063fd44e6"
  },
  {
    "url": "repo/index.html",
    "revision": "60c637b9bcaf9bf98fab8326e2052a1f"
  },
  {
    "url": "repo/javaks.html",
    "revision": "19fa33b4b245e2232c032fe1c17f71d2"
  },
  {
    "url": "repo/ksh.html",
    "revision": "6bfcb166015210768faef122adcbda6c"
  },
  {
    "url": "repo/mddemo.html",
    "revision": "dd43d4327e2a4c80820f502f4ac1065d"
  },
  {
    "url": "repo/tenseflow.html",
    "revision": "1fb964535576856c92fd9cf0da18a05a"
  },
  {
    "url": "repo/todo.html",
    "revision": "2283540ca84c7822de4dd12295b3e0bb"
  },
  {
    "url": "repo/tongji.html",
    "revision": "1b4d9f81775a1b9d9a2e199fb5bdf695"
  },
  {
    "url": "repo/webaudio.html",
    "revision": "7b828ea93e567a389c9dfe4fe3c960aa"
  },
  {
    "url": "repo/wkc.html",
    "revision": "cf6d4609589937838166a08b72f5dc4a"
  },
  {
    "url": "road/checklist.html",
    "revision": "c7f37c50e9d3a451a4b019b242ad5641"
  },
  {
    "url": "road/index.html",
    "revision": "cb1e09b7405f5bc0c89b585de7d9c7a9"
  },
  {
    "url": "road/road.html",
    "revision": "834e6f4538b2cc6188f07ce1cf13ee70"
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
