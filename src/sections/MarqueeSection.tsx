const TECH_ROW1 = [
  'Python', 'discord.py', 'Java', 'Spigot', 'Paper', 'BungeeCord',
  'Fabric', 'Forge', 'MySQL', 'Redis', 'SQLite', 'TypeScript',
  'Node.js', 'Velocity', 'Waterfall', 'Gradle', 'Maven',
];

const TECH_ROW2 = [
  'Custom Economy', 'Anti-Cheat', 'PvP Systems', 'Guild Plugins', 'Land Claiming',
  'Modpacks', 'World Gen', 'Custom Mobs', 'Boss Fights', 'Leveling Systems',
  'Ticket Bots', 'Auto-Mod', 'Reaction Roles', 'Stats Tracking', 'Game Modes',
];

const Dot = () => (
  <span className="mx-5 sm:mx-7 text-[#D7E2EA]/20 font-black text-xl flex-shrink-0">✦</span>
);

const Row = ({ items, dir }: { items: string[]; dir: 'left' | 'right' }) => {
  const cls = dir === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className={`flex items-center ${cls}`}>
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center flex-shrink-0">
            <span
              className="text-[#D7E2EA]/60 font-medium uppercase tracking-[0.2em] whitespace-nowrap flex-shrink-0"
              style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.1rem)' }}
            >
              {item}
            </span>
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
};

const MarqueeSection = () => (
  <section className="bg-[#0C0C0C] py-16 sm:py-20 md:py-28 flex flex-col gap-5 overflow-hidden border-t border-[#D7E2EA]/5">
    <Row items={TECH_ROW1} dir="left" />
    <Row items={TECH_ROW2} dir="right" />
  </section>
);

export default MarqueeSection;
