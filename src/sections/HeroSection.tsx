import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

const NAV_LINKS = ['About', 'Services', 'Projects', 'Contact'];

const HeroSection = () => (
  <section className="h-screen flex flex-col relative bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
    {/* Navbar */}
    <FadeIn delay={0} y={-20} className="w-full">
      <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            {link}
          </a>
        ))}
      </nav>
    </FadeIn>

    {/* Hero Heading */}
    <div className="overflow-hidden px-3 sm:px-4">
      <FadeIn delay={0.15} y={40}>
        <h1
          className="hero-heading font-black uppercase tracking-tight leading-[0.9] mt-4 sm:mt-2 md:-mt-2"
          style={{ fontSize: 'clamp(3rem, 15.5vw, 15.5vw)' }}
        >
          Hi, i&apos;m<br />Bro Yan
        </h1>
      </FadeIn>
    </div>

    {/* Bottom bar */}
    <div className="mt-auto flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
      <FadeIn delay={0.35} y={20}>
        <p
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[280px]"
          style={{ fontSize: 'clamp(0.7rem, 1.3vw, 1.4rem)' }}
        >
          a discord bot &amp; minecraft developer crafting tools for gaming communities
        </p>
      </FadeIn>
      <FadeIn delay={0.5} y={20}>
        <ContactButton />
      </FadeIn>
    </div>
  </section>
);

export default HeroSection;
