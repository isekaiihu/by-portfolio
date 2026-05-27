import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import { SERVERS } from '../data/content';

const CareerSection = () => (
  <section
    id="contact"
    className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
  >
    <FadeIn delay={0} y={40}>
      <p className="text-center text-[#0C0C0C]/40 uppercase tracking-[0.4em] text-sm font-semibold mb-4">
        Career Path
      </p>
      <h2
        className="font-black uppercase text-center text-[#0C0C0C] mb-4"
        style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)', lineHeight: 1, letterSpacing: '-0.02em' }}
      >
        Servers I&apos;ve Built For
      </h2>
      <p
        className="text-center text-[#0C0C0C]/50 font-light max-w-lg mx-auto mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.2rem)' }}
      >
        Communities, networks, and SMPs I've shipped plugins, bots, and mods for over the years.
      </p>
    </FadeIn>

    {/* Server grid */}
    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-20 sm:mb-24">
      {SERVERS.map((server, i) => (
        <FadeIn key={server.name} delay={i * 0.04} y={20}>
          <div
            className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col gap-2 transition-transform hover:-translate-y-1 duration-300"
            style={{
              border: '1px solid rgba(12,12,12,0.12)',
              background: 'rgba(12,12,12,0.03)',
            }}
          >
            <div className="flex items-start justify-between gap-2">
              <p
                className="font-black uppercase text-[#0C0C0C] leading-tight"
                style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)' }}
              >
                {server.name}
              </p>
              <span
                className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider flex-shrink-0"
                style={{ background: 'rgba(12,12,12,0.07)', color: 'rgba(12,12,12,0.5)' }}
              >
                {server.years}
              </span>
            </div>
            <p
              className="font-medium text-[#0C0C0C]/60 uppercase tracking-wider"
              style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.85rem)' }}
            >
              {server.role}
            </p>
          </div>
        </FadeIn>
      ))}
    </div>

    {/* CTA */}
    <FadeIn delay={0.2} y={30}>
      <div className="text-center flex flex-col items-center gap-6">
        <h3
          className="font-black uppercase text-[#0C0C0C]"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)', lineHeight: 1.1 }}
        >
          Ready to build something?
        </h3>
        <p
          className="text-[#0C0C0C]/50 font-light max-w-md"
          style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.1rem)' }}
        >
          Whether it's a Discord bot, a Minecraft plugin, or a whole server network — let's talk.
        </p>
        <ContactButton />
      </div>
    </FadeIn>
  </section>
);

export default CareerSection;
