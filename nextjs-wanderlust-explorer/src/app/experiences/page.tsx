"use client";

import { Suspense } from "react";
import { useFavorites } from "@/hooks/useFavorites";
import { useExperiences } from "@/hooks/useExperiences";
import ExperienceGrid from "@/components/ExperienceGrid";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";

function ExperiencesContent() {
  const { filtered, clearAll, hasActiveFilters } = useExperiences();
  const { favoriteIds, isLoaded, toggleFavorite } = useFavorites();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
          Explore Experiences
        </h1>
        <p className="mt-1 text-sm text-zinc-500">
          {filtered.length} {filtered.length === 1 ? "experience" : "experiences"} found
          {hasActiveFilters && (
            <button
              onClick={clearAll}
              className="ml-3 text-rose-500 underline underline-offset-2 hover:text-rose-700"
            >
              Clear all filters
            </button>
          )}
        </p>
      </div>

      {/* Search & Filters */}
      <div className="mb-8 space-y-4">
        <SearchBar />
        <FilterBar />
      </div>

      {/* Grid or empty state */}
      {!isLoaded ? (
        <div className="flex items-center justify-center py-24">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-rose-200 border-t-rose-500" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-200 bg-white py-24 text-center">
          <span className="text-6xl">🔍</span>
          <h3 className="mt-4 text-lg font-semibold text-zinc-800">
            No experiences found
          </h3>
          <p className="mt-1 max-w-sm text-sm text-zinc-500">
            We couldn&apos;t find any experiences matching your criteria.
            Try a different search term, category or destination.
          </p>
          {hasActiveFilters && (
            <button
              onClick={clearAll}
              className="mt-6 rounded-full bg-rose-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-rose-600"
            >
              Reset filters
            </button>
          )}
        </div>
      ) : (
        <ExperienceGrid
          experiences={filtered}
          favorites={favoriteIds}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
}

export default function ExperiencesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center py-24">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-rose-200 border-t-rose-500" />
        </div>
      }
    >
      <ExperiencesContent />
    </Suspense>
  );
}