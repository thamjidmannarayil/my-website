import React, { useRef, useState, useEffect, useContext } from "react";
import Logo from "./Headercomp/Logo";
import DesktopMenu from "./Headercomp/DesktopMenu";
import IconMenu from "./Headercomp/IconMenu";
import MobileMenu from "./Headercomp/MobileMenu";

import { motion } from "framer-motion";
import AppContext from "../AppContextFolder/AppContext";

const addClass = (ref: any, myclass: string) => {
  ref.current?.classLIst.add(myclass);
};
const Header = (props: { finishedLoading: boolean, sectionsRef }) => {
  const RefNavBar = useRef<HTMLDivElement>(null);
  const [ShowElement, setShowElement] = useState(false);
  const [rotate, setRotate] = useState<boolean>(false);
  const [isOnDarkSection, setIsOnDarkSection] = useState(false);
  const context = useContext(AppContext);
  const scrollSizeY = useRef<number>(0);

  // Define the EventListener for the NavBar
  useEffect(() => {
    if (context.sharedState.portfolio.NavBar.IntervalEvent == null) {
      context.sharedState.portfolio.NavBar.IntervalEvent = () => {
        // Check if we're over the black section (SomethingIveBuilt)
        const blackSection = document.getElementById('SomethingIveBuiltSection');
        if (blackSection) {
          const rect = blackSection.getBoundingClientRect();
          const navbarHeight = 80; // Approximate navbar height
          // Check if black section is visible in the navbar area
          if (rect.top <= navbarHeight && rect.bottom >= 0) {
            setIsOnDarkSection(true);
          } else {
            setIsOnDarkSection(false);
          }
        }

        if (scrollSizeY.current == 0) {
          scrollSizeY.current = window.scrollY;
        } else {
          if (window.scrollY > 50) {
            if (window.scrollY > scrollSizeY.current) {
              if (RefNavBar) {
                RefNavBar.current?.classList.remove("translate-y-0");
                RefNavBar.current?.classList.add("-translate-y-full");
              }
            } else {
              RefNavBar.current?.classList.add("translate-y-0");
              RefNavBar.current?.classList.remove("-translate-y-full");
            }
            scrollSizeY.current = window.scrollY;
          }
        }
        console.log("Scrolling checking for NavBar ", scrollSizeY.current);
      }
    }
  }, [context.sharedState.portfolio.NavBar, context.sharedState.portfolio.NavBar.IntervalEvent]);

  //Adding the EventListener for the NavBar
  useEffect(() => {
    if (context.sharedState.portfolio.NavBar.scrolling == null) {
      context.sharedState.portfolio.NavBar.scrolling = true;
      scrollSizeY.current = 0;
      //Hide when scroll down & show when scroll up
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", context.sharedState.portfolio.NavBar.IntervalEvent);
      }
    }
  }, [context.sharedState.portfolio.NavBar, context.sharedState.portfolio.NavBar.scrolling]);



  useEffect(() => {
    setTimeout(() => {
      setShowElement(true);
    }, 1000);
  }, []);

  console.log("rotate from header : ", rotate);
  //verify document for serverSide rendering and ensure scroll is enabled after navbar loads
  if (typeof document !== "undefined") {
    // Only block scroll when mobile menu is actually open (rotate = true)
    rotate ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "");
  }

  // Safety mechanism: Ensure scrolling is enabled after navbar loads
  useEffect(() => {
    if (typeof document !== "undefined" && !rotate) {
      // Force enable scrolling after a short delay if not in mobile menu mode
      const enableScrollTimeout = setTimeout(() => {
        if (!rotate) {
          document.body.style.overflow = "auto";
        }
      }, 2000); // Enable scroll after 2 seconds regardless of other states

      return () => clearTimeout(enableScrollTimeout);
    }
  }, [rotate]);

  return (
    <>
      {/* Mobile visible Navbar component, controlling ShowElement state to hide itself and rotate itself */}
      <MobileMenu rotate={rotate} setRotate={setRotate} setShowElement={setShowElement} ShowElement={ShowElement} />
      {/* This parent element for Menu */}
      <motion.div
        ref={RefNavBar}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: { delay: props.finishedLoading ? 0 : 0.2, duration: 0.5 } }}
        className={`w-full fixed ${ShowElement ? `backdrop-blur-md bg-black/20 shadow-xl border-b border-white/10` : `bg-opacity-0 `} flex 
      justify-between px-6 sm:px-12 py-2 sm:py-4  transition-all duration-500 translate-y-0 z-50`}
      >
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
      </motion.div>
    </>
  );
};
export default Header;
