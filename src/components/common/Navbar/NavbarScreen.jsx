import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMenu } from "../../../context/MenuContext";
import { portfolioData } from "../../../data/portfolioData";
import Magnetic from "../../ui/Magnetic";

const { navLinks, personalInfo } = portfolioData;

// Container variants
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, delay: 0.2, ease: "easeIn" },
  },
};

// Staggered item variants
const itemVariants = {
  hidden: { y: 80, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.15 + i * 0.08,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
  exit: (i) => ({
    y: -40,
    opacity: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.3,
      ease: "easeIn",
    },
  }),
};

const NavbarScreen = () => {
  const { isMenuOpen, closeMenu } = useMenu();
  const containerRef = useRef(null);

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = (href) => {
    closeMenu();
    // Allow the overlay to close before scrolling
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          ref={containerRef}
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col justify-center"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Nav Links */}
          <div className="flex flex-col w-full px-6 sm:px-10 lg:px-16">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="nav-link-item border-t border-white/10 py-6 sm:py-8"
              >
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left"
                  data-cursor-pointer
                >
                  <span className="text-[clamp(2rem,8vw,8rem)] font-bold text-white/90 uppercase leading-none tracking-tight hover:text-white transition-colors duration-300">
                    {link.label}
                  </span>
                </button>
              </motion.div>
            ))}
            <div className="border-t border-white/10" />
          </div>

          {/* Bottom Social Links */}
          <motion.div
            className="absolute bottom-8 left-0 w-full px-6 sm:px-10 lg:px-16 flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 0.6 },
            }}
            exit={{ opacity: 0 }}
          >
            <div className="flex gap-8">
              <Magnetic>
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-xs sm:text-sm tracking-widest uppercase transition-colors duration-300"
                  data-cursor-pointer
                >
                  LinkedIn ↗
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-xs sm:text-sm tracking-widest uppercase transition-colors duration-300"
                  data-cursor-pointer
                >
                  GitHub ↗
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={personalInfo.contact.email}
                  className="text-white/50 hover:text-white text-xs sm:text-sm tracking-widest uppercase transition-colors duration-300"
                  data-cursor-pointer
                >
                  Email ↗
                </a>
              </Magnetic>
            </div>
            <span className="text-white/30 text-xs tracking-widest uppercase hidden sm:inline">
              © {new Date().getFullYear()}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavbarScreen;
