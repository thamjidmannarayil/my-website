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
    ["Python", "SQL", "JavaScript", "Django, Flask & FastAPI", "NextJS"],
    ["Azure & AWS", "Docker & Nginx", "Microservices Architecture", "Event-Driven Systems (Celery, Redis)", "System Design & OAuth"],
  ];

  return (
    <GlassSection className="snap-start flex flex-col items-center py-10 sm:py-8 bg-AAprimary dotted-bg texture-overlay relative" id="aboutSection">
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
              <span className="text-AATextPrimary font-medium keyword-hover">AI/ML Engineer & Software Developer</span>{' '}
              who loves building <span className="text-AATextPrimary font-medium keyword-hover">scalable</span>{' '}and{' '}
              <span className="text-AATextPrimary font-medium keyword-hover">intelligent</span>{' '}enterprise solutions.{' '}
              With over <span className="text-AATextPrimary font-medium keyword-hover">4 years of professional experience</span>, I specialize in crafting robust backend architectures and AI-driven platforms using{' '}
              <span className="text-AATextPrimary font-medium keyword-hover">Python</span>,{' '}
              <span className="text-AATextPrimary font-medium keyword-hover">Django</span>,{' '}
              <span className="text-AATextPrimary font-medium keyword-hover">FastAPI</span>, and modern cloud technologies.
            </div>
            <div className="font-Header text-AATextMuted text-justify leading-relaxed">
              My expertise lies in designing <span className="text-AATextPrimary font-medium keyword-hover">Microservices</span> and{' '}
              <span className="text-AATextPrimary font-medium keyword-hover">Event-Driven Architectures</span>. Currently, I am working as an{' '}
              <span className="text-AATextPrimary font-medium keyword-hover">AI/ML Engineer</span> at <span className="text-AATextPrimary font-medium keyword-hover">Aqary Investment and Development</span> in Abu Dhabi, where I develop enterprise CRM platforms and build reusable AI service layers for automated resume screening and intelligent chatbot responses.
            </div>
            <div className="font-Header text-AATextMuted text-justify leading-relaxed">
              Previously at <span className="text-AATextPrimary font-medium keyword-hover">Flycatch Infotech</span>, I led the backend development of multiple customized enterprise applications, travel aggregators, and LMS platforms. I am deeply passionate about system design, optimizing API performance, and containerizing distributed services using <span className="text-AATextPrimary font-medium keyword-hover">Docker</span>.
            </div>
            <div className="font-Header tracking-wide text-AATextMuted pt-2 pb-1 text-justify">
              Here are some of the key technologies and concepts I work with:
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
          </div>


          {/* Image Section (Desktop and Tablet) */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden">
            <div className="group-hover:translate-x-3 group-hover:translate-y-3 duration-500 ease-out absolute w-5/6 h-5/6 border-2 border-gradient-to-br from-AAAccent to-AAsecondary translate-x-5 translate-y-5 rounded-xl shadow-lg shadow-AAsecondary/20"></div>
            <div className="absolute w-5/6 h-5/6 rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-gradient-to-br from-AATextPrimary/20 to-AAAccent/20 opacity-30 duration-500 rounded-xl overflow-hidden backdrop-blur-sm"></div>
              <Img
                src={"/img/thamjidmannarayil-1.jpeg"}
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
                src={"/img/thamjidmannarayil-1.jpeg"}
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
