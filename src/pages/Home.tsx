import { useRef } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const HERO_IMG = "https://images.unsplash.com/photo-1768586471676-6af1d219e99e?w=1600&h=1000&fit=crop&auto=format";
const FEATURED = [
  {
    src: "https://images.unsplash.com/photo-1780541721627-233827fdbdec?w=800&h=1100&fit=crop&auto=format",
    label: "Weddings",
    tag: "Editorial",
  },
  {
    src: "https://images.unsplash.com/photo-1675726205553-4e348f24da2c?w=800&h=1100&fit=crop&auto=format",
    label: "Portraits",
    tag: "Fine Art",
  },
  {
    src: "https://images.unsplash.com/photo-1765292783735-9ec7213b1df1?w=800&h=1100&fit=crop&auto=format",
    label: "Couples",
    tag: "Cinematic",
  },
];

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
            className="text-[10px] tracking-[0.5em] uppercase text-[#c9a96e] mb-6 font-['Outfit'] font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            New York · Est. 2012
          </motion.div>
          <motion.h1
            className="font-['Fraunces'] font-light text-[clamp(56px,9vw,130px)] leading-[0.95] tracking-tight text-[#f0ebe0] mb-6 max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Timeless<br />
            <em className="italic text-[#c9a96e]">Storytelling</em>
          </motion.h1>
          <motion.p
            className="text-[#a09880] text-sm tracking-[0.08em] max-w-md font-['Outfit'] font-light leading-relaxed mb-10"
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
              className="text-[11px] tracking-[0.3em] uppercase font-['Outfit'] px-8 py-4 bg-[#c9a96e] text-[#080808] hover:bg-[#e8c98a] transition-colors duration-300"
            >
              View Portfolio
            </Link>
            <Link
              to="/contact"
              className="text-[11px] tracking-[0.3em] uppercase font-['Outfit'] px-8 py-4 border border-[#f0ebe033] text-[#f0ebe0] hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors duration-300"
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
          <span className="text-[9px] tracking-[0.4em] uppercase text-[#7a7267] font-['Outfit'] rotate-90 origin-center">Scroll</span>
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
            <div className="text-[10px] tracking-[0.5em] uppercase text-[#c9a96e] mb-4 font-['Outfit']">Selected Work</div>
            <h2 className="font-['Fraunces'] font-light text-[clamp(36px,5vw,72px)] leading-none text-[#f0ebe0]">
              Modern luxury photography<br />
              <em className="italic">for every story</em>
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="text-[10px] tracking-[0.3em] uppercase font-['Outfit'] text-[#c9a96e] hover:text-[#e8c98a] transition-colors border-b border-[#c9a96e33] pb-1 self-start md:self-auto"
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
                  <div className="text-[9px] tracking-[0.4em] uppercase text-[#c9a96e] mb-2 font-['Outfit']">{item.tag}</div>
                  <div className="text-xl font-['Fraunces'] font-light text-[#f0ebe0]">{item.label}</div>
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
            <span key={i} className="text-[clamp(36px,5vw,64px)] font-['Fraunces'] font-light text-[#1a1a1a] tracking-tight shrink-0">
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
              src="https://images.unsplash.com/photo-1542992933-ce75d0187ec1?w=700&h=900&fit=crop&auto=format"
              alt="Photographer at work"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 border border-[#c9a96e33] w-full h-full pointer-events-none" />
          </div>
        </FadeUp>
        <FadeUp delay={0.2} className="flex flex-col gap-8">
          <div>
            <div className="text-[10px] tracking-[0.5em] uppercase text-[#c9a96e] mb-6 font-['Outfit']">The Studio</div>
            <h2 className="font-['Fraunces'] font-light text-[clamp(32px,4vw,56px)] leading-tight text-[#f0ebe0] mb-6">
              Artistry rooted in<br />
              <em className="italic">quiet observation</em>
            </h2>
            <p className="text-[#7a7267] text-base leading-relaxed font-['Outfit'] font-light mb-4">
              UniX StudioZ is a modern luxury photography studio founded on the belief that authentic emotion, captured with technical mastery, produces imagery that outlasts trends.
            </p>
            <p className="text-[#7a7267] text-base leading-relaxed font-['Outfit'] font-light">
              We work with a limited number of clients each year, ensuring each project receives the care and singular attention it deserves.
            </p>
          </div>
          <Link
            to="/about"
            className="self-start text-[11px] tracking-[0.3em] uppercase font-['Outfit'] px-8 py-4 border border-[#222220] text-[#f0ebe0] hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors duration-300"
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
              <div className="font-['Fraunces'] text-[clamp(40px,5vw,72px)] font-light text-[#c9a96e] leading-none">{s.value}</div>
              <div className="text-[10px] tracking-[0.4em] uppercase text-[#7a7267] font-['Outfit']">{s.label}</div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Recent work full bleed */}
      <section className="py-32">
        <FadeUp className="max-w-[1400px] mx-auto px-8 md:px-12 mb-12">
          <div className="text-[10px] tracking-[0.5em] uppercase text-[#c9a96e] mb-4 font-['Outfit']">Recent Stories</div>
          <h2 className="font-['Fraunces'] font-light text-[clamp(32px,5vw,64px)] text-[#f0ebe0]">Latest Sessions</h2>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <FadeUp>
            <div className="overflow-hidden aspect-[16/10] group">
              <motion.img
                src="https://images.unsplash.com/photo-1537633468298-d86f0c2d4173?w=900&h=600&fit=crop&auto=format"
                alt="Wedding couple"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </FadeUp>
          <div className="grid grid-rows-2 gap-1">
            <FadeUp delay={0.1}>
              <div className="overflow-hidden aspect-[16/7] group">
                <motion.img
                  src="https://images.unsplash.com/photo-1770199780470-1e6e3d30f8f8?w=700&h=400&fit=crop&auto=format"
                  alt="Portrait session"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="overflow-hidden aspect-[16/7] group">
                <motion.img
                  src="https://images.unsplash.com/photo-1772241824154-ce6e7c985ff9?w=700&h=400&fit=crop&auto=format"
                  alt="Couple portrait"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-y border-[#222220] py-32">
        <div className="max-w-[800px] mx-auto px-8 md:px-12 text-center">
          <FadeUp>
            <div className="text-[#c9a96e] text-5xl font-['Fraunces'] mb-8 leading-none">"</div>
            <blockquote className="font-['Fraunces'] font-light text-[clamp(22px,3.5vw,40px)] text-[#f0ebe0] leading-snug mb-10 italic">
              UniX StudioZ didn't just photograph our wedding — they preserved everything we felt. The images are beyond anything we imagined.
            </blockquote>
            <div className="text-[10px] tracking-[0.5em] uppercase text-[#c9a96e] font-['Outfit']">Isabelle & Matthieu — Paris, 2025</div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-40">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1780542210086-2e273e05d0ac?w=1400&h=700&fit=crop&auto=format"
            alt="Studio ambiance"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-[#080808cc]" />
        </div>
        <FadeUp className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 text-center flex flex-col items-center gap-8">
          <div className="text-[10px] tracking-[0.5em] uppercase text-[#c9a96e] font-['Outfit']">Limited Availability 2026</div>
          <h2 className="font-['Fraunces'] font-light text-[clamp(36px,6vw,90px)] leading-none text-[#f0ebe0]">
            Ready to capture<br />
            <em className="italic text-[#c9a96e]">your story?</em>
          </h2>
          <p className="text-[#7a7267] max-w-md font-['Outfit'] font-light leading-relaxed">
            We accept a curated number of commissions each season. Reach out early to secure your date.
          </p>
          <Link
            to="/contact"
            className="text-[11px] tracking-[0.3em] uppercase font-['Outfit'] px-10 py-5 bg-[#c9a96e] text-[#080808] hover:bg-[#e8c98a] transition-colors duration-300"
          >
            Begin Your Journey
          </Link>
        </FadeUp>
      </section>
    </div>
  );
}
