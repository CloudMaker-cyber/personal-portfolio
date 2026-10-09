/**
 * projects.ts —— 作品列表数据
 *
 * Projects 区块会遍历这个数组，数组顺序 = 页面显示顺序，并且：
 *   第 1 条  ->  大版式（图片占满整行，最重要）
 *   第 2 条起 ->  小版式（上图下文，两列并排）
 * 所以请把最能打的作品放在数组第一位。数组清空也不会报错，
 * 页面会显示一句"项目还在整理中"。
 *
 * 添加新项目：复制下面任意一个对象，改字段即可，不需要动组件。
 * 项目截图：把图片放进 public/images/，image 写成 '/images/xxx.jpg'
 * （开头斜杠代表站点根目录）。留空会显示"待补项目截图"的深色块。
 * 截图必须是真实产品画面，不要用生成图冒充界面。
 */

/** 单个作品 */
export interface Project {
  /** 项目名称 */
  name: string;
  /** 一句话说明这个项目做什么 */
  summary: string;
  /** 2-3 行详情：你的角色、难点、结果 */
  description: string;
  /** 用到的技术栈，渲染成小标签 */
  techStack: string[];
  /** 截图地址（站点根目录路径），空字符串表示用占位块 */
  image: string;
  /** 在线演示地址，没有就留空字符串 */
  demoUrl: string;
  /** 源码地址，没有就留空字符串 */
  repoUrl: string;
}

export const projects: Project[] = [
  {
    name: '个人作品集网站',
    summary: '我自己的作品集站点，是一个从设计做到部署的前端项目。',
    description:
      '整条链路自己走了一遍：文案与数据全部抽到 src/data 下的三个文件，组件只负责渲染，改内容不用动代码；滚动浮现用原生 IntersectionObserver 加 CSS 滚动时间线实现，没有引入动画库；配色、字体、缓动统一写在 Tailwind v4 的 @theme 令牌里，换主题只改一处。',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel'],
    image: '/images/portfolio.jpg',
    // 部署完成后回填线上地址
    demoUrl: '',
    repoUrl: 'https://github.com/CloudMaker-cyber/personal-portfolio',
  },
];
