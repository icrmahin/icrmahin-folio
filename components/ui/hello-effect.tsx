"use client";

import {
  type AnimationEvent,
  type ComponentProps,
  type CSSProperties,
  useEffect,
  useRef,
} from "react";
import { cn } from "@/lib/utils";

export interface HelloEffectProps
  extends Omit<ComponentProps<"svg">, "children"> {
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
    label: "hello",
    strokes: [
      {
        accent: false,
        at: 0,
        d: "M8.69214 166.553C36.2393 151.239 61.3409 131.548 89.8191 98.0295C109.203 75.1488 119.625 49.0228 120.122 31.0026C120.37 17.6036 113.836 7.43883 101.759 7.43883C88.3598 7.43883 79.9231 17.6036 74.7122 40.9363C69.005 66.5793 64.7866 96.0036 54.1166 190.356",
        ease: "ease-in-out",
        for: 0.8,
      },
      {
        accent: false,
        at: 0.7,
        d: "M55.1624 181.135C60.6251 133.114 81.4118 98.0479 107.963 98.0479C123.844 98.0479 133.937 110.703 131.071 128.817C129.457 139.487 127.587 150.405 125.408 163.06C122.869 178.941 130.128 191.348 152.122 191.348C184.197 191.348 219.189 173.523 237.097 145.915C243.198 136.509 245.68 128.073 245.928 119.884C246.176 104.996 237.739 93.8296 222.851 93.8296C203.992 93.8296 189.6 115.17 189.6 142.465C189.6 171.745 205.481 192.341 239.208 192.341C285.066 192.341 335.86 137.292 359.199 75.8585C365.788 58.513 368.26 42.4065 368.26 31.1512C368.26 17.8057 364.042 7.55823 352.131 7.55823C340.469 7.55823 332.777 16.6141 325.829 30.9129C317.688 47.4967 311.667 71.4162 309.203 98.4549C303 166.301 316.896 191.348 349.936 191.348C390 191.348 434.542 135.534 457.286 75.6686C463.803 58.513 466.275 42.4065 466.275 31.1512C466.275 17.8057 462.057 7.55823 450.146 7.55823C438.484 7.55823 430.792 16.6141 423.844 30.9129C415.703 47.4967 409.682 71.4162 407.218 98.4549C401.015 166.301 414.911 191.348 444.416 191.348C473.874 191.348 489.877 165.67 499.471 138.402C508.955 111.447 520.618 94.8221 544.935 94.8221C565.035 94.8221 580.916 109.71 580.916 137.75C580.916 168.768 560.792 192.093 535.362 192.341C512.984 192.589 498.285 174.475 499.774 147.179C501.511 116.907 519.873 94.8221 543.943 94.8221C557.839 94.8221 569.51 100.999 578.682 107.725C603.549 125.866 622.709 114.656 630.047 96.7186",
        ease: "ease-in-out",
        for: 2.8,
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
  const { language = "en", onComplete, speed = 1, className, ...rest } = props;
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
            stroke.accent && "stroke-primary"
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
