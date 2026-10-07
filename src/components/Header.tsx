import { useState } from 'react';
import { List, X } from '@phosphor-icons/react';
import { profile } from '../data/profile';
import { Monogram } from './Monogram';

/**
 * Header —— 顶部固定导航
 *
 * 三件事：
 * 1. 左侧个人标记 + 名字，点击回到首屏（锚点 #home）。
 * 2. 右侧导航：桌面端一行排开，手机端收进汉堡按钮。
 *    锚点跳转的原理是 <a href="#about"> 对应某个区块的 id="about"，
 *    index.css 里的 scroll-behavior: smooth 让它变成平滑滚动。
 * 3. 底部那条渐变细线是滚动进度条，纯 CSS 实现（见 index.css 的 .scroll-progress），
 *    没有监听 scroll 事件，所以不会拖慢滚动。
 *
 * 高度固定 64px（h-16），导航永远只占一行。
 */
const navItems = [
  { label: '首页', href: '#home' },
  { label: '关于', href: '#about' },
  { label: '项目', href: '#projects' },
  { label: '联系', href: '#contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // 菜单展开时把背景改成不透明，否则半透明的栏会让下面的正文透上来，菜单文字读不清
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-hairline backdrop-blur ${
        isMenuOpen ? 'bg-canvas' : 'bg-canvas/85'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="group flex items-center gap-3">
          <Monogram />
          <span className="text-[15px] font-medium tracking-tight text-ink">{profile.name}</span>
        </a>

        {/* 桌面端导航（手机端整块隐藏） */}
        <nav aria-label="主导航" className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted underline-offset-8 transition-colors hover:text-ink hover:underline hover:decoration-ember/70"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="切换导航菜单"
          aria-expanded={isMenuOpen}
          className="-mr-2 p-2 text-muted transition-colors hover:text-ink md:hidden"
        >
          {isMenuOpen ? <X size={20} weight="regular" /> : <List size={20} weight="regular" />}
        </button>
      </div>

      {/* 手机端下拉菜单 */}
      {isMenuOpen && (
        <nav aria-label="移动端导航" className="border-t border-hairline px-6 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block border-b border-hairline py-4 text-sm text-muted last:border-b-0 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}

      <div aria-hidden="true" className="scroll-progress h-px w-full bg-gradient-to-r from-ember to-amber" />
    </header>
  );
}
