import { useEffect, useRef } from "react";
import { createMagnetic } from "../../utils/animations";

const Magnetic = ({ children, strength = 0.35 }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    // Skip magnetic effect on touch devices
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const cleanup = createMagnetic(ref.current, strength);
    return cleanup;
  }, [strength]);

  return (
    <div ref={ref} className="magnetic-wrap">
      {children}
    </div>
  );
};

export default Magnetic;
