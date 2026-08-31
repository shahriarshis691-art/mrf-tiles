"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type AnimationVariant =
  | "fadeInUp"
  | "fadeIn"
  | "slideInLeft"
  | "slideInRight"
  | "scaleIn";

const variants: Record<AnimationVariant, any> = {
  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
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
      transition={{ ...variants[variant].visible.transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
