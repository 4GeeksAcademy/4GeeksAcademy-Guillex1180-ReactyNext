"use client";

import { useState, useCallback, useMemo } from "react";
import { experiences as allExperiences } from "@/data/experiences";

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const toggleFavorite = useCallback((id: string) => {
    setFavoriteIds((prev) => {
      const next = prev.includes(id)
        ? prev.filter((fid) => fid !== id)
        : [...prev, id];
      return next;
    });
  }, []);

  const isFavorite = useCallback(
    (id: string) => favoriteIds.includes(id),
    [favoriteIds]
  );

  const favorites = useMemo(
    () => allExperiences.filter((exp) => favoriteIds.includes(exp.id)),
    [favoriteIds]
  );

  return {
    favoriteIds,
    favorites,
    toggleFavorite,
    isFavorite,
    totalFavorites: favoriteIds.length,
  };
}