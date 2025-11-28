import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Neneka448's Blog",
    description: "记录技术、生活和随想",
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '文章', link: '/posts/about-me' },
            { text: 'GitHub', link: 'https://github.com/Neneka448' }
        ],
        sidebar: {
            '/posts/': [
                {
                    text: '最新文章',
                    items: [
                        { text: '关于我与这个博客', link: '/posts/about-me' },
                        { text: 'Markdown 写作测试', link: '/posts/markdown-test' }
                    ]
                }
            ]
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Neneka448' }
        ],
        outline: {
            label: '页面导航'
        }
    }
})