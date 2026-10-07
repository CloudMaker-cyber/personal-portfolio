import { profile } from '../data/profile';
import { skillGroups } from '../data/skills';
import { Reveal } from './Reveal';
import { Section } from './Section';

/**
 * About —— 关于我
 *
 * 版式家族：标题在上、正文与技能"账本"并排在下。
 * 技能不用卡片包，改用两栏对齐的条目 + 发丝线分隔：
 * 卡片会给每个分组同样的视觉重量，而这里想让三组技能读起来像一份清单。
 */
export function About() {
  return (
    <Section id="about" title="关于我">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-24">
        {/* 左：自我介绍正文。max-w-[52ch] 把每行字数压到好读的范围 */}
        <div className="space-y-6">
          {profile.about.map((paragraph, index) => (
            <Reveal key={index} delay={index * 90}>
              <p className="max-w-[52ch] leading-[1.85] text-muted">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        {/* 右：技能清单。dt 是分类名，dd 是该分类下的具体技能。
            每一行单独包一个 Reveal 并给递增延迟，滚到这里时三行会依次浮起，
            而不是整块一起淡入（整块淡入几乎看不出在动） */}
        <dl className="border-t border-hairline">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.category}
              delay={index * 110}
              className="grid grid-cols-1 gap-2 border-b border-hairline py-6 sm:grid-cols-[9.5rem_1fr] sm:gap-6"
            >
              <dt className="font-mono text-xs text-faint">{group.category}</dt>
              <dd>
                <ul className="flex flex-wrap gap-x-6 gap-y-1.5">
                  {group.items.map((skill) => (
                    <li key={skill} className="text-[15px] text-ink">
                      {skill}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-sm text-faint">{group.description}</p>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </Section>
  );
}
