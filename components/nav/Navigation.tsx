"use client";

import Link from "next/link";
import {
  BriefcaseIcon,
  ClockCounterClockwiseIcon,
  FileTextIcon,
  UserCircleIcon,
  WrenchIcon,
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
  { label: "activity", href: "/#activity", icon: WrenchIcon },
  { label: "contact", href: "/#contract", icon: FileTextIcon },
];

type NavigationLink = (typeof links)[number];

function NavigationItem({ link }: { link: NavigationLink }) {
  const Icon = link.icon;

  return (
    <li>
      <Link
        className="group inline-flex min-h-9 items-center gap-0.5 px-0.5 text-[10px] font-medium capitalize text-text-muted transition-colors duration-200 hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus sm:gap-1.5 sm:px-2 sm:text-xs"
        href={link.href}
      >
        <Icon
          aria-hidden="true"
          className="transition-colors group-hover:text-accent"
          size={14}
        />
        <span className="max-[360px]:sr-only">{link.label}</span>
      </Link>
    </li>
  );
}

export default function Navigation() {
  return (
    <div className="sticky top-0 z-50 flex w-full justify-center px-3 pt-3 pointer-events-none">
      <nav
        aria-label="Main navigation"
        className="pointer-events-auto flex h-11 w-fit max-w-full items-center gap-1 rounded-md border border-border bg-surface/95 px-1 py-1 shadow-sm backdrop-blur-md"
      >
        <ul className="flex items-center gap-0 sm:gap-1">
          {links.map((link) => (
            <NavigationItem key={link.label} link={link} />
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </div>
  );
}
