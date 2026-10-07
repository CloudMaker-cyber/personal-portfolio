import { profile } from '../data/profile';

/**
 * Monogram —— 名字首字组成的方形标记
 *
 * 全站当"个人 logo"用：导航栏左侧、页脚各出现一次。
 * 用真实首字而不是手绘图形，一是换名字会自动跟着变，
 * 二是不会造出一个和你是谁无关的装饰图案。
 * aria-hidden 表示它是装饰，读屏软件会跳过（旁边已经有完整名字）。
 */
export function Monogram({ className = '' }: { className?: string }) {
  const initial = profile.name.trim().charAt(0) || '?';

  return (
    <span
      aria-hidden="true"
      className={`grid size-7 shrink-0 place-items-center border border-ember/70 font-mono text-[11px] leading-none text-ember ${className}`}
    >
      {initial}
    </span>
  );
}
