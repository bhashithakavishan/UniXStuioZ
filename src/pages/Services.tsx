import { useRef, useState } from "react";
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

const PACKAGES = [
  {
    name: "Essentiel",
    price: "$4,800",
    tag: "Portrait Sessions",
    duration: "3 hours",
    includes: [
      "Pre-session consultation",
      "3-hour studio or location session",
      "60 fully retouched images",
      "Private online gallery",
      "Print release",
      "8×10 fine art print",
    ],
    note: null,
    featured: false,
  },
  {
    name: "Signature",
    price: "$9,500",
    tag: "Wedding · Full Day",
    duration: "10 hours",
    includes: [
      "Engagement session included",
      "Two photographers, 10 hours",
      "350+ fully retouched images",
      "Private online gallery",
      "Full print release",
      "30-page heirloom album",
      "Second shooter included",
    ],
    note: "Most popular for destination weddings",
    featured: true,
  },
  {
    name: "Prestige",
    price: "From $18,000",
    tag: "Bespoke · Multi-Day",
    duration: "Custom",
    includes: [
      "Pre-wedding engagement session",
      "Rehearsal dinner coverage",
      "Full wedding day (unlimited hours)",
      "Day-after bridal session",
      "Unlimited retouched images",
      "Two bespoke heirloom albums",
      "35mm film portraits included",
      "Travel included worldwide",
    ],
    note: "For clients with extraordinary vision",
    featured: false,
  },
];

const ADDITIONAL = [
  { name: "Engagement Session", price: "$1,200" },
  { name: "Rehearsal Dinner", price: "$1,800" },
  { name: "Second Shooter (add-on)", price: "$900/day" },
  { name: "Heirloom Album (add-on)", price: "From $1,400" },
  { name: "Rush Delivery (14 days)", price: "$600" },
  { name: "Fine Art Print Set", price: "From $480" },
];

