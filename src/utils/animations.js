import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Staggered fade-up animation for hero text lines
 */
export function staggerFadeUp(targets, options = {}) {
  return gsap.from(targets, {
    y: 120,
    opacity: 0,
    duration: options.duration || 1.2,
    ease: options.ease || "power4.out",
    stagger: options.stagger || 0.15,
    delay: options.delay || 0,
  });
}

/**
 * Scroll-triggered fade-up for section elements
 */
export function scrollFadeUp(target, options = {}) {
  return gsap.from(target, {
    y: 60,
    opacity: 0,
    duration: options.duration || 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: options.trigger || target,
      start: options.start || "top 85%",
      end: options.end || "top 50%",
      toggleActions: "play none none none",
    },
  });
}

/**
 * Magnetic pull effect for interactive elements
 */
export function createMagnetic(element, strength = 0.35) {
  const xTo = gsap.quickTo(element, "x", {
    duration: 0.6,
    ease: "elastic.out(1, 0.3)",
  });
  const yTo = gsap.quickTo(element, "y", {
    duration: 0.6,
    ease: "elastic.out(1, 0.3)",
  });

  const onMove = (e) => {
    const rect = element.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    xTo((e.clientX - cx) * strength);
    yTo((e.clientY - cy) * strength);
  };

  const onLeave = () => {
    xTo(0);
    yTo(0);
  };

  element.addEventListener("mousemove", onMove);
  element.addEventListener("mouseleave", onLeave);

  return () => {
    element.removeEventListener("mousemove", onMove);
    element.removeEventListener("mouseleave", onLeave);
  };
}
