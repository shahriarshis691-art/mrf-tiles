"use client";

import { motion, useInView, type Transition, type Variants } from "framer-motion";
import { useRef } from "react";

type AnimationVariant =
  | "fadeInUp"
  | "fadeIn"
  | "slideInLeft"
  | "slideInRight"
  | "scaleIn";

const transitions: Record<AnimationVariant, Transition> = {
  fadeInUp: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  fadeIn: { duration: 0.9, ease: "easeOut" },
  slideInLeft: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  slideInRight: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  scaleIn: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
};

const variants: Record<AnimationVariant, Variants> = {
  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
};

type ScrollRevealProps = {
  children: React.ReactNode;
  variant?: AnimationVariant;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number | "some" | "all";
};

export default function ScrollReveal({
  children,
  variant = "fadeInUp",
  className,
  delay = 0,
  once = true,
  amount = 0.2,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{ ...transitions[variant], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
