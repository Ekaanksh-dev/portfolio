import { useState, useEffect } from "react";

/**
 * Returns the id of whichever section is currently in view.
 * Pass an array of section ids e.g. ["about", "skills", "projects"]
 */
export default function useScrollSpy(ids, offset = 80) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + offset;
      let current = "";

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [ids, offset]);

  return active;
}
