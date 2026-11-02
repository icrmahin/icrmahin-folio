"use client";

import { useEffect, useState, type PointerEvent } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";

const geistFonts = [
  "font-geist-sans",
  "font-geist-mono",
  "font-geist-serif",
  "font-geist-serif-regular",
  "font-geist-serif-square",
  "font-geist-serif-triangle",
  "font-geist-serif-heart",
  "font-geist-pixel",
  "font-geist-pixel-square",
  "font-geist-pixel-grid",
  "font-geist-pixel-circle",
  "font-geist-pixel-triangle",
  "font-geist-pixel-line",
] as const;

function QuestionMark() {
  const [isHovered, setIsHovered] = useState(false);
  const [fontIndex, setFontIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const spring = reduceMotion
    ? { stiffness: 1000, damping: 100 }
    : { stiffness: 500, damping: 32 };
  const x = useSpring(pointerX, spring);
  const y = useSpring(pointerY, spring);
  const velocity = useVelocity(x);
  const blur = useTransform(
    velocity,
    [-1000, 0, 1000],
    ["1.2px", "0px", "1.2px"],
  );

  useEffect(() => {
    if (!isHovered || reduceMotion) return;

    const interval = window.setInterval(() => {
      setFontIndex((index) => (index + 1) % geistFonts.length);
    }, 500);

    return () => window.clearInterval(interval);
  }, [isHovered, reduceMotion]);

  function trackPointer(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(event.clientX - bounds.left + 14);
    pointerY.set(event.clientY - bounds.top + 14);
  }

  return (
    <div
      aria-hidden="true"
      className="group relative grid cursor-default text-[150px] leading-none"
      onPointerEnter={(event) => {
        setFontIndex(0);
        setIsHovered(true);
        trackPointer(event);
      }}
      onPointerLeave={() => setIsHovered(false)}
      onPointerMove={trackPointer}
    >
      <span className="col-start-1 row-start-1 font-geist-pixel-grid transition-opacity duration-300 ease-in-out group-hover:opacity-0">
        ?
      </span>
      <span className="col-start-1 row-start-1 font-geist-pixel-triangle opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        ?
      </span>
      <AnimatePresence>
        {isHovered && (
          <motion.span
            animate={{ opacity: 1, scale: 1 }}
            className="pointer-events-none absolute left-0 top-0 z-10 min-w-28 whitespace-nowrap rounded-md border border-border bg-surface px-3 py-2 text-center text-sm leading-none text-text shadow-md"
            exit={{ opacity: 0, scale: 0.96 }}
            initial={{ opacity: 0, scale: 0.96 }}
            key="cursor-tooltip"
            style={{ filter: reduceMotion ? "blur(0px)" : blur, x, y }}
            transition={{ duration: reduceMotion ? 0 : 0.16 }}
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.span
                animate={{ opacity: 1, filter: "blur(0px)" }}
                className={geistFonts[fontIndex]}
                exit={{ opacity: 0, filter: "blur(2px)" }}
                initial={
                  reduceMotion ? false : { opacity: 0, filter: "blur(2px)" }
                }
                key={geistFonts[fontIndex]}
                transition={{ duration: reduceMotion ? 0 : 0.18 }}
              >
                who am i ?
              </motion.span>
            </AnimatePresence>
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="about">
      <div className="relative mx-auto flex max-w-xl flex-col-reverse items-center justify-center gap-10 px-6 py-8 sm:flex-row sm:justify-between">
        <div className="w-full">
          <div className="text-accent font-geist-serif-triangle text-6xl">
            Hi.
          </div>
          <div className="text-4xl font-geist-sans">it&apos;s Mahin.</div>
          <div className="text-lg text-[#ffffff]/30 font-geist-serif-triangle italic">
            Resilience · Adaptability · Autonomy
          </div>
        </div>
        <QuestionMark />
      </div>
    </section>
  );
}
