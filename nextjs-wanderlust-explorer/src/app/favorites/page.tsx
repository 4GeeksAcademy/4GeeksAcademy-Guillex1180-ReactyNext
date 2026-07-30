"use client";

import Link from "next/link";
import { Heart, Trash2, Compass } from "lucide-react";
import { experiences } from "@/data/experiences";
import { useFavorites } from "@/hooks/useFavorites";
import ExperienceGrid from "@/components/ExperienceGrid";

export default function FavoritesPage() {
  const { favoriteIds, isLoaded, toggleFavorite, clearFavorites } = useFavorites();

  const favoriteExperiences = experiences.filter((exp) =>
    favoriteIds.includes(exp.id),
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
            Your Favorites
          </h1>
          <p className="mt-1 text-sm text-zinc-500">
            {isLoaded
              ? `${favoriteIds.length} ${favoriteIds.length === 1 ? "experience" : "experiences"} saved`
              : "Loading..."}
          </p>
        </div>
        {favoriteIds.length > 0 && (
          <button
            onClick={clearFavorites}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-600 transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-600"
          >
            <Trash2 className="h-4 w-4" />
            Clear all
          </button>
        )}
      </div>

      {/* Content */}
      {!isLoaded ? (
        <div className="flex items-center justify-center py-24">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-rose-200 border-t-rose-500" />
        </div>
      ) : favoriteExperiences.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-50">
            <Heart className="h-8 w-8 text-rose-300" />
          </div>
          <h3 className="text-lg font-semibold text-zinc-800">
            No favorites yet
          </h3>
          <p className="mt-1 max-w-sm text-sm text-zinc-500">
            Start exploring and save experiences you love to see them here.
          </p>
          <Link
            href="/experiences"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-rose-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-rose-600"
          >
            <Compass className="h-4 w-4" />
            Explore Experiences
          </Link>
        </div>
      ) : (
        <ExperienceGrid
          experiences={favoriteExperiences}
          favorites={favoriteIds}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
}