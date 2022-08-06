import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0); 
  useEffect(() => {

    const updatePosition = () => {
        const currentScrollYPosition = window.scrollY;
        setScrollPosition(currentScrollYPosition)
    }

    const onScroll = () => window.requestAnimationFrame(updatePosition);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollPosition
}