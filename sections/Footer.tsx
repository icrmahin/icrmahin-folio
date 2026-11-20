import Link from "next/link";
import { ArrowUpRightIcon, ArrowUpIcon } from "@phosphor-icons/react/ssr";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <div>
          <Link className="wordmark" href="/">
            icrmahin<span className="wordmark__mark">/</span>
          </Link>
          <p className="site-footer__meta mt-2">Independent product engineer / builder</p>
        </div>
        <nav aria-label="Footer links" className="flex flex-wrap items-center gap-5">
          <a href="mailto:icrmahin@gmail.com">Email</a>
          <a href="https://github.com/icrmahin" rel="noreferrer" target="_blank">
            GitHub <ArrowUpRightIcon aria-hidden="true" size={12} />
          </a>
          <a download href="/resume.pdf">Resume</a>
          <Link href="/">
            Back to top <ArrowUpIcon aria-hidden="true" size={12} />
          </Link>
        </nav>
        <p className="site-footer__meta">© {new Date().getFullYear()} A. Mahin</p>
      </div>
    </footer>
  );
}
