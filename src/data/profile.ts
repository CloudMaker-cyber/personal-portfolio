/**
 * profile.ts —— 站点"个人身份"信息
 *
 * 以后最常改的文件：把里面的文字换成你自己的即可，组件不用动。
 * 页面上显示的个人信息一句都不写在组件里，全部来自这个对象。
 * Header / Hero / About / Contact / Footer 都会读它。
 */

/** 社交/代码平台链接 */
export interface SocialLink {
  /** 显示名称，例如 "GitHub" */
  label: string;
  /** 完整网址，组件里会直接放进 <a href> */
  url: string;
}

export const profile = {
  /** 名字：浏览器标签、导航栏左侧、首屏大标题、页脚版权都用它 */
  name: '唐诗涵',

  /** 一句话职业定位，显示在首屏名字下方（等宽小字，越短越好） */
  title: '在校学生 · 个人开发者',

  /** 首屏简介段落。控制在两行以内，说清方向 + 现在在做什么 */
  tagline:
    '软件工程专业在读，正在学习 Agent 应用开发。从 Java、Python 打基础，到用 FastAPI 把功能写成能被真实调用的接口。',

  /**
   * "关于我"的正文：每个字符串是一整段，数组顺序就是段落顺序。
   * 这一段建议 1-2 段就够，多了没人读完。
   */
  about: [
    '软件工程专业在读，目前正在主攻 Agent 应用开发，希望做出能真正被人用起来的东西，而不是停在课程作业。',
    '学习路线是先打语言基础、再做工程落地：Java 让我习惯面向对象的抽象与业务建模，Python 用来快速实现想法，FastAPI 负责把这些能力开成前端可以直接调用的接口。',
    '这个作品集是我自己做完的第一个前端项目，从版面设计、组件拆分到构建打包都走了一遍，React、TypeScript、Tailwind CSS 都是在做的过程中学会的。',
  ],

  /**
   * 真实头像/照片。留空字符串时，首屏会退而使用下面的 heroImage。
   * 放法：把图片存进 public/images/（例如 me.jpg），这里写 '/images/me.jpg'。
   * 竖图（3:4 或 4:5）效果最好。
   */
  avatarUrl: '',

  /**
   * 首屏右侧的静物配图（public/images/hero.jpg，AI 生成的暗调书桌图）。
   * 这里当作正式的版面素材使用：它表达的是"深夜写代码"的氛围，
   * 不冒充本人照片，也不冒充产品截图，所以不存在虚假陈述的问题。
   * 以后想换成自己的照片，把路径写进上面的 avatarUrl 即可，这张会自动让位。
   */
  heroImage: '/images/hero.jpg',

  /** 联系邮箱，Contact 区块会生成 mailto 链接 */
  email: 'shihantang2026@outlook.com',

  /** 社交链接列表，增减条目只需改这个数组；不用的平台直接删掉那一行 */
  socials: [{ label: 'GitHub', url: 'https://github.com/CloudMaker-cyber' }] satisfies SocialLink[],
};
