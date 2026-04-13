import { useState, useEffect, useRef } from "react";

export default function useMouse() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e) => {
      currentX = e.clientX;
      currentY = e.clientY;

      if (rafId.current) return; // Already scheduled

      rafId.current = requestAnimationFrame(() => {
        setPosition({ x: currentX, y: currentY });
        rafId.current = null;
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return position;
}
