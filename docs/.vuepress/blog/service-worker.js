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
    "revision": "cafdf0519dd9cf9cd9bf92011734102d"
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
    "url": "assets/js/10.4e223f07.js",
    "revision": "2cb3bd2ff83103d544e341bf13289ae0"
  },
  {
    "url": "assets/js/11.3bfb8044.js",
    "revision": "1ca6e69dd76ec098f96d4dc0e0909ae5"
  },
  {
    "url": "assets/js/12.681b783b.js",
    "revision": "d9158af9ab0014f2e14a16ffbc0d6714"
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
    "url": "assets/js/21.2b1012d3.js",
    "revision": "ae72f90fa0c321bf462f78adbddf571f"
  },
  {
    "url": "assets/js/22.c1f7bb09.js",
    "revision": "52be15ffc494207bdeba47fb00410ae0"
  },
  {
    "url": "assets/js/23.73cc089f.js",
    "revision": "35c03e8b0478495cb663a2ff71c53a72"
  },
  {
    "url": "assets/js/24.8797435e.js",
    "revision": "775c5d098d9a75b279396c109556362c"
  },
  {
    "url": "assets/js/25.7ae5d82b.js",
    "revision": "209f84625a74fc7a05dfd5becddf29fc"
  },
  {
    "url": "assets/js/26.c8cb884b.js",
    "revision": "3e0dd5176a6bd49d6c646ec7f2459d39"
  },
  {
    "url": "assets/js/27.a46d4209.js",
    "revision": "ffb3b84fdc32825c2e81863f4c1c3276"
  },
  {
    "url": "assets/js/28.49696390.js",
    "revision": "35a62ef349bbfdc224bd03970ea50ad6"
  },
  {
    "url": "assets/js/29.d80a291b.js",
    "revision": "88b509290ec40d2976f488a290ff54fb"
  },
  {
    "url": "assets/js/3.89568fe3.js",
    "revision": "2c19df1c865eae54f7dd8771c76a7a49"
  },
  {
    "url": "assets/js/30.fd5e56b3.js",
    "revision": "79ba26ee7d17f81cf5ad7dfbd72f70af"
  },
  {
    "url": "assets/js/31.1ce4b9e7.js",
    "revision": "d01c30cf1a221657ec068c8570250edb"
  },
  {
    "url": "assets/js/32.c3d13647.js",
    "revision": "e6cc80205522dea4a01d61c47c9f0b05"
  },
  {
    "url": "assets/js/33.a35563fa.js",
    "revision": "1ec81794f6ba17433a4e2c1e7bde1b3d"
  },
  {
    "url": "assets/js/34.32c3da0b.js",
    "revision": "cc0f8df3be16fff472fa1a616fd76f12"
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
    "url": "assets/js/8.e291d4da.js",
    "revision": "9e40c06ccf19307cd4914babad536e7d"
  },
  {
    "url": "assets/js/9.8668cf5c.js",
    "revision": "2874cf8a9f2637a23dd54fc9d1b722f1"
  },
  {
    "url": "assets/js/app.bd3f0f02.js",
    "revision": "a4b7bd9b18bea2d6696df8b86dde92e9"
  },
  {
    "url": "blog/angular.html",
    "revision": "fc156210c2868b3fdeef25e5b15849a3"
  },
  {
    "url": "blog/ast.html",
    "revision": "9a5c171014b45c897e365f3a710d41b9"
  },
  {
    "url": "blog/canvas.html",
    "revision": "8481143fcc4044b78999b3a54fa3ceb0"
  },
  {
    "url": "blog/console.html",
    "revision": "9a422581cd4ef8e2a1ac994bd23ebe0e"
  },
  {
    "url": "blog/csspre.html",
    "revision": "ac9bd2143e04249b0e1ae756083c00d3"
  },
  {
    "url": "blog/deno.html",
    "revision": "021c9d3af9cf154007fbf3e853e6ef15"
  },
  {
    "url": "blog/docker-compose.html",
    "revision": "33e793320f66a41d9287869ddd1a58b9"
  },
  {
    "url": "blog/docker-project.html",
    "revision": "e0f93285b81bbd057f111d6c802a971c"
  },
  {
    "url": "blog/docker.html",
    "revision": "6e608efb8029af05d624cd16fd9696d9"
  },
  {
    "url": "blog/echarts.html",
    "revision": "dc55466e9ef9a18dbcfa0943c21e784a"
  },
  {
    "url": "blog/egg.html",
    "revision": "e1b4822ef9afa36cc522ab63af4c9f29"
  },
  {
    "url": "blog/electron.html",
    "revision": "d9a4f7bee323320d11d7f2c1d3b25b44"
  },
  {
    "url": "blog/flutter.html",
    "revision": "e05ae287e5f919784acb001f999209b2"
  },
  {
    "url": "blog/g6.html",
    "revision": "adba27047c0258aaa023cd84bd5b765d"
  },
  {
    "url": "blog/git.html",
    "revision": "ef3b930f92a199c1bf1ad0f295f897ac"
  },
  {
    "url": "blog/golang.html",
    "revision": "9b2f11f9aa33cbcdb48c12b0f2d8f798"
  },
  {
    "url": "blog/http.html",
    "revision": "16efc416aec2c9ca466564bca0cc97b9"
  },
  {
    "url": "blog/index.html",
    "revision": "1ce8550b8d671fa7d5b7b9ca0904d021"
  },
  {
    "url": "blog/koa2-learn.html",
    "revision": "ab4dc235e0302db00509b9c9df135131"
  },
  {
    "url": "blog/map.html",
    "revision": "27f081a3a85a2aecd400db6d2c7598e7"
  },
  {
    "url": "blog/nodecli.html",
    "revision": "119595a0a5b3acdaa7f4a59211b971f3"
  },
  {
    "url": "blog/nodespider.html",
    "revision": "651accdcf178f222e26316dd770a8902"
  },
  {
    "url": "blog/performance.html",
    "revision": "a4692bb8318fb2f478da638bd57ab5c8"
  },
  {
    "url": "blog/puppeteer.html",
    "revision": "360c4365a12908aea047bfb3eaeb33b2"
  },
  {
    "url": "blog/react-native.html",
    "revision": "d2e41b8525f039298c4f4e0de93ad831"
  },
  {
    "url": "blog/react.html",
    "revision": "479afdfbf9167e79b9eb46d66abef647"
  },
  {
    "url": "blog/socketio.html",
    "revision": "c76b02b0a3c8c15495cee18c5eed25f8"
  },
  {
    "url": "blog/springboot.html",
    "revision": "74453b04c20cb0ddf9890c96140ece69"
  },
  {
    "url": "blog/taro.html",
    "revision": "7fa758000be4836f9e56c31994981c89"
  },
  {
    "url": "blog/tensorflow.html",
    "revision": "d2d15989e33d36c726ae3d0f22c21dd5"
  },
  {
    "url": "blog/three.html",
    "revision": "39823277465f20a7258f41c14c99346f"
  },
  {
    "url": "blog/tonejs.html",
    "revision": "bd2f92a647581c6143b07ac42dad8027"
  },
  {
    "url": "blog/tsspider.html",
    "revision": "dca5c60191d7b9f7c92291ef69ca2104"
  },
  {
    "url": "blog/vue2.html",
    "revision": "c73ce65425394d138b78562948c53618"
  },
  {
    "url": "blog/vue3.html",
    "revision": "fb2c4215676ea4927539ca3dd3c4bf6b"
  },
  {
    "url": "blog/vuepress.html",
    "revision": "f5aa9cceb5336247b143ba8c1cfc1b25"
  },
  {
    "url": "blog/vuetestutils.html",
    "revision": "5d189cede31ae0a59c0eb48bc5ab581f"
  },
  {
    "url": "blog/vuetestutils2.html",
    "revision": "053166584fd11774f8fddad5e4e40d2e"
  },
  {
    "url": "blog/webpack.html",
    "revision": "eeba2f6060ed8a7b2662b5b330a20497"
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
    "revision": "4ec09ffaf635800744d24eddcf86cb7b"
  },
  {
    "url": "leecode/index.html",
    "revision": "c54b79a156194f96fa7b6fdaa0bf0ec2"
  },
  {
    "url": "leecode/leecode.html",
    "revision": "3c4481823f8568a8c5fef9eb9828d446"
  },
  {
    "url": "live2d/wanko/assets/moc/wanko.1024/texture_00.png",
    "revision": "10b7047251205db46fdac7632b5d4642"
  },
  {
    "url": "note/dsaa.html",
    "revision": "92de545f20b5342fa895a4f9d022c40f"
  },
  {
    "url": "note/es.html",
    "revision": "f4b381ea613e91405bf404da6df23921"
  },
  {
    "url": "note/index.html",
    "revision": "ae7fa325a0349885994b99800fe84de6"
  },
  {
    "url": "note/lib.html",
    "revision": "56a6f1f3813c7681fffde4f1c486c7f6"
  },
  {
    "url": "note/shixi.html",
    "revision": "85443a94272927070fc0443b564c8a77"
  },
  {
    "url": "repo/chatdemo.html",
    "revision": "14b10cd24ee23ed7ee7cb77977fc1527"
  },
  {
    "url": "repo/dachuang.html",
    "revision": "8b4c1bc93d669caa4304bff8fbeb35c8"
  },
  {
    "url": "repo/electron.html",
    "revision": "34ceb6c20bd41620b0f4af933e3107f6"
  },
  {
    "url": "repo/ibf.html",
    "revision": "0ff3bfb206640ab1bf409058046f80e4"
  },
  {
    "url": "repo/index.html",
    "revision": "59304ffa1b27cc28cf6e17a485396417"
  },
  {
    "url": "repo/javaks.html",
    "revision": "89fddef4446c265180b3146bb51aa445"
  },
  {
    "url": "repo/ksh.html",
    "revision": "7a781f85ce06594751363308418ac26f"
  },
  {
    "url": "repo/mddemo.html",
    "revision": "e8353044172b4f1d06702fd38f0af85c"
  },
  {
    "url": "repo/tenseflow.html",
    "revision": "05a997c5fa5eb759c9766940529089bd"
  },
  {
    "url": "repo/todo.html",
    "revision": "363a4feaaf719b2275f674a63382bfd3"
  },
  {
    "url": "repo/tongji.html",
    "revision": "aead7fe9a9f4be0c20b3771e819ac7d6"
  },
  {
    "url": "repo/webaudio.html",
    "revision": "3a3e260e9ef23e768b91963e11a6f27d"
  },
  {
    "url": "repo/wkc.html",
    "revision": "81963b59fd20924e5e5a8deda78ff672"
  },
  {
    "url": "road/checklist.html",
    "revision": "54c73a155ee018f5b8a4272db75e1377"
  },
  {
    "url": "road/index.html",
    "revision": "eb9c314957c47f5581296e0be66dbebc"
  },
  {
    "url": "road/road.html",
    "revision": "838e2c48a36a923fff98f3c813295813"
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
