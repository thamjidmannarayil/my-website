import React, { useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AppContext from "../../AppContextFolder/AppContext";

export default function Logo(props: { finishedLoading: boolean; isOnDarkSection?: boolean }) {
  const { setSharedState } = useContext(AppContext);

  const activateCursor = () => {
    console.log("Double click detected on Logo!");
    setSharedState((prev: any) => {
      console.log("Previous state:", prev);
      const newState = {
        ...prev,
        customCursorEnabled: !prev.customCursorEnabled
      };
      console.log("New state:", newState);
      return newState;
    });
  };

  return (
    <>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          y: { delay: props.finishedLoading ? 0 : 0.3, duration: 0.4 },
          opacity: { delay: props.finishedLoading ? 0 : 0.3, duration: 0.4 },
        }}
        className="relative h-12 w-12 flex items-center justify-center cursor-pointer z-50"
        onDoubleClick={activateCursor}
      >
        <Image
          src="/logo.jpg"
          alt="Logo"
          width={48}
          height={48}
          className="rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
          style={{
            filter: props.isOnDarkSection
              ? 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))'
              : 'drop-shadow(0 0 10px rgba(233, 69, 96, 0.3))'
          }}
        />
      </motion.div>
    </>
  );
}
