# 个人作品集网站

唐诗涵的个人作品集，单页静态站点：首屏自我介绍、关于我与技能清单、项目展示、联系方式。

线上地址：https://personal-portfolio-virid-nine-27.vercel.app

## 技术栈

| 用途 | 选择 |
| --- | --- |
| 视图 | React 19（函数组件 + Hooks） |
| 语言 | TypeScript |
| 构建 | Vite 8 |
| 样式 | Tailwind CSS v4（`@theme` 设计令牌） |
| 图标 | @phosphor-icons/react |
| 字体 | Geist / Geist Mono（@fontsource-variable 自托管，不外链第三方 CDN） |

没有引入 UI 组件库，也没有引入动画库。

## 本地运行

需要 Node.js 20.19 以上（开发时用的是 24）。

```bash
npm install
npm run dev        # 本地开发，默认 http://localhost:5173
npm run build      # 类型检查 + 生产构建，产物在 dist/
npm run preview    # 预览构建后的产物
npm run lint       # oxlint 静态检查
```

## 目录结构

```
src/
  data/           全站内容与配置（改文案只动这里）
    profile.ts      个人信息：姓名、定位、简介、邮箱、社交链接
    skills.ts       技能分组
    projects.ts     作品列表（顺序 = 显示顺序，第一条是大版式）
  components/     纯渲染组件，不含任何硬编码文案
  App.tsx         区块组装
  index.css       Tailwind 入口 + 设计令牌 + 滚动进度条动画
public/images/    站点图片
```

## 改内容要动哪个文件

| 想改什么 | 改哪里 |
| --- | --- |
| 名字、职业定位、简介、关于我段落 | `src/data/profile.ts` |
| 邮箱、GitHub 等社交链接 | `src/data/profile.ts` |
| 技能分类与技能名 | `src/data/skills.ts` |
| 增删项目、项目图片与链接、作品顺序 | `src/data/projects.ts` |
| 配色、字体、缓动曲线 | `src/index.css` 的 `@theme` 块 |
| 浏览器标签标题与搜索摘要 | `index.html` |

项目数组清空也不会报错，页面会显示一句"项目还在整理中"。

## 几个实现说明

- **数据与渲染分离**：组件里不写任何面向用户的文案，全部从 `src/data` 读，改内容不需要碰组件。
- **滚动浮现**：`Reveal` 组件用原生 `IntersectionObserver` 监听元素进入视口，触发一次后 `disconnect`；位移和淡入交给 CSS 过渡，JS 不参与逐帧计算。
- **顶部滚动进度条**：纯 CSS 的 `animation-timeline: scroll()`，用 `@supports` 做能力检测，浏览器不支持时整条隐藏；不监听 `scroll` 事件，所以不阻塞主线程。
- **动效可关闭**：以上动画都在 `prefers-reduced-motion` 下降级为直接显示。
- **图片策略**：首屏图 `loading="eager"` + `fetchPriority="high"`，其余 `loading="lazy"`；图片统一压成 JPEG，首屏图约 56 KB。
- **锚点导航**：`href="#about"` 配 `scroll-mt-16` 抵消固定导航的高度，`scroll-behavior: smooth` 提供平滑滚动，没有 JS 滚动逻辑。

## 部署

构建产物是纯静态文件，任何静态托管都能跑。Vercel 配置：

- Framework Preset：Vite（自动识别）
- Build Command：`npm run build`
- Output Directory：`dist`

## 仓库内文档

- `PRD.md`：最初的需求与设计要求
- `TECH_DESIGN.md`：视觉系统与版式决策
- `AGENTS.md`：开发约定
