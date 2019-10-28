module.exports = {
    base: '/',
    dest: 'docs/.vuepress/blog/',
    title: 'Encaik-个人博客',
    description: 'Encaik-个人博客',
    head: [
        ['link', {
            rel: 'icon',
            href: '/img/favicon.ico'
        }]
    ],
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
            ],

            '/note/': [
                '',
                'jinyan'
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
            ],
        },
        sidebarDepth: 2,
        lastUpdated: '发布日期',
    }
}
