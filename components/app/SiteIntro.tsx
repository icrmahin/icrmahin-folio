"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { HelloEffect } from "@/components/ui/hello-effect";

export default function SiteIntro({ children }: { children: ReactNode }) {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <>
      {children}
      <AnimatePresence>
        {!isComplete ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-100 grid place-items-center bg-page"
            exit={{ opacity: 0 }}
            initial={{ opacity: 1 }}
            role="status"
            transition={{ duration: 0.3 }}
          >
            <HelloEffect
              className="h-16 max-w-full text-foreground sm:h-20"
              onComplete={() => setIsComplete(true)}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
