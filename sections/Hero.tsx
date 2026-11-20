import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  DownloadSimpleIcon,
} from "@phosphor-icons/react/ssr";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="shell hero" id="top">
      <div className="hero__copy">
        <p className="eyebrow">
          <span aria-hidden="true" className="eyebrow__dot" />
          Independent product engineer / Dhaka, Bangladesh
        </p>
        <h1 id="hero-title">
          Good ideas deserve <em>working software.</em>
        </h1>
        <p className="hero__lede">
          I bring product thinking, interface design and practical engineering
          together to turn early ideas into useful web and mobile products.
        </p>
        <div className="hero__actions">
          <Link className="button button--accent" href="/#work">
            Explore selected work
            <ArrowDownRightIcon aria-hidden="true" size={16} />
          </Link>
          <a className="button button--quiet" href="mailto:icrmahin@gmail.com">
            Start a conversation
            <ArrowUpRightIcon aria-hidden="true" size={16} />
          </a>
          <a className="button button--quiet" download href="/resume.pdf">
            Resume
            <DownloadSimpleIcon aria-hidden="true" size={16} />
          </a>
        </div>
        <p className="hero__note">
          Product direction · Interface design · Web & mobile engineering
        </p>
      </div>

      <div aria-label="Portrait and product-building visual" className="hero-visual" role="group">
        <div className="hero-paper">
          <div className="hero-paper__top">
            <span>Field note / 001</span>
            <span>icrmahin</span>
          </div>
          <div>
            <p className="hero-paper__title">
              Make the
              <span>useful</span>
              thing real.
            </p>
            <div className="hero-paper__rule">Product thinking to shipped software</div>
          </div>
          <div className="hero-paper__bottom">
            <span>Design / Build / Refine</span>
            <span>01—03</span>
          </div>
        </div>
        <figure className="hero-portrait">
          <Image
            alt="Portrait of A. Mahin"
            className="rounded-[1px]"
            height={720}
            priority
            sizes="(max-width: 760px) 34vw, 190px"
            src="/pfp.png"
            width={720}
          />
          <figcaption className="hero-portrait__caption">
            <span>Builder / Dhaka</span>
            <span>icr</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
