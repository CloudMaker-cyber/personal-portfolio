import { ArrowUp } from '@phosphor-icons/react';
import { profile } from '../data/profile';
import { Monogram } from './Monogram';

/**
 * 年份在组件外面算一次：渲染过程里不去做"取当前时间"这类外部操作，
 * 这是 React 的一条规矩（渲染结果应当只由数据决定）。
 */
const currentYear = new Date().getFullYear();

/**
 * Footer —— 页脚
 *
 * 一行收尾：左边是谁、用什么做的，右边一个回到顶部的链接。
 * 不放版本号、不放"最后更新时间"这类装饰性信息。
 */
export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 px-6 py-10 text-sm text-faint sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <Monogram />
          <span>
            © {currentYear} {profile.name}
          </span>
        </div>

        <div className="flex items-center gap-8">
          <span>React + TypeScript + Tailwind CSS</span>
          <a href="#home" className="group inline-flex items-center gap-1.5 transition-colors hover:text-ink">
            回到顶部
            <ArrowUp size={14} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
