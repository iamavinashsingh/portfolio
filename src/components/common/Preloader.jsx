import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Preloader = (props) => {
  const currentPath = useLocation().pathname;
  const stairParentRef = useRef(null);
  const pageRef = useRef(null);
  const counterRef = useRef(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Only show the preloader on initial site load
  useEffect(() => {
    const loaded = sessionStorage.getItem("portfolio-loaded");
    if (loaded) {
      setHasLoaded(true);
    }
  }, []);

  useGSAP(
    function () {
      if (hasLoaded) {
        // Simple fade-in for route changes instead of full preloader
        gsap.from(pageRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        });
        return;
      }

      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem("portfolio-loaded", "true");
        },
      });

      // Counter animation 0 → 100
      tl.to(
        counterRef.current,
        {
          innerText: 100,
          duration: 1.5,
          ease: "power2.inOut",
          snap: { innerText: 1 },
          onUpdate: function () {
            if (counterRef.current) {
              counterRef.current.textContent =
                Math.round(
                  gsap.getProperty(counterRef.current, "innerText")
                ) + "%";
            }
          },
        },
        0
      );

      // Show stair container
      tl.to(
        stairParentRef.current,
        {
          display: "block",
        },
        0
      );

      // Stairs expand down
      tl.from(
        ".stair",
        {
          height: 0,
          duration: 0.6,
          stagger: { amount: -0.2 },
          ease: "power2.inOut",
        },
        0.2
      );

      // Counter fade out
      tl.to(counterRef.current, {
        opacity: 0,
        duration: 0.3,
      });

      // Stairs slide out
      tl.to(".stair", {
        y: "100%",
        duration: 0.6,
        stagger: { amount: -0.25 },
        ease: "power2.inOut",
      });

      // Hide stair container
      tl.to(stairParentRef.current, {
        display: "none",
      });

      // Reset stairs for potential reuse
      tl.set(".stair", { y: "0%" });

      // Page reveal
      gsap.from(pageRef.current, {
        opacity: 0,
        delay: 1.3,
        duration: 0.6,
        ease: "power2.out",
      });
    },
    [currentPath, hasLoaded]
  );

  return (
    <div>
      {/* Stair Preloader */}
      <div
        ref={stairParentRef}
        className="h-screen w-full fixed z-[60] top-0"
        style={{ display: hasLoaded ? "none" : "block" }}
      >
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-[#0a0a0a]" />
          <div className="stair h-full w-1/5 bg-[#0a0a0a]" />
          <div className="stair h-full w-1/5 bg-[#0a0a0a]" />
          <div className="stair h-full w-1/5 bg-[#0a0a0a]" />
          <div className="stair h-full w-1/5 bg-[#0a0a0a]" />
        </div>
        {/* Counter */}
        <div className="absolute inset-0 flex items-end justify-end p-10">
          <span
            ref={counterRef}
            className="text-white text-6xl sm:text-8xl font-bold tracking-tighter"
          >
            0%
          </span>
        </div>
      </div>

      {/* Page Content */}
      <div ref={pageRef}>{props.children}</div>
    </div>
  );
};

export default Preloader;
