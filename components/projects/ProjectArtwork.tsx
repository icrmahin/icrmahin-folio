"use client";

import { motion, useReducedMotion } from "motion/react";

type ProjectArtworkProps = {
  visual: "storefront" | "operations" | "landing" | "editor";
};

const line = "h-1.5 rounded-full bg-border-strong/60";

function loop(delay = 0) {
  return {
    delay,
    duration: 2.8,
    ease: "easeInOut" as const,
    repeat: Infinity,
  };
}

// Project preview
export default function ProjectArtwork({ visual }: ProjectArtworkProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="relative aspect-[16/9] overflow-hidden border-b border-border bg-surface"
    >
      {visual === "storefront" ? (
        <motion.div
          className="absolute inset-4 rounded-md border border-border bg-page p-3"
          initial={false}
        >
          <div className="flex items-center justify-between">
            <span className="h-2 w-14 rounded-full bg-accent/80" />
            <span className="size-3 rounded-full border border-border-strong" />
          </div>
          <div className="mt-5 h-3 w-3/5 rounded-full bg-text/80" />
          <div className={`${line} mt-2 w-2/5`} />
          <div className="mt-4 grid grid-cols-3 gap-2">
            {Array.from({ length: 3 }, (_, index) => (
              <motion.div
                animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
                className="aspect-square rounded-sm bg-surface-raised p-2"
                key={index}
                transition={loop(index * 0.18)}
              >
                <motion.div
                  animate={
                    reduceMotion ? undefined : { opacity: [0.45, 0.9, 0.45] }
                  }
                  className="size-full rounded-sm bg-accent/20"
                  transition={loop(index * 0.18)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ) : null}
      {visual === "operations" ? (
        <motion.div
          className="absolute inset-4 rounded-md border border-border bg-page p-3"
          initial={false}
        >
          <div className="flex items-center justify-between">
            <span className={`${line} w-16 bg-text/70`} />
            <span className="size-3 rounded-full bg-accent/80" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {Array.from({ length: 3 }, (_, index) => (
              <div className="rounded-sm bg-surface-raised p-2" key={index}>
                <div className={`${line} w-2/3`} />
                <motion.div
                  animate={
                    reduceMotion ? undefined : { scaleX: [0.45, 1, 0.7] }
                  }
                  className="mt-2 h-2 w-1/2 origin-left rounded-full bg-accent/70"
                  transition={loop(index * 0.22)}
                />
              </div>
            ))}
          </div>
          <div className="mt-3 space-y-2">
            {Array.from({ length: 3 }, (_, index) => (
              <div className="flex items-center gap-2" key={index}>
                <span className="size-3 rounded-sm bg-surface-raised" />
                <span className={`${line} flex-1`} />
                <motion.span
                  animate={
                    reduceMotion ? undefined : { opacity: [0.35, 1, 0.35] }
                  }
                  className="h-1.5 w-8 rounded-full bg-accent/60"
                  transition={loop(index * 0.2)}
                />
              </div>
            ))}
          </div>
        </motion.div>
      ) : null}
      {visual === "landing" ? (
        <motion.div
          className="absolute inset-4 flex items-center justify-between rounded-md border border-border bg-page p-4"
          initial={false}
        >
          <div className="w-1/2">
            <div className="h-2 w-10 rounded-full bg-accent/80" />
            <div className="mt-4 h-3 w-full rounded-full bg-text/80" />
            <div className="mt-2 h-3 w-4/5 rounded-full bg-text/50" />
            <div className={`${line} mt-4 w-3/4`} />
            <motion.div
              animate={reduceMotion ? undefined : { opacity: [0.7, 1, 0.7] }}
              className="mt-4 h-5 w-14 rounded-sm bg-accent"
              transition={loop()}
            />
          </div>
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
            className="h-full w-1/4 rounded-xl border border-border-strong bg-surface-raised p-1.5"
            transition={loop(0.3)}
          >
            <div className="h-full rounded-lg bg-accent/15" />
          </motion.div>
        </motion.div>
      ) : null}
      {visual === "editor" ? (
        <motion.div
          className="absolute inset-4 rounded-md border border-border bg-page p-3"
          initial={false}
        >
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-accent" />
            <span className="size-2 rounded-full bg-focus/70" />
            <span className="size-2 rounded-full bg-text-subtle/60" />
          </div>
          <div className="mt-5 space-y-2">
            {["w-3/4", "w-1/2", "w-2/3", "w-2/5", "w-3/5"].map(
              (width, index) => (
                <div className="flex items-center gap-2" key={width}>
                  <span className="w-3 text-right font-mono text-[8px] text-text-subtle">
                    {index + 1}
                  </span>
                  <motion.span
                    animate={
                      reduceMotion ? undefined : { opacity: [0.35, 0.9, 0.35] }
                    }
                    className={`${line} ${width} ${index % 2 === 0 ? "bg-accent/60" : "bg-text-muted/50"}`}
                    transition={loop(index * 0.17)}
                  />
                </div>
              ),
            )}
          </div>
        </motion.div>
      ) : null}
    </div>
  );
}
