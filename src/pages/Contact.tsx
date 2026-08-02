import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CONTACT_SPLASH_IMAGE, CONTACT_BOTTOM_IMAGES } from "../data/images";

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

const SESSION_TYPES = ["Wedding", "Portrait", "Engagement", "Editorial / Fashion", "Corporate", "Other"];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    type: "",
    location: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-background pt-32">
      {/* Hero */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 mb-20">
        <motion.div
          className="text-[10px] tracking-[0.5em] uppercase text-accent mb-4 font-['Outfit']"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Get in Touch
        </motion.div>
        <motion.h1
          className="font-['Fraunces'] font-light text-[clamp(44px,7vw,100px)] leading-none text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Let's Begin
        </motion.h1>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 md:px-12 pb-32 grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
        {/* Left info */}
        <FadeUp className="lg:col-span-2 flex flex-col gap-12">
          <div>
            <div className="text-[10px] tracking-[0.5em] uppercase text-accent mb-6 font-['Outfit']">Studio</div>
            <p className="text-muted text-sm leading-relaxed font-['Outfit'] font-light mb-2">47 West 25th Street, Suite 4F</p>
            <p className="text-muted text-sm font-['Outfit'] font-light">New York, NY 10010</p>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.5em] uppercase text-accent mb-6 font-['Outfit']">Contact</div>
            <a href="mailto:hello@unixstudioz.com" className="block text-muted-alt text-sm font-['Outfit'] font-light hover:text-accent transition-colors mb-2">
              hello@unixstudioz.com
            </a>
            <a href="tel:+12125550198" className="block text-muted-alt text-sm font-['Outfit'] font-light hover:text-accent transition-colors">
              +1 (212) 555 0198
            </a>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.5em] uppercase text-accent mb-6 font-['Outfit']">Hours</div>
            <div className="text-muted text-sm font-['Outfit'] font-light leading-relaxed">
              <p>Mon – Fri: 10am – 6pm</p>
              <p>Weekends by appointment</p>
            </div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.5em] uppercase text-accent mb-6 font-['Outfit']">Response Time</div>
            <p className="text-muted text-sm font-['Outfit'] font-light leading-relaxed">
              We respond to all inquiries within 48 hours. For urgent matters, please call us directly.
            </p>
          </div>

          <div className="mt-auto">
            <img
              src={CONTACT_SPLASH_IMAGE}
              alt="Wedding moment"
              className="w-full aspect-video object-cover"
            />
          </div>
        </FadeUp>

        {/* Form */}
        <FadeUp delay={0.15} className="lg:col-span-3">
          {submitted ? (
            <motion.div
              className="h-full min-h-[400px] flex flex-col items-center justify-center gap-6 text-center border border-border p-16"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-accent font-['Fraunces'] text-6xl mb-4">✦</div>
              <h2 className="font-['Fraunces'] font-light text-3xl text-foreground">Thank you</h2>
              <p className="text-muted text-sm font-['Outfit'] font-light max-w-sm leading-relaxed">
                Your inquiry has been received. We'll review the details and be in touch within 48 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] tracking-[0.4em] uppercase text-accent font-['Outfit']">Full Name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Isabelle Fontaine"
                    className="bg-transparent border border-border px-4 py-3.5 text-foreground text-sm font-['Outfit'] font-light placeholder:text-muted-alt focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] tracking-[0.4em] uppercase text-accent font-['Outfit']">Email *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="isabelle@example.com"
                    className="bg-transparent border border-border px-4 py-3.5 text-foreground text-sm font-['Outfit'] font-light placeholder:text-muted-alt focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] tracking-[0.4em] uppercase text-accent font-['Outfit']">Phone</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (212) 555 0000"
                    className="bg-transparent border border-border px-4 py-3.5 text-foreground text-sm font-['Outfit'] font-light placeholder:text-muted-alt focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] tracking-[0.4em] uppercase text-accent font-['Outfit']">Event Date</label>
                  <input
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    className="bg-transparent border border-border px-4 py-3.5 text-foreground text-sm font-['Outfit'] font-light focus:border-accent focus:outline-none transition-colors [color-scheme:dark]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] tracking-[0.4em] uppercase text-accent font-['Outfit']">Session Type *</label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    required
                    className="bg-background border border-border px-4 py-3.5 text-foreground text-sm font-['Outfit'] font-light focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select type</option>
                    {SESSION_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] tracking-[0.4em] uppercase text-accent font-['Outfit']">Location / Venue</label>
                  <input
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="Château de Vaux-le-Vicomte"
                    className="bg-transparent border border-border px-4 py-3.5 text-foreground text-sm font-['Outfit'] font-light placeholder:text-muted-alt focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[9px] tracking-[0.4em] uppercase text-accent font-['Outfit']">Tell Us About Your Vision *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Share the vision for your session — the mood you have in mind, any references that inspire you, and anything that matters most..."
                  className="bg-transparent border border-border px-4 py-3.5 text-foreground text-sm font-['Outfit'] font-light placeholder:text-muted-alt focus:border-accent focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="flex items-center justify-between gap-6 pt-2">
                <p className="text-muted-alt text-xs font-['Outfit'] font-light">* Required fields</p>
                <motion.button
                  type="submit"
                  className="text-[11px] tracking-[0.3em] uppercase font-['Outfit'] px-10 py-4 bg-accent text-accent-foreground hover:bg-accent-soft transition-colors duration-300 whitespace-nowrap"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Inquiry
                </motion.button>
              </div>
            </form>
          )}
        </FadeUp>
      </div>

      {/* Bottom image strip */}
      <div className="grid grid-cols-4 h-48 md:h-64">
        {CONTACT_BOTTOM_IMAGES.map((src, i) => (
          <div key={i} className="overflow-hidden">
            <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        ))}
      </div>
    </div>
  );
}
