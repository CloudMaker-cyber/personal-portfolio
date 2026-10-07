/**
 * skills.ts —— 技能清单数据
 *
 * About 区块会遍历这个数组渲染分组卡片。
 * 想加一项技能就在对应分类的 items 里加一个字符串；想加一整块分类，
 * 照着现有对象再写一条即可，组件不用改。
 */

/** 一个技能分组 */
export interface SkillGroup {
  /** 分组名，例如 "前端" */
  category: string;
  /** 分组副标题，用一句话说明这组技能解决什么问题 */
  description: string;
  /** 具体技能名列表 */
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: '后端基础',
    description: '先学语言、再学框架，能独立写出带业务逻辑的接口服务',
    items: ['Java', 'Python', 'FastAPI'],
  },
  {
    category: '前端与交付',
    description: '本作品集就是这套技术栈做的，从组件拆分到构建上线全程自己走',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Git'],
  },
  {
    category: '正在学习',
    description: '当前主攻方向，同时补大模型应用工程化的知识',
    items: ['Agent 应用开发'],
  },
];
