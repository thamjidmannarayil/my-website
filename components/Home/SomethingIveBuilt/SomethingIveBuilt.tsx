import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";
import { getTextWithHighlightedKeyword } from "../TextAndHighlight";

type Project = {
  name: string;
  subtitle: string;
  image: string;
  imageSm: string;
  description: {
    text: string;
    keywords: string[];
  };
  technologies: string[];
  githubUrl?: string;
  externalUrl: string;
  badge?: string;
};

const projects: Project[] = [
  {
    name: "ListCRM",
    subtitle: "Internal Web Application",
    image: "/projects/aqarycrm.png",
    imageSm: "/projects/aqarycrm-sm.jpg",
    description: {
      text: "Building List CRM, a real estate management platform powered by Django REST Framework and Flask-SocketIO for real-time operations. It features a scalable microservices architecture with modules like Admin, Notification, and Booking Management, leveraging Celery & Redis for async workflows. Designed to be a cloud-ready CRM that unites automation with modern real estate operations.",
      keywords: ["List CRM", "real estate management platform", "Django REST Framework", "Flask-SocketIO", "real-time operations", "microservices architecture", "Admin", "Notification", "Booking Management", "Celery & Redis", "async workflows", "cloud-ready CRM", "automation", "modern real estate operations"],
    },
    technologies: ["Python/Flask", "PostgreSQL", "Celery", "RabbitMQ/Redis", "WebSocket", "Azure ServiceBus", "Docker"],
    githubUrl: "https://github.com/thamjidmannarayil",
    externalUrl: "https://crm.aqaryone.com",
  },
  {
    name: "ListHRMS",
    subtitle: "Internal Project",
    image: "/projects/listhrms.png",
    imageSm: "/projects/listhrms-sm.jpg",
    description: {
      text: "Building a comprehensive HRMS platform, a centralized human resources management system focused on streamlining employee and organizational operations. It delivers a complete HR management experience with features like Employee Management, Attendance & Leave, Payroll, Recruitment, and Document Management, enabling efficient workforce administration. Designed as a scalable HR system supporting secure authentication, AI-powered document parsing, real-time communication, and integrations for modern enterprise HR workflows.",
      keywords: ["HRMS platform", "HR management experience", "Employee Management", "Attendance & Leave", "Payroll", "Recruitment", "Document Management", "efficient workforce administration", "scalable HR system", "secure authentication", "AI-powered document parsing", "real-time communication", "modern enterprise HR workflows"],
    },
    technologies: ["Flask", "PostgreSQL", "Celery", "AzureServiceBus/Redis", "NextJS", "Docker"],
    githubUrl: "https://github.com/thamjidmannarayil",
    externalUrl: "https://people.aqaryone.com",
  },
  {
    name: "ListIdentity",
    subtitle: "Internal Web Application.",
    image: "/projects/listidentity.png",
    imageSm: "/projects/listidentity-sm.png",
    description: {
      text: "Developing the List Identity Service, the core authentication engine of the List ecosystem. It handles user onboarding, multi-role access control, and secure token-based authentication across microservices. Built with Django REST Framework and OAuth2 / JWT, it ensures secure, scalable, and consistent access control across the platform.",
      keywords: ["List Identity Service", "core authentication engine", "List ecosystem", "user onboarding", "multi-role access control", "secure token-based authentication", "Django REST Framework", "OAuth2 / JWT", "secure, scalable", "consistent access control"],
    },
    technologies: ["Python/Flask", "PostgreSQL", "Celery", "RabbitMQ/Redis", "GRPC", "Azure BusService", "Docker"],
    githubUrl: "https://github.com/thamjidmannarayil",
    externalUrl: "https://id.aqaryone.com/",
  },
  {
    name: "Line Inn",
    subtitle: "Personal Project",
    image: "/projects/lineinn.png",
    imageSm: "/projects/lineinn-sm.png",
    description: {
      text: "Building a linen e-commerce platform, a direct-to-consumer fashion marketplace focused on linen clothing and linen-based products for everyday comfort. It delivers a complete online shopping experience with features like Product Listings, Reviews & Ratings, and Favorites & Cart, enabling seamless browsing. Designed as a scalable e-commerce system supporting secure checkout with payment integration for modern retail workflows.",
      keywords: ["linen e-commerce platform", "direct-to-consumer fashion marketplace", "linen clothing", "linen-based products", "everyday comfort", "online shopping experience", "Product Listings", "Reviews & Ratings", "Favorites & Cart", "seamless browsing", "scalable e-commerce system", "secure checkout", "payment integration", "modern retail workflows"],
    },
    technologies: ["Python/Django REST Framework", "PostgreSQL", "Celery", "RabbitMQ/Redis", "Flask-SocketIO", "Docker"],
    githubUrl: "https://github.com/thamjidmannarayil",
    externalUrl: "https://lineinn.thamjidthachu.dev",
  },
  {
    name: "The Quiet",
    subtitle: "Personal Project",
    image: "/projects/thequiet.png",
    imageSm: "/projects/thequiet-sm.png",
    description: {
      text: "I initiated The Quiet in 2021 as a demo project for my first job, which later grew into a personal passion project. Originally built with Django templates, it has since evolved into a modern stack using Django REST Framework and Next.js. The vision is to transform this platform into the official digital presence of a real resort under the same name, combining scalability and future-ready design to bring the dream of The Quiet Resort to life.",
      keywords: ["The Quiet", "demo project", "personal passion project", "Django templates", "Django REST Framework", "Next.js", "real resort", "scalability", "future-ready design", "The Quiet Resort"],
    },
    technologies: ["Python/Django", "Next.js", "PostgreSQL", "Celery", "RabbitMQ/Redis", "Docker"],
    githubUrl: "https://github.com/thamjidmannarayil/the-quiet",
    externalUrl: "https://resort.thamjidthachu.dev",
  },
  {
    name: "App Console",
    subtitle: "Internal Web Application",
    image: "/projects/aqaryconsole.png",
    imageSm: "/projects/aqaryconsole-sm.png",
    description: {
      text: "Building the List App Console, a developer platform for seamless app integration within the List ecosystem. Built with Flask and SQLAlchemy, it enables OAuth-based app registration, webhooks, and permission management through modular APIs. Supports IP whitelisting, callback validation, and dynamic event mapping to deliver secure, scalable integrations.",
      keywords: ["List App Console", "developer platform", "app integration", "List ecosystem", "Flask", "SQLAlchemy", "OAuth-based app registration", "webhooks", "permission management", "modular APIs", "IP whitelisting", "callback validation", "dynamic event mapping", "secure, scalable integrations"],
    },
    technologies: ["Python/Flask", "Event Driven Architecture", "PostgreSQL", "Celery", "RabbitMQ/Redis", "Azure ServiceBus", "Docker"],
    githubUrl: "https://github.com/thamjidmannarayil",
    externalUrl: "https://console.aqaryone.com",
  },
  {
    name: "API Gateway",
    subtitle: "Internal Web Application.",
    image: "/projects/aqaryrealestate.png",
    imageSm: "/projects/aqaryrealestate-sm.jpg",
    description: {
      text: "Architected the List API Gateway as the central entry point for all List microservices. Built with Flask and Nginx, it manages routing, authentication, rate limiting, and service-level security. Integrated with the Identity Service for JWT validation and RBAC, featuring centralized logging and dynamic service discovery for high availability and scalability.",
      keywords: ["List API Gateway", "central entry point", "List microservices", "Flask", "Nginx", "routing", "authentication", "rate limiting", "service-level security", "Identity Service", "JWT validation", "RBAC", "centralized logging", "dynamic service discovery", "high availability", "scalability"],
    },
    technologies: ["Python/Flask", "Docker"],
    githubUrl: "https://github.com/thamjidmannarayil",
    externalUrl: "https://aqaryaaid.com/",
  },
  {
    name: "Explore World",
    subtitle: "Travel and Tourism",
    image: "/projects/exploreworld.jpg",
    imageSm: "/projects/exploreworld-sm.jpg",
    description: {
      text: "I had the opportunity to spearhead the backend development of a travel aggregator platform, leveraging a microservices architecture. My focus was on integrating payment gateways and third-party APIs such as Elasticsearch, ensuring a scalable architecture for smooth transactions and an enhanced user experience.",
      keywords: ["microservices architecture", "payment gateways", "third-party APIs", "Elasticsearch", "scalable architecture", "user experience"],
    },
    technologies: ["Python/Django", "Elastic Search", "Django Rest Framework", "Postgres", "Docker", "Celery/Redis"],
    githubUrl: "https://github.com/flycatchinfotech/explore-world",
    externalUrl: "https://www.exploreworld.com/",
  },
  {
    name: "Wearlay",
    subtitle: "CRM & Inventory Management",
    image: "/projects/wearlay.png",
    imageSm: "/projects/wearlay-sm.jpg",
    description: {
      text: "I led the backend development of a CRM & Inventory system, built with Django and Django REST Framework. The platform automated lead workflows and optimized warehouse management, while a customized Django Admin with integrated analytics enabled data-driven decision making for improved business operations.",
      keywords: ["Django", "Django REST Framework", "lead workflows", "warehouse management", "Django Admin", "analytics"],
    },
    technologies: ["Python/Django", "Django Rest Framework", "PostgresSQL", "Docker", "Celery/Redis"],
    externalUrl: "https://www.wearlay.in/",
  },
  {
    name: "Al Maarefa",
    subtitle: "Learning & Management System",
    image: "/projects/almaarefa.png",
    imageSm: "/projects/almaarefa-sm.jpg",
    description: {
      text: "I led the backend development of a role-based academic platform designed for students, instructors, and admins. The system included academic tracking, messaging, and payment management. I also developed an online admission system, centralizing registration, document upload, and interview processes, improving efficiency for both applicants and staff.",
      keywords: ["academic platform", "students", "instructors", "admins", "academic tracking", "messaging", "payment management", "online admission system", "registration", "document upload", "interview processes", "applicants", "staff"],
    },
    technologies: ["Python/Django", "Django Rest Framework", "PostgresSQL", "Docker", "Celery/Redis"],
    githubUrl: "https://github.com/flycatchinfotech/al-maarefa-backend",
    externalUrl: "https://my.um.edu.sa/",
  },
  {
    name: "Away2gether",
    subtitle: "Hospitality Management",
    image: "/projects/away2gether.png",
    imageSm: "/projects/away2gether-sm.jpg",
    description: {
      text: "I solely developed the backend of a hospitality platform using Django, Django CMS, and PostgreSQL. The platform enhanced user experience through interactive elements built with AJAX and JavaScript. I also ensured scalability and data integrity, laying the foundation for future enhancements.",
      keywords: ["hospitality platform", "Django", "Django CMS", "PostgreSQL", "user experience", "interactive elements", "AJAX", "JavaScript", "scalability", "data integrity", "enhancements"],
    },
    technologies: ["Python/Django", "CMS", "PostgresSQL", "html/css", "Javascript", "Docker"],
    githubUrl: "https://github.com/flycatchinfotech/awaytogether-website",
    externalUrl: "https://my.away2gether.com",
  },
  {
    name: "Redalion",
    subtitle: "Innovative E-Commerce Platform",
    image: "/projects/redalion.png",
    imageSm: "/projects/redalion-sm.png",
    description: {
      text: "I led the backend development of a platform that links QR-coded medallions to digital ancestral profiles, featuring secure authentication and profile management. The system was built with a focus on scalability and clean code, ensuring a solid foundation for future enhancements.",
      keywords: ["QR-coded medallions", "digital ancestral profiles", "secure authentication", "profile management", "scalability", "clean code", "future enhancements"],
    },
    technologies: ["Python/Django", "PostgresSQL", "html/css", "Javascript", "Docker", "Stripe"],
    githubUrl: "https://github.com/flycatchinfotech/redalion",
    externalUrl: "https://www.redalion.com",
    badge: "🧱 On Hold...",
  },
];

