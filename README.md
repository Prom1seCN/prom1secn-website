# prom1se.cn

[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)](https://opensource.org/licenses/MIT)

个人网站 · [prom1se.cn](https://prom1se.cn)

**独立开发者 · 自媒体 · 健身**

---

## 技术栈

| 层 | 选择 |
|----|------|
| 页面框架 | Astro 5 (SSR + Static) |
| 交互组件 | React 19 |
| 样式 | Tailwind CSS 3 + 自定义 CSS |
| 博客渲染 | marked + KaTeX (数学公式) |
| 部署 | Node.js + pm2 + Nginx |
| SSL | acme.sh + Let's Encrypt (自动续期) |
| CI/CD | GitHub Actions |

## 特色

- 多引擎搜索框（必应/Google/百度/B站/知乎/GitHub/YouTube）
- 深色/浅色模式切换
- Obsidian 写文章 → Remotely Save Sync → 网站实时上线
- KaTeX 数学公式渲染 $W = F \cdot s$
- 自定义 404 · 光标发光圈 · 键盘快捷键 `/` 聚焦搜索

## 本地开发

```bash
git clone https://github.com/Prom1seCN/prom1secn-website.git
cd prom1secn-website
npm install --legacy-peer-deps
npm run dev
```

浏览器打开 `http://localhost:4321`。博客页面自动读取 `D:\note\PROM1SE\`（本地 Obsidian 仓库）。

## 项目结构

```
src/
├── pages/           # 页面
│   ├── index.astro       # 首页
│   ├── projects.astro    # 项目
│   ├── blog.astro        # 博客列表（SSR）
│   ├── blog/[slug].astro # 文章详情（SSR）
│   ├── about.astro       # 关于
│   ├── 404.astro         # 404
│   └── en/               # 英文版
├── components/       # React 组件
│   ├── SearchBox.tsx     # 多引擎搜索框
│   ├── ThemeToggle.tsx   # 主题切换
│   ├── SocialIcons.tsx   # 社交媒体
│   ├── CursorGlow.tsx    # 光标发光
│   └── ScrollReveal.ts   # 滚动渐入
├── layouts/          # 布局
│   └── BaseLayout.astro
├── styles/           # 样式
│   └── global.css
└── i18n/             # 国际化
    └── translations.ts
```

## License

MIT
