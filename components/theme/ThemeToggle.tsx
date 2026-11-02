"use client";

import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle color theme"
      className="grid size-8 place-items-center rounded-md text-text-muted transition-colors hover:bg-surface-raised hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      title="Toggle color theme"
      type="button"
    >
      <span className="theme-toggle-dark">
        <SunIcon aria-hidden="true" size={16} />
      </span>
      <span className="theme-toggle-light">
        <MoonIcon aria-hidden="true" size={16} />
      </span>
    </button>
  );
}
