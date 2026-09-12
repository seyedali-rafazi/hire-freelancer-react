"use client";
import { useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function useDefaultFilter(
  defaults: Record<string, string> = {}
) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const next = new URLSearchParams(searchParams ? searchParams.toString() : "");
    let changed = false;

    Object.entries(defaults).forEach(([key, value]) => {
      if (!next.get(key)) {
        next.set(key, value);
        changed = true;
      }
    });

    if (changed) {
      router.replace(`${pathname}?${next.toString()}`);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}
