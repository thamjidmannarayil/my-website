import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function AqaryInternational() {
  const tasks = [
    {
      text: "Developed and maintained an AI-enhanced HRMS platform using Flask, featuring ATS-driven resume screening and an intelligent chatbot for employee assistance and onboarding support.",
      keywords: ["AI-enhanced", "Flask", "ATS-driven", "chatbot", "employee assistance", "onboarding support"],
    },
    {
      text: "Implemented a subscription-based event system that allows external applications to receive real-time HRMS updates via Webhooks, improving automation and system interoperability.",
      keywords: ["subscription-based event system", "real-time HRMS updates", "webhooks", "automation", "interoperability"],
    },
    {
      text: "Integrated biometric devices and designed event-driven workflows to automate attendance tracking, validation, and exception handling for a seamless HR experience.",
      keywords: ["biometric devices", "event-driven", "automate", "attendance tracking", "HR experience"],
    },
    {
      text: "Built a WebSocket-powered notification module to deliver instant alerts and real-time updates, enhancing employee engagement and operational visibility.",
      keywords: ["WebSocket-powered notification", "alert", "real-time", "enhancing"],
    },
    {
      text: "Contributed to the backend development of a large-scale CRM platform, handling backend coding, database architecture, API design, and system integration.",
      keywords: ["backend development", "large-scale CRM", "coding", "architecture", "design", "integration"],
    },
    {
      text: "Integrated WebSockets and message queuing mechanisms to enable real-time updates, asynchronous communication, and efficient data processing.",
      keywords: ["WebSockets", "queuing mechanisms ", "real-time", "asynchronous", "efficient", "processing"],
    },
    {
      text: "Collaborated closely with cross-functional teams to ensure scalability, maintainability, and clean code practices across the system’s microservices.",
      keywords: ["cross-functional", "scalability,", "maintainability", "clean code", "architecture", "microservices"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl px-4 md:px-0 work-section-scrollbar">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <div className="flex flex-row items-center gap-2">
            <span className="text-AATextPrimary sm:text-lg text-sm font-Arimo tracking-wide font-semibold">
              AI/ML Engineer <span className="text-AATextMuted font-normal">@ Aqary International Group, Al-Reem Island, Abu Dhabi</span>
            </span>
            <a
              href="https://aqaryaid.com"
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
                <title>Visit Aqary International</title>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
          {/* Date */}
          <span className="font-mono text-xs text-AATextMuted">May 2025– Present</span>
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
