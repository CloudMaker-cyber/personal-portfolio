import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Reveal —— 滚动进入视口时"淡入 + 上移"的通用动画容器
 *
 * 用法：把任何想加动画的内容用它包一层即可，这就是"可复用组件"：
 *   <Reveal>要浮现的内容</Reveal>
 *   <Reveal delay={150}>比上一块晚 0.15 秒出现，形成错落感</Reveal>
 *
 * 实现思路（不装第三方动画库）：
 * 1. 浏览器提供 IntersectionObserver API，可以告诉我们"某个元素是否滚进了屏幕"。
 * 2. 组件挂载时先把自己注册给这个观察器，并保持完全透明、向下偏移。
 * 3. 一旦元素进入视口，就把状态改成"已出现"，配合 CSS transition 产生动画。
 * 4. 只播放一次：出现后立即取消观察，避免来回滚动时反复闪动。
 */
interface RevealProps {
  children: ReactNode;
  /** 动画延迟（毫秒）。同一区块内给不同卡片设置不同值，可错开出现时间 */
  delay?: number;
  /** 额外的布局类名，例如让外层变成栅格的一格：className="h-full" */
  className?: string;
}

export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  /** 指向真实 DOM 节点，观察器需要它才能知道这块内容在哪里 */
  const elementRef = useRef<HTMLDivElement>(null);
  /**
   * 是否已经出现过：唯一驱动动画的状态。
   * useState 里传函数表示"只在组件第一次创建时算一次初始值"，
   * 这里顺便判断系统是否开启了"减少动态效果"，开启就直接视为已显示（不做动画）。
   */
  const [isVisible, setIsVisible] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const element = elementRef.current;
    // 元素还没挂上，或已经是显示状态（含"减少动态效果"的情况），都不需要观察
    if (!element || isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // 只关心第一个（也就是自己）；isIntersecting 为 true 表示已进入视口
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // 播放一次就够，顺便释放资源
        }
      },
      // 元素露出 15% 就开始动画，不必等它完全进入屏幕
      { threshold: 0.15 }
    );

    observer.observe(element);
    // 组件卸载（或 isVisible 变化）时清理，防止内存泄漏（React 里的固定写法）
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={elementRef}
      // 未出现：透明 + 下移 24px；出现：不透明 + 归位。
      // 注意过渡属性要写 translate 而不是 transform：Tailwind v4 的 translate-y-*
      // 生成的是 CSS 独立的 translate 属性，写 transform 会完全不动（只剩淡入）。
      // 只动 opacity 和 translate 这两项走显卡合成，不会引起重排。
      // ease-out-expo 是 index.css 里定义的缓动曲线：起步快、收尾慢，手感更稳
      className={`transition-[opacity,translate] duration-[750ms] ease-out-expo motion-reduce:transition-none ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
