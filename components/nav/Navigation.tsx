"use client";

import Link from "next/link";
import {
  BriefcaseIcon,
  ClockCounterClockwiseIcon,
  FileTextIcon,
  UserCircleIcon,
  WrenchIcon,
} from "@phosphor-icons/react";

const links = [
  { label: "about", href: "#about", icon: UserCircleIcon },
  { label: "works", href: "#works", icon: BriefcaseIcon },
  { label: "services", href: "#services", icon: WrenchIcon },
  {
    label: "experience",
    href: "#experience",
    icon: ClockCounterClockwiseIcon,
  },
  { label: "contract", href: "#contract", icon: FileTextIcon },
];

type NavigationLink = (typeof links)[number];

function NavigationItem({ link }: { link: NavigationLink }) {
  const Icon = link.icon;

  return (
    <li>
      <Link
        className="group inline-flex min-h-9 items-center gap-1.5 px-2.5 text-xs font-medium capitalize text-text-muted transition-colors duration-200  hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus sm:px-3 sm:text-sm "
        href={link.href}
      >
        <Icon
          aria-hidden="true"
          className="transition-colors group-hover:text-accent"
          size={16}
        />
        <span>{link.label}</span>
      </Link>
    </li>
  );
}

export default function Navigation() {
  return (
    <nav
      aria-label="Main navigation"
      className="mx-auto my-3 w-fit max-w-[calc(100%-2rem)] "
    >
      <ul className="flex flex-wrap items-center justify-center gap-4 ">
        {links.map((link) => (
          <NavigationItem key={link.label} link={link} />
        ))}
      </ul>
    </nav>
  );
}
