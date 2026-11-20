"use client";

import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import ThemeToggle from "@/components/theme/ThemeToggle";

const contactEmail = "icrmahin@gmail.com";

export default function Navigation() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link
          aria-label="icrmahin — home"
          className="wordmark"
          href="/"
        >
          icrmahin<span className="wordmark__mark">/</span>
        </Link>

        <nav aria-label="Primary navigation" className="site-nav">
          <Link href="/#work">Work</Link>
          <Link href="/about">About</Link>
          <a className="site-nav__contact" href={`mailto:${contactEmail}`}>
            Contact <ArrowUpRightIcon aria-hidden="true" size={13} />
          </a>
        </nav>

        <div className="site-header__actions">
          <a
            className="header-contact button button--quiet"
            href={`mailto:${contactEmail}`}
          >
            Start a conversation <ArrowUpRightIcon aria-hidden="true" size={14} />
          </a>
          <div className="header-theme">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
