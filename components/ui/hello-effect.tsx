"use client";

import {
  type AnimationEvent,
  type ComponentProps,
  type CSSProperties,
  useEffect,
  useRef,
} from "react";
import { cn } from "@/lib/utils";

export interface HelloEffectProps extends Omit<
  ComponentProps<"svg">,
  "children"
> {
  /**
   * The word it writes: "hello", or "xin chào" in Vietnamese.
   *
   * @default "en"
   */
  language?: "en" | "vi";
  /** Called once the last stroke is drawn (at once with reduced motion). */
  onComplete?: () => void;
  /**
   * How fast it writes: `2` takes half the time, `0.5` twice as long. At
   * `1`, "hello" takes 3.5 seconds and "xin chào" 7.8.
   *
   * @default 1
   */
  speed?: number;
}

type Ease = "ease-in-out" | "ease-out";

interface Stroke {
  /** Drawn in the accent colour: the Vietnamese tone mark. */
  accent: boolean;
  /** When the stroke starts, in seconds at speed 1. */
  at: number;
  d: string;
  ease: Ease;
  /** How long the stroke takes, in seconds at speed 1. */
  for: number;
}

interface Word {
  label: string;
  strokes: Stroke[];
  viewBox: string;
}

// data
const WORDS: Record<"en" | "vi", Word> = {
  en: {
    label: "Mahin",
    strokes: [
      {
        // M
        accent: false,
        at: 0,
        d: "M12 188C28 130 44 60 58 22C66 2 76 6 76 34C76 80 72 140 74 188C80 130 100 50 122 24C134 10 142 18 142 46C142 90 138 150 146 186C150 194 160 192 172 176",
        ease: "ease-in-out",
        for: 1.0,
      },
      {
        // a
        accent: false,
        at: 0.9,
        d: "M236 108C220 96 190 104 180 140C174 168 190 192 212 188C232 184 240 150 242 108C242 140 244 176 262 186",
        ease: "ease-in-out",
        for: 0.8,
      },
      {
        // h
        accent: false,
        at: 1.6,
        d: "M284 190C292 130 306 60 318 20C326 -2 336 6 332 34C326 80 310 150 302 190C304 150 314 112 336 100C362 96 358 130 352 160C350 176 358 192 376 184",
        ease: "ease-in-out",
        for: 1.0,
      },
      {
        // i (stem)
        accent: false,
        at: 2.5,
        d: "M398 104C392 130 388 160 394 182C398 194 412 190 424 176",
        ease: "ease-in-out",
        for: 0.5,
      },
      {
        // i (dot)
        accent: true,
        at: 2.95,
        d: "M406 62L407 63",
        ease: "ease-in-out",
        for: 0.15,
      },
      {
        // n
        accent: false,
        at: 3.0,
        d: "M446 100C440 140 438 170 440 190C442 150 462 98 490 98C512 98 508 134 502 162C500 178 510 192 532 186C560 178 590 130 626 96",
        ease: "ease-in-out",
        for: 1.0,
      },
    ],
    viewBox: "0 0 638 200",
  },
  vi: {
    label: "xin chào",
    strokes: [
      {
        accent: false,
        at: 0,
        d: "M102.233 96.2277C75.6823 127.245 45.1612 158.759 11.4143 190.521",
        ease: "ease-in-out",
        for: 0.3,
      },
      {
        accent: false,
        at: 0.4,
        d: "M7.69214 116.575C9.67725 105.16 16.8733 95.7311 28.5358 95.7311C40.4465 95.7311 46.8981 105.408 53.3497 124.019C56.7409 133.283 60.1322 142.547 63.5234 151.81C73.689 179.58 81.1988 191.513 100.855 191.513C128.722 191.513 154.043 159.148 161.595 118.502C162.929 111.321 164.774 103.736 166.043 96.2273",
        ease: "ease-in-out",
        for: 0.7,
      },
      {
        accent: false,
        at: 1,
        d: "M166.043 96.2273C163.191 113.101 160.565 126.997 158.92 139.404C157.989 147.592 157.544 154.54 157.596 161.488C157.729 179.354 164.764 191.513 182.695 191.513C209.39 191.513 236.181 159.123 243.73 118.5C245.064 111.321 247.012 103.759 248.139 96.2273",
        ease: "ease-out",
        for: 0.5,
      },
      {
        accent: false,
        at: 1.5,
        d: "M248.139 96.2278C243.424 127.741 239.454 158.759 234.491 190.272",
        ease: "ease-out",
        for: 0.3,
      },
      {
        accent: false,
        at: 1.8,
        d: "M237.873 167.951C244.704 121.32 265.508 94.2422 290.322 94.2422C307.692 94.2422 316.625 106.153 315.136 123.026C313.896 135.681 309.677 150.322 308.685 162.729C307.444 179.85 316.499 191.513 330.769 191.513C348.722 191.513 359.309 179.314 364.143 165.965",
        ease: "ease-out",
        for: 0.9,
      },
      {
        accent: false,
        at: 2.6,
        d: "M535.91 109.876C531.265 100.446 520.943 93.4984 505.459 93.4984C476.516 93.4984 462.044 117.816 462.044 143.374C462.044 171.503 482.265 192.506 511.307 192.506C559.762 192.506 592.902 136.708 621.581 97.8807C640.764 71.9101 649.874 49.2359 650.372 31.1674C650.62 17.7684 644.168 7.60362 632.01 7.60362C618.61 7.60362 610.173 17.7684 604.963 41.1011C599.255 66.7441 595.037 96.1684 584.367 190.521",
        ease: "ease-in-out",
        for: 1.1,
      },
      {
        accent: false,
        at: 3.6,
        d: "M585.413 181.299C590.677 135.025 611.663 98.2125 638.213 98.2125C654.094 98.2125 664.187 110.868 661.321 128.982C659.708 139.652 656.794 152.059 655.128 164.217C653.102 179.602 658.89 191.513 676.813 191.513C702.178 191.513 717.375 164.077 725.613 135.196",
        ease: "ease-in-out",
        for: 1,
      },
      {
        accent: false,
        at: 4.6,
        d: "M803.871 112.995C799.007 101.8 788.666 94.2423 772.207 94.2423C744.912 94.2423 724.398 121.538 723.052 150.818C721.878 177.617 734.244 192.681 751.857 192.505C776.858 192.255 795.234 167.699 803.437 115.742C804.449 109.332 805.498 102.638 806.51 96.2274",
        ease: "ease-out",
        for: 0.8,
      },
      {
        accent: false,
        at: 5.4,
        d: "M806.51 96.2274C805.486 102.73 804.461 109.232 803.436 115.735C798.955 144.175 796.887 155.395 797.109 162.729C797.628 179.85 803.785 191.513 820.064 191.513C842.563 191.513 860.966 164.721 870.266 138.289C879.653 111.612 891.315 94.9867 915.633 94.9867C935.732 94.9867 951.613 109.875 951.613 137.915C951.613 168.932 931.489 192.257 906.059 192.505C883.681 192.753 868.983 174.639 870.471 147.344C872.208 117.071 890.571 94.9867 914.64 94.9867C928.536 94.9867 940.207 101.164 949.38 107.89C974.247 126.031 993.407 114.82 1000.74 96.8832",
        ease: "ease-out",
        for: 1.5,
      },
      {
        accent: true,
        at: 7,
        d: "M763.027 19.3039C768.734 34.6886 780.397 48.3362 792.059 55.5322",
        ease: "ease-in-out",
        for: 0.8,
      },
    ],
    viewBox: "0 0 1009 200",
  },
};

