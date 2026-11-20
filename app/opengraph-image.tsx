import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "A. Mahin — Independent Product Engineer and Builder";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "72px",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#15191B",
          color: "#EAE7DF",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: "0.12em",
            color: "#AEB6B5",
          }}
        >
          <span>ICRMAHIN / PORTFOLIO</span>
          <span>PRODUCT · DESIGN · ENGINEERING</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 92,
              lineHeight: 0.98,
              fontWeight: 600,
              letterSpacing: "-0.075em",
            }}
          >
            Good ideas deserve
          </span>
          <span
            style={{
              marginTop: 8,
              color: "#F16B52",
              fontSize: 110,
              lineHeight: 0.98,
              fontWeight: 500,
              letterSpacing: "-0.08em",
            }}
          >
            working software.
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #3B4547",
            paddingTop: 24,
            fontSize: 20,
            color: "#AEB6B5",
          }}
        >
          <span>A. Mahin — Independent Product Engineer</span>
          <span style={{ color: "#F16B52" }}>icrmahin /</span>
        </div>
      </div>
    ),
    size,
  );
}
