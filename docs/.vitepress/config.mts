import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

// 分类配置
const categories = {
    tech: '技术分享',
    life: '生活随想'
}

// 递归扫描目录获取所有文章
function scanPosts(dir: string, baseLink: string = '/posts') {
    const items: any[] = []
    const entries = fs.readdirSync(dir, { withFileTypes: true })

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name)
        if (entry.isDirectory()) {
            // 子目录作为分类
            const subItems = scanPosts(fullPath, `${baseLink}/${entry.name}`)
            if (subItems.length > 0) {
                items.push({
                    text: categories[entry.name] || entry.name,
                    collapsed: false,
                    items: subItems
                })
            }
        } else if (entry.name.endsWith('.md')) {
            const content = fs.readFileSync(fullPath, 'utf-8')
            const titleMatch = content.match(/^#\s+(.+)$/m)
            const title = titleMatch ? titleMatch[1] : entry.name.replace('.md', '')
            items.push({
                text: title,
                link: `${baseLink}/${entry.name.replace('.md', '')}`
            })
        }
    }
    return items
}

// 自动扫描 posts 目录生成侧边栏
function getPostsSidebar() {
    const postsDir = path.resolve(__dirname, '../posts')
    return scanPosts(postsDir)
}

export default defineConfig({
    title: "SoyoAnon's Blog",
    description: "记录技术、生活和随想",
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '技术', link: '/posts/tech/markdown-test' },
            { text: '生活', link: '/posts/life/about-me' },
            { text: 'GitHub', link: 'https://github.com/Neneka448' }
        ],
        sidebar: {
            '/posts/': getPostsSidebar()
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Neneka448' }
        ],
        outline: {
            label: '页面导航'
        }
    }
})