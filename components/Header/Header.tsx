import React, { useContext, useRef, useState, useEffect } from "react";
import Logo from "./Headercomp/Logo";
import DesktopMenu from "./Headercomp/DesktopMenu";
import IconMenu from "./Headercomp/IconMenu";
import MobileMenu from "./Headercomp/MobileMenu";

import { motion } from "framer-motion";
import AppContext from "../AppContextFolder/AppContext";

const Header = (props: { finishedLoading: boolean, sectionsRef }) => {
  const [ShowElement, setShowElement] = useState(false);
  const [rotate, setRotate] = useState<boolean>(false);
  const [isOnDarkSection, setIsOnDarkSection] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const appContext = useContext(AppContext);

  // Remove the listener used by the previous navbar implementation. It was
  // stored globally without cleanup and can survive Fast Refresh in dev.
  useEffect(() => {
    const legacyNavbar = appContext?.sharedState?.portfolio?.NavBar;
    const legacyScrollHandler = legacyNavbar?.IntervalEvent;

    if (typeof legacyScrollHandler === "function") {
      window.removeEventListener("scroll", legacyScrollHandler);
    }

    if (legacyNavbar) {
      legacyNavbar.IntervalEvent = null;
      legacyNavbar.scrolling = null;
      legacyNavbar.scrollSizeY = null;
    }
  }, [appContext]);

  // Show the navigation while scrolling up and hide it while scrolling down.
  useEffect(() => {
    let animationFrame: number | undefined;

    const updateDarkSection = () => {
      const projectSection = document.getElementById("SomethingIveBuiltSection");
      if (!projectSection) return;
      const rect = projectSection.getBoundingClientRect();
      setIsOnDarkSection(rect.top <= 80 && rect.bottom >= 0);
    };

    const updateNavigation = () => {
      const currentScrollY = Math.max(0, window.scrollY);
      const scrollDelta = currentScrollY - lastScrollY.current;

      updateDarkSection();

      if (currentScrollY <= 24 || rotate) {
        setIsNavVisible(true);
      } else if (scrollDelta > 0) {
        setIsNavVisible(false);
      } else if (scrollDelta < 0) {
        setIsNavVisible(true);
      }

      lastScrollY.current = currentScrollY;
      animationFrame = undefined;
    };

    const onScroll = () => {
      if (animationFrame === undefined) {
        animationFrame = window.requestAnimationFrame(updateNavigation);
      }
    };

    lastScrollY.current = Math.max(0, window.scrollY);
    updateDarkSection();
    if (rotate || window.scrollY <= 24) {
      setIsNavVisible(true);
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (animationFrame !== undefined) window.cancelAnimationFrame(animationFrame);
    };
  }, [rotate]);



  useEffect(() => {
    const showTimer = window.setTimeout(() => {
      setShowElement(true);
    }, 1000);

    return () => window.clearTimeout(showTimer);
  }, []);


  // Manage body scroll when mobile menu is open
  useEffect(() => {
    if (rotate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [rotate]);

  return (
    <>
      {/* Mobile visible Navbar component, controlling ShowElement state to hide itself and rotate itself */}
      <MobileMenu rotate={rotate} setRotate={setRotate} setShowElement={setShowElement} ShowElement={ShowElement} />
      {/* This parent element for Menu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 0.2, duration: 0.5 },
        }}
        className={`w-full fixed top-0 ${ShowElement ? `liquid-glass liquid-glass--nav` : `bg-opacity-0 `}
      py-2 sm:py-4 z-50 transform-gpu transition-transform duration-300 ease-out will-change-transform ${
        isNavVisible || rotate ? "translate-y-0" : "-translate-y-full"
      }`}
      >
        <div className="content-viewport flex items-center justify-between">
          {/* Logo and Cursor Switcher Container */}
          <div className="flex flex-row items-center gap-4">
            <Logo finishedLoading={props.finishedLoading} isOnDarkSection={isOnDarkSection} />
          </div>

          {/* Hide icon Designed by me */}

          <IconMenu
            rotate={rotate}
            setRotate={setRotate}
            setShowElement={setShowElement}
            ShowElement={ShowElement}
            finishedLoading={props.finishedLoading}
            isOnDarkSection={isOnDarkSection}
          />

          {/* ? Desktop Menu */}
          <DesktopMenu finishedLoading={props.finishedLoading} isOnDarkSection={isOnDarkSection} />
        </div>
      </motion.div>
    </>
  );
};
export default Header;
