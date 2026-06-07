import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function useDefaultFilter(defaults = {}) {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    let changed = false;

    Object.entries(defaults).forEach(([key, value]) => {
      if (!next.get(key)) {
        next.set(key, value);
        changed = true;
      }
    });

    if (changed) setSearchParams(next, { replace: true });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}
