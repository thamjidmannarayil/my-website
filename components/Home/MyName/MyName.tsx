import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion"; // Or import { motion } from "framer-motion";
import Image from "next/image";

// Replace these with your project or profile URLs when they are ready.
const heroToolLinks = {
  linkedin: "https://www.linkedin.com/in/thamjid-mannarayil/",
  design: "https://www.figma.com/@thamjidm",
  code: "https://github.com/thamjidmannarayil",
  deploy: "https://vercel.com/thamjidmannarayil",
};

interface MyNameProps {
  finishedLoading: boolean;
}

const MyName: React.FC<MyNameProps> = props => {
  return (
    <div
      id="MyNameSection"
      className="content-viewport relative flex flex-col justify-start pb-12 pt-20 sm:pb-20 sm:pt-24 lg:pb-24 4xl:pt-36"
    >
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 0.4, duration: props.finishedLoading ? 0 : 0.6 },
          y: { delay: props.finishedLoading ? 0 : 0.4, duration: props.finishedLoading ? 0 : 0.6 },
        }}
        className="text-AANameIntro font-mono text-lg tracking-widest"
      >
        The name is
      </motion.span>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 0.8, duration: props.finishedLoading ? 0 : 0.6 },
          y: { delay: props.finishedLoading ? 0 : 0.8, duration: props.finishedLoading ? 0 : 0.6 },
        }}
        className="font-Header text-AAsecondary font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-3 sm:mt-4"
      >
        <span className="relative inline-block bg-gradient-to-r from-AATextSecondary to-AATextPrimary bg-clip-text text-transparent">
          <a
            href={heroToolLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn profile"
            className="liquid-glass liquid-glass--compact hero-tool-icon hero-tool-icon--linkedin"
          >
            <Image src="/icons/linkedin.svg" alt="" width={26} height={26} className="h-[70%] w-[70%]" />
          </a>
          Thamjid Mannarayil.
        </span>
      </motion.h1>
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 0.4, duration: props.finishedLoading ? 0 : 0.6 },
          y: { delay: props.finishedLoading ? 0 : 0.4, duration: props.finishedLoading ? 0 : 0.6 },
        }}
        className="text-AATextSecondary font-mono text-lg tracking-widest"
      >
        and I,
      </motion.span>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 1.2, duration: props.finishedLoading ? 0 : 0.6 },
          y: { delay: props.finishedLoading ? 0 : 1.2, duration: props.finishedLoading ? 0 : 0.6 },
        }}
        className="font-Header text-AATextMuted font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4 sm:mt-5"
      >
        <span className="relative inline-block">
          <a
            href={heroToolLinks.design}
            target="_blank"
            rel="noreferrer"
            aria-label="Open design link"
            className="liquid-glass liquid-glass--compact hero-tool-icon hero-tool-icon--design"
          >
            <Image src="/icons/figma.svg" alt="" width={12} height={17} className="h-[72%] w-auto" />
          </a>
          Design,
        </span>{" "}
        <span className="relative inline-block">
          <a
            href={heroToolLinks.code}
            target="_blank"
            rel="noreferrer"
            aria-label="Open code link"
            className="liquid-glass liquid-glass--compact hero-tool-icon hero-tool-icon--code"
          >
            <Image src="/icons/github.svg" alt="" width={16} height={16} className="h-[68%] w-[68%]" />
          </a>
          Code
        </span>{" "}
        and{" "}
        <span className="relative inline-block">
          <a
            href={heroToolLinks.deploy}
            target="_blank"
            rel="noreferrer"
            aria-label="Open deployment link"
            className="liquid-glass liquid-glass--compact hero-tool-icon hero-tool-icon--deploy"
          >
            <Image src="/icons/vercel.svg" alt="" width={18} height={16} className="h-[64%] w-auto" />
          </a>
          Deploy.
        </span>
      </motion.h2>

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 1.6, duration: props.finishedLoading ? 0 : 0.6 },
          y: { delay: props.finishedLoading ? 0 : 1.6, duration: props.finishedLoading ? 0 : 0.6 },
        }}
        className="liquid-glass liquid-glass--overlay text-AATextMuted font-Inter text-sm md:text-lg sm:text-md mt-10 p-5 sm:p-7 tracking-wider leading-relaxed"
      >
        I&apos;m an <span className="text-AATextPrimary font-medium keyword-hover">AI-focused Python Developer</span> with over{" "}
        <span className="text-AATextPrimary font-medium keyword-hover">4 years of experience</span> designing and building scalable web applications with{" "}
        <span className="text-AATextPrimary font-medium keyword-hover">Django</span> and{" "}
        <span className="text-AATextPrimary font-medium keyword-hover">Flask</span>.
        <br className="3xl:block hidden" /> I bring a proven track record across{" "}
        <span className="text-AATextPrimary font-medium keyword-hover">HR management</span>,{" "}
        <span className="text-AATextPrimary font-medium keyword-hover">travel and hospitality</span>,{" "}
        <span className="text-AATextPrimary font-medium keyword-hover">university registration and learning systems</span>, and{" "}
        <span className="text-AATextPrimary font-medium keyword-hover">e-commerce</span>.
        <br className="3xl:block hidden" /> Currently working as an{" "}
        <span className="text-AATextPrimary font-medium keyword-hover">AI/ML Engineer</span>, I integrate intelligent systems like{" "}
        <span className="text-AATextPrimary font-medium keyword-hover">resume parsing</span> and{" "}
        <span className="text-AATextPrimary font-medium keyword-hover">ATS optimization</span> to deliver{" "}
        <span className="text-AATextPrimary font-medium keyword-hover">data-driven solutions</span>.
        <br className="3xl:block hidden" /> I&apos;m passionate about{" "}
        <span className="text-AATextPrimary font-medium keyword-hover">clean architecture</span>,{" "}
        <span className="text-AATextPrimary font-medium keyword-hover">microservices</span>, and crafting applications that balance{" "}
        <span className="text-AATextPrimary font-medium keyword-hover">performance</span> and{" "}
        <span className="text-AATextPrimary font-medium keyword-hover">maintainability</span>.
        <br className="3xl:block hidden" /> I thrive on{" "}
        <span className="text-AATextPrimary font-medium keyword-hover">challenging projects</span> that push the boundaries of{" "}
        <span className="text-AATextPrimary font-medium keyword-hover">innovation</span> and create{" "}
        <span className="text-AATextPrimary font-medium keyword-hover">meaningful impact</span>.
      </motion.h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 2.2, duration: props.finishedLoading ? 0 : 0.6 },
          y: { delay: props.finishedLoading ? 0 : 2.2, duration: props.finishedLoading ? 0 : 0.6 },
        }}
        className="mt-12"
      >
        <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
          <button className="liquid-glass liquid-glass--interactive text-AATextSecondary px-6 sm:px-10 py-4 sm:py-5 transition-all duration-500 ease-out font-medium tracking-wide relative overflow-hidden group inline-flex items-center justify-center gap-4">
            <div className="absolute inset-0 bg-gradient-to-br from-AAprimary/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-AAAccent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10">Check out my resume!</span>
            <svg
              viewBox="0 0 24 24"
              className="relative z-10 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              fill="none"
              aria-hidden="true"
            >
              <path d="M8 16L16 8M10 8H16V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </a>
      </motion.div>

      {/* Optional Scroll Down Indicator Placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: props.finishedLoading ? 0 : 2.8, duration: 0.5 }}
        className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-AAAccent sm:bottom-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-bounce">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
      </motion.div>
    </div>
  );
};

export default MyName;