const PROCESS = [
  { step: "01", title: "Inquiry", body: "Submit a brief introduction via our contact form. We respond within 48 hours." },
  { step: "02", title: "Consultation", body: "A relaxed 45-minute call to understand your vision, timeline, and aesthetic." },
  { step: "03", title: "Proposal", body: "We send a tailored package proposal with transparent pricing." },
  { step: "04", title: "Booking", body: "A signed agreement and 25% retainer secures your date." },
  { step: "05", title: "The Session", body: "We arrive prepared, present, and dedicated solely to your story." },
  { step: "06", title: "Delivery", body: "Your gallery is delivered within 6 weeks, albums within 12 weeks." },
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const FAQS = [
    { q: "Do you travel internationally?", a: "Yes. We regularly photograph weddings throughout Europe, Asia, and the Americas. Travel fees are included in the Prestige package and quoted separately for others." },
    { q: "How far in advance should we book?", a: "We recommend reaching out 12–18 months in advance for weddings, especially for peak season dates. Portrait sessions book 4–6 weeks out." },
    { q: "What is your payment structure?", a: "We require a 25% retainer to hold your date, 50% at 90 days before the event, and the remaining 25% one week prior." },
    { q: "Do you provide RAW files?", a: "We do not. Our post-production is an integral part of our creative work and every image is delivered fully retouched." },
    { q: "What if our date changes?", a: "We allow one complimentary date change with 90+ days notice, subject to availability." },
  ];

  return (
    <div className="bg-background pt-32">
      {/* Hero */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 mb-24">
        <motion.div
          className="text-[10px] tracking-[0.5em] uppercase text-accent mb-4 font-['Outfit']"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Investments
        </motion.div>
        <motion.h1
          className="font-['Fraunces'] font-light text-[clamp(44px,7vw,100px)] leading-none text-foreground mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Services
        </motion.h1>
        <motion.p
          className="text-muted text-base max-w-xl font-['Outfit'] font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Each package is a starting point. We frequently customise to suit the unique shape of your event, your travel plans, and your vision for the final work.
        </motion.p>
      </div>

      {/* Packages */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {PACKAGES.map((pkg, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div
                className={`h-full flex flex-col p-10 ${pkg.featured ? "bg-surface" : "bg-background"} relative`}
              >
                {pkg.featured && (
                  <div className="absolute top-0 left-10 -translate-y-1/2 bg-accent text-accent-foreground text-[9px] tracking-[0.35em] uppercase font-['Outfit'] px-4 py-1.5">
                    Recommended
                  </div>
                )}
                <div className="text-[9px] tracking-[0.5em] uppercase text-accent mb-4 font-['Outfit']">{pkg.tag}</div>
                <div className="font-['Fraunces'] text-3xl text-foreground mb-2">{pkg.name}</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted mb-6 font-['Outfit']">{pkg.duration}</div>
                <div className="font-['Fraunces'] text-[clamp(32px,4vw,52px)] text-foreground mb-8 leading-none">{pkg.price}</div>
                <div className="h-px bg-border mb-8" />
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {pkg.includes.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-accent mt-1 text-xs">—</span>
                      <span className="text-muted-alt text-sm font-['Outfit'] font-light">{item}</span>
                    </li>
                  ))}
                </ul>
                {pkg.note && (
                  <div className="text-[10px] tracking-[0.2em] text-accent/40 italic font-['Fraunces'] mb-6">{pkg.note}</div>
                )}
                <Link
                  to="/contact"
                  className={`text-[10px] tracking-[0.3em] uppercase font-['Outfit'] py-4 text-center border transition-all duration-300 mt-auto ${
                    pkg.featured
                      ? "bg-accent text-accent-foreground border-accent hover:bg-accent-soft"
                      : "border-border text-foreground hover:border-accent hover:text-accent"
                  }`}
                >
                  Inquire
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Additional */}
      <section className="border-t border-border py-24 mb-24">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <FadeUp className="mb-12">
            <h2 className="font-['Fraunces'] font-light text-[clamp(28px,4vw,52px)] text-foreground">Additional Services</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {ADDITIONAL.map((item, i) => (
              <FadeUp key={i} delay={i * 0.05} className="bg-background flex justify-between items-center px-8 py-5">
                <span className="text-muted-alt font-['Outfit'] font-light">{item.name}</span>
                <span className="text-accent font-['Fraunces'] text-xl">{item.price}</span>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-12 mb-32">
        <FadeUp className="mb-16">
          <div className="text-[10px] tracking-[0.5em] uppercase text-accent mb-4 font-['Outfit']">How It Works</div>
          <h2 className="font-['Fraunces'] font-light text-[clamp(32px,5vw,64px)] text-foreground">The Process</h2>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-border">
          {PROCESS.map((p, i) => (
            <FadeUp key={i} delay={i * 0.08} className="bg-background p-10">
              <div className="font-['Fraunces'] text-4xl text-muted-alt mb-6 leading-none">{p.step}</div>
              <div className="font-['Fraunces'] text-xl text-foreground mb-3">{p.title}</div>
              <p className="text-muted text-sm leading-relaxed font-['Outfit'] font-light">{p.body}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border py-24 mb-0">
        <div className="max-w-[900px] mx-auto px-8 md:px-12">
          <FadeUp className="mb-16">
            <h2 className="font-['Fraunces'] font-light text-[clamp(32px,5vw,56px)] text-foreground">Common Questions</h2>
          </FadeUp>
          <div className="flex flex-col divide-y divide-border">
            {FAQS.map((faq, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <button
                  className="w-full text-left py-6 flex justify-between items-start gap-6 group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-['Fraunces'] text-lg text-foreground group-hover:text-accent transition-colors">{faq.q}</span>
                  <motion.span
                    className="text-accent text-xl leading-none shrink-0 mt-0.5"
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    +
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-muted text-sm leading-relaxed font-['Outfit'] font-light pb-6">{faq.a}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
