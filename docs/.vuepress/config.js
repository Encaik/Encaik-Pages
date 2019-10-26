module.exports = {
	base: '/',
	dest: 'docs/.vuepress/blog/',
	title: 'Encaik-个人博客',
	description: 'Encaik-个人博客',
	themeConfig: {
		sidebar: 'auto',
		nav: [
			{ text: '首页', link: '/' },
			{ text: '博文', link: '/blog/' },
			{ text: '杂记', link: '/note/' },
			{ text: 'Github', link: 'https://github.com/Encaik' },
		],
		sidebar: {
			'/blog/': [
				'',
			],

			'/note/': [
				'',
				'jinyan'
			],
		},
		sidebarDepth: 2,
		lastUpdated: '发布日期',
	}
}