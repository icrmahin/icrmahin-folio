import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

export default function CTA() {
  return (
    <section aria-labelledby="contact-title" className="shell contact-section" id="contact">
      <div>
        <p className="eyebrow">Have a product to build?</p>
        <h2 id="contact-title">
          Let&apos;s make something <em>useful.</em>
        </h2>
        <p className="contact-section__note">
          Have a product idea, a design problem or an engineering challenge?
          Send me a note with the context and what you are trying to make.
        </p>
      </div>
      <a className="button button--accent" href="mailto:icrmahin@gmail.com">
        Email Mahin <ArrowUpRightIcon aria-hidden="true" size={16} />
      </a>
    </section>
  );
}
