"use client";
import classNames from "classnames";
import {
  AnimatePresence,
  AnimationDefinition,
  motion,
  Transition,
} from "framer-motion";
import { forwardRef, useEffect, useRef, useState, ElementRef } from "react";

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
  "bg-yellow-300/90 text-black",
  "bg-pink-500/90 text-white",
  "bg-purple-500/90 text-white",
  "bg-blue-500/90 text-white",
  "bg-green-500/90 text-white",
  "bg-red-500/90 text-white",
];

const exit = {
  y: 20,
  opacity: 0,
} satisfies AnimationDefinition;
const initial = {
  y: -20,
  opacity: 0,
} satisfies AnimationDefinition;
const animate = {
  y: 0,
  opacity: 1,
} satisfies AnimationDefinition;

const transition = {
  ease: "anticipate",
  duration: 0.6,
} satisfies Transition;

const Role = forwardRef<ElementRef<typeof motion.span>, { index: number }>(
  ({ index }, ref) => {
    const title = titles[index];
    return (
      <motion.span
        className={"absolute left-0 top-0 whitespace-nowrap text-center"}
        ref={ref}
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
  },
);
Role.displayName = "Role";

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
  }, 1750);

  return (
    <div className="relative min-h-[20px] min-w-[20px]">
      <AnimatePresence mode="sync" initial={false}>
        <Role key={titleIndex} index={titleIndex} />
      </AnimatePresence>
    </div>
  );
};
