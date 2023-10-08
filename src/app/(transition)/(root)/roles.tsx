"use client";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const titles = [
  "FrontEnd",
  "BackEnd",
  "FullStack",
  "DevOps",
  "QA",
  "Designer",
  "UX",
  "Product Manager",
  "Data Scientist",
  "Data Engineer",
  "Data Analyst",
  "Software Architect",
  "Machine Learning Eng.",
  "Software Engineer",
  "Mobile Developer",
  "iOS Developer",
  "Android Developer",
  "Blockchain Developer",
  "Cloud Engineer",
  "Security Engineer",
  "Game Developer",
  "Hardware Engineer",
  "Network Engineer",
  "Support Engineer",
  // We support only 24 roles for now. (also it's good that it's a multiple of colors on the bottom )
];

const colorBackgrounds = [
  "bg-yellow-300 text-black",
  "bg-pink-500 text-white",
  "bg-purple-500 text-white",
  "bg-blue-500 text-white",
  "bg-green-500 text-white",
  "bg-red-500 text-white",
];

const exit = {
  y: -20,
  opacity: 0,
};
const initial = {
  y: -20,
  opacity: 0,
};
const animate = {
  y: 0,
  opacity: 1,
};

const transition = {
  duration: 0.5,
  ease: "easeInOut",
};

const Role = ({ index }: { index: number }) => {
  const title = titles[index];
  return (
    <motion.span
      className={
        "absolute inset-x-0 flex items-center justify-center whitespace-nowrap text-center transition-all"
      }
      exit={exit}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <span
        className={classNames(
          colorBackgrounds[index % colorBackgrounds.length],
          "px-3 py-1 xl:px-5 xl:py-2 md:px-4 md:py-2",
        )}
      >
        {title}
      </span>
    </motion.span>
  );
};

function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef<(..._args: any[]) => void>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current?.();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export const Roles = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  useInterval(() => {
    // go over every title and go back to the first one when we reach the end.
    setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
  }, 5000);

  return (
    <span className="relative block h-16 w-full text-center align-middle text-4xl font-bold leading-snug md:h-28 md:text-5xl xl:text-6xl">
      <AnimatePresence mode="wait">
        <Role key={titleIndex} index={titleIndex} />
      </AnimatePresence>
    </span>
  );
};
