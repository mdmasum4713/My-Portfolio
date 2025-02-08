
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/user-type-writer";

const HomeDescription = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const description =
    " As a Front-End Developer, I design and build interactive web interfaces, enhance user experiences, and ensure websites are responsive and visually appealing. From crafting UI components to optimizing performance, I bridge the gap between design and  functionality.";
  const { displayedText, isComplete } = useTypewriter(description, 30);

  useEffect(() => {
    setHasLoaded(true);
  }, []);
  return (
    <motion.p
    className="w-auto font-normal leading-7 mb-6 min-h-30"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 0.5 }}
  >
    {hasLoaded && displayedText.length > 0 ? (
      displayedText.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ color: "rgb(156 163 175)" }}
          animate={{
            color: isComplete ? "rgb(255 255 255)" : "rgb(156 163 175)",
          }}
          transition={{ duration: 0.5, delay: index * 0.03 }}
        >
          {char}
        </motion.span>
      ))
    ) : (
      <span className="text-white/60">{description}</span>
    )}
  </motion.p>
  
  );
};

export default HomeDescription;
