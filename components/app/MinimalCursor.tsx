"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

export default function MinimalCursor() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(-20);
  const pointerY = useMotionValue(-20);
  const opacity = useMotionValue(0);
  const scale = useMotionValue(0.75);
  const spring = { stiffness: 700, damping: 42, mass: 0.3 };
  const x = useSpring(pointerX, spring);
  const y = useSpring(pointerY, spring);

  useEffect(() => {
    if (reduceMotion || !window.matchMedia("(pointer: fine)").matches) return;

    function handleMove(event: PointerEvent) {
      pointerX.set(event.clientX - 4);
      pointerY.set(event.clientY - 4);
      opacity.set(1);
      scale.set(1);
    }

    function hideCursor() {
      opacity.set(0);
      scale.set(0.75);
    }

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("blur", hideCursor);
    document.addEventListener("pointerleave", hideCursor);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("blur", hideCursor);
      document.removeEventListener("pointerleave", hideCursor);
    };
  }, [opacity, pointerX, pointerY, reduceMotion, scale]);

  return (
    <motion.span
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-100 size-2 rounded-full bg-accent shadow-[0_0_0_3px_var(--color-accent-soft)]"
      style={{ x, y, opacity, scale }}
    />
  );
}
