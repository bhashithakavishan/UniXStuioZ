import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { PORTFOLIO_IMAGES } from "../data/images";

const CATEGORIES = ["All", "Weddings", "Portraits", "Couples", "Editorial", "Fashion"];

const IMAGES = PORTFOLIO_IMAGES;

function GalleryItem({ item, index }: { item: typeof IMAGES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden cursor-pointer"
    >
      <div className="overflow-hidden">
        <motion.img
          src={item.src}
          alt={item.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <div className="absolute inset-0 bg-background opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <div className="text-[9px] tracking-[0.4em] uppercase text-accent mb-1 font-['Outfit']">{item.cat} · {item.location}</div>
        <div className="text-lg font-['Fraunces'] text-foreground">{item.title}</div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? IMAGES : IMAGES.filter((i) => i.cat === active);

  return (
    <div className="bg-background pt-32">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 mb-16">
        <motion.div
          className="text-[10px] tracking-[0.5em] uppercase text-accent mb-4 font-['Outfit']"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The Work
        </motion.div>
        <motion.h1
          className="font-['Fraunces'] font-light text-[clamp(44px,7vw,100px)] leading-none text-foreground mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          Portfolio
        </motion.h1>

        {/* Filter tabs */}
        <motion.div
          className="flex gap-1 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-[10px] tracking-[0.3em] uppercase font-['Outfit'] px-5 py-2.5 border transition-all duration-300 ${
                active === cat
                  ? "border-accent text-accent bg-accent/10"
                  : "border-border text-muted hover:border-border-soft hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Grid */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="columns-1 sm:columns-2 lg:columns-3 gap-1 space-y-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((item, i) => (
              <div key={item.src} className="break-inside-avoid mb-1">
                <GalleryItem item={item} index={i} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom quote */}
      <div className="border-t border-border py-24 text-center">
        <div className="font-['Fraunces'] italic text-muted-alt text-[clamp(24px,4vw,56px)] leading-snug px-8">
          "Every frame tells a truth."
        </div>
      </div>
    </div>
  );
}
