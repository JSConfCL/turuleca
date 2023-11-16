"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useSelectedLayoutSegment } from "next/navigation";
import { ElementRef, forwardRef } from "react";
import { FrozenRouter } from "../../src/components/FrozenRouter";
import { ScrollArea } from "../../src/components/ui/scroll-area";

const Child = forwardRef<
  ElementRef<typeof motion.div>,
  { children: React.ReactNode }
>((props, ref) => {
  return (
    <motion.div
      ref={ref}
      id="client-layout"
      className="flex flex-1 flex-col overflow-hidden"
      transition={{ duration: 0.2, delay: 0.2 }}
      initial={{ opacity: 0, y: 33 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 33 }}
    >
      <ScrollArea className="flex flex-1">
        <FrozenRouter>{props.children}</FrozenRouter>
        {/* <Footer /> */}
      </ScrollArea>
    </motion.div>
  );
});

Child.displayName = "Child";

export default function TransitionLayout(props: { children: React.ReactNode }) {
  const segment = useSelectedLayoutSegment();
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <Child key={segment}>{props.children}</Child>
    </AnimatePresence>
  );
}
