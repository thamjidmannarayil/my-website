import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";
import ParticleBackground from "../../Background/ParticleBackground";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-dark-section-bg w-full overflow-x-hidden
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4 relative transition-all duration-300"
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

        {/* // ? Project 0 Line Inn */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 3xl:col-start-7 3xl:col-span-6 4xl:col-start-8 4xl:col-span-5">
              <a href={"https://lineinn.thamjidthachu.dev"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-black
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/projects/lineinn.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full z-0 md:hidden md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-gray-700 opacity-90 z-10 md:opacity-0"></div>
                <Img src={"/projects/lineinn-sm.png"} alt={"Project Screen shot"} className={`w-full h-full object-cover`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-7 xl:col-start-1 3xl:col-span-7 3xl:col-start-1 4xl:col-span-8 4xl:col-start-1   
              col-span-8 flex flex-col items-start space-y-3 md:order-1 border border-white/10 rounded-lg"
            >
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-AAProjectSubtitle text-base">Personal Project</span>
                <a href="https://lineinn.thamjidthachu.dev" target="_blank" rel="noopener noreferrer">
                  <span className=" text-AAProjectTitle keyword-hover font-bold text-xl hover:cursor-pointer">
                    Line Inn
                  </span>
                </a>
              </div><div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
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
            </div>

              <ul
                className="flex flex-wrap w-full text-dark-section-text-highlight md:text-dark-section-text-muted
               text-sm font-Text2"
              >
                <span className="pr-4 z-10 keyword-hover">Python/Django REST Framework</span>
                <span className="pr-4 z-10 keyword-hover">PostgreSQL</span>
                <span className="pr-4 z-10 keyword-hover">Celery</span>
                <span className="pr-4 z-10 keyword-hover">RabbitMQ/Redis</span>
                <span className="pr-4 z-10 keyword-hover">Flask-SocketIO</span>
                <span className="pr-4 z-10 keyword-hover">Docker</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/thamjidmannarayil" />
                <a href="https://lineinn.thamjidthachu.dev" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 1 The Quiet */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          {/* Left image */}
          <div
            className="hidden z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 3xl:col-span-6 4xl:col-span-5">
              <a href="https://resort.thamjidthachu.dev" target={"_blank"} rel="noreferrer">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-black
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              {/* <div className="absolute px-2 bg-AAprimary rounded  ml-4 mt-2 z-10">
                <span className="text-AATextPrimary keyword-hover text-xs bg-AAprimary px-2 py-1 rounded">🚧In Development...👷</span>
              </div> */}

              <Img src={"/projects/thequiet.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full z-0 md:hidden">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-gray-700 opacity-90 z-10 md:opacity-0"></div>
                <Img src={"/projects/thequiet-sm.png"} alt={"Project Screen shot"} className={`w-full h-full object-cover`} />
              </div>
            </div>
            <div className="absolute w-full   rounded  ml-4 mt-2  text-end pr-8 md:hidden">
              <div className="w-full"></div>
              <span className="text-AATextPrimary keyword-hover sm:text-lg bg-AAprimary px-2 py-1 rounded">🚧Developement In Progress...👷</span>
            </div>
            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-7 xl:col-start-6 3xl:col-span-7 3xl:col-start-6 4xl:col-span-8 4xl:col-start-6 col-start-5 
              col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1 border border-white/10 rounded-lg"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAProjectSubtitle text-base">Personal Project</span>
                <a href="https://resort.thamjidthachu.dev" target={"_blank"} rel="noreferrer">
                  <span className=" text-AAProjectTitle keyword-hover font-bold text-xl hover:cursor-pointer">
                    The Quiet
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
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
              </div>
              <ul
                className="flex flex-wrap w-full text-dark-section-text-highlight md:text-dark-section-text-muted
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10 keyword-hover">Python/Django</span>
                <span className="pr-4 z-10 keyword-hover">Next.js</span>
                <span className="pr-4 z-10 keyword-hover">PostgreSQL</span>
                <span className="pr-4 z-10 keyword-hover">Celery</span>
                <span className="pr-4 z-10 keyword-hover">RabbitMQ/Redis</span>
                <span className="pr-4 z-10 keyword-hover">Docker</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/thamjidmannarayil/the-quiet" />
                <a href="https://resort.thamjidthachu.dev" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ? Project 2 Aqary CRM */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 3xl:col-start-7 3xl:col-span-6 4xl:col-start-8 4xl:col-span-5">
              <a href={"https://crm.aqaryone.com"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-black
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/projects/aqarycrm.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full z-0 md:hidden md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-gray-700 opacity-90 z-10 md:opacity-0"></div>
                <Img src={"/projects/aqarycrm-sm.jpg"} alt={"Project Screen shot"} className={`w-full h-full object-cover`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-7 xl:col-start-1 3xl:col-span-7 3xl:col-start-1 4xl:col-span-8 4xl:col-start-1   
              col-span-8 flex flex-col items-start space-y-3 md:order-1 border border-white/10 rounded-lg"
            >
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-AAProjectSubtitle text-base">Internal Web Application</span>
                <a href="https://crm.aqaryone.com" target="_blank" rel="noopener noreferrer">
                  <span className=" text-AAProjectTitle keyword-hover font-bold text-xl hover:cursor-pointer">
                    Aqary CRM
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
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
              </div>
              <ul
                className="flex flex-wrap w-full text-dark-section-text-highlight md:text-dark-section-text-muted
               text-sm font-Text2"
              >
                <span className="pr-4 z-10 keyword-hover">Python/Flask</span>
                <span className="pr-4 z-10 keyword-hover">PostgreSQL</span>
                <span className="pr-4 z-10 keyword-hover">Celery</span>
                <span className="pr-4 z-10 keyword-hover">RabbitMQ/Redis</span>
                <span className="pr-4 z-10 keyword-hover">WebSocket</span>
                <span className="pr-4 z-10 keyword-hover">Azure ServiceBus</span>
                <span className="pr-4 z-10 keyword-hover">Docker</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/thamjidmannarayil" />
                <a href="https://crm.aqaryone.com" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 3 Aqary Identity */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          {/* Left image */}
          <div
            className="hidden z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 3xl:col-span-6 4xl:col-span-5">
              <a href="https://id.aqaryone.com/" target={"_blank"} rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-black
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img src={"/projects/aqaryidentity.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full z-0 md:hidden">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-gray-700 opacity-90 z-10 md:opacity-0"></div>
                <Img src={"/projects/aqaryidentity-sm.jpg"} alt={"Project Screen shot"} className={`w-full h-full object-cover`} />
              </div>
            </div>
            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-7 xl:col-start-6 3xl:col-span-7 3xl:col-start-6 4xl:col-span-8 4xl:col-start-6 col-start-5 
              col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1 border border-white/10 rounded-lg"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAProjectSubtitle text-base">Internal Web Application.</span>
                <a href="https://www.https://id.aqaryone.com/" target="_blank" rel="noopener noreferrer">
                  <span className=" text-AAProjectTitle keyword-hover font-bold text-xl hover:cursor-pointer">
                    HRMS - Identity Service
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
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
              </div>
              <ul
                className="flex flex-wrap w-full text-dark-section-text-highlight md:text-dark-section-text-muted
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10 keyword-hover">Python/Flask</span>
                <span className="pr-4 z-10 keyword-hover">PostgreSQL</span>
                <span className="pr-4 z-10 keyword-hover">Celery</span>
                <span className="pr-4 z-10 keyword-hover">RabbitMQ/Redis</span>
                <span className="pr-4 z-10 keyword-hover">GRPC</span>
                <span className="pr-4 z-10 keyword-hover">Azure BusService</span>
                <span className="pr-4 z-10 keyword-hover">Docker</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/thamjidmannarayil" />
                <a href="https://www.https://id.aqaryone.com/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ? Project 4 Aqary App Console */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 3xl:col-start-7 3xl:col-span-6 4xl:col-start-8 4xl:col-span-5">
              <a href={"https://console.aqaryone.com"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-black
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/projects/aqaryconsole.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full z-0 md:hidden md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-gray-700 opacity-90 z-10 md:opacity-0"></div>
                <Img src={"/projects/aqaryconsole-sm.jpg"} alt={"Project Screen shot"} className={`w-full h-full object-cover`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-7 xl:col-start-1 3xl:col-span-7 3xl:col-start-1 4xl:col-span-8 4xl:col-start-1   
              col-span-8 flex flex-col items-start space-y-3 md:order-1 border border-white/10 rounded-lg"
            >
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-AAProjectSubtitle text-base">Internal Web Application</span>
                <a href="https://console.aqaryone.com" target={"_blank"} rel="noreferrer">
                  <span className=" text-AAProjectTitle keyword-hover font-bold text-xl hover:cursor-pointer">
                    App Console
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
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
              </div>
              <ul
                className="flex flex-wrap w-full text-dark-section-text-highlight md:text-dark-section-text-muted
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10 keyword-hover">Python/Flask</span>
                <span className="pr-4 z-10 keyword-hover">Event Driven Architecture</span>
                <span className="pr-4 z-10 keyword-hover">PostgreSQL</span>
                <span className="pr-4 z-10 keyword-hover">Celery</span>
                <span className="pr-4 z-10 keyword-hover">RabbitMQ/Redis</span>
                <span className="pr-4 z-10 keyword-hover">Azure ServiceBus</span>
                <span className="pr-4 z-10 keyword-hover">Docker</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/thamjidmannarayil" />
                <a href="https://console.aqaryone.com" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 5 Aqary API Gateway */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-span-7 3xl:col-span-6 4xl:col-span-5">
              <a href={"https://aqaryaaid.com/"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-black
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/projects/aqaryrealestate.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full z-0 md:hidden">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-gray-700 opacity-90 z-10 md:opacity-0"></div>
                <Img src={"/projects/aqaryrealestate-sm.jpg"} alt={"Project Screen shot"} className={`w-full h-full object-cover`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-7 xl:col-start-6 3xl:col-span-7 3xl:col-start-6 4xl:col-span-8 4xl:col-start-6 col-start-5 
              col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1 border border-white/10 rounded-lg"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAProjectSubtitle text-base">Internal Web Application.</span>
                <a href="https://www.https://aqaryaid.com/" target="_blank" rel="noopener noreferrer">
                  <span className=" text-AAProjectTitle keyword-hover font-bold text-xl hover:cursor-pointer">
                    Aqary API Gateway
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
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
              </div>
              <ul className="flex flex-wrap w-full text-dark-section-text-highlight md:text-dark-section-text-muted text-sm font-Text2 md:justify-end">
                <span className="pr-4 z-10 keyword-hover">Python/Flask</span>
                <span className="pr-4 z-10 keyword-hover">Docker</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/thamjidmannarayil" />
                <a href="https://www.https://aqaryaid.com/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ? Project 6 Hrms Aqary */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          {/* Left image */}
          <div
            className="hidden z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 3xl:col-start-7 3xl:col-span-6 4xl:col-start-8 4xl:col-span-5">
              <a href="https://people.aqaryone.com/" target={"_blank"} rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-black
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img src={"/projects/hrmsaqary.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full z-0 md:hidden md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-gray-700 opacity-90 z-10 md:opacity-0"></div>
                <Img src={"/projects/hrmsaqary-sm.jpg"} alt={"Project Screen shot"} className={`w-full h-full object-cover`} />
              </div>
            </div>
            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-7 xl:col-start-1 3xl:col-span-7 3xl:col-start-1 4xl:col-span-8 4xl:col-start-1 
              col-span-8 flex flex-col items-start space-y-3 md:order-1 border border-white/10 rounded-lg"
            >
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-AAProjectSubtitle text-base">Internal Web Application.</span>
                <a href="https://people.aqaryone.com/" target={"_blank"} rel="noreferrer">
                  <span className=" text-AAProjectTitle keyword-hover font-bold text-xl hover:cursor-pointer">
                    HRMS - Aqary One
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
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
              </div>
              <ul className="flex flex-wrap w-full text-dark-section-text-highlight md:text-dark-section-text-muted text-sm font-Text2">
                <span className="pr-4 z-10 keyword-hover">Python/Flask</span>
                <span className="pr-4 z-10 keyword-hover">PyTorch</span>
                <span className="pr-4 z-10 keyword-hover">Transformers</span>
                <span className="pr-4 z-10 keyword-hover">Google Generative AI</span>
                <span className="pr-4 z-10 keyword-hover">PostgreSQL</span>
                <span className="pr-4 z-10 keyword-hover">Docker</span>
                <span className="pr-4 z-10 keyword-hover">Celery</span>
                <span className="pr-4 z-10 keyword-hover">RabbitMQ/Redis</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <a href="https://people.aqaryone.com/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 7 - ExploreWorld */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 3xl:col-span-6 4xl:col-span-5">

              <a href="https://www.exploreworld.com/" target={"_blank"} rel="noreferrer">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-black
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img src={"/projects/exploreworld.jpg"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full z-0 md:hidden">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-gray-700 opacity-90 z-10 md:opacity-0"></div>
                <Img src={"/projects/exploreworld-sm.jpg"} alt={"Project Screen shot"} className={`w-full h-full object-cover`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-7 xl:col-start-6 3xl:col-span-7 3xl:col-start-6 4xl:col-span-8 4xl:col-start-6 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3 border border-white/10 rounded-lg"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAProjectSubtitle text-base">Travel and Tourism</span>
                <a href="https://www.exploreworld.com/" target="_blank" rel="noopener noreferrer">
                  <span className=" text-AAProjectTitle keyword-hover font-bold text-xl hover:cursor-pointer">
                    Explore World
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-dark-section-text-muted text-left md:text-right">
                  I had the opportunity to spearhead the backend development of a travel aggregator platform, leveraging a{" "}
                  <span className="text-AATextPrimary keyword-hover"> microservices architecture</span>. My focus was on integrating{" "}
                  <span className="text-AATextPrimary keyword-hover"> payment gateways</span> and{" "}
                  <span className="text-AATextPrimary keyword-hover"> third-party APIs</span> such as{" "}
                  <span className="text-AATextPrimary keyword-hover"> Elasticsearch</span>, ensuring a{" "}
                  <span className="text-AATextPrimary keyword-hover"> scalable architecture</span> for smooth transactions and an enhanced{" "}
                  <span className="text-AATextPrimary keyword-hover"> user experience</span>.
                </p>

              </div>
              <ul
                className="flex flex-wrap w-full text-dark-section-text-highlight md:text-dark-section-text-muted
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10 keyword-hover">Python/Django</span>
                <span className="pr-4 z-10 keyword-hover">Elastic Search</span>
                <span className="pr-4 z-10 keyword-hover">Django Rest Framework</span>
                <span className="pr-4 z-10 keyword-hover">Postgres</span>
                <span className="pr-4 z-10 keyword-hover">Docker</span>
                <span className="pr-4 z-10 keyword-hover">Celery/Redis</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <div className="z-10 flex fle-row space-x-5 ">
                  <GithubIcon link="https://github.com/flycatchinfotech/explore-world" />
                  <a href="https://www.exploreworld.com/" target={"_blank"} rel="noreferrer">
                    <ExternalLink url={""} router={router} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 8 - Wearlay */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 3xl:col-start-7 3xl:col-span-6 4xl:col-start-8 4xl:col-span-5">
              <a href={"https://www.wearlay.in/"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-black
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/projects/wearlay.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full z-0 md:hidden md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-gray-700 opacity-90 z-10 md:opacity-0"></div>
                <Img src={"/projects/wearlay-sm.jpg"} alt={"Project Screen shot"} className={`w-full h-full object-cover`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-7 xl:col-start-1 3xl:col-span-7 3xl:col-start-1 4xl:col-span-8 4xl:col-start-1   
            col-span-8 flex flex-col items-start space-y-3 md:order-1 border border-white/10 rounded-lg"
            >
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-AAProjectSubtitle text-base">CRM & Inventory Management</span>
                <a href="https://www.wearlay.in/" target="_blank" rel="noopener noreferrer">
                  <span className=" text-AAProjectTitle keyword-hover font-bold text-xl hover:cursor-pointer">
                    Wearlay
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-dark-section-text-muted text-left">
                  I led the backend development of a CRM & Inventory system, built with{" "}
                  <span className="text-AATextPrimary keyword-hover"> Django</span> and{" "}
                  <span className="text-AATextPrimary keyword-hover"> Django REST Framework</span>. The platform automated{" "}
                  <span className="text-AATextPrimary keyword-hover"> lead workflows</span> and optimized{" "}
                  <span className="text-AATextPrimary keyword-hover"> warehouse management</span>, while a customized{" "}
                  <span className="text-AATextPrimary keyword-hover"> Django Admin</span> with integrated{" "}
                  <span className="text-AATextPrimary keyword-hover"> analytics</span> enabled data-driven decision making for improved business operations.
                </p>

              </div>
              <ul
                className="flex flex-wrap w-full text-dark-section-text-highlight md:text-dark-section-text-muted
               text-sm font-Text2"
              >
                <span className="pr-4 z-10 keyword-hover">Python/Django</span>
                <span className="pr-4 z-10 keyword-hover">Django Rest Framework</span>
                <span className="pr-4 z-10 keyword-hover">PostgresSQL</span>
                <span className="pr-4 z-10 keyword-hover">Docker</span>
                <span className="pr-4 z-10 keyword-hover">Celery/Redis</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a href="https://www.wearlay.in/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project 9 University Portals */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 3xl:col-span-6 4xl:col-span-5">
              <Link href="https://my.um.edu.sa/">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-black
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>

              <Img src={"/projects/almaarefa.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full z-0 md:hidden">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-gray-700 opacity-90 z-10 md:opacity-0"></div>
                <Img src={"/projects/almaarefa-sm.jpg"} alt={"Project Screen shot"} className={`w-full h-full object-cover`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-7 xl:col-start-6 3xl:col-span-7 3xl:col-start-6 4xl:col-span-8 4xl:col-start-6 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3 border border-white/10 rounded-lg"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAProjectSubtitle text-base">Learning & Management System</span>
                <Link href="https://my.um.edu.sa/">
                  <span className=" text-AAProjectTitle keyword-hover font-bold text-xl hover:cursor-pointer">
                    Al Maarefa
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
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
              </div>
              <ul
                className="flex flex-wrap w-full text-dark-section-text-highlight md:text-dark-section-text-muted
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10 keyword-hover">Python/Django</span>
                <span className="pr-4 z-10 keyword-hover">Django Rest Framework</span>
                <span className="pr-4 z-10 keyword-hover">PostgresSQL</span>
                <span className="pr-4 z-10 keyword-hover">Docker</span>
                <span className="pr-4 z-10 keyword-hover">Celery/Redis</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/flycatchinfotech/al-maarefa-backend" />
                <ExternalLink url={"https://my.um.edu.sa/"} router={router} />
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 10 Away2gether */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 3xl:col-start-7 3xl:col-span-6 4xl:col-start-8 4xl:col-span-5">
              <Link href={"www.away2gether.com"}>
                <div
                  className="absolute w-full h-full rounded bg-black
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>
              <Img src={"/projects/away2gether.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full z-0 md:hidden md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-gray-700 opacity-90 z-10 md:opacity-0"></div>
                <Img src={"/projects/away2gether-sm.jpg"} alt={"Project Screen shot"} className={`w-full h-full object-cover`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-7 xl:col-start-1 3xl:col-span-7 3xl:col-start-1 4xl:col-span-8 4xl:col-start-1   
            col-span-8 flex flex-col items-start space-y-3 md:order-1 border border-white/10 rounded-lg"
            >
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-AAProjectSubtitle text-base">Hospitality Management</span>
                <Link href={"https://my.away2gether.com"}>
                  <span className=" text-AAProjectTitle keyword-hover font-bold text-xl hover:cursor-pointer">
                    Away2gether
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
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

              </div>
              <ul
                className="flex flex-wrap w-full text-dark-section-text-highlight md:text-dark-section-text-muted
               text-sm font-Text2"
              >
                <span className="pr-4 z-10 keyword-hover">Python/Django</span>
                <span className="pr-4 z-10 keyword-hover">CMS</span>
                <span className="pr-4 z-10 keyword-hover">PostgresSQL</span>
                <span className="pr-4 z-10 keyword-hover">html/css</span>
                <span className="pr-4 z-10 keyword-hover">Javascript</span>
                <span className="pr-4 z-10 keyword-hover">Docker</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/flycatchinfotech/awaytogether-website" />
                <ExternalLink url={"https://my.away2gether.com"} router={router} />
              </div>
            </div>
          </div>
        </div>

        {/* // ? Project 11 Redalion */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          {/* Left image */}
          <div
            className="hidden z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 3xl:col-span-6 4xl:col-span-5">
              <a href="https://www.redalion.com" target={"_blank"} rel="noreferrer">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-black
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <div className="absolute px-2 bg-AAprimary rounded  ml-4 mt-2 z-10">
                <span className="text-AATextPrimary keyword-hover text-xs">🧱 On Hold...</span>
              </div>

              <Img src={"/projects/redalion.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full z-0 md:hidden">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-gray-700 opacity-90 z-10 md:opacity-0"></div>
                <Img src={"/projects/redalion-sm.png"} alt={"Project Screen shot"} className={`w-full h-full object-cover`} />
              </div>
            </div>
            <div className="absolute w-full   rounded  ml-4 mt-2  text-end pr-8 md:hidden">
              <div className="w-full"></div>
              <span className="text-AATextPrimary keyword-hover sm:text-lg bg-AAprimary px-2 py-1 rounded">On hold...</span>
            </div>
            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-7 xl:col-start-6 3xl:col-span-7 3xl:col-start-6 4xl:col-span-8 4xl:col-start-6 col-start-5 
              col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1 border border-white/10 rounded-lg"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAProjectSubtitle text-base">Innovative E-Commerce Platform</span>
                <a href="https://www.redalion.com" target={"_blank"} rel="noreferrer">
                  <span className=" text-AAProjectTitle keyword-hover font-bold text-xl hover:cursor-pointer">
                    Redalion
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
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
              </div>
              <ul
                className="flex flex-wrap w-full text-dark-section-text-muted
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10 keyword-hover">Python/Django</span>
                <span className="pr-4 z-10 keyword-hover">PostgresSQL</span>
                <span className="pr-4 z-10 keyword-hover">html/css</span>
                <span className="pr-4 z-10 keyword-hover">Javascript</span>
                <span className="pr-4 z-10 keyword-hover">Docker</span>
                <span className="pr-4 z-10 keyword-hover">Stripe</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/flycatchinfotech/redalion" />
                <a href="https://www.redalion.com" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
