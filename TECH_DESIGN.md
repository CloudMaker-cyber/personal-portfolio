# 技术设计

## 技术栈
- React 19 + TypeScript + Vite
- Tailwind CSS v4（`@tailwindcss/vite` 插件，设计令牌写在 `src/index.css` 的 `@theme`）
- 字体：`@fontsource-variable/geist` + `geist-mono`（自托管，在 `src/main.tsx` 里 import）
- 图标：`@phosphor-icons/react`（只用这一套，统一 `weight="regular"`）
- 动画：原生 IntersectionObserver + CSS transition（`Reveal.tsx`），
  滚动进度条用纯 CSS 的 `animation-timeline: scroll()`，不引入动画库
- 单页长滚动，不用 React Router：区块跳转靠锚点链接（`#about` 等）

## 视觉系统（改样式前先读这段）
| 维度 | 规定 | 落点 |
| --- | --- | --- |
| 主题 | 全站深色，只有一个主题，不分区段反色 | `index.css` 的 `@theme` |
| 底色 | canvas `#0a0a0a` / surface `#101011` / hairline `#232326` | 同上 |
| 文字 | ink `#f4f4f5`（不用纯白）/ muted / faint 三级 | 同上 |
| 强调色 | 全站只有 ember→amber 一组，任何地方都不加第二种彩色 | `--color-ember` |
| 圆角 | 全部直角（0），不用 `rounded-*` | 各组件 |
| 分组方式 | 发丝线 + 留白，不套卡片边框 | About / Projects / Contact |
| 字号 | 标题 Geist 半粗 + `tracking-tight`，小标签与数字用 Geist Mono | 各组件 |

## 四个区块用四种版式（避免"每段长得一样"）
1. Hero：左文右图非对称两栏（`1.15fr / 0.85fr`），图片撑满整屏高
2. 关于我：标题在上，下方左正文右技能清单（`dl` 两栏 + 发丝线）
3. 项目：第 1 条大版式（图上文下、双栏文字），第 2 条起小版式两列
4. 联系：邮箱本身排成页面最大的一处文字

## 项目结构
src/
  components/
    Header.tsx      固定导航（64px 高）+ 移动端菜单 + 滚动进度条
    Monogram.tsx    名字首字的方形标记，导航栏与页脚共用
    Hero.tsx        首屏
    Section.tsx     区块外壳：宽度/留白/锚点 id/scroll-mt/标题排版
    About.tsx       关于我
    ProjectCard.tsx 导出 ProjectFeature（大版式）与 ProjectTile（小版式）
    Projects.tsx    把数组第一条交给大版式，其余给小版式
    Contact.tsx     联系
    Footer.tsx      页脚
    Reveal.tsx      滚动进入视口时淡入上移
  data/
    profile.ts      姓名、定位、简介、关于我段落、图片、邮箱、社交链接
    skills.ts       技能分组
    projects.ts     作品列表（顺序 = 显示顺序，第一条是大版式）
  App.tsx           组装区块
  main.tsx          React 挂载入口 + 字体引入
  index.css         Tailwind 引入 + 全部设计令牌 + 进度条动画

public/
  images/           hero.jpg 与 project-1/2/3.jpg（AI 生成的占位视觉，待替换）

## 图片策略
- 首屏图 `loading="eager"` + `fetchPriority="high"`（它是首屏最大元素，优先加载）
- 其余图片 `loading="lazy"`
- 全部压成 JPEG（宽 900-1400px，质量 78），四张合计约 190 KB
- hero.jpg 作为正式静物配图使用（表达氛围，不冒充本人照片或产品截图）；project-1/2/3.jpg 仍是临时素材，**项目截图必须是真实产品画面**，发布前替换

## 换素材时要改哪里
| 想改什么 | 改哪个文件 |
| --- | --- |
| 名字、定位、简介、关于我段落、邮箱、社交链接 | `src/data/profile.ts` |
| 技能分类与技能名 | `src/data/skills.ts` |
| 增删项目、项目图片与链接、作品顺序 | `src/data/projects.ts` |
| 配色、字体、缓动曲线 | `src/index.css` 的 `@theme` |
| 导航项文字与锚点 | `src/components/Header.tsx` 的 `navItems` |
| 浏览器标签标题与搜索摘要 | `index.html` |
