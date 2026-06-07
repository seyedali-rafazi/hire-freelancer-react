import { useEffect, useRef } from "react";

export default function useOutsideClick<T extends HTMLElement>(
  handler: () => void,
  listenCapturing = true
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    function handelClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    }
    document.addEventListener("click", handelClick, listenCapturing);

    return () => {
      document.removeEventListener("click", handelClick, listenCapturing);
    };
  }, [handler, listenCapturing]);
  return ref;
}
