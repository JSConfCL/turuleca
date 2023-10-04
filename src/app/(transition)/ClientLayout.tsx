"use client";
import { AnimatePresence, Transition, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const transition: Transition = {
  ease: [0.77, 0.2, 0.8, 1],
  duration: 0.2,
};
const basePosition = {
  y: 0,
  opacity: 1,
  display: "block",
};
const exitedPosition = {
  y: 100,
  opacity: 0,
  display: "none",
};

export const LayoutTransition = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const lastPageRef = useRef<HTMLCollection | null>(null);
  const currentPageRef = useRef<HTMLDivElement>(null);
  const exitAnimationDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!currentPageRef.current) {
      return;
    }
    if (!lastPageRef.current) {
      lastPageRef.current = currentPageRef.current.children;
    }

    exitAnimationDivRef.current?.appendChild(
      lastPageRef.current[0].cloneNode(true),
    );
    lastPageRef.current = currentPageRef.current.children;
  }, [pathname]);

  return (
    <AnimatePresence initial={false}>
      <div className="h-full w-full">
        <motion.div
          key={pathname + "exit-animation"}
          className="pointer-events-none absolute w-full"
          initial={basePosition}
          animate={exitedPosition}
          transition={transition}
        >
          <div ref={exitAnimationDivRef} />
        </motion.div>

        <motion.div
          key={pathname}
          initial={exitedPosition}
          animate={basePosition}
          transition={transition}
          className="absolute mx-auto my-0 w-full"
        >
          <div ref={currentPageRef}>{children}</div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
