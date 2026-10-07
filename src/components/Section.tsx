import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

/**
 * Section —— 区块公共外壳
 *
 * 只负责三件每个区块都必须一致的事：
 * 1. 统一的宽度与左右留白（max-w-[1400px] + px-6）
 * 2. 统一的锚点 id 和 scroll-mt-16：页面顶部导航是 64px 高的固定栏，
 *    点击"项目"跳转后如果不留这 64px，区块标题会被导航盖住一半。
 * 3. 统一的标题排版：大标题 + 一小段引导语（可选），全部左对齐、上下堆叠。
 *
 * 每个区块内部长什么样（两栏？大版式？）由各自的组件决定，这里不干预，
 * 这样四个区块才能用四种不同的版式而不会看起来一模一样。
 */
interface SectionProps {
  /** 区块唯一标识，必须与 Header 里 href 的 #xxx 对应 */
  id: string;
  /** 区块标题 */
  title: string;
  /** 标题下方的一句话引导语，可不传 */
  lead?: string;
  children: ReactNode;
}

export function Section({ id, title, lead, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-[1400px] scroll-mt-16 px-6 py-24 lg:py-32">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        <div aria-hidden="true" className="mt-5 h-px w-10 bg-ember" />
        {lead && <p className="mt-6 max-w-[52ch] leading-relaxed text-muted">{lead}</p>}
      </Reveal>

      <div className="mt-14">{children}</div>
    </section>
  );
}
