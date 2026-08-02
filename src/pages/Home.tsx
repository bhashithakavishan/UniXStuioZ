import { useRef } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { HOME_HERO_IMAGE, HOME_FEATURED_IMAGES, HOME_ABOUT_IMAGE, HOME_LATEST_IMAGES } from "../data/images";

const HERO_IMG = HOME_HERO_IMAGE;
const FEATURED = HOME_FEATURED_IMAGES;

const STATS = [
  { value: "500+", label: "Clients" },
  { value: "300+", label: "Weddings" },
  { value: "12", label: "Years" },
  { value: "40+", label: "Awards" },
];

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="bg-[#080808]">
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img
            src={HERO_IMG}
            alt="Elegant bride on grand staircase"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#08080866] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08080855] to-transparent" />
        </motion.div>

        <motion.div
          className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 pb-24 w-full"
          style={{ opacity, y: titleY }}
        >
          <motion.div
            className="text-[10px] tracking-[0.5em] uppercase text-accent mb-6 font-['Outfit'] font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            New York · Est. 2012
          </motion.div>
          <motion.h1
            className="font-['Fraunces'] font-light text-[clamp(56px,9vw,130px)] leading-[0.95] tracking-tight text-foreground mb-6 max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Timeless<br />
            <em className="italic text-accent">Storytelling</em>
          </motion.h1>
          <motion.p
            className="text-muted text-sm tracking-[0.08em] max-w-md font-['Outfit'] font-light leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Luxury photography for life's finest moments. Weddings, portraits, and editorial work crafted with intention.
          </motion.p>
          <motion.div
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Link
              to="/portfolio"
              className="text-[11px] tracking-[0.3em] uppercase font-['Outfit'] px-8 py-4 bg-accent text-accent-foreground hover:bg-[#e8c98a] transition-colors duration-300"
            >
              View Portfolio
            </Link>
            <Link
              to="/contact"
              className="text-[11px] tracking-[0.3em] uppercase font-['Outfit'] px-8 py-4 border border-[rgba(240,235,224,0.2)] text-foreground hover:border-accent hover:text-accent transition-colors duration-300"
            >
              Book a Session
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 right-12 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-[9px] tracking-[0.4em] uppercase text-muted font-['Outfit'] rotate-90 origin-center">Scroll</span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-[#c9a96e] to-transparent"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* Featured work */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-12 py-32">
        <FadeUp className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-[10px] tracking-[0.5em] uppercase text-accent mb-4 font-['Outfit']">Selected Work</div>
            <h2 className="font-['Fraunces'] font-light text-[clamp(36px,5vw,72px)] leading-none text-foreground">
              Modern luxury photography<br />
              <em className="italic">for every story</em>
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="text-[10px] tracking-[0.3em] uppercase font-['Outfit'] text-accent hover:text-accent transition-colors border-b border-[rgba(201,169,110,0.2)] pb-1 self-start md:self-auto"
          >
            View All Work →
          </Link>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {FEATURED.map((item, i) => (
            <FadeUp key={i} delay={i * 0.12}>
              <Link to="/portfolio" className="group block overflow-hidden relative">
                <div className="overflow-hidden aspect-[3/4]">
                  <motion.img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808bb] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="text-[9px] tracking-[0.4em] uppercase text-accent mb-2 font-['Outfit']">{item.tag}</div>
                  <div className="text-xl font-['Fraunces'] font-light text-foreground">{item.label}</div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Philosophy strip */}
      <section className="border-y border-[#222220] py-20 overflow-hidden">
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-[clamp(36px,5vw,64px)] font-['Fraunces'] font-light text-foreground tracking-tight shrink-0">
              Weddings · Portraits · Editorial · Engagements · Fashion · Elopements ·{" "}
            </span>
          ))}
        </motion.div>
      </section>

      {/* About strip */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-12 py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <FadeUp>
          <div className="relative">
            <img
              src={HOME_ABOUT_IMAGE}
              alt="Photographer at work"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 border border-[#c9a96e33] w-full h-full pointer-events-none" />
          </div>
        </FadeUp>
        <FadeUp delay={0.2} className="flex flex-col gap-8">
          <div>
            <div className="text-[10px] tracking-[0.5em] uppercase text-accent mb-6 font-['Outfit']">The Studio</div>
            <h2 className="font-['Fraunces'] font-light text-[clamp(32px,4vw,56px)] leading-tight text-foreground mb-6">
              Artistry rooted in<br />
              <em className="italic">quiet observation</em>
            </h2>
            <p className="text-muted text-base leading-relaxed font-['Outfit'] font-light mb-4">
              UniX StudioZ is a modern luxury photography studio founded on the belief that authentic emotion, captured with technical mastery, produces imagery that outlasts trends.
            </p>
            <p className="text-muted text-base leading-relaxed font-['Outfit'] font-light">
              We work with a limited number of clients each year, ensuring each project receives the care and singular attention it deserves.
            </p>
          </div>
          <Link
            to="/about"
            className="self-start text-[11px] tracking-[0.3em] uppercase font-['Outfit'] px-8 py-4 border border-border text-foreground hover:border-accent hover:text-accent transition-colors duration-300"
          >
            Our Story
          </Link>
        </FadeUp>
      </section>

      {/* Stats */}
      <section className="border-t border-[#222220]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-20 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#222220]">
          {STATS.map((s, i) => (
            <FadeUp key={i} delay={i * 0.1} className="flex flex-col items-center py-10 md:py-0 px-8 text-center gap-2">
              <div className="font-['Fraunces'] text-[clamp(40px,5vw,72px)] font-light text-accent leading-none">{s.value}</div>
              <div className="text-[10px] tracking-[0.4em] uppercase text-muted font-['Outfit']">{s.label}</div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Recent work full bleed */}
      <section className="py-32">
        <FadeUp className="max-w-[1400px] mx-auto px-8 md:px-12 mb-12">
          <div className="text-[10px] tracking-[0.5em] uppercase text-accent mb-4 font-['Outfit']">Recent Stories</div>
          <h2 className="font-['Fraunces'] font-light text-[clamp(32px,5vw,64px)] text-foreground">Latest Sessions</h2>
        </FadeUp>
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6">
          <FadeUp>
            <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#060605]/80 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
              <motion.img
                src={HOME_LATEST_IMAGES.wedding}
                alt="Wedding couple"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <div className="text-[10px] uppercase tracking-[0.45em] text-accent mb-3 font-['Outfit']">Weddings</div>
                <h3 className="font-['Fraunces'] font-light text-[clamp(34px,4vw,56px)] leading-tight mb-4">Eternal Promises</h3>
                <p className="text-sm text-muted-foreground max-w-[24rem] mb-6 font-['Outfit'] font-light">
                  Cinematic wedding imagery styled with luxe lighting, intimate emotion, and modern editorial polish.
                </p>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-3 rounded-full border border-accent px-6 py-3 text-[11px] tracking-[0.35em] uppercase text-foreground transition hover:border-white/40"
                >
                  View Gallery →
                </Link>
              </div>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 gap-6">
            <FadeUp delay={0.1}>
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#070706]/75 shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
                <motion.img
                  src={HOME_LATEST_IMAGES.portrait}
                  alt="Portrait session"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="text-[10px] uppercase tracking-[0.45em] text-accent mb-2 font-['Outfit']">Portraits</div>
                  <h4 className="font-['Fraunces'] font-light text-3xl leading-tight">Timeless Elegance</h4>
                </div>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FadeUp delay={0.2}>
                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#070706]/75 shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
                  <motion.img
                    src={HOME_LATEST_IMAGES.engagement}
                    alt="Couple portrait"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <div className="text-[10px] uppercase tracking-[0.45em] text-accent mb-2 font-['Outfit']">Engagements</div>
                    <p className="text-sm font-['Outfit'] font-light">A moment to remember captured with soft glow and refined composition.</p>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#070706]/75 shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
                  <motion.img
                    src={HOME_LATEST_IMAGES.details}
                    alt="Styled details"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <div className="text-[10px] uppercase tracking-[0.45em] text-accent mb-2 font-['Outfit']">Details</div>
                    <p className="text-sm font-['Outfit'] font-light">The little things that lift every session into a cohesive luxury story.</p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-y border-[#222220] py-32">
        <div className="max-w-[800px] mx-auto px-8 md:px-12 text-center">
          <FadeUp>
            <div className="text-accent text-5xl font-['Fraunces'] mb-8 leading-none">"</div>
            <blockquote className="font-['Fraunces'] font-light text-[clamp(22px,3.5vw,40px)] text-foreground leading-snug mb-10 italic">
              UniX StudioZ didn't just photograph our wedding — they preserved everything we felt. The images are beyond anything we imagined.
            </blockquote>
            <div className="text-[10px] tracking-[0.5em] uppercase text-accent font-['Outfit']">Isabelle & Matthieu — Paris, 2025</div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-40">
        <div className="absolute inset-0">
          <img
            src={HOME_LATEST_IMAGES.cta}
            alt="Studio ambiance"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-[#080808cc]" />
        </div>
        <FadeUp className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 text-center flex flex-col items-center gap-8">
          <div className="text-[10px] tracking-[0.5em] uppercase text-accent font-['Outfit']">Limited Availability 2026</div>
          <h2 className="font-['Fraunces'] font-light text-[clamp(36px,6vw,90px)] leading-none text-foreground">
            Ready to capture<br />
            <em className="italic text-accent">your story?</em>
          </h2>
          <p className="text-muted max-w-md font-['Outfit'] font-light leading-relaxed">
            We accept a curated number of commissions each season. Reach out early to secure your date.
          </p>
          <Link
            to="/contact"
            className="text-[11px] tracking-[0.3em] uppercase font-['Outfit'] px-10 py-5 bg-accent text-accent-foreground hover:bg-[#e8c98a] transition-colors duration-300"
          >
            Begin Your Journey
          </Link>
        </FadeUp>
      </section>
    </div>
  );
}
