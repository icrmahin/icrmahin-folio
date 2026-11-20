import type { ProjectVisual } from "@/lib/projects";

export default function ProjectArtwork({ visual }: { visual: ProjectVisual }) {
  return (
    <div
      aria-hidden="true"
      className={`project-artwork project-artwork--${visual}`}
    >
      <span className="project-artwork__label">Illustrative composition</span>

      {visual === "storefront" ? (
        <div className="storefront-sheet">
          <div className="storefront-sheet__top">
            <span className="storefront-sheet__brand">HIBBULLAH</span>
            <span>Customer / Android</span>
          </div>
          <div className="storefront-sheet__body">
            <div>
              <p className="storefront-sheet__title">
                Care, <em>within reach.</em>
              </p>
              <div className="hero-paper__rule mt-4">Catalogue / Orders / Account</div>
            </div>
            <div className="storefront-sheet__tiles">
              <div className="storefront-sheet__tile"><span /><span /></div>
              <div className="storefront-sheet__tile"><span /><span /></div>
              <div className="storefront-sheet__tile"><span /><span /></div>
              <div className="storefront-sheet__tile"><span /><span /></div>
            </div>
          </div>
        </div>
      ) : null}

      {visual === "landing" ? (
        <div className="landing-sheet">
          <div className="landing-sheet__top">
            <span>HIBBULLAH / PRODUCT</span>
            <span>Public site</span>
          </div>
          <p className="landing-sheet__headline">
            A clearer way to manage everyday pharmacy needs.
          </p>
          <div className="landing-sheet__bottom">
            <span>Product / Features / Download</span>
            <span className="landing-sheet__mark">H.</span>
          </div>
        </div>
      ) : null}

      {visual === "editor" ? (
        <div className="editor-sheet">
          <div className="editor-sheet__top">
            <span className="editor-sheet__lights">
              <span /><span /><span />
            </span>
            <span>WOLFVANE / ZED</span>
            <span>THEME.JSON</span>
          </div>
          <div className="editor-sheet__code">
            <div className="editor-sheet__line"><span className="editor-sheet__number">01</span><span className="editor-sheet__token editor-sheet__token--coral" style={{ width: "42%" }} /></div>
            <div className="editor-sheet__line"><span className="editor-sheet__number">02</span><span className="editor-sheet__token editor-sheet__token--gold" style={{ width: "65%" }} /></div>
            <div className="editor-sheet__line"><span className="editor-sheet__number">03</span><span className="editor-sheet__token editor-sheet__token--violet" style={{ width: "50%" }} /></div>
            <div className="editor-sheet__line"><span className="editor-sheet__number">04</span><span className="editor-sheet__token editor-sheet__token--blue" style={{ width: "72%" }} /></div>
            <div className="editor-sheet__line"><span className="editor-sheet__number">05</span><span className="editor-sheet__token editor-sheet__token--muted" style={{ width: "35%" }} /></div>
            <div className="editor-sheet__line"><span className="editor-sheet__number">06</span><span className="editor-sheet__token editor-sheet__token--coral" style={{ width: "58%" }} /></div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
