import { projects } from '../data/projects';
import { ProjectFeature, ProjectTile } from './ProjectCard';
import { Reveal } from './Reveal';
import { Section } from './Section';

/**
 * Projects —— 项目展示
 *
 * 版式家族：1 个大版式 + 剩余的小版式两列。
 * 数组第一条自动成为大版式，所以调整作品顺序只要改 data/projects.ts 的排列。
 *
 * 大版式和小版式之间用一条发丝线分开，而不是再套一层卡片边框。
 */
export function Projects() {
  const [featured, ...others] = projects;

  return (
    <Section
      id="projects"
      title="项目"
    >
      {/* 大版式内部已经自己做了分段浮现，这里不再整体包一层。
          数组被清空时 featured 是 undefined，给一句诚实的说明而不是白屏 */}
      {featured ? (
        <ProjectFeature project={featured} />
      ) : (
        <p className="font-mono text-sm text-faint">项目还在整理中，整理好会陆续放上来。</p>
      )}

      {others.length > 0 && (
        <div className="mt-20 border-t border-hairline pt-16">
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
            {others.map((project, index) => (
              <Reveal key={project.name} delay={index * 120} className="h-full">
                <ProjectTile project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
