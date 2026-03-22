"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedHeroProps {
  staticText: string;
  titles: string[];
  interval?: number;
}

function AnimatedHero({ staticText, titles, interval = 2500 }: AnimatedHeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const memoTitles = useMemo(() => titles, [titles]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === memoTitles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, interval);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, memoTitles, interval]);

  return (
    <h1 className="text-4xl sm:text-5xl md:text-7xl max-w-4xl tracking-tight text-center font-bold text-white">
      <span>{staticText}</span>
      <span className="relative flex w-full justify-center overflow-hidden md:pb-4 md:pt-2 h-[1.2em]">
        &nbsp;
        {memoTitles.map((title, index) => (
          <motion.span
            key={index}
            className="absolute font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200"
            initial={{ opacity: 0, y: "-100" }}
            transition={{ type: "spring", stiffness: 50 }}
            animate={
              titleNumber === index
                ? { y: 0, opacity: 1 }
                : { y: titleNumber > index ? -150 : 150, opacity: 0 }
            }
          >
            {title}
          </motion.span>
        ))}
      </span>
    </h1>
  );
}

export { AnimatedHero };