/**
 * The strokes of a word in order, each with its timing at a speed and
 * whether it ends the word; keyed by the word too, so another word draws
 * from the start.
 */
const strokesOf = (language: "en" | "vi", speed: number) => {
  const { strokes } = WORDS[language];
  const rate = speed > 0 ? speed : 1;
  return strokes.map((stroke, index) => ({
    accent: stroke.accent,
    d: stroke.d,
    key: `${language}-${index}`,
    last: index === strokes.length - 1,
    style: {
      "--hello-effect-delay": `${Math.round((stroke.at * 1000) / rate)}ms`,
      "--hello-effect-duration": `${Math.round((stroke.for * 1000) / rate)}ms`,
      "--hello-effect-ease": stroke.ease,
    } as CSSProperties,
  }));
};

/**
 * "hello" written by hand in one cursive line, as on a new Mac's welcome
 * screen, or "xin chào" in Vietnamese with its tone mark in the accent
 * colour. Each stroke is an SVG path whose dash, as long as the path
 * (`pathLength` 1), slides home with the `hello-effect-draw` keyframes,
 * fading in as it starts so the pen's round tip doesn't show early. It
 * draws in the current text colour; set the size with a height
 * (`h-20`), the width follows. With reduced motion the word is simply
 * there.
 */
export const HelloEffect = (props: HelloEffectProps) => {
  const { language = "en", onComplete, speed = 2, className, ...rest } = props;
  const word = WORDS[language];
  const written = useRef("");

  // With reduced motion nothing plays, so nothing ends: each word is complete at once.
  useEffect(() => {
    if (
      written.current !== language &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      written.current = language;
      onComplete?.();
    }
  }, [language, onComplete]);

  const animationEnd = (event: AnimationEvent<SVGSVGElement>) => {
    if ((event.target as SVGElement).dataset.last !== undefined) {
      onComplete?.();
    }
  };

  return (
    <svg
      className={cn("h-20 w-auto shrink-0 overflow-visible", className)}
      data-language={language}
      data-slot="hello-effect"
      fill="none"
      onAnimationEnd={animationEnd}
      role="img"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={14.8883}
      viewBox={word.viewBox}
      {...rest}
    >
      <title>{word.label}</title>
      {strokesOf(language, speed).map((stroke) => (
        <path
          className={cn(
            "[stroke-dasharray:1_2] motion-safe:animate-hello-effect-draw",
            stroke.accent && "stroke-primary",
          )}
          d={stroke.d}
          data-accent={stroke.accent ? "" : undefined}
          data-last={stroke.last ? "" : undefined}
          data-slot="hello-effect-stroke"
          key={stroke.key}
          pathLength={1}
          style={stroke.style}
        />
      ))}
    </svg>
  );
};
