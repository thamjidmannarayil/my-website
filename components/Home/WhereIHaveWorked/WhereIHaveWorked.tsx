import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";
import { getTextWithHighlightedKeyword } from "../TextAndHighlight";

type WorkExperience = {
  id: string;
  companyName: string;
  position: string;
  location: string;
  date: string;
  url: string;
  tasks: {
    text: string;
    keywords: string[];
  }[];
};

const experiences: WorkExperience[] = [
  {
    id: "Aqary",
    companyName: "Aqary Investment and Development",
    position: "AI ML Engineer",
    location: "Abu Dhabi, UAE",
    date: "May 2025 - Present",
    url: "https://aqaryaid.com",
    tasks: [
      {
        text: "Architected and developed a microservices based enterprise CRM platform supporting sales pipeline management, workflow automation, role based access control & AI powered record summarization.",
        keywords: ["Architected", "developed", "microservices", "CRM platform", "workflow automation", "AI powered", "record summarization"],
      },
      {
        text: "Built a reusable AI service layer enabling automated resume screening, contextual chatbot responses, and intelligent record summarization across CRM and HRMS ecosystems.",
        keywords: ["AI service layer", "automated resume screening", "contextual chatbot responses", "intelligent record summarization", "HRMS"],
      },
      {
        text: "Designed and implemented a centralized Identity Service handling authentication, authorization, OAuth app whitelisting, and secure token based inter service communication.",
        keywords: ["Identity Service", "authentication", "authorization", "OAuth app whitelisting", "secure token based", "inter service communication"],
      },
      {
        text: "Implemented real time event driven architecture using Celery, Azure Service Bus, WebSockets, and Webhooks for asynchronous processing and responsive system behavior.",
        keywords: ["real time event driven architecture", "Celery", "Azure Service Bus", "WebSockets", "Webhooks", "asynchronous processing"],
      },
      {
        text: "Containerized and deployed distributed services using Docker ensuring secure, scalable, and production grade deployments.",
        keywords: ["Containerized", "deployed distributed services", "Docker", "secure", "scalable", "production grade deployments"],
      },
    ],
  },
  {
    id: "Flycatch",
    companyName: "Flycatch Infotech Pvt. Ltd.",
    position: "Software Engineer",
    location: "Kochi, Kerala",
    date: "Mar 2022 - Mar 2025",
    url: "https://www.flycatchtech.com",
    tasks: [
      {
        text: "Led backend architecture and delivered four customized enterprise applications from scratch, owning system design, API development, database modeling, and performance optimization.",
        keywords: ["backend architecture", "four customized enterprise applications", "system design", "API development", "database modeling", "performance optimization"],
      },
      {
        text: "Optimized API performance and system responsiveness through query tuning, caching strategies, and asynchronous processing mechanisms.",
        keywords: ["Optimized API performance", "system responsiveness", "query tuning", "caching strategies", "asynchronous processing mechanisms"],
      },
      {
        text: "Spearheaded backend development of a travel aggregator platform using microservices, integrating payment gateways and Elasticsearch for advanced search capabilities.",
        keywords: ["backend development", "travel aggregator platform", "microservices", "payment gateways", "Elasticsearch", "advanced search capabilities"],
      },
      {
        text: "Led development of a role based LMS and registration system integrating academic tracking, messaging workflows, and payment gateway systems.",
        keywords: ["LMS", "registration system", "academic tracking", "messaging workflows", "payment gateway systems"],
      },
      {
        text: "Developed CRM and inventory platforms using Django and DRF automating business workflows and improving operational efficiency.",
        keywords: ["CRM and inventory platforms", "Django", "DRF", "automating business workflows", "improving operational efficiency"],
      },
      {
        text: "Mentored junior developers and enforced engineering standards through structured code reviews and architectural guidance.",
        keywords: ["Mentored junior developers", "engineering standards", "structured code reviews", "architectural guidance"],
      },
    ],
  },
  {
    id: "Quest",
    companyName: "Quest Innovative Solutions",
    position: "Software Engineer Intern",
    location: "Quest Innovative Solutions, Kochi, Kerala",
    date: "Sep 2021 – Mar 2022",
    url: "https://www.qis.co.in/",
    tasks: [
      {
        text: "Developed a solid foundation in Python, JavaScript, SQL, Django, Flask, and AngularJS through hands-on projects and guided mentorship sessions.",
        keywords: ["Python", "JavaScript", "SQL", "Django", "Flask", "AngularJS", "hands-on projects", "mentorship"],
      },
      {
        text: "Actively contributed to live client projects, applying theoretical concepts to solve practical challenges and enhance software performance.",
        keywords: ["live projects", "client projects", "practical challenges", "software performance"],
      },
      {
        text: "Earned certifications in multiple programming languages and frameworks, strengthening core development and problem-solving skills.",
        keywords: ["certifications", "programming languages", "frameworks", "problem-solving"],
      },
      {
        text: "Collaborated within agile teams to design and implement responsive web solutions, gaining exposure to version control and industry-standard development practices.",
        keywords: ["agile teams", "responsive web solutions", "version control", "industry-standard practices"],
      },
    ],
  },
];

