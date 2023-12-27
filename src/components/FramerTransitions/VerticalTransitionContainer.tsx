import { Transition, motion } from "framer-motion";

const transition: Transition = {
  ease: [0.77, 0.2, 0.8, 1],
  duration: 0.2,
};
const basePosition = {
  y: 0,
  opacity: 1,
};
const exitedPosition = {
  y: 15,
  opacity: 0,
};

export const verticalTransitionProps = {
  initial: exitedPosition,
  exit: exitedPosition,
  animate: basePosition,
  transition,
};

export const VerticalTransitionContainer = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={exitedPosition}
      exit={exitedPosition}
      animate={basePosition}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};
