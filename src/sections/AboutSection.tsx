import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import FadeIn from '../components/FadeIn';

const ABOUT_TEXT =
  'With more than three years of experience in Discord bot development and Minecraft plugin and mod creation, I craft powerful tools for gaming communities and server networks. From custom economy systems to complex game modes and full server networks, I turn ideas into polished, production-ready solutions. Let\'s build something incredible together!';

const AboutSection = () => (
  <section
    id="about"
    className="min-h-screen relative flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20"
  >
    {/* Content */}
    <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 z-10">
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          About me
        </h2>
      </FadeIn>
      <AnimatedText
        text={ABOUT_TEXT}
        className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[580px]"
        style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
      />
    </div>

    <div className="mt-16 sm:mt-20 md:mt-24 z-10">
      <ContactButton />
    </div>
  </section>
);

export default AboutSection;
