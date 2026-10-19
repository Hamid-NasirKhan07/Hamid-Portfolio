"use client";

import { useEffect, useState } from "react";

export function BackgroundFx() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* 60px Grid BG */}
      <div className="grid-bg" />

      {/* Atmospheric Glowing Orbs with gentle mouse parallax */}
      <div
        className="orb orb-1"
        style={{
          transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`,
          transition: "transform 1.8s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
      />
      <div
        className="orb orb-2"
        style={{
          transform: `translate(${-mouseOffset.x * 0.8}px, ${-mouseOffset.y * 0.8}px)`,
          transition: "transform 1.8s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
      />
      <div
        className="orb orb-3"
        style={{
          transform: `translate(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px)`,
          transition: "transform 1.8s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
      />
    </div>
  );
}