export default function WhereIHaveWorked() {
  const [selectedJob, setSelectedJob] = React.useState("Aqary");

  const currentExperience = experiences.find(exp => exp.id === selectedJob);

  return (
    <div data-aos="fade-up" className="flex flex-col items-center justify-center py-12 sm:py-24 space-y-6 sm:space-y-12 bg-AAprimary dotted-bg">
      {/* // ? Title "Where I've Worked" */}
      <section className="flex flex-row items-center w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1200px] 3xl:max-w-[1400px] 4xl:max-w-[1600px] mx-auto px-4 md:px-0">
        <div className="flex flex-row items-center">
          <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"} />
        </div>

        <span className="text-AATextPrimary opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-AATextMuted h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      {/* // ? Where I've Worked Content section */}
      <section
        className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0
      justify-center md:justify-start items-center md:items-start w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1200px] 3xl:max-w-[1400px] 4xl:max-w-[1600px] mx-auto"
      >
        {/* // ? Left side of Where I've Worked, contains the bar and name of companies */}
        <CompaniesBar selectedJob={selectedJob} setSelectedJob={setSelectedJob} experiences={experiences} />
        {/* // ? Description for The job */}
        {currentExperience && <JobDescription experience={currentExperience} />}
      </section>
    </div>
  );
}

const CompaniesBar = ({ selectedJob, setSelectedJob, experiences }) => {
  const [barPosition, setBarPosition] = React.useState<Number>(-8);
  const [barAbovePosition, setBarAbovePosition] = React.useState<Number>(0);

  const CompanyButton = ({ experience, index }) => {
    const isSelected = selectedJob === experience.id;
    const barPositions = [-10, 45, 100]; // Positions for each company
    const barAbovePositions = [0, 150, 300]; // Positions for mobile bar

    return (
      <button
        onClick={() => {
          setBarPosition(barPositions[index]);
          setBarAbovePosition(barAbovePositions[index]);
          setSelectedJob(experience.id);
        }}
        className={`flex-1 md:flex-none text-[10px] xs:text-xs sm:text-sm text-center md:text-left rounded font-mono  
             py-2 px-1 xs:py-3 xs:px-2 md:pl-6 md:px-4 md:w-44 min-w-0 duration-500 transition-all overflow-hidden
             ${isSelected
            ? "bg-AAsecondary bg-opacity-20 text-white border-l-2 md:border-l-2 border-b-2 md:border-b-0 border-AAsecondary font-semibold"
            : "text-AATextMuted hover:text-AAsecondary hover:bg-AASurface"
          }`}
      >
        {experience.companyName}
      </button>
    );
  };

  return (
    <div
      id="WhereIhaveWorkedSection"
      className=" flex flex-col md:flex-row w-full lg:w-auto 
      overflow-hidden pb-4 md:pb-0 justify-start
       sm:justify-center items-start sm:items-center px-2 xs:px-4 md:px-0"
    >
      {/* // ? left bar Holder */}
      <div
        className=" hidden md:block bg-AATextMuted/30 relative h-0.5 w-34 md:h-[150px] translate-y-1 md:w-0.5  
        rounded md:order-1 order-2 md:mr-4"
      >
        {/* // ? animated left bar */}
        <motion.div
          animate={{ y: barPosition }}
          className={`absolute w-10 h-0.5 md:w-0.5 md:h-12 rounded bg-AAsecondary `}
        ></motion.div>
      </div>
      {/* // ? Companies name as buttons */}
      <div className="flex flex-col md:order-2 order-1 space-y-1 pl-0 md:pl-0 w-full md:w-auto items-center md:items-start">
        <div className="flex flex-row md:flex-col gap-1 xs:gap-2 md:gap-1 justify-center md:justify-start w-full md:w-auto">
          {experiences.map((experience, index) => (
            <CompanyButton key={experience.id} experience={experience} index={index} />
          ))}
        </div>
        <div className="block md:hidden h-0.5 rounded bg-AATextMuted/30 w-full max-w-md overflow-hidden">
          <motion.div animate={{ x: barAbovePosition }} className="w-[150px] h-0.5 rounded bg-AAsecondary"></motion.div>
        </div>
      </div>
    </div>
  );
};

const JobDescription = ({ experience }: { experience: WorkExperience }) => {
  return (
    <div className="flex flex-col space-y-5 max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl px-4 md:px-0 work-section-scrollbar">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <div className="flex flex-row items-center gap-2">
          <span className="text-AATextPrimary sm:text-lg text-sm font-Arimo tracking-wide font-semibold">
            {experience.position} <span className="text-AATextMuted font-normal">@ {experience.location}</span>
          </span>
          <a
            href={experience.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 sm:w-5 sm:h-5 text-AATextMuted hover:text-AAsecondary hover:cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200"
            >
              <title>Visit {experience.companyName}</title>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
        {/* Date */}
        <span className="font-mono text-xs text-AATextMuted">{experience.date}</span>
      </div>
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
        {experience.tasks.map((item, index) => {
          return (
            <div key={index} className="flex flex-row space-x-2">
              <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
              <span
                className="text-AATextMuted sm:text-sm text-xs"
                dangerouslySetInnerHTML={{
                  __html: getTextWithHighlightedKeyword(item.text, item.keywords),
                }}
              ></span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
