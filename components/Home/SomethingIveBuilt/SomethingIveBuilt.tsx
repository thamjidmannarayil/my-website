import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";
import ParticleBackground from "../../Background/ParticleBackground";
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
    name: "Aqary CRM",
    subtitle: "Internal Web Application",
    image: "/projects/aqarycrm.png",
    imageSm: "/projects/aqarycrm-sm.jpg",
    description: {
      text: "Building Aqary CRM, a real estate management platform powered by Django REST Framework and Flask-SocketIO for real-time operations. It features a scalable microservices architecture with modules like Admin, Notification, and Booking Management, leveraging Celery & Redis for async workflows. Designed to be a cloud-ready CRM that unites automation with modern real estate operations.",
      keywords: ["Aqary CRM", "real estate management platform", "Django REST Framework", "Flask-SocketIO", "real-time operations", "microservices architecture", "Admin", "Notification", "Booking Management", "Celery & Redis", "async workflows", "cloud-ready CRM", "automation", "modern real estate operations"],
    },
    technologies: ["Python/Flask", "PostgreSQL", "Celery", "RabbitMQ/Redis", "WebSocket", "Azure ServiceBus", "Docker"],
    githubUrl: "https://github.com/thamjidmannarayil",
    externalUrl: "https://crm.aqaryone.com",
  },
  {
    name: "HRMS - Identity Service",
    subtitle: "Internal Web Application.",
    image: "/projects/aqaryidentity.png",
    imageSm: "/projects/aqaryidentity-sm.png",
    description: {
      text: "Developing the Aqary Identity Service, the core authentication engine of the Aqary ecosystem. It handles user onboarding, multi-role access control, and secure token-based authentication across microservices. Built with Django REST Framework and OAuth2 / JWT, it ensures secure, scalable, and consistent access control across the platform.",
      keywords: ["Aqary Identity Service", "core authentication engine", "Aqary ecosystem", "user onboarding", "multi-role access control", "secure token-based authentication", "Django REST Framework", "OAuth2 / JWT", "secure, scalable", "consistent access control"],
    },
    technologies: ["Python/Flask", "PostgreSQL", "Celery", "RabbitMQ/Redis", "GRPC", "Azure BusService", "Docker"],
    githubUrl: "https://github.com/thamjidmannarayil",
    externalUrl: "https://id.aqaryone.com/",
  },
  {
    name: "App Console",
    subtitle: "Internal Web Application",
    image: "/projects/aqaryconsole.png",
    imageSm: "/projects/aqaryconsole-sm.png",
    description: {
      text: "Building the Aqary App Console, a developer platform for seamless app integration within the Aqary ecosystem. Built with Flask and SQLAlchemy, it enables OAuth-based app registration, webhooks, and permission management through modular APIs. Supports IP whitelisting, callback validation, and dynamic event mapping to deliver secure, scalable integrations.",
      keywords: ["Aqary App Console", "developer platform", "app integration", "Aqary ecosystem", "Flask", "SQLAlchemy", "OAuth-based app registration", "webhooks", "permission management", "modular APIs", "IP whitelisting", "callback validation", "dynamic event mapping", "secure, scalable integrations"],
    },
    technologies: ["Python/Flask", "Event Driven Architecture", "PostgreSQL", "Celery", "RabbitMQ/Redis", "Azure ServiceBus", "Docker"],
    githubUrl: "https://github.com/thamjidmannarayil",
    externalUrl: "https://console.aqaryone.com",
  },
  {
    name: "Aqary API Gateway",
    subtitle: "Internal Web Application.",
    image: "/projects/aqaryrealestate.png",
    imageSm: "/projects/aqaryrealestate-sm.jpg",
    description: {
      text: "Architected the Aqary API Gateway as the central entry point for all Aqary microservices. Built with Flask and Nginx, it manages routing, authentication, rate limiting, and service-level security. Integrated with the Identity Service for JWT validation and RBAC, featuring centralized logging and dynamic service discovery for high availability and scalability.",
      keywords: ["Aqary API Gateway", "central entry point", "Aqary microservices", "Flask", "Nginx", "routing", "authentication", "rate limiting", "service-level security", "Identity Service", "JWT validation", "RBAC", "centralized logging", "dynamic service discovery", "high availability", "scalability"],
    },
    technologies: ["Python/Flask", "Docker"],
    githubUrl: "https://github.com/thamjidmannarayil",
    externalUrl: "https://aqaryaaid.com/",
  },
  {
    name: "HRMS - Aqary One",
    subtitle: "Internal Web Application.",
    image: "/projects/hrmsaqary.png",
    imageSm: "/projects/hrmsaqary-sm.jpg",
    description: {
      text: "At Aqary Investments and Development, I built real-time notification services using Webhooks and WebSockets to boost system responsiveness. Also developed an AI-powered HRMS with ATS screening, chatbot support, and biometric automation using Flask and event-driven architecture, improving HR workflows and employee experience.",
      keywords: ["Aqary Investments and Development", "real-time notification services", "Webhooks", "WebSockets", "AI-powered HRMS", "ATS screening", "chatbot support", "biometric automation", "Flask", "event-driven architecture", "HR workflows", "employee experience"],
    },
    technologies: ["Python/Flask", "PyTorch", "Transformers", "Google Generative AI", "PostgreSQL", "Docker", "Celery", "RabbitMQ/Redis"],
    externalUrl: "https://people.aqaryone.com/",
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
      className=" flex flex-col xl:space-y-28 space-y-12 bg-dark-section-bg w-full overflow-x-hidden
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-16 sm:py-32 px-4 relative transition-all duration-300"
      style={{
        background: 'var(--theme-dark-section-gradient)'
      }}
    >
      {/* Particle background for this section */}
      <ParticleBackground />
      {/* // ? Title   */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-dark-section-text-highlight"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className=" font-bold tracking-wider text-dark-section-text text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-dark-section-text-muted h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {projects.map((project, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div key={index} data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
              {/* Desktop image */}
              <div
                className="hidden z-10  py-4 
              absolute md:grid grid-cols-12 w-full h-full  content-center"
              >
                <div className={`relative rounded w-full h-full ${isLeft
                  ? "col-start-6 col-span-7 3xl:col-start-7 3xl:col-span-6 4xl:col-start-8 4xl:col-span-5"
                  : "col-span-7 3xl:col-span-6 4xl:col-span-5"
                  }`}>
                  <a href={project.externalUrl} target="_blank" rel="noreferrer">
                    <div
                      className="absolute w-full h-full rounded bg-black
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                    ></div>
                  </a>

                  {project.badge && (
                    <div className="absolute px-2 bg-AAprimary rounded  ml-4 mt-2 z-10">
                      <span className="text-AATextPrimary keyword-hover text-xs">{project.badge}</span>
                    </div>
                  )}

                  <Img src={project.image} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
                </div>
              </div>

              {/* Content */}
              <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
                {/* background for text in mobile responsive */}
                <div className={`absolute w-full h-full z-0 md:hidden ${isLeft ? "md:order-2" : ""}`}>
                  <div className="relative w-full h-full">
                    <div className="absolute w-full h-full bg-white/10 backdrop-blur-xl backdrop-saturate-150 z-10 md:opacity-0"></div>
                    <Img src={project.imageSm} alt={"Project Screen shot"} className={`w-full h-full object-cover`} />
                  </div>
                </div>

                {project.badge && !isLeft && (
                  <div className="absolute w-full   rounded  ml-4 mt-2  text-end pr-8 md:hidden">
                    <div className="w-full"></div>
                    <span className="text-AATextPrimary keyword-hover sm:text-lg bg-AAprimary px-2 py-1 rounded">{project.badge}</span>
                  </div>
                )}

                <div
                  className={`px-8 pt-8 sm:pt-12 md:py-0 ${isLeft
                    ? "xl:col-span-7 xl:col-start-1 3xl:col-span-7 3xl:col-start-1 4xl:col-span-8 4xl:col-start-1 col-span-8 flex flex-col items-start space-y-3 md:order-1"
                    : "xl:col-span-7 xl:col-start-6 3xl:col-span-7 3xl:col-start-6 4xl:col-span-8 4xl:col-start-6 col-start-5 col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1"
                    } border border-white/10 rounded-lg`}
                >
                  <div className={`flex flex-col space-y-1 z-10 ${isLeft ? "" : "md:items-end"}`}>
                    <span className="text-AAProjectSubtitle text-base">{project.subtitle}</span>
                    <a href={project.externalUrl} target="_blank" rel="noopener noreferrer">
                      <span className=" text-white md:text-AAProjectTitle keyword-hover font-bold text-xl hover:cursor-pointer">
                        {project.name}
                      </span>
                    </a>
                  </div>

                  <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                    <p
                      className={`text-black/50 md:text-dark-section-text-muted ${isLeft ? "text-left" : "text-left md:text-right"}`}
                      dangerouslySetInnerHTML={{
                        __html: getTextWithHighlightedKeyword(project.description.text, project.description.keywords),
                      }}
                    />
                  </div>

                  <ul
                    className={`flex flex-wrap w-full text-dark-section-text-highlight md:text-dark-section-text-muted text-sm font-Text2 ${isLeft ? "" : "md:justify-end"
                      }`}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="pr-4 z-10 keyword-hover">{tech}</span>
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
  );
}
