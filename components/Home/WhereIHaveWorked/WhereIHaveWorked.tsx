import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";
import FlycatchInfotech from "./Descriptions/FlycatchInfotech";
import QuestInnovativeSolutions from "./Descriptions/QuestInnovativeSolutions";
import AqaryInternational from "./Descriptions/AqaryInternational";
export default function WhereIHaveWorked() {
  const barRef = React.useRef<HTMLDivElement>(null);
  // ? INFORMATIONAL control the green position using px,
  // ? INFORMATIONAL the default value of barRef's class should be at the beginning translate-y-[0px]
  const GetDescription = () => {
    switch (DescriptionJob) {
      case "Aqary":
        return <AqaryInternational />;
      case "Flycatch":
        return <FlycatchInfotech />;
      case "Quest":
        return <QuestInnovativeSolutions />;
    }
  };
  const [DescriptionJob, setDescriptionJob] = React.useState("Aqary");
  return (
    <div data-aos="fade-up" className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary">
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
        <CompaniesBar setDescriptionJob={setDescriptionJob} />
        {/* // ? Description for The job */}
        {GetDescription()}
      </section>
    </div>
  );
}

const CompaniesBar = props => {
  const [barPosition, setBarPosition] = React.useState<Number>(-8); // Green bar position by the default it's -20px
  const [barAbovePosition, setBarAbovePosition] = React.useState<Number>(0);
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] = React.useState<boolean[]>([
    true,
    false,
    false,
  ]);
  const CompanyButton = props => {
    return (
      <button
        onClick={() => {
          setBarPosition(props.BarPosition);
          setBarAbovePosition(props.BarAvobePosition);
          props.setDescriptionJob(props.DescriptionJob);
          setCompanyNameBackgroundColorGreen(props.CompanyNameBackgroundColorGreen);
        }}
        className={`flex-1 md:flex-none text-[10px] xs:text-xs sm:text-sm text-center md:text-left rounded font-mono  
             py-2 px-1 xs:py-3 xs:px-2 md:pl-6 md:px-4 md:w-44 min-w-0 duration-500 transition-all overflow-hidden
             ${companyNameBackgroundColorGreen[props.ButtonOrderOfcompanyNameBackgroundColorGreen]
            ? "bg-AAsecondary bg-opacity-20 text-white border-l-2 md:border-l-2 border-b-2 md:border-b-0 border-AAsecondary font-semibold"
            : "text-AATextMuted hover:text-AAsecondary hover:bg-AASurface"
          }`}
      >
        {props.CompanyName}
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
          // ref={barRef}
          className={`absolute w-10 h-0.5 md:w-0.5 md:h-12 rounded bg-AAsecondary `}
        ></motion.div>
      </div>
      {/* // ? Companies name as buttons */}
      <div className="flex flex-col md:order-2 order-1 space-y-1 pl-0 md:pl-0 w-full md:w-auto items-center md:items-start">
        <div className="flex flex-row md:flex-col gap-1 xs:gap-2 md:gap-1 justify-center md:justify-start w-full md:w-auto">
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={0}
            CompanyName="Aqary International"
            BarPosition={-10}
            BarAvobePosition={0}
            DescriptionJob="Aqary"
            CompanyNameBackgroundColorGreen={[true, false, false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={1}
            CompanyName="Flycatch Infotech"
            BarPosition={45}
            BarAvobePosition={150}
            DescriptionJob="Flycatch"
            CompanyNameBackgroundColorGreen={[false, true, false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={2}
            CompanyName="Quest Innovative Solutions"
            BarPosition={100}
            BarAvobePosition={300}
            DescriptionJob="Quest"
            CompanyNameBackgroundColorGreen={[false, false, true]}
            setDescriptionJob={props.setDescriptionJob}
          />
        </div>
        <div className="block md:hidden h-0.5 rounded bg-AATextMuted/30 w-full max-w-md">
          <motion.div animate={{ x: barAbovePosition }} className="w-[150px] h-0.5 rounded bg-AAsecondary"></motion.div>
        </div>
      </div>
    </div>
  );
};
