import { ArrowUpRight } from '@phosphor-icons/react';
import type { Project } from '../data/projects';
import { Reveal } from './Reveal';

/**
 * 项目展示块：同一个数据（Project）的两种版式
 *
 * ProjectFeature —— 大版式，给数组里第一条，图片在左、文字在右，占满整行。
 * ProjectTile    —— 小版式，图片在上、文字在下，两个并排。
 *
 * 为什么要两种：三张一模一样的卡片是最典型的模板感来源。
 * 把最重要的那个作品放大一档，读的人立刻知道该先看哪里。
 *
 * 两个版式都遵守同一套规则：直角（不加圆角）、发丝线分隔、强调色只用 ember。
 */

/** 技术栈 + 链接行，两种版式共用 */
function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
      <ul className="flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-xs text-faint">
        {project.techStack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <div className="flex items-center gap-6">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-sm text-ember hover:text-amber"
          >
            在线演示
            <ArrowUpRight size={14} weight="regular" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-sm text-muted hover:text-ink"
          >
            查看源码
            <ArrowUpRight size={14} weight="regular" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
      </div>
    </div>
  );
}

/** 图片区：有图显示图，没图留一个诚实的占位说明（而不是画个假截图） */
function ProjectImage({ project, className }: { project: Project; className: string }) {
  if (!project.image) {
    return (
      <div className={`grid place-items-center bg-surface ${className}`}>
        <span className="font-mono text-xs text-faint">待补项目截图</span>
      </div>
    );
  }

  return (
    <div className={`group relative overflow-hidden bg-surface ${className}`}>
      <img
        src={project.image}
        alt={`${project.name} 的项目图`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.04]"
      />
      <div aria-hidden="true" className="absolute inset-0 border border-hairline" />
    </div>
  );
}

export function ProjectFeature({ project }: { project: Project }) {
  return (
    <article>
      {/* 大版式内部分三段依次浮起：图 -> 标题 -> 详情与链接。
          整块一起淡入的话，读者看不出这里发生过动画 */}
      <Reveal>
        <ProjectImage project={project} className="aspect-[16/9] w-full" />
      </Reveal>
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal delay={140}>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{project.name}</h3>
            <p className="mt-3 text-muted">{project.summary}</p>
          </div>
        </Reveal>
        <Reveal delay={220}>
          <div>
            <p className="leading-[1.85] text-muted">{project.description}</p>
            <ProjectMeta project={project} />
          </div>
        </Reveal>
      </div>
    </article>
  );
}

export function ProjectTile({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col">
      <ProjectImage project={project} className="aspect-[4/3] w-full" />
      <h3 className="mt-6 text-xl font-semibold tracking-tight">{project.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
      <p className="mt-3 text-sm leading-relaxed text-faint">{project.description}</p>
      <div className="mt-auto">
        <ProjectMeta project={project} />
      </div>
    </article>
  );
}
