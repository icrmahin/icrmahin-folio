"use client";

import Link from "next/link";
import {
  BriefcaseIcon,
  ClockCounterClockwiseIcon,
  FileTextIcon,
  UserCircleIcon,
} from "@phosphor-icons/react";
import ThemeToggle from "../theme/ThemeToggle";

const links = [
  { label: "about", href: "/about", icon: UserCircleIcon },
  { label: "work", href: "/#works", icon: BriefcaseIcon },
  {
    label: "experience",
    href: "/#experience",
    icon: ClockCounterClockwiseIcon,
  },
  { label: "contact", href: "/#contract", icon: FileTextIcon },
];

type NavigationLink = (typeof links)[number];

function NavigationItem({ link }: { link: NavigationLink }) {
  const Icon = link.icon;

  return (
    <li>
      <Link
        className="group inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 px-2 text-xs font-medium capitalize text-text-muted transition-colors duration-200 hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus sm:min-h-9 sm:min-w-0"
        href={link.href}
      >
        <Icon
          className="size-4 transition-colors group-hover:text-accent"
          size={16}
        />
        <span className="hidden sm:inline">{link.label}</span>
      </Link>
    </li>
  );
}

export default function Navigation() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] sm:sticky sm:top-0 sm:bottom-auto sm:inset-x-auto sm:px-2.5 sm:pb-0 sm:pt-2.5">
      <div className="pointer-events-auto flex w-full max-w-lg items-center gap-2 sm:max-w-132 sm:gap-0 sm:rounded-lg sm:border sm:border-border sm:bg-surface/95 sm:px-1.5 sm:shadow-sm sm:backdrop-blur-md">
        <nav
          aria-label="Main navigation"
          className="flex h-14 min-w-0 flex-1 items-center rounded-full border border-border bg-surface/95 px-2 shadow-lg backdrop-blur-md sm:h-10 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:shadow-none"
        >
          <ul className="flex w-full items-center justify-evenly gap-0 sm:justify-start sm:gap-1">
            {links.map((link) => (
              <NavigationItem key={link.label} link={link} />
            ))}
          </ul>
        </nav>
        <div className="grid size-14 shrink-0 place-items-center rounded-full border border-border bg-surface/95 shadow-lg backdrop-blur-md sm:size-8 sm:border-0 sm:bg-transparent sm:shadow-none">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
