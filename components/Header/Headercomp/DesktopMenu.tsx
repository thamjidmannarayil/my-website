import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { Link as ReactScrollLink } from "react-scroll";
import ThemeSelector from "./ThemeSelectorNew";

export default function DesktopMenu(props: { finishedLoading: boolean; isOnDarkSection?: boolean }) {
  const textColor = props.isOnDarkSection ? "text-white" : "text-AATextSecondary";
  const hoverColor = props.isOnDarkSection ? "hover:text-gray-700" : "hover:text-AATextPrimary";

  return (
    <div className="font-mono text-xs md:flex hidden flex-row items-center space-x-8 ">
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 0.6,
          delay: props.finishedLoading ? 0 : 0.5,
        }}
        className=" text-AAAccent"

      >
        <ReactScrollLink to="aboutSection" spy={true} smooth={true} offset={-100} duration={200}>
          <span className={`${textColor} ${hoverColor} hover:cursor-pointer duration-300`}>About</span>
        </ReactScrollLink>
      </motion.div>
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 0.6,
          delay: props.finishedLoading ? 0 : 0.7,
        }}
        className="text-AAAccent"

      >
        <ReactScrollLink to="WhereIhaveWorkedSection" spy={true} smooth={true} offset={-300} duration={200}>
          <span className={`${textColor} ${hoverColor} hover:cursor-pointer duration-300`}>Experience</span>
        </ReactScrollLink>
      </motion.div>
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 0.6,
          delay: props.finishedLoading ? 0 : 0.9,
        }}
        className="text-AAAccent"
      >
        <ReactScrollLink to="SomethingIveBuiltSection" spy={true} smooth={true} offset={-100} duration={200}>
          <span className={`${textColor} ${hoverColor} hover:cursor-pointer duration-300`}>Projects</span>
        </ReactScrollLink>

      </motion.div>
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 0.6,
          delay: props.finishedLoading ? 0 : 1.1,
        }}
        className="text-AAAccent"
      >
        <ReactScrollLink to="TestimonialsSection" spy={true} smooth={true} offset={-100} duration={200}>
          <span className={`${textColor} ${hoverColor} hover:cursor-pointer duration-300`}>Testimonials</span>
        </ReactScrollLink>
      </motion.div>
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 0.6,
          delay: props.finishedLoading ? 0 : 1.1,
        }}
        className="text-AAAccent"
      >
        <ReactScrollLink to="GallerySection" spy={true} smooth={true} offset={-100} duration={200}>
          <span className={`${textColor} ${hoverColor} hover:cursor-pointer duration-300`}>Gallery</span>
        </ReactScrollLink>
      </motion.div>
      <motion.span
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 0.6,
          delay: props.finishedLoading ? 0 : 1.3,
        }}
        className="text-AAAccent"
      >
        <ReactScrollLink to="GetInTouchSection" spy={true} smooth={true} offset={-100} duration={200}>
          <span className={`${textColor} ${hoverColor} hover:cursor-pointer duration-300`}>Contact</span>
        </ReactScrollLink>
      </motion.span>
      <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
        <motion.button
          initial={{
            y: -40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            duration: props.finishedLoading ? 0 : 0.6,
            delay: props.finishedLoading ? 0 : 1.5,
          }}
          // onClick={()=>{router.push("/resume.pdf")}}
          className={`${textColor} border-2 border-AAAccent py-2 px-4 rounded-lg hover:bg-AAAccent/20 ${props.isOnDarkSection ? 'hover:border-white' : 'hover:border-AATextPrimary'} transition-all duration-300 backdrop-blur-sm`}
        >
          Resume
        </motion.button>
      </a>

      <ThemeSelector finishedLoading={props.finishedLoading} isOnDarkSection={props.isOnDarkSection} />
    </div>
  );
}
