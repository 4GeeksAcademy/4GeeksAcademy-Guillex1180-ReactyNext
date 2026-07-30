"use client";

import { useMemo, useCallback } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { experiences } from "@/data/experiences";
import type { Experience } from "@/data/experiences";

/**
 * Custom hook that encapsulates all filtering logic (search, category, destination)
 * and synchronises with URL query parameters.
 *
 * Returns:
 *  - filtered:   the filtered Experience[]
 *  - filters:    current active filter values { search, category, destination }
 *  - setFilter:  update a single filter key in the URL
 *  - clearAll:   remove all filter params from the URL
 *  - hasActiveFilters: boolean shortcut
 */
export function useExperiences() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const search = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? "";
  const destination = searchParams.get("destination") ?? "";

  // ── Filtering logic ──────────────────────────────────────────────
  const filtered = useMemo<Experience[]>(() => {
    return experiences.filter((exp) => {
      // Regex-based search on title (case-insensitive)
      if (search) {
        try {
          if (!new RegExp(search, "i").test(exp.title)) {
            return false;
          }
        } catch {
          // Fallback if user types an invalid regex
          if (!exp.title.toLowerCase().includes(search.toLowerCase())) {
            return false;
          }
        }
      }

      // Exact match on category
      if (category && exp.category !== category) {
        return false;
      }

      // Partial match on destination (e.g. "Italia" matches "Roma, Italia")
      if (
        destination &&
        !exp.destination.toLowerCase().includes(destination.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
  }, [search, category, destination]);

  // ── URL helpers ───────────────────────────────────────────────────
  const setFilter = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      const query = params.toString();
      router.push(query ? `${pathname}?${query}` : pathname);
    },
    [router, pathname, searchParams],
  );

  const clearAll = useCallback(() => {
    router.push(pathname);
  }, [router, pathname]);

  const hasActiveFilters = search !== "" || category !== "" || destination !== "";

  return {
    filtered,
    filters: { search, category, destination },
    setFilter,
    clearAll,
    hasActiveFilters,
  };
}