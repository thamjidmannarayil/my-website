import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
const ClickableIcon = props => {
  return (
    <a href={props.href} className="" target={"_blank"} rel="noreferrer">
      <props.Icon className={"w-5 h-5 text-gray-700 hover:text-AAsecondary fill-current hover:cursor-pointer"} />
    </a>
  );
};
const IconsData = [
  { href: "https://github.com/thamjidthachu", Icon: GithubIcon },
  { href: "https://www.linkedin.com/in/thamjid-mannarayil/", Icon: LinkedinIcon },
  { href: "https://www.instagram.com/thamjid_thachu/", Icon: InstagramIcon },
  { href: "https://www.youtube.com/@thachuthamjid", Icon: YoutubeIcon },
];

export default function Fotter(props: { githubUrl: string; hideSocialsInDesktop: boolean }) {
  return (
    <div className="bg-dark-section-bg flex flex-col justify-center items-center py-2 space-y-1">
      {/* // ? Reach me at */}
      <div className={`flex flex-row space-x-8 ${props.hideSocialsInDesktop ? "lg:hidden" : ""}`}>
        {IconsData.map((iconData, index) => {
          return <ClickableIcon key={index} href={iconData.href} Icon={iconData.Icon} />;
        })}
      </div>
      <a href={props.githubUrl} className="" target={"_blank"} rel="noreferrer">
        <div
          className="group flex flex-col font-mono justify-center items-center  text-white 
    text-sm  space-y-2  "
        >
          <span className="group-hover:text-AAsecondary sm:text-sm text-xs">
            Copyright &copy; 2025. All rights reserved.
          </span>

          <span className="text-xs flex flex-row items-center space-x-2 group-hover:text-AAsecondary">
            <GithubIcon className={"w-4 h-4 text-white fill-current group-hover:text-AAsecondary"} />
            <span className="">@thamjidthachu</span>
          </span>
        </div>
      </a>
    </div>
  );
}
