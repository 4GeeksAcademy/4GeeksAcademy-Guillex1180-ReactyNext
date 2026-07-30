"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "wanderlust-favorites";

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setFavoriteIds(JSON.parse(stored));
      }
    } catch {
      // ignore parse errors
    }
    setIsLoaded(true);
  }, []);

  const persist = useCallback((ids: string[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  }, []);

  const toggleFavorite = useCallback(
    (id: string) => {
      setFavoriteIds((prev) => {
        const next = prev.includes(id)
          ? prev.filter((fid) => fid !== id)
          : [...prev, id];
        persist(next);
        return next;
      });
    },
    [persist],
  );

  const isFavorite = useCallback(
    (id: string) => favoriteIds.includes(id),
    [favoriteIds],
  );

  const clearFavorites = useCallback(() => {
    setFavoriteIds([]);
    persist([]);
  }, [persist]);

  return { favoriteIds, isLoaded, isFavorite, toggleFavorite, clearFavorites };
}