export default function SomethingIveBuilt() {
  const router = useRouter();

  return (
    <div
      id="SomethingIveBuiltSection"
      className="relative w-full overflow-x-clip py-10 sm:py-12 lg:py-14"
    >
      <div className="content-viewport relative z-10 flex flex-col space-y-8 sm:space-y-10 lg:space-y-12">
      {/* // ? Title   */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="font-Header font-bold tracking-wider text-AATextPrimary text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-AATextMuted h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col space-y-8 md:space-y-16 xl:space-y-20">
        {projects.map((project, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div key={index} data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
              {/* Desktop image */}
              <div
                className="hidden z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center"
              >
                <div className={`relative rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-black/5 overflow-hidden w-full h-full ${isLeft
                  ? "col-start-6 col-span-7 3xl:col-start-7 3xl:col-span-6 4xl:col-start-8 4xl:col-span-5"
                  : "col-span-7 3xl:col-span-6 4xl:col-span-5"
                  }`}>
                  <a href={project.externalUrl} target="_blank" rel="noreferrer">
                    <div
                      className="absolute w-full h-full bg-black transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300 z-10"
                    ></div>
                  </a>

                  {project.badge && (
                    <div className="absolute px-2 bg-AAprimary rounded ml-4 mt-2 z-20">
                      <span className="text-AATextPrimary keyword-hover text-xs">{project.badge}</span>
                    </div>
                  )}

                  <Img src={project.image} alt={"Project Screen shot"} className={`w-full rounded-xl h-full object-cover `} />
                </div>
              </div>

              {/* Content */}
              <div className="relative flex min-h-[65vh] h-auto w-full flex-col justify-center p-[2px] md:absolute md:grid md:h-full md:min-h-0 md:grid-cols-12 md:p-0 md:block">
                
                {/* Mobile Image (Full Background Fixed Height) */}
                <div className={`absolute inset-0 z-0 md:hidden ${isLeft ? "md:order-2" : ""}`}>
                  <div className="relative w-full h-full rounded-[24px] overflow-hidden">
                    <div className="absolute inset-0 bg-gray-900/40 z-20 pointer-events-none"></div>
                    <Img src={project.imageSm} alt={"Project Screen shot"} className={`w-full h-full object-cover z-10`} />
                  </div>
                </div>

                {project.badge && !isLeft && (
                  <div className="absolute top-4 right-4 md:hidden z-40">
                    <span className="text-AATextPrimary keyword-hover sm:text-lg bg-AAprimary px-3 py-1 rounded-full">{project.badge}</span>
                  </div>
                )}

                <div
                  className={`relative z-30 flex h-auto min-h-[65vh] w-full flex-col justify-center gap-3 rounded-[22px] border border-white/10 bg-black/40 p-6 backdrop-blur-md sm:p-8 md:m-0 md:h-full md:min-h-0 md:gap-0 md:rounded-lg md:border-none md:bg-transparent md:p-0 md:backdrop-blur-none ${isLeft
                    ? "xl:col-span-7 xl:col-start-1 3xl:col-span-7 3xl:col-start-1 4xl:col-span-8 4xl:col-start-1 col-span-8 md:order-1"
                    : "xl:col-span-7 xl:col-start-6 3xl:col-span-7 3xl:col-start-6 4xl:col-span-8 4xl:col-start-6 col-start-5 col-span-8 items-start md:items-end"
                    }`}
                >
                  <div className={`flex flex-col space-y-1 z-10 ${isLeft ? "" : "md:items-end"}`}>
                    <span className="text-gray-300 md:text-gray-500 font-medium text-base">{project.subtitle}</span>
                    <a href={project.externalUrl} target="_blank" rel="noopener noreferrer">
                      <span className="text-white md:text-gray-900 keyword-hover font-bold text-xl hover:cursor-pointer">
                        {project.name}
                      </span>
                    </a>
                  </div>

                  <div className="liquid-glass liquid-glass--overlay project-liquid-glass z-10 w-full shrink-0 p-4 md:shrink md:p-6">
                    <p
                      className={`text-white md:text-AATextPrimary text-sm md:text-base leading-relaxed ${isLeft ? "text-left" : "text-left md:text-right"}`}
                      dangerouslySetInnerHTML={{
                        __html: getTextWithHighlightedKeyword(project.description.text, project.description.keywords).replace(/class="text-AAsecondary/g, 'class="text-AAsecondary font-semibold'),
                      }}
                    />
                  </div>

                  <ul
                    className={`flex flex-wrap w-full text-gray-400 md:text-gray-500 text-sm font-Text2 ${isLeft ? "" : "md:justify-end"
                      }`}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="pr-4 z-10 hover:text-white md:hover:text-black transition-colors cursor-default">{tech}</span>
                    ))}
                  </ul>

                  <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                    {project.githubUrl && <GithubIcon link={project.githubUrl} />}
                    <a href={project.externalUrl} target={"_blank"} rel="noreferrer">
                      <ExternalLink url={""} router={router} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
}
