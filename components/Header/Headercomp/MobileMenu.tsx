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
        className={`w-full fixed top-0 right-0 h-screen flex md:hidden duration-300 z-50 ${props.rotate ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div
          onClick={() => closeMenu()}
          className={`w-1/4 h-full bg-MobileNavColor/30 hover:cursor-pointer ${props.rotate ? 'backdrop-blur-sm' : ''}`}
        ></div>
        <div
          className="w-3/4 h-full bg-white/40 backdrop-blur-2xl border-l border-white/50 shadow-[-10px_0_30px_rgba(0,0,0,0.05)] flex flex-col 
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
            className="flex flex-col text-center space-y-2 text-gray-800 font-Text2 text-sm sm:text-base hover:text-gray-900 hover:cursor-pointer duration-300"
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
            className="flex flex-col text-center space-y-2 text-gray-800 font-Text2 text-sm sm:text-base hover:text-gray-900 hover:cursor-pointer duration-300"
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
            className="flex flex-col text-center space-y-2 text-gray-800 font-Text2 text-sm sm:text-base hover:text-gray-900 hover:cursor-pointer duration-300"
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
            className="flex flex-col text-center space-y-2 text-gray-800 font-Text2 text-sm sm:text-base hover:text-gray-900 hover:cursor-pointer duration-300"
          >
            <span>Testimonials</span>
          </Link>
          <Link
            to="TeamsIWorkedWithSection"
            spy={true}
            smooth={true}
            offset={100}
            duration={200}
            onClick={() => closeMenu()}
            activeClass="text-AAsecondary"
            className="flex flex-col text-center space-y-2 text-gray-800 font-Text2 text-sm sm:text-base hover:text-gray-900 hover:cursor-pointer duration-300"
          >
            <span>Teams</span>
          </Link>
          <Link
            to="GallerySection"
            spy={true}
            smooth={true}
            offset={100}
            duration={200}
            onClick={() => closeMenu()}
            activeClass="text-AAsecondary"
            className="flex flex-col text-center space-y-2 text-gray-800 font-Text2 text-sm sm:text-base hover:text-gray-900 hover:cursor-pointer duration-300"
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
            className="flex flex-col text-center space-y-2 text-gray-800 font-Text2 text-sm sm:text-base hover:text-gray-900 hover:cursor-pointer duration-300"
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
