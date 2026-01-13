import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { Link } from "react-scroll";
import ThemeSelector from "./ThemeSelector";
const MobileMenu = props => {
  const closeMenu = () => {
    props.setRotate(!props.rotate);
    props.setShowElement(!props.ShowElement);
  };
  return (
    <>
      <motion.div
        initial={{ x: "100%" }}
        animate={props.rotate ? { x: "0" } : { x: "100%" }}
        transition={{ x: { duration: 0.4 } }}
        className="w-full fixed h-screen flex md:hidden duration-300 z-50"
      >
        <div
          onClick={() => closeMenu()}
          className="w-1/4 h-full backdrop-blur-sm bg-MobileNavColor/30 hover:cursor-pointer"
        ></div>
        <div
          className="w-3/4 h-full bg-MobileNavBarColor flex flex-col 
        justify-center items-center space-y-8 font-sans"
        >
          <Link
            to="aboutSection"
            spy={true}
            smooth={true}
            offset={-50}
            duration={200}
            onClick={() => closeMenu()}
            activeClass="text-AAsecondary"
            className="flex flex-col text-center space-y-2 text-AATextMuted font-Text2 text-sm sm:text-base hover:text-AAsecondary hover:cursor-pointer duration-300"
          >
            <span>About</span>
          </Link>
          <Link
            to="WhereIhaveWorkedSection"
            spy={true}
            smooth={true}
            offset={-250}
            duration={200}
            onClick={() => closeMenu()}
            activeClass="text-AAsecondary"
            className="flex flex-col text-center space-y-2 text-AATextMuted font-Text2 text-sm sm:text-base hover:text-AAsecondary hover:cursor-pointer duration-300"
          >
            <span>Experience</span>
          </Link>
          <Link
            to="SomethingIveBuiltSection"
            spy={true}
            smooth={true}
            offset={100}
            duration={200}
            onClick={() => closeMenu()}
            activeClass="text-AAsecondary"
            className="flex flex-col text-center space-y-2 text-AATextMuted font-Text2 text-sm sm:text-base hover:text-AAsecondary hover:cursor-pointer duration-300"
          >
            <span>Work</span>
          </Link>
          <Link
            to="TestimonialsSection"
            spy={true}
            smooth={true}
            offset={100}
            duration={200}
            onClick={() => closeMenu()}
            activeClass="text-AAsecondary"
            className="flex flex-col text-center space-y-2 text-AATextMuted font-Text2 text-sm sm:text-base hover:text-AAsecondary hover:cursor-pointer duration-300"
          >
            <span>Testimonials</span>
          </Link>
          <Link
            to="GallerySection"
            spy={true}
            smooth={true}
            offset={100}
            duration={200}
            onClick={() => closeMenu()}
            activeClass="text-AAsecondary"
            className="flex flex-col text-center space-y-2 text-AATextMuted font-Text2 text-sm sm:text-base hover:text-AAsecondary hover:cursor-pointer duration-300"
          >
            <span>Gallery</span>
          </Link>
          <Link
            to="GetInTouchSection"
            spy={true}
            smooth={true}
            offset={100}
            duration={200}
            onClick={() => closeMenu()}
            activeClass="text-AAsecondary"
            className="flex flex-col text-center space-y-2 text-AATextMuted font-Text2 text-sm sm:text-base hover:text-AAsecondary hover:cursor-pointer duration-300"
          >
            <span>Contact</span>
          </Link>
          <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
            <button
              className="rounded border font-Text2  border-AAsecondary
           hover:bg-ResumeButtonHover py-2 sm:py-4 px-5 sm:px-10 text-xs text-AAsecondary"
            >
              Resume
            </button>
          </a>

          <ThemeSelector finishedLoading={true} isMobile={true} />
        </div>
      </motion.div>
    </>
  );
};
export default MobileMenu;
