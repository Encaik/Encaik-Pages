module.exports = {
  base: '/',
  dest: 'docs/.vuepress/blog/',
  title: 'Encaik-个人博客',
  description: 'Encaik-个人博客',
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/json/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#fff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/favicon.ico' }],
    ['link', { rel: 'mask-icon', href: '/img/favicon.ico', color: '#fff' }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#fff' }]
  ],
  serviceWorker: true,
  themeConfig: {
    sidebar: 'auto',
    nav: [{
      text: '首页',
      link: '/'
    },
    {
      text: '博文',
      link: '/blog/'
    },
    {
      text: '杂记',
      link: '/note/'
    },
    {
      text: '项目',
      link: '/repo/'
    },
    {
      text: '学习路径',
      link: '/road/'
    },
    {
      text: 'Github',
      link: 'https://github.com/Encaik'
    },
    {
      text: '码云',
      link: 'https://gitee.com/encaik'
    }
    ],
    sidebar: {
      '/blog/': [
        '',
        'tensorflow',
        'git',
        'vuepress',
        'koa2-learn',
        'docker',
        'docker-compose',
        'docker-project',
        'react',
        'react-native',
        'typescript',
        'vuetestutils',
        'vuetestutils2',
        'egg',
        'flutter',
        'tonejs',
        'vue2',
        'vue3',
        'angular-learn',
        'golang-learn',
        'map',
        'http'
      ],

      '/note/': [
        '',
        'es',
        'dsaa',
        'jinyan',
        'lib'
      ],
      '/repo/': [
        '',
        'wkc',
        'javaks',
        'tongji',
        'tenseflow',
        'ibf',
        'dachuang',
        'todo',
        'webaudio',
        'electron',
      ],
      '/road/': [
        '',
        'checklist',
        'road'
      ],
    },
    sidebarDepth: 2,
    lastUpdated: '发布日期',
  },
  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-151184644-1'
    }],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/back-to-top'],
    ['@vuepress-reco/vuepress-plugin-loading-page'],
    ['vuepress-plugin-helper-live2d', {
        // 是否开启控制台日志打印(default: false)
        log: false,
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: 'hijiki',
          display: {
            position: "right", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8 // 模型透明度(default: 0.8)
          }
        }
      }
    ]
  ]
}
