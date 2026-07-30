"use client";

import { useFavorites } from "@/hooks/useFavorites";
import ExperienceGrid from "@/components/ExperienceGrid";
import { Heart } from "lucide-react";

export default function FavoritesPage() {
  const { favorites, toggleFavorite, isFavorite, favoriteIds, totalFavorites } =
    useFavorites();

  const favoritesSet = new Set(favoriteIds);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <Heart className="h-7 w-7 text-red-500" />
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
            Mis favoritos
          </h1>
        </div>
        <p className="mt-1 text-zinc-500 dark:text-zinc-400">
          {totalFavorites === 0
            ? "Aún no has guardado ninguna experiencia."
            : `Tienes ${totalFavorites} experiencia${totalFavorites === 1 ? "" : "s"} guardada${totalFavorites === 1 ? "" : "s"}.`}
        </p>
      </div>

      {/* Grid */}
      <ExperienceGrid
        experiences={favorites}
        favorites={favoritesSet}
        onToggleFavorite={toggleFavorite}
        emptyMessage="No tienes favoritos aún. Explora experiencias y guarda las que más te gusten."
      />
    </div>
  );
}