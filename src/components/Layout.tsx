import { useState, useEffect } from "react";
import { Outlet, NavLink, useLocation, useMatches } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const matches = useMatches()

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const currentHandle = matches.find((match) => match.handle && typeof match.handle === 'object')?.handle as {
      title?: string
      description?: string
      ogTitle?: string
      ogDescription?: string
      ogImage?: string
      twitterCard?: string
    } | undefined

    if (currentHandle?.title) {
      document.title = currentHandle.title
    }

    const metaDescription = document.querySelector('meta[name="description"]')
    if (currentHandle?.description) {
      if (metaDescription) {
        metaDescription.setAttribute('content', currentHandle.description)
      } else {
        const meta = document.createElement('meta')
        meta.name = 'description'
        meta.content = currentHandle.description
        document.head.appendChild(meta)
      }
    }

    const ogTitleMeta = document.querySelector('meta[property="og:title"]')
    if (currentHandle?.ogTitle) {
      if (ogTitleMeta) {
        ogTitleMeta.setAttribute('content', currentHandle.ogTitle)
      } else {
        const meta = document.createElement('meta')
        meta.setAttribute('property', 'og:title')
        meta.content = currentHandle.ogTitle
        document.head.appendChild(meta)
      }
    }

    const ogDescriptionMeta = document.querySelector('meta[property="og:description"]')
    if (currentHandle?.ogDescription) {
      if (ogDescriptionMeta) {
        ogDescriptionMeta.setAttribute('content', currentHandle.ogDescription)
      } else {
        const meta = document.createElement('meta')
        meta.setAttribute('property', 'og:description')
        meta.content = currentHandle.ogDescription
        document.head.appendChild(meta)
      }
    }

    const ogImageMeta = document.querySelector('meta[property="og:image"]')
    if (currentHandle?.ogImage) {
      if (ogImageMeta) {
        ogImageMeta.setAttribute('content', currentHandle.ogImage)
      } else {
        const meta = document.createElement('meta')
        meta.setAttribute('property', 'og:image')
        meta.content = currentHandle.ogImage
        document.head.appendChild(meta)
      }
    }

    const twitterCardMeta = document.querySelector('meta[name="twitter:card"]')
    if (currentHandle?.twitterCard) {
      if (twitterCardMeta) {
        twitterCardMeta.setAttribute('content', currentHandle.twitterCard)
      } else {
        const meta = document.createElement('meta')
        meta.name = 'twitter:card'
        meta.content = currentHandle.twitterCard
        document.head.appendChild(meta)
      }
    }
  }, [matches])

  return (
    <div className="min-h-screen bg-[#080808] text-[#f0ebe0]">
      {/* Nav */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(8,8,8,0.97)" : "transparent",
          borderBottom: scrolled ? "1px solid #222220" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 h-20 flex items-center justify-between">
          <NavLink to="/" className="flex flex-col leading-none">
            <span className="font-['Fraunces'] text-xl tracking-[0.15em] text-[#f0ebe0]">UniX StudioZ</span>
            <span className="text-[10px] tracking-[0.35em] text-[#c9a96e] uppercase font-['Outfit'] font-light mt-0.5">Modern Luxury Studio</span>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `text-[11px] tracking-[0.3em] uppercase font-['Outfit'] font-light transition-colors duration-300 relative group ${
                    isActive ? "text-[#c9a96e]" : "text-[#f0ebe0] hover:text-[#c9a96e]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="ml-4 text-[10px] tracking-[0.3em] uppercase font-['Outfit'] px-6 py-3 border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#080808] transition-all duration-300"
            >
              Book Now
            </NavLink>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-6 h-px bg-[#f0ebe0]"
              animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-px bg-[#f0ebe0]"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-px bg-[#f0ebe0]"
              animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#080808] flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.2 }}
              >
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `text-3xl font-['Fraunces'] font-light ${isActive ? "text-[#c9a96e]" : "text-[#f0ebe0]"}`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4"
            >
              <NavLink
                to="/contact"
                className="text-[11px] tracking-[0.3em] uppercase font-['Outfit'] px-8 py-4 border border-[#c9a96e] text-[#c9a96e]"
              >
                Book a Session
              </NavLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-[#222220] bg-[#080808]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="font-['Fraunces'] text-2xl tracking-[0.1em] text-[#f0ebe0] mb-1">UniX StudioZ</div>
            <div className="text-[10px] tracking-[0.35em] text-[#c9a96e] uppercase font-['Outfit'] font-light mb-6">Modern Luxury Studio</div>
            <p className="text-[#7a7267] text-sm leading-relaxed font-['Outfit'] font-light max-w-xs">
              Crafting modern luxury imagery for clients who demand elegance, precision, and timeless storytelling.
            </p>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#c9a96e] mb-6 font-['Outfit']">Navigation</div>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} end={link.to === "/"} className="text-[#7a7267] hover:text-[#f0ebe0] text-sm transition-colors font-['Outfit'] font-light">
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#c9a96e] mb-6 font-['Outfit']">Connect</div>
            <div className="flex flex-col gap-2 text-[#7a7267] text-sm font-['Outfit'] font-light">
              <a href="mailto:hello@unixstudioz.com" className="hover:text-[#f0ebe0] transition-colors">hello@unixstudioz.com</a>
              <span>+1 (212) 555 0198</span>
              <span className="mt-2">47 West 25th Street<br />New York, NY 10010</span>
            </div>
          </div>
        </div>
        <div className="border-t border-[#222220] max-w-[1400px] mx-auto px-8 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[#3a3830] text-xs font-['Outfit'] tracking-widest">© 2026 UniX StudioZ. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-6">
            {["Instagram", "Pinterest", "Vogue"].map((s) => (
              <span key={s} className="text-[#3a3830] hover:text-[#c9a96e] text-xs tracking-widest cursor-pointer transition-colors font-['Outfit']">{s.toUpperCase()}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
