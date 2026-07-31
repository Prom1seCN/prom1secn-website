export const translations = {
  zh: {
    siteTitle: 'PROM1SE',
    nav: { home: '首页', projects: '项目', blog: '博客', about: '关于' },
    home: {
      greeting: '你好，我是',
      name: '黄程诺',
      tagline: '生活的意义在于最大化体验',
      identities: ['独立开发', '自媒体', '健身'],
      recentPost: '最近文章',
      featuredProjects: '精选项目',
      viewAll: '查看全部',
    },
    about: {
      title: '关于',
      intro: '北京化工大学信息管理与信息系统专业。独立开发者，自媒体人，健身爱好者。',
      intro2: '全网同名 Prom1seCN。正在 Build in Public，用代码和内容构建自己的数字世界。',
      contact: '联系方式',
    },
    projects: {
      title: '项目',
      description: '我构建和正在构建的东西。',
      live: '在线演示',
      source: '源代码',
    },
    blog: {
      title: '博客',
      description: '关于开发、自媒体和生活的思考。',
      noPosts: '还没有文章，敬请期待。',
    },
    footer: {
      builtWith: '用 Astro + React + Tailwind 构建',
      copyright: 'PROM1SE',
    },
    theme: {
      toggle: '切换主题',
    },
    lang: {
      toggle: 'English',
    },
  },
  en: {
    siteTitle: 'PROM1SE',
    nav: { home: 'Home', projects: 'Projects', blog: 'Blog', about: 'About' },
    home: {
      greeting: "Hi, I'm",
      name: 'Huang Chengnuo',
      tagline: 'Maximize life experiences',
      identities: ['Indie Dev', 'Creator', 'Fitness'],
      recentPost: 'Recent Post',
      featuredProjects: 'Featured Projects',
      viewAll: 'View All',
    },
    about: {
      title: 'About',
      intro:
        'Information Management student at BUCT. Indie developer, content creator, fitness enthusiast.',
      intro2:
        'Building in public. Crafting my digital world with code and content. Known as Prom1seCN everywhere.',
      contact: 'Contact',
    },
    projects: {
      title: 'Projects',
      description: 'Things I build and am building.',
      live: 'Live Demo',
      source: 'Source',
    },
    blog: {
      title: 'Blog',
      description: 'Thoughts on development, creating, and life.',
      noPosts: 'No posts yet. Stay tuned.',
    },
    footer: {
      builtWith: 'Built with Astro + React + Tailwind',
      copyright: 'PROM1SE',
    },
    theme: {
      toggle: 'Toggle Theme',
    },
    lang: {
      toggle: '中文',
    },
  },
};

export type Lang = 'zh' | 'en';
export type Translations = typeof translations.zh;
