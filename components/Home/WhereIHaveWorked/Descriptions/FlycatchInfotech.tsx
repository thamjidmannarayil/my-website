import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function FlycatchInfotech() {
  const tasks = [
    {
      text: "Led backend development across multiple projects, owning system architecture, API design, and performance tuning to ensure scalable and efficient solutions.",
      keywords: ["backend development", "system architecture", "API design", "performance tuning", "scalable", "efficient solutions"],
    },
    {
      text: "Delivered four fully customized, client-focused applications from scratch, ensuring on-time deployment and seamless integration into production.",
      keywords: ["customized", "client-focused applications", "on-time deployment", "seamless integration", "production"],
    },
    {
      text: "Collaborated with cross-functional teams and directly with clients to translate requirements into user-centric solutions, while mentoring junior developers and ensuring code quality.",
      keywords: ["cross-functional teams", "clients", "user-centric solutions", "mentoring", "junior developers", "code quality"],
    },
    {
      text: "Implemented CI/CD pipelines and containerized deployments using Docker, streamlining the development workflow and reducing deployment downtime.",
      keywords: ["CI/CD", "Docker", "containerized deployments", "development workflow", "deployment downtime"],
    },
    {
      text: "Integrated third-party APIs and optimized database queries to enhance application performance and deliver a seamless user experience.",
      keywords: ["third-party APIs", "optimized queries", "application performance", "user experience"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl px-4 md:px-0 work-section-scrollbar">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <div className="flex flex-row items-center gap-2">
            <span className="text-AATextPrimary sm:text-lg text-sm font-Arimo tracking-wide font-semibold">
              Software Engineer <span className="text-AATextMuted font-normal">@ Flycatch Infotech Pvt. Ltd., Kochi, Kerala</span>
            </span>
            <a
              href="https://www.flycatchtech.com"
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
                <title>Visit Flycatch Infotech</title>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
          {/* Date */}
          <span className="font-mono text-xs text-AATextMuted">Mar 2023 – Mar 2025</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-AATextMuted sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
