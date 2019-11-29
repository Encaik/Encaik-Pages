module.exports = {
    base: '/',
    dest: 'docs/.vuepress/blog/',
    title: 'Encaik-个人博客',
    description: 'Encaik-个人博客',
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/json/manifest.json' }],
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
            link: '/repo/wkc'
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
                'vuepress2',
                'koa2-learn',
                'docker',
                'docker-compose',
                'docker-project',
                'react',
                'react-native'
            ],

            '/note/': [
                '',
                'jinyan',
                'lib'
            ],
            '/repo/': [
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
                'road'
            ],
        },
        sidebarDepth: 2,
        lastUpdated: '发布日期',
    },
    plugins: [
        ['@vuepress/google-analytics', {
            ga: 'UA-151184644-1'//你的Google Analytics ID
        }],
    ]
}
