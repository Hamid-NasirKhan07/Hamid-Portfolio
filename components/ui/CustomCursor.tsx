"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReducedMotion) return;

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setPos({ x: e.clientX, y: e.clientY });

      // Trailing ring delay
      setTimeout(() => {
        setRingPos({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".project-card") ||
        target.closest(".service-card") ||
        target.closest(".interactive")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleElementHover);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleElementHover);
    };
  }, []);

  if (!mounted || !isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full transition-transform duration-75 ease-out mix-blend-screen"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isHovered ? "28px" : "12px",
          height: isHovered ? "28px" : "12px",
          backgroundColor: isHovered ? "var(--accent2)" : "var(--accent)",
          transform: "translate(-50%, -50%)",
        }}
      />
      {/* Outer Ring */}
      <div
        className="fixed pointer-events-none z-[9998] rounded-full transition-all duration-200 ease-out border"
        style={{
          left: `${ringPos.x}px`,
          top: `${ringPos.y}px`,
          width: isHovered ? "60px" : "38px",
          height: isHovered ? "60px" : "38px",
          borderColor: isHovered ? "var(--accent3)" : "var(--accent2)",
          opacity: isHovered ? 0.4 : 0.7,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
