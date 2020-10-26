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
    "revision": "8d9998f5b2d5045781e0156b216264bc"
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
    "url": "assets/js/10.c773ce76.js",
    "revision": "15225469b6978744ca084195d06d8ec3"
  },
  {
    "url": "assets/js/11.1491a0c3.js",
    "revision": "1ee8084afb7852b6c5bc601714556bf4"
  },
  {
    "url": "assets/js/12.5d18e77d.js",
    "revision": "6c085aac3538081b706b24843528d75b"
  },
  {
    "url": "assets/js/13.c9a6727a.js",
    "revision": "9d44ecd9293dc2447e2455d04e33b360"
  },
  {
    "url": "assets/js/14.0e9fbf74.js",
    "revision": "0039c9067aff33be316b53c67f25e05d"
  },
  {
    "url": "assets/js/15.5c53807d.js",
    "revision": "f60dd4bc68f3ac659e693d742f2d73dd"
  },
  {
    "url": "assets/js/16.26716b7d.js",
    "revision": "aaa0bacbced15ced58c9cdaa9afde41a"
  },
  {
    "url": "assets/js/17.27eb96cc.js",
    "revision": "d91bd62887c9a0811f93910252e83ad8"
  },
  {
    "url": "assets/js/18.9879de0d.js",
    "revision": "445c94e1cfde99733d75a1386a9b5067"
  },
  {
    "url": "assets/js/19.07691646.js",
    "revision": "7bb8fbf62b413d433f80e9bc1258772a"
  },
  {
    "url": "assets/js/2.590cb2e6.js",
    "revision": "751d2b659f08f666c8a20cf7e4b61f84"
  },
  {
    "url": "assets/js/20.e17b53c6.js",
    "revision": "0c6c78926be11fb5089fa8e49c5e4839"
  },
  {
    "url": "assets/js/21.f09fe41c.js",
    "revision": "d1082fa3d57c58690bf81e9f20979d2a"
  },
  {
    "url": "assets/js/22.76dbf43b.js",
    "revision": "87b4b8bc0fa5e461f80a0a6eff8535be"
  },
  {
    "url": "assets/js/23.1d63cca1.js",
    "revision": "7784244b0414d3a092b0156b2cce5f23"
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
    "url": "assets/js/26.3967ea35.js",
    "revision": "7c14f16ac20cb40a78a1b32d1988947a"
  },
  {
    "url": "assets/js/27.433c4bb7.js",
    "revision": "205af3d1e9ffe0a9c96845d936f90bd9"
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
    "url": "assets/js/30.090dcdd9.js",
    "revision": "cdb8433a9de099d92e8e177ca566db33"
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
    "url": "assets/js/35.d5a6c79a.js",
    "revision": "eebb77d4fe0edb0172b9aaff0ce6f6ed"
  },
  {
    "url": "assets/js/36.7536b3f4.js",
    "revision": "ef9e14cb85de030908870c23a6eac26c"
  },
  {
    "url": "assets/js/37.41f28fea.js",
    "revision": "86ffb7e66ecad3a5e8e2077d118f69c9"
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
    "url": "assets/js/40.3f62d09f.js",
    "revision": "cc123bbb361ef924055ec4c9f452a153"
  },
  {
    "url": "assets/js/41.cabf57f2.js",
    "revision": "658c9de668c6785cd2ee03f32f472256"
  },
  {
    "url": "assets/js/42.a2b556bb.js",
    "revision": "d46a50863cf0643d073dbfe606d39e89"
  },
  {
    "url": "assets/js/43.621ed5e3.js",
    "revision": "303f6430020fecd8f5ce198d52b35b1e"
  },
  {
    "url": "assets/js/44.60f29bfb.js",
    "revision": "656330691c7244d4732fa7cafa35f054"
  },
  {
    "url": "assets/js/45.eb70c8c7.js",
    "revision": "d1fe19c7a9d57e3b3091acc9ef28150d"
  },
  {
    "url": "assets/js/46.4d6efef9.js",
    "revision": "8cd379f15bcd594fe054bc29c0ce0d00"
  },
  {
    "url": "assets/js/47.29924a05.js",
    "revision": "0a56cb78705f0b8c077035195a7cd03d"
  },
  {
    "url": "assets/js/48.13bdbeeb.js",
    "revision": "c5398674b270fcc8e38509b80e55675a"
  },
  {
    "url": "assets/js/49.e62a35ae.js",
    "revision": "39c809d467fc6507f932e5effd14c121"
  },
  {
    "url": "assets/js/5.8ff02f63.js",
    "revision": "c0d2b8cf0a608dc8119fbc948b9e18aa"
  },
  {
    "url": "assets/js/50.50209f2d.js",
    "revision": "05cc6f6e75ed5514a7d1776d0411c4e2"
  },
  {
    "url": "assets/js/51.4e47ab79.js",
    "revision": "13d32bc37058c57b633ad09beeb319e0"
  },
  {
    "url": "assets/js/52.dcc5f128.js",
    "revision": "4964942a376a6d26a6bd6c3686ca4f4a"
  },
  {
    "url": "assets/js/53.1779c154.js",
    "revision": "975bff8054e720786c18f4ad71d265e0"
  },
  {
    "url": "assets/js/54.cf3d1436.js",
    "revision": "72ab23a5aab2824a8b23a253d6623408"
  },
  {
    "url": "assets/js/55.05213c86.js",
    "revision": "40776d71813d59e010e7425c2e231d63"
  },
  {
    "url": "assets/js/56.1e034bd8.js",
    "revision": "1928b5cb507e8a5c0855f7a1a4dfb384"
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
    "url": "assets/js/66.8a1a29d2.js",
    "revision": "a5652429067a68a2c2240a0c207720f8"
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
    "url": "assets/js/7.f2189a15.js",
    "revision": "b7bf9d6a6653c204b0b5270c2c0a9da5"
  },
  {
    "url": "assets/js/70.401b5c15.js",
    "revision": "ae556c690476b8e3cf8e377520087b0d"
  },
  {
    "url": "assets/js/8.785f5792.js",
    "revision": "6e72e148280b96069eb354eb8c2022e5"
  },
  {
    "url": "assets/js/9.ebfcf018.js",
    "revision": "582871de9a3d6d2f0b985e64d42c51b0"
  },
  {
    "url": "assets/js/app.c896c8b6.js",
    "revision": "011ca862692758b413f266942857e015"
  },
  {
    "url": "blog/angular.html",
    "revision": "a979329dfc8b54862d2138a064798caa"
  },
  {
    "url": "blog/ast.html",
    "revision": "a2f001af9917b64837a278e827772c2e"
  },
  {
    "url": "blog/canvas.html",
    "revision": "5664fa5b277f1d030607a9e7ea635f20"
  },
  {
    "url": "blog/console.html",
    "revision": "99029c7a0c0a4222db35d7289d9f9522"
  },
  {
    "url": "blog/csspre.html",
    "revision": "d98ba8fd0c9904658af737d60934932f"
  },
  {
    "url": "blog/deno.html",
    "revision": "894d39434c94f46f481ee15af341f722"
  },
  {
    "url": "blog/docker-compose.html",
    "revision": "5028b5a505ce5d02ff476d0be8dceda9"
  },
  {
    "url": "blog/docker-project.html",
    "revision": "678ab6d064a98ea4ab17c8fc9b32ff7c"
  },
  {
    "url": "blog/docker.html",
    "revision": "8588ab9decfaa0407051d64cd52220b6"
  },
  {
    "url": "blog/echarts.html",
    "revision": "0bc60694baaee364d5eee3dbee580f5e"
  },
  {
    "url": "blog/egg.html",
    "revision": "2c2cee990c13254a8e3512e9b737bad9"
  },
  {
    "url": "blog/electron.html",
    "revision": "c6ea2b7dc33bbd03895de9027a5af3c3"
  },
  {
    "url": "blog/flutter.html",
    "revision": "6b885528ce9b7770b29f856b390a0a2c"
  },
  {
    "url": "blog/g6.html",
    "revision": "5d66161d10afe0b891985f80b9caec3f"
  },
  {
    "url": "blog/git.html",
    "revision": "79653ee26660372158a84ca3ed012c8f"
  },
  {
    "url": "blog/golang.html",
    "revision": "c8ecbecd9e88a54b617d0300483a619c"
  },
  {
    "url": "blog/http.html",
    "revision": "b64ac2aa84d17094d5ecc31aa43e319c"
  },
  {
    "url": "blog/index.html",
    "revision": "27ffe7b2f00d01d22afb58b2280169f9"
  },
  {
    "url": "blog/koa2-learn.html",
    "revision": "81688618ad394febc4c7a2057c6ccba2"
  },
  {
    "url": "blog/map.html",
    "revision": "2e5c8c6f7b34065fb5b14bae83c52b3a"
  },
  {
    "url": "blog/nodecli.html",
    "revision": "05c79e98d1bc89cc894db92145bca46a"
  },
  {
    "url": "blog/nodespider.html",
    "revision": "c4503398388a8dba48afb7ea82640d7d"
  },
  {
    "url": "blog/performance.html",
    "revision": "c1049be02073dc8979e7f71b2c196058"
  },
  {
    "url": "blog/puppeteer.html",
    "revision": "a62cddcf3dad9df80b98bf81347dd40f"
  },
  {
    "url": "blog/react-native.html",
    "revision": "266faa96fd65df51f3beb8d0394a1de8"
  },
  {
    "url": "blog/react.html",
    "revision": "69ff77b7073d9725fd8fcc7209a6a70d"
  },
  {
    "url": "blog/socketio.html",
    "revision": "9913a85d9e2b72711b21c71f221999fa"
  },
  {
    "url": "blog/springboot.html",
    "revision": "794ee12c99db46a13455d65057e21949"
  },
  {
    "url": "blog/taro.html",
    "revision": "e734bd930681d728f5f1b750e035892c"
  },
  {
    "url": "blog/tensorflow.html",
    "revision": "bb055c1155828ca1696b007caf6d3f4a"
  },
  {
    "url": "blog/three.html",
    "revision": "84bf32276cdb1286f12f06372d12fb04"
  },
  {
    "url": "blog/tonejs.html",
    "revision": "d63da90954db71071904a0c6db5428de"
  },
  {
    "url": "blog/tsspider.html",
    "revision": "a85d1a4bb2fecea78c382659203e255c"
  },
  {
    "url": "blog/vue2.html",
    "revision": "7ecf013907000397cb824f469dc82d5e"
  },
  {
    "url": "blog/vue3.html",
    "revision": "cf294e80f626a12cd3c24806dee7bdde"
  },
  {
    "url": "blog/vuepress.html",
    "revision": "d248b921fd8c9a8ced2e2a6e3fabe7f9"
  },
  {
    "url": "blog/vuetestutils.html",
    "revision": "054a11c3b0561ba38cd93a6ac28eb2e4"
  },
  {
    "url": "blog/vuetestutils2.html",
    "revision": "42df164e786b7b0997a2b8ec97ed23c5"
  },
  {
    "url": "blog/webpack.html",
    "revision": "fe380845e3301ba25a15b07cb01a128e"
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
    "revision": "b4a5c5480aa0259819556454d4d4d38f"
  },
  {
    "url": "leecode/index.html",
    "revision": "a95c61ef38e5fd58d246be367984629c"
  },
  {
    "url": "leecode/leecode.html",
    "revision": "e1f1da04fdfdbf304846bfd6b3c7e99b"
  },
  {
    "url": "live2d/wanko/assets/moc/wanko.1024/texture_00.png",
    "revision": "10b7047251205db46fdac7632b5d4642"
  },
  {
    "url": "note/dsaa.html",
    "revision": "169ce27379319d6f994f9756ebd58b03"
  },
  {
    "url": "note/es.html",
    "revision": "d200b49eb473c494250b14b6c6bc867e"
  },
  {
    "url": "note/index.html",
    "revision": "9d22389153e5800c2689e4710cdafb4e"
  },
  {
    "url": "note/lib.html",
    "revision": "7fddcfac72b1e5e9db32f6fcc4dc462a"
  },
  {
    "url": "note/shixi.html",
    "revision": "13d33c66df22933096d60dadca4fbf6b"
  },
  {
    "url": "repo/chatdemo.html",
    "revision": "0dd391b4c5166b83986f2677ae1fff9e"
  },
  {
    "url": "repo/dachuang.html",
    "revision": "6b7c3a351388852884d836c22b062638"
  },
  {
    "url": "repo/electron.html",
    "revision": "5ef13adc7e746bbc95c7b240a912b761"
  },
  {
    "url": "repo/ibf.html",
    "revision": "48c006619f6cfc2af467a2d477a40ebb"
  },
  {
    "url": "repo/index.html",
    "revision": "4d77adba1ce0aa543504c07c758b4583"
  },
  {
    "url": "repo/javaks.html",
    "revision": "760def9629e2f60babae9415cfde8d0a"
  },
  {
    "url": "repo/ksh.html",
    "revision": "3f8e4f77f0d7c9a88d56e00af52fbb99"
  },
  {
    "url": "repo/mddemo.html",
    "revision": "b31400ee544deb49dadddf56002cb443"
  },
  {
    "url": "repo/tenseflow.html",
    "revision": "0c59eee045021f0d4d21ea8016c92472"
  },
  {
    "url": "repo/todo.html",
    "revision": "22df902eb11f2a841ce803a81204a72b"
  },
  {
    "url": "repo/tongji.html",
    "revision": "163f7b89262631a689ef568ff64ace2c"
  },
  {
    "url": "repo/webaudio.html",
    "revision": "5da494d761e1ad241818433c888666a9"
  },
  {
    "url": "repo/wkc.html",
    "revision": "7aef11a6d9ecaab0c4c66023c1553675"
  },
  {
    "url": "road/checklist.html",
    "revision": "25a2149741d2a41721f909d3ff920b58"
  },
  {
    "url": "road/index.html",
    "revision": "a4a90e089710e909f870d85e6cfabe52"
  },
  {
    "url": "road/road.html",
    "revision": "b936b338ec1bd87cc63de935c46cc33d"
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
