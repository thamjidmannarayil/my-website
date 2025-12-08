import React from "react";
import Img from "../../../components/smallComp/image/Img"; // Assuming this path is correct for your project
import ArrowIcon from "../../../components/Icons/ArrowIcon"; // Assuming this path is correct for your project
import { GlassSection } from "../../Glass/GlassComponents";
import { forwardRef } from "react";
interface AboutMeProps {
  // Define any props you might pass to AboutMe here
  // For example: profileImageUrl?: string;
}

const AboutMe = forwardRef<HTMLDivElement, AboutMeProps>((props, ref) => {
  const technologies = [
    ["Python", "Django/Flask", "AI Agents/Automation", "Azure DevOps", "AWS/Google Cloud"],
    ["SQL Servers", "Docker", "Celery/Redis", "TypeScript/JavaScript: Basics", "Next.js/React: Basics"],
  ];

  return (
    <GlassSection className="snap-start flex flex-col items-center py-20 texture-overlay relative" id="aboutSection">
      <div data-aos="fade-up" className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1200px] 3xl:w-[1400px] 4xl:w-[1600px] relative z-10">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAAccent"} />
            <span className="flex-none text-AATextSecondary opacity-95 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gradient-to-r from-AAAccent to-AAsecondary h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>

        {/* Paragraphs & Image */}
        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2">
          {/* Text Content */}
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm">
            <div className="font-Header text-AATextMuted text-justify leading-relaxed">
              Hey there! I&apos;m <span className="text-AATextPrimary font-medium keyword-hover">Thamjid</span>, an{' '}
              <span className="text-AATextPrimary font-medium keyword-hover">AI-focused Python Developer</span>{' '}
              who loves building <span className="text-AATextPrimary font-medium keyword-hover">scalable</span>{' '}and{' '}
              <span className="text-AATextPrimary font-medium keyword-hover">intelligent</span>{' '}digital solutions.{' '}
              My journey started with a passion for programming and has grown into over{' '}
              <span className="text-AATextPrimary font-medium keyword-hover">4 years of professional experience</span>{' '}
              crafting web applications and data-driven platforms using{' '}
              <span className="text-AATextPrimary font-medium keyword-hover">Django</span>,{' '}
              <span className="text-AATextPrimary font-medium keyword-hover">Flask</span>, and{' '}
              <span className="text-AATextPrimary font-medium keyword-hover">modern AI tools</span>.
            </div>
            <div className="font-Header text-AATextMuted text-justify leading-relaxed">
              Over the years, I&apos;ve had the opportunity to work across diverse domains, from{" "}
              <span className="text-AATextPrimary font-medium keyword-hover">inventory & CRM systems</span>,{" "}
              <span className="text-AATextPrimary font-medium keyword-hover">HR management systems</span>,{" "}
              <span className="text-AATextPrimary font-medium keyword-hover">travel & hospitality platforms</span>,{" "}
              <span className="text-AATextPrimary font-medium keyword-hover">university registration & learning systems</span>,{" "}
              <span className="text-AATextPrimary font-medium keyword-hover">e-commerce</span> etc. Currently, I&apos;m working as an{" "}
              <span className="text-AATextPrimary font-medium keyword-hover">AI/ML Engineer</span> in Abu Dhabi, where I integrate intelligent systems like{" "}
              <span className="text-AATextPrimary font-medium keyword-hover">resume parsing</span>,{" "}
              <span className="text-AATextPrimary font-medium keyword-hover">ATS checks</span>, and{" "}
              <span className="text-AATextPrimary font-medium keyword-hover">chatbots</span> to enhance enterprise platforms.
            </div>
            <div className="font-Header text-AATextMuted text-justify leading-relaxed">
              Some of my favorite projects include <span className="text-AATextPrimary font-medium keyword-hover">Wearlay</span>, an inventory and CRM
              system, <span className="text-AATextPrimary font-medium keyword-hover">Explore World</span>, a large-scale tourism aggregator, and{" "}
              <span className="text-AATextPrimary font-medium keyword-hover">Redalion</span>, an e-commerce platform linking QR-coded medallions to
              digital ancestral profiles. Each project has pushed me to design{" "}
              <span className="text-AATextPrimary font-medium keyword-hover">scalable architectures</span> and deliver{" "}
              <span className="text-AATextPrimary font-medium keyword-hover">user-focused solutions</span>.
            </div>
            <div className="font-Header tracking-wide text-AATextMuted pt-2 pb-1 text-justify">
              Here&apos;s what I&apos;m usually working with these days:
            </div>
            {/* Technologies List */}
            <div className="font-Header tracking-wide flex flex-row space-x-12 md:space-x-16 justify-center lg:justify-start">
              {technologies.map((techGroup, groupIndex) => (
                <div key={groupIndex} className="flex flex-col space-y-4 sm:text-base text-sm">
                  {techGroup.map((tech, techIndex) => (
                    <div key={techIndex} className="flex flex-row items-center space-x-2">
                      <ArrowIcon className={"h-3 w-3 text-AATextMuted flex-none"} />
                      <span className="text-AATextMuted hover:text-AATextPrimary transition-colors duration-300 sm:text-sm text-xs">{tech}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="font-Header text-AATextMuted pt-4 text-justify leading-relaxed">
              Whether it&apos;s <span className="text-AATextPrimary font-medium keyword-hover">AI-driven platforms</span>,{" "}
              <span className="text-AATextPrimary font-medium keyword-hover">microservices-based applications</span>, or{" "}
              <span className="text-AATextPrimary font-medium keyword-hover">innovative data solutions</span>, I&apos;m always up for the next challenge that
              blends <span className="text-AATextPrimary font-medium keyword-hover">technology</span>,{" "}
              <span className="text-AATextPrimary font-medium keyword-hover">creativity</span>, and{" "}
              <span className="text-AATextPrimary font-medium keyword-hover">impact</span>.
            </div>
          </div>


          {/* Image Section (Desktop and Tablet) */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden">
            <div className="group-hover:translate-x-3 group-hover:translate-y-3 duration-500 ease-out absolute w-5/6 h-5/6 border-2 border-gradient-to-br from-AAAccent to-AAsecondary translate-x-5 translate-y-5 rounded-xl shadow-lg shadow-AAsecondary/20"></div>
            <div className="absolute w-5/6 h-5/6 rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-gradient-to-br from-AATextPrimary/20 to-AAAccent/20 opacity-30 duration-500 rounded-xl overflow-hidden backdrop-blur-sm"></div>
              <Img
                src={"/img/Portfolio-portrait-3.jpg"}
                className={"object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"}
                alt="My Image Not Found"
              />
            </div>
          </div>

          {/* Image Section (Mobile) */}
          <div className="relative w-full h-48 md:hidden flex justify-center items-center">
            <div className="absolute w-48 h-full rounded-xl translate-x-5 translate-y-5 border-2 border-gradient-to-br from-AAAccent to-AAsecondary shadow-lg shadow-AAsecondary/20"></div>
            <div className="absolute w-48 h-full rounded-xl overflow-hidden shadow-xl">
              <Img
                src={"/img/Portfolio-portrait-3.jpg"}
                className={"object-contain rounded-xl"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full bg-gradient-to-br from-AATextPrimary/20 to-AAAccent/20 opacity-30 rounded-xl overflow-hidden backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
    </GlassSection>
  );
});
AboutMe.displayName = "AboutMe";
export default AboutMe; // Changed to a const for functional component definition with type
