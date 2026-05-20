import { useRef, useState, useEffect } from "react";

/**
 * Returns [ref, isVisible].
 * Attach `ref` to a real DOM element (div, section, etc.).
 * isVisible flips to true once the element enters the viewport.
 */
export default function useIntersectionObserver(threshold = 0.25) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // fire only once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
