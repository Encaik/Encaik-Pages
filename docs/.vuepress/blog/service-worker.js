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
    "revision": "33a64c4f557e4282d3421cd606b85783"
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
    "url": "assets/js/11.3d70bde8.js",
    "revision": "e3661479333a971d09269aab3cacb808"
  },
  {
    "url": "assets/js/12.4e18c9d3.js",
    "revision": "3df9d4acef02b5647c86172b3cf9a98a"
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
    "url": "assets/js/16.9e291b20.js",
    "revision": "426c586cb94424f936f93e4c64820a7b"
  },
  {
    "url": "assets/js/17.a9d1fbb9.js",
    "revision": "0d13a05d47e76aa0b0a8de8c38f0433a"
  },
  {
    "url": "assets/js/18.5deffd01.js",
    "revision": "89e749e80d5d550fa8e50f739d31c456"
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
    "url": "assets/js/20.8200c888.js",
    "revision": "d221a8f22862d5341e4f96521f5ccc05"
  },
  {
    "url": "assets/js/21.050f791d.js",
    "revision": "a483ac8c24a965a6c4e2a1b10b22de31"
  },
  {
    "url": "assets/js/22.76dbf43b.js",
    "revision": "87b4b8bc0fa5e461f80a0a6eff8535be"
  },
  {
    "url": "assets/js/23.73cc089f.js",
    "revision": "35c03e8b0478495cb663a2ff71c53a72"
  },
  {
    "url": "assets/js/24.cac44509.js",
    "revision": "a8c3256351dc1e04d36a66fb1c07a5e6"
  },
  {
    "url": "assets/js/25.39b231e0.js",
    "revision": "16d8a70776b26879d5a7a5d3fef61dca"
  },
  {
    "url": "assets/js/26.51c67c1e.js",
    "revision": "203b15a80d3c2b8c924999b414173529"
  },
  {
    "url": "assets/js/27.2f253b2e.js",
    "revision": "b7c71c0fdae4b1403c9823e7c3fe03c9"
  },
  {
    "url": "assets/js/28.5c383c5b.js",
    "revision": "b7e7c4b33ee13c599874607933c7a9d3"
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
    "url": "assets/js/30.56ffa928.js",
    "revision": "d4943205f1b7a308b9d421f28dfd2a02"
  },
  {
    "url": "assets/js/31.fa3b1771.js",
    "revision": "aed7babc19b72895a01b5762227fd853"
  },
  {
    "url": "assets/js/32.017ea997.js",
    "revision": "2e480ace131749bd9462968ce5ad5155"
  },
  {
    "url": "assets/js/33.43e0ddf8.js",
    "revision": "c30f820768b95dbe34fed5b91c82a1c6"
  },
  {
    "url": "assets/js/34.4b93b85a.js",
    "revision": "c93ea66655dd0929ff85e994bd3ec302"
  },
  {
    "url": "assets/js/35.e6e0f450.js",
    "revision": "9fa393bead38a16a1de5b09c1297b99f"
  },
  {
    "url": "assets/js/36.9104eaae.js",
    "revision": "f0a413dc8aec75acef0da71b28a72e81"
  },
  {
    "url": "assets/js/37.2ebd7789.js",
    "revision": "cbc99426575588bb55751fd1cdc79564"
  },
  {
    "url": "assets/js/38.d34415d7.js",
    "revision": "84c3bac1a6a670c834ee93d93933e92e"
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
    "url": "assets/js/40.5f1638ca.js",
    "revision": "48aeb95e0ea3ac72b4d0df33ad729375"
  },
  {
    "url": "assets/js/41.549206dd.js",
    "revision": "ceafd345140f26f0e05b5e3d616174f0"
  },
  {
    "url": "assets/js/42.11d95687.js",
    "revision": "1fba359778499dab5f76eafd6fb2bc7c"
  },
  {
    "url": "assets/js/43.f1e88995.js",
    "revision": "e2001adf8142bf578fbbe0c1bc74129f"
  },
  {
    "url": "assets/js/44.08cd0840.js",
    "revision": "3716d59e986322506c333031cdb5cc27"
  },
  {
    "url": "assets/js/45.68b2e4e7.js",
    "revision": "e3a179eb8966239583cd8e1514ce6089"
  },
  {
    "url": "assets/js/46.eadd4b43.js",
    "revision": "557bf88aaee96b469351d67c525edbd0"
  },
  {
    "url": "assets/js/47.dcaacec4.js",
    "revision": "98f8f60a4c4fa3effee6099635a1e1bd"
  },
  {
    "url": "assets/js/48.a6ddfc40.js",
    "revision": "d9a96adc11da1e9c427b8cf6c2216a3d"
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
    "url": "assets/js/53.38004eff.js",
    "revision": "829fd40b6cb476ca0dcaa38d999afcde"
  },
  {
    "url": "assets/js/54.f8f499c5.js",
    "revision": "5f178b9a015b129ce3c3a87f65f5a5ed"
  },
  {
    "url": "assets/js/55.67108340.js",
    "revision": "a00f51c73dec29d8db459e2fb0aa988a"
  },
  {
    "url": "assets/js/56.52be78b1.js",
    "revision": "2b7121b42d443c2b0e4073279ac5edfa"
  },
  {
    "url": "assets/js/57.9a6b225c.js",
    "revision": "98885b2909faafb1348e9f6b0b173488"
  },
  {
    "url": "assets/js/58.eead03ee.js",
    "revision": "a090b9f8decfa24d5206676f52414afa"
  },
  {
    "url": "assets/js/59.418bbf13.js",
    "revision": "4e985f82a0e422366d86e9ca684fba40"
  },
  {
    "url": "assets/js/6.e9fe7882.js",
    "revision": "8ca752e20bd6f7e3efaef7b16ddf4bed"
  },
  {
    "url": "assets/js/60.14e5033c.js",
    "revision": "c779319ef127ddebb055229c401d70a4"
  },
  {
    "url": "assets/js/61.59bfd940.js",
    "revision": "7f9b6519b7ac3efb1a703d1c37d22a3c"
  },
  {
    "url": "assets/js/62.bf69258b.js",
    "revision": "2808477a00334ca3e4587c58630569cd"
  },
  {
    "url": "assets/js/63.0e143e32.js",
    "revision": "67adf9faa736b9a95b3583514c90407f"
  },
  {
    "url": "assets/js/64.f596a068.js",
    "revision": "78e4730e8622d7c55857a6fdb0f778e2"
  },
  {
    "url": "assets/js/65.452cd39d.js",
    "revision": "0b75ca04f356a457316175fe8cc2fa8b"
  },
  {
    "url": "assets/js/66.e1d904be.js",
    "revision": "d6d055edf1875b5d9bf84ae07daadd02"
  },
  {
    "url": "assets/js/67.e4f8a995.js",
    "revision": "aae0f128f4a074f55aefb0baf6e61e69"
  },
  {
    "url": "assets/js/68.a8d9157f.js",
    "revision": "34653219d6cda4f4e4dc443227ad26ba"
  },
  {
    "url": "assets/js/69.620e75a4.js",
    "revision": "d575f4861393002e549d2c9003cc3b75"
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
    "url": "assets/js/9.cb584e83.js",
    "revision": "038dccdfe5deb0503e269cf986ac5fd9"
  },
  {
    "url": "assets/js/app.993d3b2f.js",
    "revision": "890a59d285020388caba1bdf3c5a6c77"
  },
  {
    "url": "blog/angular.html",
    "revision": "306a7d191ecf632603665af729ef867f"
  },
  {
    "url": "blog/ast.html",
    "revision": "a9ddccf724cef5e8b4610e4c1f7a715a"
  },
  {
    "url": "blog/canvas.html",
    "revision": "8b04ef29182c907a9cbde8d2cb4667f5"
  },
  {
    "url": "blog/console.html",
    "revision": "c7e99efaf1f53620be2e7aa58986b8b2"
  },
  {
    "url": "blog/csspre.html",
    "revision": "c8248671d44fe168c2ca380da371053e"
  },
  {
    "url": "blog/deno.html",
    "revision": "1814140c6abcebdf82aa09747fa6822b"
  },
  {
    "url": "blog/docker-compose.html",
    "revision": "9d21cfdfc2b55ad2b3b9ff7da539e17b"
  },
  {
    "url": "blog/docker-project.html",
    "revision": "c25d134ed4df9b39b4f9923a3b39e3f0"
  },
  {
    "url": "blog/docker.html",
    "revision": "620038e4553326c6edcfb45bda143105"
  },
  {
    "url": "blog/echarts.html",
    "revision": "c4c20177676adfdddad21c0a86ec2be8"
  },
  {
    "url": "blog/egg.html",
    "revision": "6149b11f5ad0d38fea5e2a7d56fb5768"
  },
  {
    "url": "blog/electron.html",
    "revision": "fe48c561c3aa4865757e6c440db29574"
  },
  {
    "url": "blog/flutter.html",
    "revision": "3b2e491a9704d77895f374c60789f96e"
  },
  {
    "url": "blog/g6.html",
    "revision": "ae68fadcac35aeab15a302d691402891"
  },
  {
    "url": "blog/git.html",
    "revision": "ba5f065d16a1d00d099b51a0fa61808d"
  },
  {
    "url": "blog/golang.html",
    "revision": "8f373cdc8fee6c03f2840be346f667d4"
  },
  {
    "url": "blog/http.html",
    "revision": "c2d7708349efc0d34229d427554c9cb4"
  },
  {
    "url": "blog/index.html",
    "revision": "4252a1fa32c57f0003b2189644c95c78"
  },
  {
    "url": "blog/koa2-learn.html",
    "revision": "808e555858f0dcdf63dde4e2442bd18f"
  },
  {
    "url": "blog/map.html",
    "revision": "67bffb78232b17de10f2d2c1a99e6b65"
  },
  {
    "url": "blog/nodecli.html",
    "revision": "c9188c2eb98637adfba3b7a7ed102b34"
  },
  {
    "url": "blog/nodespider.html",
    "revision": "b6736361741f4b2f30a5860d567a4b25"
  },
  {
    "url": "blog/performance.html",
    "revision": "805b757d92c84064d2c1fb88fd19fbd2"
  },
  {
    "url": "blog/puppeteer.html",
    "revision": "1ed4f0bb53e93774c9834b178dec2ee6"
  },
  {
    "url": "blog/react-native.html",
    "revision": "a316ae5e61a40b7a36849fbc49a1882f"
  },
  {
    "url": "blog/react.html",
    "revision": "124fa7a063d302d55b26ac8c66393158"
  },
  {
    "url": "blog/socketio.html",
    "revision": "2fe4b01cd2b11756e1fd6eb150b5373f"
  },
  {
    "url": "blog/springboot.html",
    "revision": "ec7c71be8d75590925aecd097b8a8794"
  },
  {
    "url": "blog/taro.html",
    "revision": "ff2cd136683cd06ed11c57f4f761e448"
  },
  {
    "url": "blog/tensorflow.html",
    "revision": "9c93081404cea2b7f495fdd080934385"
  },
  {
    "url": "blog/three.html",
    "revision": "aeb32aa69d5bf0159c351e11ba09db87"
  },
  {
    "url": "blog/tonejs.html",
    "revision": "802533321dceb1fd248621e858bb5d6a"
  },
  {
    "url": "blog/tsspider.html",
    "revision": "9e9ccd780b1e41f824809be5982db47a"
  },
  {
    "url": "blog/vue2.html",
    "revision": "c3688d53008ddb0f7cdb78927b7f346e"
  },
  {
    "url": "blog/vue3.html",
    "revision": "6f4b704574fad6959c721e6dd05905bc"
  },
  {
    "url": "blog/vuepress.html",
    "revision": "147d7e4a1d7b4c813a1432ef8ee69ebf"
  },
  {
    "url": "blog/vuetestutils.html",
    "revision": "ef60cfa67926211d29665187d7d14c43"
  },
  {
    "url": "blog/vuetestutils2.html",
    "revision": "e54b8db6f996718c39117583ac93f770"
  },
  {
    "url": "blog/webpack.html",
    "revision": "701222f0f9b4f3add55c8d2fe532c257"
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
    "revision": "99ac3f6d3cffe48ed1e2c81edd2ef504"
  },
  {
    "url": "leecode/index.html",
    "revision": "174fdea5c6e75f57d54d6726bba43c6d"
  },
  {
    "url": "leecode/leecode.html",
    "revision": "ffe9ea26d2a12c2a08424e46b657a11e"
  },
  {
    "url": "live2d/wanko/assets/moc/wanko.1024/texture_00.png",
    "revision": "10b7047251205db46fdac7632b5d4642"
  },
  {
    "url": "note/dsaa.html",
    "revision": "a4989f492d308ab4c8436e04f70f0a3b"
  },
  {
    "url": "note/es.html",
    "revision": "05c419fb074240cff932ee960af2a997"
  },
  {
    "url": "note/index.html",
    "revision": "d2c8faebe79bb0fa54ea7d6ec219fe15"
  },
  {
    "url": "note/lib.html",
    "revision": "eb1d18e73eab22ea7513fd9fcfadb60b"
  },
  {
    "url": "note/shixi.html",
    "revision": "32d844e66cafcfda27aa7a64d8712117"
  },
  {
    "url": "repo/chatdemo.html",
    "revision": "efbc2c29c3a9b00b100128fcc7c759bd"
  },
  {
    "url": "repo/dachuang.html",
    "revision": "6f31f00f9ecf2721d1d13d3f21bc2f34"
  },
  {
    "url": "repo/electron.html",
    "revision": "b39b56d6780a99df6aab8b48ad5afce2"
  },
  {
    "url": "repo/ibf.html",
    "revision": "2e12bab3ca9debd4dd2a1f261cd60a51"
  },
  {
    "url": "repo/index.html",
    "revision": "fb8ac317623b9abaf0b1a2a218604cf2"
  },
  {
    "url": "repo/javaks.html",
    "revision": "c31860ef802dbdfbb958ce4530b11f72"
  },
  {
    "url": "repo/ksh.html",
    "revision": "8ec0b65f462183d634836d99fabfe623"
  },
  {
    "url": "repo/mddemo.html",
    "revision": "abb28c4d6af0fa4250efd063049404e8"
  },
  {
    "url": "repo/tenseflow.html",
    "revision": "0a573e7f1668b98fec6af152bbb1548c"
  },
  {
    "url": "repo/todo.html",
    "revision": "a1ef2f298850b1975c5887193a0a45d0"
  },
  {
    "url": "repo/tongji.html",
    "revision": "2987cc23689664c642d97fa715e0c546"
  },
  {
    "url": "repo/webaudio.html",
    "revision": "49ccb8fe95511d4342b2e58b185e2880"
  },
  {
    "url": "repo/wkc.html",
    "revision": "ddfd1e17e0af035ba0518d10c64d6e05"
  },
  {
    "url": "road/checklist.html",
    "revision": "48c997f7e013d7fde3cf47834debc8c7"
  },
  {
    "url": "road/index.html",
    "revision": "6172cce80208dc50277f647af9def80d"
  },
  {
    "url": "road/road.html",
    "revision": "f13923a2a2ecb4f1428fc17e19cf789c"
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
