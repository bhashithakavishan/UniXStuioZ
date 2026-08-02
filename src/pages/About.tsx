import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const TEAM = [
  {
    name: "Élise Moreau",
    role: "Founder & Lead Photographer",
    img: "https://images.unsplash.com/photo-1675726205553-4e348f24da2c?w=500&h=650&fit=crop&auto=format",
    bio: "With over 12 years documenting the world's most intimate celebrations, Élise brings a painterly eye and an unwavering calm to every session."
  },
  {
    name: "James Whitmore",
    role: "Second Photographer",
    img: "https://images.unsplash.com/photo-1782789152778-5df58ec05527?w=500&h=650&fit=crop&auto=format",
    bio: "A documentary filmmaker turned photographer, James specializes in candid moments that reveal the soul of a story."
  },
  {
    name: "Yuki Tanaka",
    role: "Post-Production Director",
    img: "https://images.unsplash.com/photo-1654765437547-6b572f52ee1a?w=500&h=650&fit=crop&auto=format",
    bio: "Yuki's cinematic colour grading has defined UniX StudioZ's signature palette — warm, layered, and entirely timeless."
  }
];

const VALUES = [
  { title: "Restraint", body: "We never oversaturate or over-process. The camera captures what is real; our role is to honour it." },
  { title: "Presence", body: "Each session is unhurried. We earn trust before we raise a lens." },
  { title: "Craft", body: "Equipment matters. Preparation matters more. Emotional intelligence matters most." },
];

export default function About() {
  return (
    <div className="bg-background pt-32">
      {/* Hero */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 mb-24">
        <motion.div
          className="text-[10px] tracking-[0.5em] uppercase text-accent mb-4 font-['Outfit']"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Story
        </motion.div>
        <motion.h1
          className="font-['Fraunces'] font-light text-[clamp(44px,7vw,100px)] leading-none text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          About UniX StudioZ
        </motion.h1>
      </div>

      {/* Story section */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 mb-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <FadeUp className="order-2 md:order-1 flex flex-col gap-6">
          <p className="text-muted-alt text-lg leading-relaxed font-['Outfit'] font-light">
            UniX StudioZ was founded in 2012 by Élise Moreau after she left a career in editorial photography to pursue something more intimate — the extraordinary moments that unfold between people who love each other deeply.
          </p>
          <p className="text-muted text-base leading-relaxed font-['Outfit'] font-light">
            Today the studio operates from its home in New York's Flatiron district, accepting commissions across the United States, Europe, and by special arrangement, globally. We have been featured in Vogue Weddings, Harper's Bazaar Bride, and The New York Times.
          </p>
          <p className="text-muted text-base leading-relaxed font-['Outfit'] font-light">
            We work exclusively with a curated roster of clients who share our conviction that great photography requires great patience, great trust, and an uncompromising commitment to beauty.
          </p>
        </FadeUp>
        <FadeUp delay={0.15} className="order-1 md:order-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1780541721627-233827fdbdec?w=700&h=900&fit=crop&auto=format"
              alt="Elegant wedding photography"
              className="w-full aspect-[3/4] object-cover"
            />
            <div className="absolute -top-4 -left-4 w-full h-full border border-accent/20 pointer-events-none" />
          </div>
        </FadeUp>
      </div>

      {/* Values */}
      <section className="border-t border-border py-24 mb-24">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <FadeUp className="mb-16">
            <div className="text-[10px] tracking-[0.5em] uppercase text-accent mb-4 font-['Outfit']">Philosophy</div>
            <h2 className="font-['Fraunces'] font-light text-[clamp(32px,5vw,64px)] text-foreground">What we believe</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {VALUES.map((v, i) => (
              <FadeUp key={i} delay={i * 0.1} className="bg-surface p-12">
                <div className="text-[9px] tracking-[0.5em] uppercase text-accent mb-6 font-['Outfit']">0{i + 1}</div>
                <h3 className="font-['Fraunces'] text-2xl text-foreground mb-4">{v.title}</h3>
                <p className="text-muted text-sm leading-relaxed font-['Outfit'] font-light">{v.body}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-12 mb-32">
        <FadeUp className="mb-16">
          <div className="text-[10px] tracking-[0.5em] uppercase text-accent mb-4 font-['Outfit']">The People</div>
          <h2 className="font-['Fraunces'] font-light text-[clamp(32px,5vw,64px)] text-foreground">Meet the team</h2>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((member, i) => (
            <FadeUp key={i} delay={i * 0.12} className="group">
              <div className="overflow-hidden aspect-[4/5] mb-6">
                <motion.img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <div className="text-[9px] tracking-[0.4em] uppercase text-accent mb-2 font-['Outfit']">{member.role}</div>
              <div className="font-['Fraunces'] text-2xl text-foreground mb-3">{member.name}</div>
              <p className="text-muted text-sm leading-relaxed font-['Outfit'] font-light">{member.bio}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Press */}
      <section className="border-t border-border py-20">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="text-[10px] tracking-[0.5em] uppercase text-muted-alt mb-10 font-['Outfit'] text-center">As Seen In</div>
          <div className="flex flex-wrap justify-center gap-12 items-center">
            {["Vogue", "Harper's Bazaar", "The New York Times", "Town & Country", "Architectural Digest"].map((pub) => (
              <div key={pub} className="text-muted font-['Fraunces'] text-xl tracking-widest hover:text-accent/20 transition-colors">{pub}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-32 text-center">
        <FadeUp className="flex flex-col items-center gap-8 max-w-xl mx-auto px-8">
          <h2 className="font-['Fraunces'] font-light text-[clamp(32px,5vw,64px)] text-foreground">
            Let's create something <em className="italic text-accent">unforgettable</em>
          </h2>
          <Link
            to="/contact"
            className="text-[11px] tracking-[0.3em] uppercase font-['Outfit'] px-10 py-5 bg-accent text-accent-foreground hover:bg-accent-soft transition-colors duration-300"
          >
            Book a Consultation
          </Link>
        </FadeUp>
      </section>
    </div>
  );
}
