module.exports = {
	base: '/Blog/',
	dest: 'docs/.vuepress/Blog/',
	title: 'Encaik个人主页',
	description: 'Encaik的个人主页',
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
			],
		},
		sidebarDepth: 2,
		lastUpdated: '发布日期',
	}
}