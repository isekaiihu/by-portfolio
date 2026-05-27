import FadeIn from '../components/FadeIn';
import { SERVICES } from '../data/content';

const ServicesSection = () => (
  <section
    id="services"
    className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
  >
    <FadeIn delay={0} y={40}>
      <h2
        className="font-black uppercase text-center text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)', lineHeight: 1, letterSpacing: '-0.02em' }}
      >
        Services
      </h2>
    </FadeIn>

    <div className="max-w-5xl mx-auto">
      {SERVICES.map((svc, i) => (
        <FadeIn key={svc.num} delay={i * 0.1} y={30}>
          <div
            className="flex items-start gap-6 md:gap-10 py-8 sm:py-10 md:py-12"
            style={{ borderTop: '1px solid rgba(12,12,12,0.15)' }}
          >
            <span
              className="font-black text-[#0C0C0C] leading-none flex-shrink-0"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {svc.num}
            </span>
            <div className="flex flex-col justify-center pt-2 sm:pt-4">
              <p
                className="font-medium uppercase text-[#0C0C0C] mb-2"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {svc.name}
              </p>
              <p
                className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
              >
                {svc.desc}
              </p>
            </div>
          </div>
        </FadeIn>
      ))}
      <div style={{ borderTop: '1px solid rgba(12,12,12,0.15)' }} />
    </div>
  </section>
);

export default ServicesSection;
