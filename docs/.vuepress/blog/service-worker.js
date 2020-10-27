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
    "revision": "eeae728d74c605a4f6308c68308ec4cf"
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
    "url": "assets/js/11.3bfb8044.js",
    "revision": "1ca6e69dd76ec098f96d4dc0e0909ae5"
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
    "url": "assets/js/14.0e9fbf74.js",
    "revision": "0039c9067aff33be316b53c67f25e05d"
  },
  {
    "url": "assets/js/15.5c94c7ec.js",
    "revision": "317a93ceca714e38ef8241a824c5f4ad"
  },
  {
    "url": "assets/js/16.e70dfbe2.js",
    "revision": "3464c3bae6cd9723e8ddc1fbfb6183aa"
  },
  {
    "url": "assets/js/17.ed949b04.js",
    "revision": "2f9afc77ac657e6abaf0fc882249f0e4"
  },
  {
    "url": "assets/js/18.5deffd01.js",
    "revision": "89e749e80d5d550fa8e50f739d31c456"
  },
  {
    "url": "assets/js/19.8d37a978.js",
    "revision": "c3ec4037e65bd528733d9bade1a3d9b0"
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
    "url": "assets/js/21.4e858681.js",
    "revision": "6c65dd116c5a42a731d4461e3808a725"
  },
  {
    "url": "assets/js/22.df78bd80.js",
    "revision": "0de8471d9fac37ec972e71d1ca5f7ca6"
  },
  {
    "url": "assets/js/23.bf8f9e2e.js",
    "revision": "5f62cde776b5e5e3fa5db5710a2326b2"
  },
  {
    "url": "assets/js/24.6de8e855.js",
    "revision": "281c4acbed04e1ebffda4b0473c89bb1"
  },
  {
    "url": "assets/js/25.075b5e67.js",
    "revision": "a5c7bdb1e216edd2dffd99af57e5d4f1"
  },
  {
    "url": "assets/js/26.9918f64d.js",
    "revision": "951428ed3a584771b03ab663b9d0476a"
  },
  {
    "url": "assets/js/27.ed9ff302.js",
    "revision": "0e99c12b7fca239c5ff7460c975e2129"
  },
  {
    "url": "assets/js/28.11b38e9a.js",
    "revision": "2f8c8565cb6d789584cdd5e2b5756514"
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
    "url": "assets/js/30.3847b30f.js",
    "revision": "c3f764b1bb0f01bec46ceff934236396"
  },
  {
    "url": "assets/js/31.d7405bbe.js",
    "revision": "6c5a6ead98b938ff1e4f8fd9485a341c"
  },
  {
    "url": "assets/js/32.0772f5f8.js",
    "revision": "f06726c2a24a857ff759053f788ba31b"
  },
  {
    "url": "assets/js/33.d419b16b.js",
    "revision": "ee48c3284aad5951574edfbe616abb41"
  },
  {
    "url": "assets/js/34.cfb6ef10.js",
    "revision": "98a8588f0d57183e2954b12a9f4661ba"
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
    "url": "assets/js/37.7b9d5cdf.js",
    "revision": "0c425a495c63c0a74683af1e727416a4"
  },
  {
    "url": "assets/js/38.cd30ba21.js",
    "revision": "20fdf6eac76f9c6e0c33702b6f400ba7"
  },
  {
    "url": "assets/js/39.5541eebd.js",
    "revision": "e44ab5473631ebd005f0dc27e48f8c70"
  },
  {
    "url": "assets/js/4.8eb3e90a.js",
    "revision": "4f3dba3e4e618a44ebc21e34548b9baf"
  },
  {
    "url": "assets/js/40.d74d54ea.js",
    "revision": "aeb754c6e3fc3706947a6b149fdab6e0"
  },
  {
    "url": "assets/js/41.a7c7f7ee.js",
    "revision": "b2e81e1cd8fec44134e49f7b26d91325"
  },
  {
    "url": "assets/js/42.2b4a3733.js",
    "revision": "a3165a1a7811811265a1779b35da2611"
  },
  {
    "url": "assets/js/43.20bd6535.js",
    "revision": "fcbbdbb4b02d3fd45d6aad3a61c62366"
  },
  {
    "url": "assets/js/44.43703684.js",
    "revision": "7324f4ee24ef49e96d02a1fb7d3ba86d"
  },
  {
    "url": "assets/js/45.4a21eae0.js",
    "revision": "53fddf3c07d53a2784d73576342884de"
  },
  {
    "url": "assets/js/46.7a867198.js",
    "revision": "c8d812221fb1e207f041a08e8cd04659"
  },
  {
    "url": "assets/js/47.d6a3c381.js",
    "revision": "c6ed52ed9e0ac91a0a06d6d5bb1f1281"
  },
  {
    "url": "assets/js/48.7140cb99.js",
    "revision": "9e2bb761152a64929435e3afa4e413e3"
  },
  {
    "url": "assets/js/49.273e3a1a.js",
    "revision": "4224345bdc82cd8f77121ef6e1881549"
  },
  {
    "url": "assets/js/5.46ef5b70.js",
    "revision": "32e508d26d546c9aac90dbd28260a438"
  },
  {
    "url": "assets/js/50.72bbec1f.js",
    "revision": "84b7034b76f02fbfd7cb34d0d9235098"
  },
  {
    "url": "assets/js/51.612fa2e1.js",
    "revision": "6fc16d2d64ebf1d816186f11afbfd8d6"
  },
  {
    "url": "assets/js/52.42a85e8d.js",
    "revision": "f7ec17cecebc7c2445cd4411d07b0ced"
  },
  {
    "url": "assets/js/53.50ff8935.js",
    "revision": "70397614c3f3758d95ba8c71e6766263"
  },
  {
    "url": "assets/js/54.7701ba8d.js",
    "revision": "89e92b451cfdc41b4b6250bc042ca3e7"
  },
  {
    "url": "assets/js/55.c7635331.js",
    "revision": "5d27cd0e83f93588d4855e9d12a6e089"
  },
  {
    "url": "assets/js/56.c98ebc35.js",
    "revision": "eb3a5c7d75b2f6e8bf2c1ee7301bd667"
  },
  {
    "url": "assets/js/57.84dab489.js",
    "revision": "0f33abc00ae611d5dd4a047a914b9ba2"
  },
  {
    "url": "assets/js/58.cfc5559e.js",
    "revision": "ecea9bc70e132db1b9c74f662637e973"
  },
  {
    "url": "assets/js/59.78f886d0.js",
    "revision": "f166936990d78ca5f2ab85ccbf41c733"
  },
  {
    "url": "assets/js/6.e9fe7882.js",
    "revision": "8ca752e20bd6f7e3efaef7b16ddf4bed"
  },
  {
    "url": "assets/js/60.a49682ba.js",
    "revision": "830fd8850e26f1eb455376c39bac3ced"
  },
  {
    "url": "assets/js/61.884611f7.js",
    "revision": "49991286a891417584d55e8724ffaa60"
  },
  {
    "url": "assets/js/62.71fde174.js",
    "revision": "80d55ceba5351062b41671e031cbd810"
  },
  {
    "url": "assets/js/63.bac9e2b1.js",
    "revision": "d2fbfe0f84bb7c365f777b7797497099"
  },
  {
    "url": "assets/js/64.d9a92d13.js",
    "revision": "811bc56e76fa72d734bc5122ffab3f5c"
  },
  {
    "url": "assets/js/65.038522a0.js",
    "revision": "39efb7d15e9433a6ccc6cb40c746883f"
  },
  {
    "url": "assets/js/66.c70e82f7.js",
    "revision": "aca60f3a41f17499c6744b7da75e241c"
  },
  {
    "url": "assets/js/67.220bc0c4.js",
    "revision": "0e40f76536c9861a147e6ffcf21a5209"
  },
  {
    "url": "assets/js/68.b0f03bd2.js",
    "revision": "a9a172e691eb0b93252c584e93081c12"
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
    "url": "assets/js/70.07eed22a.js",
    "revision": "2ccfb09d3c2a82f08c7e80d1df632afc"
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
    "url": "assets/js/app.6ec716f5.js",
    "revision": "7745ec965e5311a250b2ebcd113be2a7"
  },
  {
    "url": "blog/angular.html",
    "revision": "34e0b404d0fc2ba84f0ba4215b71492e"
  },
  {
    "url": "blog/ast.html",
    "revision": "59cdf749eaa47c652cbc4cef5a653aa3"
  },
  {
    "url": "blog/canvas.html",
    "revision": "632784114b704d8118229e8b850e9ebf"
  },
  {
    "url": "blog/console.html",
    "revision": "2d2efa21d305e1a8e22ae15a4847ec6b"
  },
  {
    "url": "blog/csspre.html",
    "revision": "1df62c69984105f5b6f042c29e3fe5f8"
  },
  {
    "url": "blog/deno.html",
    "revision": "01ba712c4386e66f6ab46efb20e70cb1"
  },
  {
    "url": "blog/docker-compose.html",
    "revision": "2e1f13858d86cb7607c3207516433037"
  },
  {
    "url": "blog/docker-project.html",
    "revision": "1acf1846a6590b7fc9e6dd42f864f239"
  },
  {
    "url": "blog/docker.html",
    "revision": "aba65b802f906ead88fe0cb209073aa7"
  },
  {
    "url": "blog/echarts.html",
    "revision": "2c46dbec8dde02547dfa934539846299"
  },
  {
    "url": "blog/egg.html",
    "revision": "06d13d4307f1029fc7b7070c7ef8356d"
  },
  {
    "url": "blog/electron.html",
    "revision": "352ac278905a4139e74d0e74ae37e226"
  },
  {
    "url": "blog/flex&grid.html",
    "revision": "e9edc76ade35ddbdb47cbccd3b7d6164"
  },
  {
    "url": "blog/flutter.html",
    "revision": "47a2dfd2e47ba2b4f9bd1fdfd8dc3a37"
  },
  {
    "url": "blog/g6.html",
    "revision": "3c0633b2f7174e843053268f2743018c"
  },
  {
    "url": "blog/git.html",
    "revision": "54093566a2b0195933380030311fbe52"
  },
  {
    "url": "blog/golang.html",
    "revision": "635ff3920ad06764db4c956be53026c7"
  },
  {
    "url": "blog/http.html",
    "revision": "1d72221150c5bdd909c18705fe792604"
  },
  {
    "url": "blog/index.html",
    "revision": "c3646869faaf501bb0722a4f6254a727"
  },
  {
    "url": "blog/koa2-learn.html",
    "revision": "11b988b7ac790df98bd470452c6b6373"
  },
  {
    "url": "blog/map.html",
    "revision": "84aa8a57770977dd3fc5d92e6570b30e"
  },
  {
    "url": "blog/nodecli.html",
    "revision": "bc6943a5e1e990744742e85a4ea20480"
  },
  {
    "url": "blog/nodespider.html",
    "revision": "770f155d6335e3db13a3a8dd8dcc3f36"
  },
  {
    "url": "blog/performance.html",
    "revision": "4f02dd1a008eed95d0d8c11d0f604b52"
  },
  {
    "url": "blog/puppeteer.html",
    "revision": "1c4c0a8463b7854dd723a2dca87d1910"
  },
  {
    "url": "blog/react-native.html",
    "revision": "769ebc6e9627b9b8b36b4651ef65392c"
  },
  {
    "url": "blog/react.html",
    "revision": "30274457e4b37bef970448ed3aefb0d1"
  },
  {
    "url": "blog/socketio.html",
    "revision": "e5e629da7dd857d376657d4e6ec0f562"
  },
  {
    "url": "blog/springboot.html",
    "revision": "287ff94d0ea7079266ecf40e82563163"
  },
  {
    "url": "blog/taro.html",
    "revision": "ba38db720510ce970db054bf77d2cb12"
  },
  {
    "url": "blog/tensorflow.html",
    "revision": "77a55c8365a8d382bcf0b100639fe439"
  },
  {
    "url": "blog/three.html",
    "revision": "54dcbb4db49be7caa6e93f49d2421bff"
  },
  {
    "url": "blog/tonejs.html",
    "revision": "5927c6ffb1966ecfb4fbcd4594eda7f8"
  },
  {
    "url": "blog/tsspider.html",
    "revision": "f72a9b2a591dfae5a984573537de78fe"
  },
  {
    "url": "blog/vue2.html",
    "revision": "6e2feddc46e9d9c427ec88bfeec9d2c4"
  },
  {
    "url": "blog/vue3.html",
    "revision": "e04fc2569a43adc5b5aa1f8bb20caa9f"
  },
  {
    "url": "blog/vuepress.html",
    "revision": "edeab304d96922caf579afe3930c8e9d"
  },
  {
    "url": "blog/vuetestutils.html",
    "revision": "ccee3f8818c72c3667a4daaaebbd75e1"
  },
  {
    "url": "blog/vuetestutils2.html",
    "revision": "bb4f23580ddcebcd72e9bfadec18797f"
  },
  {
    "url": "blog/webpack.html",
    "revision": "7196376c8a93986fe51f1570e0ca8c49"
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
    "revision": "51193eb5b296643be88f88ca063e989f"
  },
  {
    "url": "leecode/index.html",
    "revision": "889bcbfd0193ac8b265eaf0ff3e98ab1"
  },
  {
    "url": "leecode/leecode.html",
    "revision": "dd75be23809f2923468f8deb3431b347"
  },
  {
    "url": "live2d/wanko/assets/moc/wanko.1024/texture_00.png",
    "revision": "10b7047251205db46fdac7632b5d4642"
  },
  {
    "url": "note/dsaa.html",
    "revision": "485e72b06924e871ec1aa677eef026a2"
  },
  {
    "url": "note/es.html",
    "revision": "11ee2ba601c5ae11cd12a12fec954a6f"
  },
  {
    "url": "note/index.html",
    "revision": "b7831b7931bd6ad934610031ad41bc96"
  },
  {
    "url": "note/lib.html",
    "revision": "748f1c33b3a3c37b062b2adf001180cb"
  },
  {
    "url": "note/shixi.html",
    "revision": "f8eb4d08b154fe5cdeb78d3dd9ffb346"
  },
  {
    "url": "repo/chatdemo.html",
    "revision": "b4c31a645a4be3aa8e6582778351c35c"
  },
  {
    "url": "repo/dachuang.html",
    "revision": "3047a610cb9d877802ff683b8b076685"
  },
  {
    "url": "repo/electron.html",
    "revision": "4e34d59e3093183bb5df0328203d1315"
  },
  {
    "url": "repo/ibf.html",
    "revision": "e5c0a12f7e6e56a33c98f356376eb217"
  },
  {
    "url": "repo/index.html",
    "revision": "a73bd696a5b57e55c553b5c2b7881d46"
  },
  {
    "url": "repo/javaks.html",
    "revision": "c62d30ce49852398877e5560ef0a6960"
  },
  {
    "url": "repo/ksh.html",
    "revision": "4536b45b443c18d284f31a3db6e2a365"
  },
  {
    "url": "repo/mddemo.html",
    "revision": "f5391ae1d3f97158b04d8e6d419db1ee"
  },
  {
    "url": "repo/tenseflow.html",
    "revision": "a78303a0793b4bc39d023ed1b6661148"
  },
  {
    "url": "repo/todo.html",
    "revision": "17d1ca99a72c48a1dcd5ee5b383f275b"
  },
  {
    "url": "repo/tongji.html",
    "revision": "17f783bda7d904ef8cec03b5e13f21f6"
  },
  {
    "url": "repo/webaudio.html",
    "revision": "d82323f0a3eab4351211642719b022c5"
  },
  {
    "url": "repo/wkc.html",
    "revision": "0b1b5a142698f05a27a4de8e41446878"
  },
  {
    "url": "road/checklist.html",
    "revision": "5897e6d4f407edc830d461a2e99cad3d"
  },
  {
    "url": "road/index.html",
    "revision": "2f2cb7c876e866a32ed6a70a11c4d62a"
  },
  {
    "url": "road/road.html",
    "revision": "cf547dbc0aad884b8fa243216e74da79"
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
