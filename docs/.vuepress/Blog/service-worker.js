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
    "revision": "f2477dc0f509dc35c445fc75e385e3d3"
  },
  {
    "url": "assets/css/0.styles.d86e72b5.css",
    "revision": "2e052bbd0a7bd12c1e0707746613089c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.54d1713a.js",
    "revision": "47f1fe2d849ba8169cd4c1f009de5017"
  },
  {
    "url": "assets/js/11.ac8a0896.js",
    "revision": "2acd0e1614ac5c20b5282d8d31837c46"
  },
  {
    "url": "assets/js/12.27527816.js",
    "revision": "ac790e28721fd2b0ecb6298ff8e19466"
  },
  {
    "url": "assets/js/13.fada1f20.js",
    "revision": "fc59e5fc8b57ef0e0be75b4552b84343"
  },
  {
    "url": "assets/js/14.fa897bbc.js",
    "revision": "b37ecffd52bdfef9522e8054fedc56b1"
  },
  {
    "url": "assets/js/15.3c83c875.js",
    "revision": "0bf56c96bae12897e6e978f4005d95cc"
  },
  {
    "url": "assets/js/16.e59fea99.js",
    "revision": "50a939ac37a4509c688d4ebe107d5ccd"
  },
  {
    "url": "assets/js/17.bd931464.js",
    "revision": "a7c08cfb978a3ba2d7387ec665e8b373"
  },
  {
    "url": "assets/js/18.ee934170.js",
    "revision": "dbf41af2370fa2f573bbedb4941835bd"
  },
  {
    "url": "assets/js/19.2a83668a.js",
    "revision": "c1aac6b96a41720b18eea377f8c34829"
  },
  {
    "url": "assets/js/2.a5cba7f5.js",
    "revision": "4c57a810202e2bea187a453fa37843bd"
  },
  {
    "url": "assets/js/20.795218c4.js",
    "revision": "cb669df56e0bf56c517e41a5104697d6"
  },
  {
    "url": "assets/js/21.884b2a59.js",
    "revision": "46d13760e613e4b768d36e1d05d9c0e2"
  },
  {
    "url": "assets/js/22.3e91d08f.js",
    "revision": "e7e78a738d6568c75589e8ed2fee1f5b"
  },
  {
    "url": "assets/js/23.79760591.js",
    "revision": "a8285b3d49039b39d529629de6ad2d97"
  },
  {
    "url": "assets/js/24.a00b113f.js",
    "revision": "20de270d988c59f62cca79f7bb403aa4"
  },
  {
    "url": "assets/js/25.a911edca.js",
    "revision": "539abb69e1af88b47fb9c6faf1b82549"
  },
  {
    "url": "assets/js/26.297ca829.js",
    "revision": "ba6fa26f1db3738e5fdde5c272a9f4f5"
  },
  {
    "url": "assets/js/27.ef27b0f0.js",
    "revision": "f6607a74f8f147027bfb5d065ddded57"
  },
  {
    "url": "assets/js/28.a1bd7426.js",
    "revision": "58f1fd8349860586e1aba79969c932ec"
  },
  {
    "url": "assets/js/29.a1c57457.js",
    "revision": "ddd02471d21197f8a37da19dfc3d4186"
  },
  {
    "url": "assets/js/3.675f2b1c.js",
    "revision": "7fd770d93b036b1b91f6649d69a5cd3e"
  },
  {
    "url": "assets/js/30.28e8b928.js",
    "revision": "971c2cdb89485aa8d206922dbe12524b"
  },
  {
    "url": "assets/js/31.0acc698f.js",
    "revision": "5e87471ee12c9d675c7a5ceb36692a92"
  },
  {
    "url": "assets/js/32.e3177269.js",
    "revision": "2f24864f97a2981d223ea3c44c4c44fe"
  },
  {
    "url": "assets/js/33.883e83fb.js",
    "revision": "d80f4bedc5547d55f776e03897945602"
  },
  {
    "url": "assets/js/34.2814e88a.js",
    "revision": "d4a5b52ccd3d0f969576eacfec123088"
  },
  {
    "url": "assets/js/35.d25ac460.js",
    "revision": "29ad0fa7e5457d56b88c9b399b1b453d"
  },
  {
    "url": "assets/js/36.c6ce2c7a.js",
    "revision": "6162588a0e86273f2a3aeaa23aad9586"
  },
  {
    "url": "assets/js/37.e5818683.js",
    "revision": "3415d5259ebb0f74fdd9580a731bbcf4"
  },
  {
    "url": "assets/js/38.36440d80.js",
    "revision": "1569bbd96304225d3537f1014f53fe8e"
  },
  {
    "url": "assets/js/39.69655e60.js",
    "revision": "940d58edb991acdf752d5c33a6b906ae"
  },
  {
    "url": "assets/js/4.154f069f.js",
    "revision": "6a6532a585091bbae032293af216a0e1"
  },
  {
    "url": "assets/js/40.2782da6d.js",
    "revision": "139817f20f676ae63a9382e9644fa677"
  },
  {
    "url": "assets/js/41.0101b9c7.js",
    "revision": "02f3ad6a30633ca5fc8d1827cf7430e0"
  },
  {
    "url": "assets/js/42.02301c7b.js",
    "revision": "5b082274c4d699d104ff3ff521b91d08"
  },
  {
    "url": "assets/js/43.41cf74eb.js",
    "revision": "40e268d9378f89855d87a0684047f757"
  },
  {
    "url": "assets/js/44.c3caec8b.js",
    "revision": "518c2a9a405673e7d947dd21e7bf81bd"
  },
  {
    "url": "assets/js/45.7bc11f5a.js",
    "revision": "9db95bb62e1ada090af44d04ae3c32c4"
  },
  {
    "url": "assets/js/46.b6fda013.js",
    "revision": "523b763ddbb8815be3783bd85fbbc154"
  },
  {
    "url": "assets/js/47.79eee1b6.js",
    "revision": "6c31ad36f530c51e6281acdbc591a88d"
  },
  {
    "url": "assets/js/48.63963105.js",
    "revision": "3f938b2f5326d310d08470a8d98e0efc"
  },
  {
    "url": "assets/js/5.081a9547.js",
    "revision": "03c521aa1347a248aba6f4e8a5d9ce4e"
  },
  {
    "url": "assets/js/6.50d5a1ff.js",
    "revision": "24d1d7192362b64005e7d4e1433ad854"
  },
  {
    "url": "assets/js/7.e5a32f2e.js",
    "revision": "882fd1f64640b9c04bc6e40f065439bb"
  },
  {
    "url": "assets/js/8.9cb39557.js",
    "revision": "d83bfa8fa8ab4efe61f1b94db78ee70f"
  },
  {
    "url": "assets/js/9.0ea00540.js",
    "revision": "7b0096673e7b615468cf64bc1db1b626"
  },
  {
    "url": "assets/js/app.10a5ea0c.js",
    "revision": "56bf7fa6f3d039299d989debc9854439"
  },
  {
    "url": "blog/angular-learn.html",
    "revision": "cbfd57926837938194b59455bde67523"
  },
  {
    "url": "blog/docker-compose.html",
    "revision": "e054b4266bff987cdd079b4272a41a01"
  },
  {
    "url": "blog/docker-project.html",
    "revision": "886c7aa3999db8c00c9a0e2e59ad1c78"
  },
  {
    "url": "blog/docker.html",
    "revision": "e1b8463d3310676aae11b2e68b5a77bd"
  },
  {
    "url": "blog/egg.html",
    "revision": "3061c7001188ec0712485b0acbe9bb85"
  },
  {
    "url": "blog/flutter.html",
    "revision": "a72507af7e42f1a228ebaa71c879f19b"
  },
  {
    "url": "blog/git.html",
    "revision": "2828bdeca9674b536d228fe85bf14ac1"
  },
  {
    "url": "blog/golang-learn.html",
    "revision": "b4fe405b42b3e0975da935147c30f234"
  },
  {
    "url": "blog/http.html",
    "revision": "9fbbee1476e6daa2d45c86182165690c"
  },
  {
    "url": "blog/index.html",
    "revision": "8e3a4c5d4ab8d4d84c5c0374772f16dc"
  },
  {
    "url": "blog/koa2-learn.html",
    "revision": "566248ca979affe8e91c9ec0d4c99c29"
  },
  {
    "url": "blog/map.html",
    "revision": "67a4f1c2e6c0c895fbca5fd479c23d72"
  },
  {
    "url": "blog/react-native.html",
    "revision": "73d44e4e0a4b26a53f6dc83538b230c1"
  },
  {
    "url": "blog/react.html",
    "revision": "02dcdbd02ea4ed7d6219eb58dc26f3ad"
  },
  {
    "url": "blog/tensorflow.html",
    "revision": "260e16078543ff5e6d5f2458fcaaae7a"
  },
  {
    "url": "blog/tonejs.html",
    "revision": "6df9cfb9927f982057be4b0601950f46"
  },
  {
    "url": "blog/typescript.html",
    "revision": "eed6dbc3f91b03e3cb5add938580099b"
  },
  {
    "url": "blog/vue2.html",
    "revision": "cdc929f7e4177c9852d851b678361804"
  },
  {
    "url": "blog/vue3.html",
    "revision": "3cb77a9a7b2ba68eb2465d05e93d324b"
  },
  {
    "url": "blog/vuepress.html",
    "revision": "3aa72824f04ed5a7a9a16af21c1b4444"
  },
  {
    "url": "blog/vuetestutils.html",
    "revision": "7f1a527bf7e2d33eb3b9ee5ab48d125e"
  },
  {
    "url": "blog/vuetestutils2.html",
    "revision": "cadd3498f4512e0872e9870b3601010d"
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
    "url": "img/blog/index.png",
    "revision": "868390fd77432b68d11d8e51e6c123ae"
  },
  {
    "url": "img/blog/vue2-1.png",
    "revision": "b94d747fd273ec8224e6349f701430fd"
  },
  {
    "url": "img/head.png",
    "revision": "1d63007c50600ffe77c7ee33941c05f5"
  },
  {
    "url": "img/lib/1.jpg",
    "revision": "6ad4006ec1463a5aae57f4785c7a6e7d"
  },
  {
    "url": "img/lib/10.jpg",
    "revision": "0e69eb43df3bf56ae97858880aa98cdb"
  },
  {
    "url": "img/lib/11.jpg",
    "revision": "4447cc47a188da88e69fb443133c1045"
  },
  {
    "url": "img/lib/12.jpg",
    "revision": "ee7ea6642cbf8e61c3a841a8a2cc8ade"
  },
  {
    "url": "img/lib/13.jpg",
    "revision": "d9a0dc024b761a4f7d12e397660505b4"
  },
  {
    "url": "img/lib/14.jpg",
    "revision": "0b09b8bfafee9a8e5f868be181af23b1"
  },
  {
    "url": "img/lib/15.jpg",
    "revision": "2da4210defa2aca8946e24e5d1cf9f34"
  },
  {
    "url": "img/lib/2.jpg",
    "revision": "0c2d627860aa5933bd09f72f05d8c461"
  },
  {
    "url": "img/lib/3.jpg",
    "revision": "88d39d672847babf985c6f744568c405"
  },
  {
    "url": "img/lib/4.jpg",
    "revision": "c15949edbd4674e980be1582328e5b2d"
  },
  {
    "url": "img/lib/5.jpg",
    "revision": "21351def59f945c08c82558da56623ce"
  },
  {
    "url": "img/lib/6.jpg",
    "revision": "db13f7e648f6bc69abfc3edf18f42da3"
  },
  {
    "url": "img/lib/7.jpg",
    "revision": "2a25e93275b1f85ce324cef724877a3b"
  },
  {
    "url": "img/lib/8.jpg",
    "revision": "7e9e8e2f2f67f5f0fa636bec3a80d141"
  },
  {
    "url": "img/lib/9.jpg",
    "revision": "fc6c290cff5208e2e9af8b3dbd751042"
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
    "revision": "37867e5e3a8cd011d416120ad98c9d60"
  },
  {
    "url": "live2d/hijiki/assets/moc/hijiki.2048/texture_00.png",
    "revision": "817ca52e35fef3ef3a452127d1c88f43"
  },
  {
    "url": "note/dsaa.html",
    "revision": "7a4624baf0138159010c85ac53f59f46"
  },
  {
    "url": "note/es.html",
    "revision": "6991c94c37ad0aca338c287b06ccd224"
  },
  {
    "url": "note/index.html",
    "revision": "ea2c573734dbaa059175c55f21849441"
  },
  {
    "url": "note/jinyan.html",
    "revision": "0b93c2bb1a38b3347baaab017d033cd8"
  },
  {
    "url": "note/lib.html",
    "revision": "0d1bcd2fa7e347e49e973ccb368ca237"
  },
  {
    "url": "repo/dachuang.html",
    "revision": "83f350c414b12a41b8bfc179b2e2284d"
  },
  {
    "url": "repo/electron.html",
    "revision": "87236b2803713637d1f598b160ffc78c"
  },
  {
    "url": "repo/ibf.html",
    "revision": "68db3863ff59bbff172ba0605c2209f7"
  },
  {
    "url": "repo/index.html",
    "revision": "f1e8766e6c3fe8094ddbec9903552415"
  },
  {
    "url": "repo/javaks.html",
    "revision": "ef443ece859127d5de94c381b6285ed0"
  },
  {
    "url": "repo/tenseflow.html",
    "revision": "f6acb0b0646937e05e2b19b00af3d575"
  },
  {
    "url": "repo/todo.html",
    "revision": "de9cfa2bc10918bf8ef6406e8534cc13"
  },
  {
    "url": "repo/tongji.html",
    "revision": "c930540122868991e1e07c3a6eac6a9e"
  },
  {
    "url": "repo/webaudio.html",
    "revision": "5a164a4b0e76f481768e79d26795245c"
  },
  {
    "url": "repo/wkc.html",
    "revision": "b47aeabfde1487c1d73f3bea88cb2e0b"
  },
  {
    "url": "road/checklist.html",
    "revision": "f41f013e56745b5a2ade7e137f9ae25f"
  },
  {
    "url": "road/index.html",
    "revision": "290925ebf5444aa45e098c28661a77fa"
  },
  {
    "url": "road/road.html",
    "revision": "5aac215b307cd57e606d8602b325e5ba"
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
