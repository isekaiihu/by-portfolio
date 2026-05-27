import FadeIn from '../components/FadeIn';
import { DISCORD_BOTS, MC_PLUGINS, MC_MODS } from '../data/content';

// Double items for seamless loop
const dbl = (arr: string[]) => [...arr, ...arr];

const Tag = ({ label, color }: { label: string; color: string }) => (
  <span
    className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border text-sm sm:text-base font-medium uppercase tracking-wider whitespace-nowrap flex-shrink-0 transition-opacity hover:opacity-80"
    style={{ borderColor: color + '40', color, backgroundColor: color + '0D' }}
  >
    {label}
  </span>
);

const Row = ({
  items,
  color,
  direction,
}: {
  items: string[];
  color: string;
  direction: 'left' | 'right' | 'left-slow';
}) => {
  const cls =
    direction === 'left'
      ? 'animate-marquee-left'
      : direction === 'right'
      ? 'animate-marquee-right'
      : 'animate-marquee-left-slow';
  return (
    <div className="overflow-hidden">
      <div className={`flex gap-3 ${cls}`}>
        {dbl(items).map((item, i) => (
          <Tag key={i} label={item} color={color} />
        ))}
      </div>
    </div>
  );
};

const PluginsSection = () => (
  <section className="bg-[#0C0C0C] py-20 sm:py-28 md:py-36 overflow-hidden">
    <FadeIn delay={0} y={40}>
      <div className="text-center px-5 mb-14 sm:mb-18 md:mb-24">
        <p className="text-[#D7E2EA]/40 uppercase tracking-[0.4em] text-sm sm:text-base font-medium mb-4">
          Volume of Work
        </p>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
        >
          130+ Plugins &amp; Mods
        </h2>
        <p className="text-[#D7E2EA]/50 font-light mt-4" style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.2rem)' }}>
          Discord bots, Minecraft plugins, and mods shipped across servers worldwide
        </p>
      </div>
    </FadeIn>

    <div className="flex flex-col gap-4">
      {/* Row label + tags */}
      <div className="px-5 sm:px-8 mb-1">
        <span className="text-[#5B8DEF]/70 uppercase tracking-[0.3em] text-xs font-semibold">
          Discord Bots
        </span>
      </div>
      <Row items={DISCORD_BOTS} color="#5B8DEF" direction="left" />

      <div className="px-5 sm:px-8 mt-4 mb-1">
        <span className="text-[#4ADE80]/70 uppercase tracking-[0.3em] text-xs font-semibold">
          Minecraft Plugins
        </span>
      </div>
      <Row items={MC_PLUGINS} color="#4ADE80" direction="right" />

      <div className="px-5 sm:px-8 mt-4 mb-1">
        <span className="text-[#FB923C]/70 uppercase tracking-[0.3em] text-xs font-semibold">
          Minecraft Mods
        </span>
      </div>
      <Row items={MC_MODS} color="#FB923C" direction="left-slow" />
    </div>
  </section>
);

export default PluginsSection;
