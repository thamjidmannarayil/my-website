import React, { useEffect, useState } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";

export default function GetInTouch() {
  const [isAndroidWebView, setIsAndroidWebView] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("wv") || (userAgent.includes("android") && userAgent.includes("version/"))) {
      setIsAndroidWebView(true);
    }
  }, []);
  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="content-viewport my-8 sm:my-10 lg:my-12"
    >
      <div className="liquid-glass relative flex flex-col items-center space-y-4 px-6 py-10 sm:px-12 sm:py-14">
        {/* // ? Title === > What's Next?  */}
        <div className="flex flex-row items-center ">
          <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary" />
          <div className="flex flex-row space-x-2 items-center">
            <span className=" font-sans text-AAsecondary text-base">What&apos;s Next?</span>
          </div>
        </div>
        {/* // ? Get In Touch */}
        <span className="font-About text-AATextPrimary text-3xl sm:text-4xl font-bold tracking-wider opacity-85">Get In Touch</span>
        <p className="flex font-Inter tracking-wider text-AATextMuted text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
          Although I&apos;m Always open for any new opportunities, my inbox is open. Whether you have a question or just
          want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="pt-4">
          {isAndroidWebView ? (
            <button
              className="font-mono text-sm text-AAsecondary border-AAsecondary 
                              px-8 py-4 border-[1.5px] rounded "
            >
              thachuthamjid@gmail.com
            </button>
          ) : (
            <a href="mailto:thachuthamjid@gmail.com" target={"_blank"} rel="noreferrer">
              <button
                className="font-mono text-sm text-AAsecondary border-AAsecondary px-8 py-4 border-[1.5px] rounded cursor-pointer bg-transparent hover:bg-AAsecondary/10 transition-colors"
              >
                Say Hello
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
