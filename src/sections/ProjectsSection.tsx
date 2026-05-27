import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import { PROJECTS } from '../data/content';

interface ProjectData {
  num: string;
  name: string;
  category: string;
  desc: string;
  tags: string[];
}

const TOTAL = PROJECTS.length;

const ProjectCard = ({ project, index }: { project: ProjectData; index: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const targetScale = 1 - (TOTAL - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="h-[70vh] relative">
      <motion.div
        style={{ scale, position: 'sticky', top: `${96 + index * 28}px` }}
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-8 sm:p-10 md:p-14 overflow-hidden"
      >
        <div className="flex flex-col h-full gap-6 sm:gap-8">
          {/* Top row */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-5 sm:gap-8">
              <span
                className="hero-heading font-black leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 9vw, 110px)' }}
              >
                {project.num}
              </span>
              <div className="pt-1 sm:pt-3">
                <p className="text-[#D7E2EA]/40 text-xs sm:text-sm uppercase tracking-widest font-medium mb-1">
                  {project.category}
                </p>
                <p
                  className="text-[#D7E2EA] font-black uppercase leading-tight"
                  style={{ fontSize: 'clamp(1.2rem, 3vw, 2.6rem)' }}
                >
                  {project.name}
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 pt-2">
              <LiveProjectButton />
            </div>
          </div>

          {/* Description */}
          <p
            className="text-[#D7E2EA]/60 font-light leading-relaxed max-w-2xl"
            style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.2rem)' }}
          >
            {project.desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-auto">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider border border-[#D7E2EA]/20 text-[#D7E2EA]/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => (
  <section
    id="projects"
    className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10"
  >
    <FadeIn delay={0} y={40}>
      <h2
        className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-24"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)', lineHeight: 1, letterSpacing: '-0.02em' }}
      >
        Projects
      </h2>
    </FadeIn>

    <div className="max-w-5xl mx-auto">
      {PROJECTS.map((project, i) => (
        <ProjectCard key={project.num} project={project as ProjectData} index={i} />
      ))}
    </div>
  </section>
);

export default ProjectsSection;
