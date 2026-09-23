import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Onyx SP palette (the dark tokens in globals.css).
const C = {
  bg: "#111215",
  surface: "#1b1c21",
  sunken: "#15161a",
  border: "#3a3d46",
  text: "#eceef2",
  dim: "#a3a7b3",
  accent: "#a29bff",
  live: "#6ee7a0",
};

export default function Image() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: C.bg, padding: 56 }}>
      <div
        style={{
          display: "flex",
          flex: 1,
          padding: 20,
          background: C.surface,
          border: `4px solid ${C.border}`,
          borderRadius: 12,
          boxShadow: "10px 10px 0 0 #000",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            padding: "0 64px",
            background: C.sunken,
            border: `4px solid ${C.border}`,
            borderRadius: 4,
          }}
        >
          <div style={{ display: "flex", fontSize: 32, color: C.accent, letterSpacing: 4 }}>
            SOFTWARE ENGINEER
          </div>
          <div style={{ display: "flex", fontSize: 104, fontWeight: 700, color: C.text, marginTop: 12 }}>
            {siteConfig.name}
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 40, fontSize: 30, color: C.dim }}>
            <div
              style={{ width: 16, height: 16, borderRadius: 8, background: C.live, marginRight: 16 }}
            />
            {siteConfig.url.replace("https://", "")}
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
