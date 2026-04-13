import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide on touch devices
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) {
      setIsVisible(false);
      return;
    }

    const cursor = cursorRef.current;
    const text = textRef.current;

    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.15,
      ease: "power2",
    });
    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.15,
      ease: "power2",
    });

    const moveCursor = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);

      const isPointer = e.target.closest("[data-cursor-pointer]");
      const isProject = e.target.closest("[data-cursor-project]");

      if (isProject) {
        gsap.to(cursor, {
          scale: 4,
          duration: 0.3,
          ease: "power2.out",
        });
        if (text) {
          text.textContent = "VIEW";
          gsap.to(text, { opacity: 1, duration: 0.2 });
        }
      } else if (isPointer) {
        gsap.to(cursor, {
          scale: 2.5,
          duration: 0.3,
          ease: "power2.out",
        });
        if (text) gsap.to(text, { opacity: 0, duration: 0.15 });
      } else {
        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
        if (text) gsap.to(text, { opacity: 0, duration: 0.15 });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[999] pointer-events-none mix-blend-difference"
      style={{ transform: "translate(-50%, -50%)" }}
    >
      <div className="relative flex items-center justify-center">
        <div className="w-3 h-3 bg-white rounded-full" />
        <span
          ref={textRef}
          className="absolute text-[6px] font-bold tracking-widest text-white opacity-0 whitespace-nowrap"
        >
          VIEW
        </span>
      </div>
    </div>
  );
};

export default CustomCursor;