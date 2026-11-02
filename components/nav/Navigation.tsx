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
        className="group inline-flex min-h-9 items-center gap-1.5 px-2 text-xs font-medium capitalize text-text-muted transition-colors duration-200 hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus max-[420px]:gap-0.5 max-[420px]:px-0.5 max-[420px]:text-[9px]"
        href={link.href}
      >
        <Icon
          aria-hidden="true"
          className="transition-colors group-hover:text-accent max-[420px]:size-3"
          size={16}
        />
        <span>{link.label}</span>
      </Link>
    </li>
  );
}

export default function Navigation() {
  return (
    <div className="sticky top-0 z-50 flex w-full justify-center px-2.5 pt-2.5 pointer-events-none">
      <nav
        aria-label="Main navigation"
        className="pointer-events-auto flex h-10 w-full max-w-132 items-center justify-between gap-1 rounded-lg border border-border bg-surface/95 px-1.5 shadow-sm backdrop-blur-md"
      >
        <ul className="flex flex-1 items-center justify-start gap-0 sm:gap-1">
          {links.map((link) => (
            <NavigationItem key={link.label} link={link} />
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </div>
  );
}
