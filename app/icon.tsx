import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "#020409",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#00d4ff",
          fontWeight: 800,
          borderRadius: 6,
          border: "1px solid rgba(108, 99, 255, 0.4)",
        }}
      >
        H
      </div>
    ),
    {
      ...size,
    }
  );
}
