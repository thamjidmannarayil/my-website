import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { Link } from "react-scroll";
import ThemeSelector from "./ThemeSelector";

const navigationItems = [
  { label: "About", to: "aboutSection", offset: -50 },
  { label: "Experience", to: "WhereIhaveWorkedSection", offset: -250 },
  { label: "Work", to: "SomethingIveBuiltSection", offset: 100 },
  { label: "Testimonials", to: "TestimonialsSection", offset: 100 },
  { label: "Teams", to: "TeamsIWorkedWithSection", offset: 100 },
  { label: "Gallery", to: "GallerySection", offset: 100 },
  { label: "Contact", to: "GetInTouchSection", offset: 100 },
] as const;

const MobileMenu = props => {
  const closeMenu = () => {
    props.setRotate(false);
    props.setShowElement(true);
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={props.rotate ? { x: "0" } : { x: "100%" }}
      transition={{ x: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } }}
      className={`fixed inset-0 z-50 flex min-h-[100dvh] md:hidden ${
        props.rotate ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={closeMenu}
        className={`mobile-menu-backdrop h-[100dvh] flex-1 transition-[backdrop-filter] duration-300 ${
          props.rotate ? "backdrop-blur-[2px]" : ""
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="mobile-menu-panel flex h-[100dvh] w-[min(86vw,22rem)] flex-none flex-col overflow-y-auto px-5"
        style={{
          paddingTop: "max(1rem, env(safe-area-inset-top))",
          paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
        }}
      >
        <div className="mobile-menu-rule flex min-h-[4.75rem] items-center border-b pb-3">
          <span className="font-Text2 text-[10px] font-semibold uppercase tracking-[0.22em] text-AATextMuted">
            Menu
          </span>
        </div>

        <nav className="flex flex-col gap-1 py-4" aria-label="Primary navigation">
          {navigationItems.map(item => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={item.offset}
              duration={200}
              onClick={closeMenu}
              activeClass="mobile-menu-link--active"
              className="mobile-menu-link group flex min-h-[2.75rem] w-full cursor-pointer items-center justify-between rounded-xl px-3.5 py-2 font-Text2 text-sm text-AATextPrimary transition-colors"
            >
              <span>{item.label}</span>
              <span className="h-1 w-1 rounded-full bg-current opacity-20 transition-opacity group-hover:opacity-70" />
            </Link>
          ))}
        </nav>

        <div className="mobile-menu-rule mt-auto border-t pt-4">
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="block">
            <span className="liquid-glass liquid-glass--compact flex w-full items-center justify-between px-4 py-2.5 font-Text2 text-xs font-medium text-AATextPrimary transition-colors hover:text-AAsecondary">
              Resume
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                <path d="M8 16L16 8M10 8H16V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>

          <ThemeSelector finishedLoading={true} isMobile={true} />
        </div>
      </aside>
    </motion.div>
  );
};

export default MobileMenu;
