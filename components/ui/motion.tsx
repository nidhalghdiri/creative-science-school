"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Fade & Slide In on Scroll
interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  ...props
}: FadeInProps) {
  const getVariants = () => {
    switch (direction) {
      case "up":
        return { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
      case "down":
        return { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } };
      case "left":
        return { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } };
      case "right":
        return { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } };
      case "none":
        return { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={getVariants()}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Staggered Children Container
interface StaggerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerDelay?: number;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.12,
  delay = 0,
  className = "",
  once = true,
  ...props
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px" }}
      transition={{ delayChildren: delay, staggerChildren: staggerDelay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24, scale: 0.96 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Smooth Floating Badge Animation
export function FloatElement({
  children,
  duration = 4,
  distance = 8,
  className = "",
}: {
  children: React.ReactNode;
  duration?: number;
  distance?: number;
  className?: string;
}) {
  return (
    <motion.div
      animate={{ y: [-distance, distance, -distance] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Interactive Hover Motion Card
export function MotionCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Animated Counter for Stats
export function AnimatedCounter({
  target,
  duration = 2,
  suffix = "",
}: {
  target: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return (
    <span ref={nodeRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}
