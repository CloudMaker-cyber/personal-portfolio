import { ArrowUpRight } from '@phosphor-icons/react';
import { profile } from '../data/profile';
import { Reveal } from './Reveal';
import { Section } from './Section';

/**
 * Contact —— 联系
 *
 * 版式家族：把邮箱本身排成一句大标题，而不是"卡片里放一个按钮"。
 * 理由：这是全页唯一一次需要访客做决定的地方，值得最大的字号。
 *
 * mailto: 是网页唤起邮件客户端的标准写法，点击不会跳转到别的网站。
 */
export function Contact() {
  return (
    <Section id="contact" title="联系">
      <Reveal>
        <a
          href={`mailto:${profile.email}`}
          className="block max-w-full break-all text-[10vw] leading-[1.1] font-semibold tracking-tight text-ink transition-colors duration-300 hover:text-ember sm:text-5xl lg:text-6xl"
        >
          {profile.email}
        </a>
      </Reveal>

      <Reveal delay={140}>
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-hairline pt-8">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
            >
              {social.label}
              <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
