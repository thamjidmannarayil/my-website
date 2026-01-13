import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function QuestInnovativeSolutions() {
  const tasks = [
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
  ];


  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl px-4 md:px-0 work-section-scrollbar">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <div className="flex flex-row items-center gap-2">
            <span className="text-AATextPrimary sm:text-lg text-sm font-Arimo tracking-wide font-semibold">
              Software Engineer Intern <span className="text-AATextMuted font-normal">@ Quest Innovative Solutions, Kochi, Kerala</span>
            </span>
            <a
              href="https://www.qis.co.in/"
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
                <title>Visit Quest Innovative Solutions</title>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
          {/* Date */}
          <span className="font-mono text-xs text-AATextMuted">Sep 2021 – Mar 2022</span>
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
