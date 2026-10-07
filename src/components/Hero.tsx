import { profile } from '../data/profile';
import { Reveal } from './Reveal';

/**
 * Hero —— 首屏
 *
 * 版式：左文右图的非对称两栏（1.15 : 0.85），文字左对齐。
 * 手机端两栏会自然叠成上下排列，图片换成 4:5 竖版比例。
 *
 * 两个容易忽略的技术点：
 * 1. 用 min-h-[100dvh] 而不是 h-screen。dvh 是"动态视口高度"，
 *    手机浏览器地址栏收起/展开时它会跟着变，画面不会跳动。
 * 2. 首屏这张图是用户最先看到的大元素，所以写成 loading="eager" +
 *    fetchPriority="high"（优先加载），反而不能懒加载。
 *    懒加载只用在下方那些要滚动才出现的图片上。
 */
export function Hero() {
  // 有本人照片就优先用照片，没有则使用静物配图（两种情况的 alt 文案不同）
  const image = profile.avatarUrl || profile.heroImage;
  const hasOwnPhoto = Boolean(profile.avatarUrl);

  return (
    <section id="home" className="min-h-[100dvh] pt-16">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:py-0">
        {/* 文字区 */}
        <div className="max-w-2xl">
          <Reveal>
            <h1 className="text-4xl leading-[1.15] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              你好，我是
              <span className="text-ember">{profile.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-5 font-mono text-sm text-muted">{profile.title}</p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-[46ch] leading-relaxed text-muted">{profile.tagline}</p>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="bg-gradient-to-r from-ember to-amber px-6 py-3 text-sm font-medium text-canvas transition-[translate,opacity] duration-200 ease-out-expo hover:opacity-90 active:translate-y-[1px]"
              >
                看我的项目
              </a>
              <a
                href="#contact"
                className="border border-hairline px-6 py-3 text-sm text-muted transition-[border-color,color,translate] duration-200 hover:border-ember/60 hover:text-ink active:translate-y-[1px]"
              >
                联系
              </a>
            </div>
          </Reveal>
        </div>

        {/* 图片区：桌面端撑满整屏高度，手机端给固定竖版比例 */}
        <Reveal delay={160} className="lg:h-[100dvh]">
          <figure className="relative h-[420px] w-full overflow-hidden sm:h-[520px] lg:h-full">
            <img
              src={image}
              alt={hasOwnPhoto ? `${profile.name} 的照片` : '站点配图：夜晚的书桌与台灯'}
              loading="eager"
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
            {/* 左下一条向背景过渡的暗角，让图片不至于生硬地切在边界上 */}
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-tr from-canvas via-canvas/10 to-transparent" />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
