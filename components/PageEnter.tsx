"use client";

import { useReducedMotion, motion, type Transition, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type PageEnterProps = {
  children: ReactNode;
  delay?: number;
};

const transition: Transition = { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] };

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function PageEnter({ children, delay = 0 }: PageEnterProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      animate="visible"
      variants={variants}
      transition={{ ...transition, delay }}
    >
      {children}
    </motion.div>
  );
}
