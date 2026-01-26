import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";
import ParticleBackground from "../../Background/ParticleBackground";

type Project = {
  name: string;
  subtitle: string;
  image: string;
  imageSm: string;
  description: JSX.Element;
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
    description: (
      <p className="text-dark-section-text-muted text-left">
        Building a <span className="text-AATextPrimary keyword-hover">linen e-commerce platform</span>, a{" "}
        <span className="text-AATextPrimary keyword-hover">direct-to-consumer fashion marketplace</span> focused on{" "}
        <span className="text-AATextPrimary keyword-hover">linen clothing</span> and{" "}
        <span className="text-AATextPrimary keyword-hover">linen-based products</span> for{" "}
        <span className="text-AATextPrimary keyword-hover">everyday comfort</span>.
        It delivers a complete{" "}
        <span className="text-AATextPrimary keyword-hover">online shopping experience</span> with features like{" "}
        <span className="text-AATextPrimary keyword-hover">Product Listings</span>,{" "}
        <span className="text-AATextPrimary keyword-hover">Reviews & Ratings</span>, and{" "}
        <span className="text-AATextPrimary keyword-hover">Favorites & Cart</span>, enabling{" "}
        <span className="text-AATextPrimary keyword-hover">seamless browsing</span>.
        Designed as a{" "}
        <span className="text-AATextPrimary keyword-hover">scalable e-commerce system</span> supporting{" "}
        <span className="text-AATextPrimary keyword-hover">secure checkout</span> with{" "}
        <span className="text-AATextPrimary keyword-hover">payment integration</span> for{" "}
        <span className="text-AATextPrimary keyword-hover">modern retail workflows</span>.
      </p>
    ),
    technologies: ["Python/Django REST Framework", "PostgreSQL", "Celery", "RabbitMQ/Redis", "Flask-SocketIO", "Docker"],
    githubUrl: "https://github.com/thamjidmannarayil",
    externalUrl: "https://lineinn.thamjidthachu.dev",
  },
  {
    name: "The Quiet",
    subtitle: "Personal Project",
    image: "/projects/thequiet.png",
    imageSm: "/projects/thequiet-sm.png",
    description: (
      <p className="text-dark-section-text-muted text-left md:text-right">
        I initiated <span className="text-AATextPrimary keyword-hover">The Quiet</span> in 2021 as a{" "}
        <span className="text-AATextPrimary keyword-hover">demo project</span> for my first job, which
        later grew into a <span className="text-AATextPrimary keyword-hover">personal passion project</span>.
        Originally built with <span className="text-AATextPrimary keyword-hover">Django templates</span>,
        it has since evolved into a modern stack using{" "}
        <span className="text-AATextPrimary keyword-hover">Django REST Framework</span> and{" "}
        <span className="text-AATextPrimary keyword-hover">Next.js</span>. The vision is to transform
        this platform into the official digital presence of a{" "}
        <span className="text-AATextPrimary keyword-hover">real resort</span> under the same name,
        combining <span className="text-AATextPrimary keyword-hover">scalability</span> and{" "}
        <span className="text-AATextPrimary keyword-hover">future-ready design</span> to bring the dream
        of <span className="text-AATextPrimary keyword-hover">The Quiet Resort</span> to life.
      </p>
    ),
    technologies: ["Python/Django", "Next.js", "PostgreSQL", "Celery", "RabbitMQ/Redis", "Docker"],
    githubUrl: "https://github.com/thamjidmannarayil/the-quiet",
    externalUrl: "https://resort.thamjidthachu.dev",
  },
  {
    name: "Aqary CRM",
    subtitle: "Internal Web Application",
    image: "/projects/aqarycrm.png",
    imageSm: "/projects/aqarycrm-sm.jpg",
    description: (
      <p className="text-dark-section-text-muted text-left">
        Building <span className="text-AATextPrimary keyword-hover">Aqary CRM</span>, a{" "}
        <span className="text-AATextPrimary keyword-hover">real estate management platform</span> powered by{" "}
        <span className="text-AATextPrimary keyword-hover">Django REST Framework</span> and{" "}
        <span className="text-AATextPrimary keyword-hover">Flask-SocketIO</span> for{" "}
        <span className="text-AATextPrimary keyword-hover">real-time operations</span>.
        It features a scalable{" "}
        <span className="text-AATextPrimary keyword-hover">microservices architecture</span> with modules like{" "}
        <span className="text-AATextPrimary keyword-hover">Admin</span>,{" "}
        <span className="text-AATextPrimary keyword-hover">Notification</span>, and{" "}
        <span className="text-AATextPrimary keyword-hover">Booking Management</span>, leveraging{" "}
        <span className="text-AATextPrimary keyword-hover">Celery & Redis</span> for{" "}
        <span className="text-AATextPrimary keyword-hover">async workflows</span>.
        Designed to be a{" "}
        <span className="text-AATextPrimary keyword-hover">cloud-ready CRM</span> that unites{" "}
        <span className="text-AATextPrimary keyword-hover">automation</span> with{" "}
        <span className="text-AATextPrimary keyword-hover">modern real estate operations</span>.
      </p>
    ),
    technologies: ["Python/Flask", "PostgreSQL", "Celery", "RabbitMQ/Redis", "WebSocket", "Azure ServiceBus", "Docker"],
    githubUrl: "https://github.com/thamjidmannarayil",
    externalUrl: "https://crm.aqaryone.com",
  },
  {
    name: "HRMS - Identity Service",
    subtitle: "Internal Web Application.",
    image: "/projects/aqaryidentity.png",
    imageSm: "/projects/aqaryidentity-sm.jpg",
    description: (
      <p className="text-dark-section-text-muted text-left md:text-right">
        Developing the <span className="text-AATextPrimary keyword-hover">Aqary Identity Service</span>, the{" "}
        <span className="text-AATextPrimary keyword-hover">core authentication engine</span> of the{" "}
        <span className="text-AATextPrimary keyword-hover">Aqary ecosystem</span>.
        It handles{" "}
        <span className="text-AATextPrimary keyword-hover">user onboarding</span>,{" "}
        <span className="text-AATextPrimary keyword-hover">multi-role access control</span>, and{" "}
        <span className="text-AATextPrimary keyword-hover">secure token-based authentication</span> across microservices.
        Built with{" "}
        <span className="text-AATextPrimary keyword-hover">Django REST Framework</span> and{" "}
        <span className="text-AATextPrimary keyword-hover">OAuth2 / JWT</span>, it ensures{" "}
        <span className="text-AATextPrimary keyword-hover">secure, scalable,</span> and{" "}
        <span className="text-AATextPrimary keyword-hover">consistent access control</span> across the platform.
      </p>
    ),
    technologies: ["Python/Flask", "PostgreSQL", "Celery", "RabbitMQ/Redis", "GRPC", "Azure BusService", "Docker"],
    githubUrl: "https://github.com/thamjidmannarayil",
    externalUrl: "https://id.aqaryone.com/",
  },
  {
    name: "App Console",
    subtitle: "Internal Web Application",
    image: "/projects/aqaryconsole.png",
    imageSm: "/projects/aqaryconsole-sm.jpg",
    description: (
      <p className="text-dark-section-text-muted text-left md:text-right">
        Building the <span className="text-AATextPrimary keyword-hover">Aqary App Console</span>, a{" "}
        <span className="text-AATextPrimary keyword-hover">developer platform</span> for seamless{" "}
        <span className="text-AATextPrimary keyword-hover">app integration</span> within the{" "}
        <span className="text-AATextPrimary keyword-hover">Aqary ecosystem</span>.
        Built with{" "}
        <span className="text-AATextPrimary keyword-hover">Flask</span> and{" "}
        <span className="text-AATextPrimary keyword-hover">SQLAlchemy</span>, it enables{" "}
        <span className="text-AATextPrimary keyword-hover">OAuth-based app registration</span>,{" "}
        <span className="text-AATextPrimary keyword-hover">webhooks</span>, and{" "}
        <span className="text-AATextPrimary keyword-hover">permission management</span> through{" "}
        <span className="text-AATextPrimary keyword-hover">modular APIs</span>.
        Supports{" "}
        <span className="text-AATextPrimary keyword-hover">IP whitelisting</span>,{" "}
        <span className="text-AATextPrimary keyword-hover">callback validation</span>, and{" "}
        <span className="text-AATextPrimary keyword-hover">dynamic event mapping</span> to deliver{" "}
        <span className="text-AATextPrimary keyword-hover">secure, scalable integrations</span>.
      </p>
    ),
    technologies: ["Python/Flask", "Event Driven Architecture", "PostgreSQL", "Celery", "RabbitMQ/Redis", "Azure ServiceBus", "Docker"],
    githubUrl: "https://github.com/thamjidmannarayil",
    externalUrl: "https://console.aqaryone.com",
  },
  {
    name: "Aqary API Gateway",
    subtitle: "Internal Web Application.",
    image: "/projects/aqaryrealestate.png",
    imageSm: "/projects/aqaryrealestate-sm.jpg",
    description: (
      <p className="text-dark-section-text-muted text-left md:text-right">
        Architected the <span className="text-AATextPrimary keyword-hover">Aqary API Gateway</span> as the{" "}
        <span className="text-AATextPrimary keyword-hover">central entry point</span> for all{" "}
        <span className="text-AATextPrimary keyword-hover">Aqary microservices</span>.
        Built with{" "}
        <span className="text-AATextPrimary keyword-hover">Flask</span> and{" "}
        <span className="text-AATextPrimary keyword-hover">Nginx</span>, it manages{" "}
        <span className="text-AATextPrimary keyword-hover">routing</span>,{" "}
        <span className="text-AATextPrimary keyword-hover">authentication</span>,{" "}
        <span className="text-AATextPrimary keyword-hover">rate limiting</span>, and{" "}
        <span className="text-AATextPrimary keyword-hover">service-level security</span>.
        Integrated with the{" "}
        <span className="text-AATextPrimary keyword-hover">Identity Service</span> for{" "}
        <span className="text-AATextPrimary keyword-hover">JWT validation</span> and{" "}
        <span className="text-AATextPrimary keyword-hover">RBAC</span>, featuring{" "}
        <span className="text-AATextPrimary keyword-hover">centralized logging</span> and{" "}
        <span className="text-AATextPrimary keyword-hover">dynamic service discovery</span> for{" "}
        <span className="text-AATextPrimary keyword-hover">high availability</span> and{" "}
        <span className="text-AATextPrimary keyword-hover">scalability</span>.
      </p>
    ),
    technologies: ["Python/Flask", "Docker"],
    githubUrl: "https://github.com/thamjidmannarayil",
    externalUrl: "https://aqaryaaid.com/",
  },
  {
    name: "HRMS - Aqary One",
    subtitle: "Internal Web Application.",
    image: "/projects/hrmsaqary.png",
    imageSm: "/projects/hrmsaqary-sm.jpg",
    description: (
      <p className="text-dark-section-text-muted text-left">
        At <span className="text-AATextPrimary keyword-hover">Aqary Investments and Development</span>, I built{" "}
        <span className="text-AATextPrimary keyword-hover">real-time notification services</span> using{" "}
        <span className="text-AATextPrimary keyword-hover">Webhooks</span> and{" "}
        <span className="text-AATextPrimary keyword-hover">WebSockets</span> to boost system responsiveness.
        Also developed an{" "}
        <span className="text-AATextPrimary keyword-hover">AI-powered HRMS</span> with{" "}
        <span className="text-AATextPrimary keyword-hover">ATS screening</span>,{" "}
        <span className="text-AATextPrimary keyword-hover">chatbot support</span>, and{" "}
        <span className="text-AATextPrimary keyword-hover">biometric automation</span> using{" "}
        <span className="text-AATextPrimary keyword-hover">Flask</span> and{" "}
        <span className="text-AATextPrimary keyword-hover">event-driven architecture</span>, improving{" "}
        <span className="text-AATextPrimary keyword-hover">HR workflows</span> and{" "}
        <span className="text-AATextPrimary keyword-hover">employee experience</span>.
      </p>
    ),
    technologies: ["Python/Flask", "PyTorch", "Transformers", "Google Generative AI", "PostgreSQL", "Docker", "Celery", "RabbitMQ/Redis"],
    externalUrl: "https://people.aqaryone.com/",
  },
  {
    name: "Explore World",
    subtitle: "Travel and Tourism",
    image: "/projects/exploreworld.jpg",
    imageSm: "/projects/exploreworld-sm.jpg",
    description: (
      <p className="text-dark-section-text-muted text-left md:text-right">
        I had the opportunity to spearhead the backend development of a travel aggregator platform, leveraging a{" "}
        <span className="text-AATextPrimary keyword-hover"> microservices architecture</span>. My focus was on integrating{" "}
        <span className="text-AATextPrimary keyword-hover"> payment gateways</span> and{" "}
        <span className="text-AATextPrimary keyword-hover"> third-party APIs</span> such as{" "}
        <span className="text-AATextPrimary keyword-hover"> Elasticsearch</span>, ensuring a{" "}
        <span className="text-AATextPrimary keyword-hover"> scalable architecture</span> for smooth transactions and an enhanced{" "}
        <span className="text-AATextPrimary keyword-hover"> user experience</span>.
      </p>
    ),
    technologies: ["Python/Django", "Elastic Search", "Django Rest Framework", "Postgres", "Docker", "Celery/Redis"],
    githubUrl: "https://github.com/flycatchinfotech/explore-world",
    externalUrl: "https://www.exploreworld.com/",
  },
  {
    name: "Wearlay",
    subtitle: "CRM & Inventory Management",
    image: "/projects/wearlay.png",
    imageSm: "/projects/wearlay-sm.jpg",
    description: (
      <p className="text-dark-section-text-muted text-left">
        I led the backend development of a CRM & Inventory system, built with{" "}
        <span className="text-AATextPrimary keyword-hover"> Django</span> and{" "}
        <span className="text-AATextPrimary keyword-hover"> Django REST Framework</span>. The platform automated{" "}
        <span className="text-AATextPrimary keyword-hover"> lead workflows</span> and optimized{" "}
        <span className="text-AATextPrimary keyword-hover"> warehouse management</span>, while a customized{" "}
        <span className="text-AATextPrimary keyword-hover"> Django Admin</span> with integrated{" "}
        <span className="text-AATextPrimary keyword-hover"> analytics</span> enabled data-driven decision making for improved business operations.
      </p>
    ),
    technologies: ["Python/Django", "Django Rest Framework", "PostgresSQL", "Docker", "Celery/Redis"],
    externalUrl: "https://www.wearlay.in/",
  },
  {
    name: "Al Maarefa",
    subtitle: "Learning & Management System",
    image: "/projects/almaarefa.png",
    imageSm: "/projects/almaarefa-sm.jpg",
    description: (
      <p className="text-dark-section-text-muted text-left md:text-right">
        I led the backend development of a role-based{" "}
        <span className="text-AATextPrimary keyword-hover"> academic platform</span> designed for{" "}
        <span className="text-AATextPrimary keyword-hover"> students</span>,{" "}
        <span className="text-AATextPrimary keyword-hover"> instructors</span>, and{" "}
        <span className="text-AATextPrimary keyword-hover"> admins</span>. The system included{" "}
        <span className="text-AATextPrimary keyword-hover"> academic tracking</span>,{" "}
        <span className="text-AATextPrimary keyword-hover"> messaging</span>, and{" "}
        <span className="text-AATextPrimary keyword-hover"> payment management</span>. I also developed an{" "}
        <span className="text-AATextPrimary keyword-hover"> online admission system</span>, centralizing{" "}
        <span className="text-AATextPrimary keyword-hover"> registration</span>,{" "}
        <span className="text-AATextPrimary keyword-hover"> document upload</span>, and{" "}
        <span className="text-AATextPrimary keyword-hover"> interview processes</span>, improving efficiency for both{" "}
        <span className="text-AATextPrimary keyword-hover"> applicants</span> and{" "}
        <span className="text-AATextPrimary keyword-hover"> staff</span>.
      </p>
    ),
    technologies: ["Python/Django", "Django Rest Framework", "PostgresSQL", "Docker", "Celery/Redis"],
    githubUrl: "https://github.com/flycatchinfotech/al-maarefa-backend",
    externalUrl: "https://my.um.edu.sa/",
  },
  {
    name: "Away2gether",
    subtitle: "Hospitality Management",
    image: "/projects/away2gether.png",
    imageSm: "/projects/away2gether-sm.jpg",
    description: (
      <p className="text-dark-section-text-muted text-left">
        I solely developed the backend of a{" "}
        <span className="text-AATextPrimary keyword-hover"> hospitality platform</span> using{" "}
        <span className="text-AATextPrimary keyword-hover"> Django</span>,{" "}
        <span className="text-AATextPrimary keyword-hover"> Django CMS</span>, and{" "}
        <span className="text-AATextPrimary keyword-hover"> PostgreSQL</span>. The platform enhanced{" "}
        <span className="text-AATextPrimary keyword-hover"> user experience</span> through{" "}
        <span className="text-AATextPrimary keyword-hover"> interactive elements</span> built with{" "}
        <span className="text-AATextPrimary keyword-hover"> AJAX</span> and{" "}
        <span className="text-AATextPrimary keyword-hover"> JavaScript</span>. I also ensured{" "}
        <span className="text-AATextPrimary keyword-hover"> scalability</span> and{" "}
        <span className="text-AATextPrimary keyword-hover"> data integrity</span>, laying the foundation for future{" "}
        <span className="text-AATextPrimary keyword-hover"> enhancements</span>.
      </p>
    ),
    technologies: ["Python/Django", "CMS", "PostgresSQL", "html/css", "Javascript", "Docker"],
    githubUrl: "https://github.com/flycatchinfotech/awaytogether-website",
    externalUrl: "https://my.away2gether.com",
  },
  {
    name: "Redalion",
    subtitle: "Innovative E-Commerce Platform",
    image: "/projects/redalion.png",
    imageSm: "/projects/redalion-sm.png",
    description: (
      <p className="text-dark-section-text-muted text-left md:text-right">
        I led the backend development of a platform that links{" "}
        <span className="text-AATextPrimary keyword-hover"> QR-coded medallions</span> to{" "}
        <span className="text-AATextPrimary keyword-hover"> digital ancestral profiles</span>, featuring{" "}
        <span className="text-AATextPrimary keyword-hover"> secure authentication</span> and{" "}
        <span className="text-AATextPrimary keyword-hover"> profile management</span>. The system was built with a focus on{" "}
        <span className="text-AATextPrimary keyword-hover"> scalability</span> and{" "}
        <span className="text-AATextPrimary keyword-hover"> clean code</span>, ensuring a solid foundation for{" "}
        <span className="text-AATextPrimary keyword-hover"> future enhancements</span>.
      </p>
    ),
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
                    <div className="absolute w-full h-full bg-black/50 backdrop-blur-md z-10 md:opacity-0"></div>
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
                      <span className=" text-AAProjectTitle keyword-hover font-bold text-xl hover:cursor-pointer">
                        {project.name}
                      </span>
                    </a>
                  </div>

                  <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                    {project.description}
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
