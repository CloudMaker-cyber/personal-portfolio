/**
 * projects.ts —— 作品列表数据
 *
 * Projects 区块会遍历这个数组，数组顺序 = 页面显示顺序，并且：
 *   第 1 条  ->  大版式（左图右文，占据整行，最重要）
 *   第 2 条起 ->  小版式（上图下文，两列并排）
 * 所以请把最能打的作品放在数组第一位。
 *
 * 添加新项目：复制下面任意一个对象，改字段即可，不需要动组件。
 * 项目截图：把图片放进 public/images/，image 写成 '/images/xxx.jpg'
 * （开头斜杠代表站点根目录）。留空会显示深色占位块。
 * 现在这三张图是 AI 生成的抽象占位视觉，不是真实产品截图，发布前必须替换。
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
    name: '示例项目 A',
    summary: '占位项目，用于展示大版式（首位）的效果。',
    description:
      '替换建议：写清楚项目解决什么问题、你负责哪部分、上线后的结果。有具体数字最有说服力。',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '/images/project-1.jpg',
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/your-name/example-a',
  },
  {
    name: '示例项目 B',
    summary: '占位项目，用于展示小版式（第二位起）的效果。',
    description: '技术栈标签数量可随意增减，版面会自动适配。建议每条 3-5 个。',
    techStack: ['Vue', 'Node.js', 'MySQL'],
    image: '/images/project-2.jpg',
    demoUrl: '',
    repoUrl: 'https://github.com/your-name/example-b',
  },
  {
    name: '示例项目 C',
    summary: '占位项目，演示只有源码链接、没有在线演示的情况。',
    description: 'demoUrl 留空时只显示「查看源码」；两个链接都留空则不显示链接行。',
    techStack: ['Python', 'FastAPI'],
    image: '/images/project-3.jpg',
    demoUrl: '',
    repoUrl: 'https://github.com/your-name/example-c',
  },
];
