"use client";

import { Suspense, useCallback, useEffect, useRef } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useExperiences } from "@/hooks/useExperiences";
import { useFavorites } from "@/hooks/useFavorites";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import ExperienceGrid from "@/components/ExperienceGrid";

function ExperiencesContent() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const initialized = useRef(false);

  const {
    all,
    filtered,
    searchTerm,
    setSearchTerm,
    categoryFilter,
    setCategoryFilter,
    destinationFilter,
    setDestinationFilter,
  } = useExperiences();

  const { toggleFavorite, favoriteIds } = useFavorites();

  // Sync URL → state on mount
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const s = searchParams.get("search") ?? "";
    const c = searchParams.get("category") ?? "";
    const d = searchParams.get("destination") ?? "";
    if (s) setSearchTerm(s);
    if (c) setCategoryFilter(c);
    if (d) setDestinationFilter(d);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const updateURL = useCallback(
    (params: Record<string, string>) => {
      const sp = new URLSearchParams(searchParams.toString());
      Object.entries(params).forEach(([key, value]) => {
        if (value) {
          sp.set(key, value);
        } else {
          sp.delete(key);
        }
      });
      const query = sp.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [searchParams, pathname, router]
  );

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    updateURL({ search: value, category: categoryFilter, destination: destinationFilter });
  };

  const handleCategoryChange = (value: string) => {
    setCategoryFilter(value);
    updateURL({ search: searchTerm, category: value, destination: destinationFilter });
  };

  const handleDestinationChange = (value: string) => {
    setDestinationFilter(value);
    updateURL({ search: searchTerm, category: categoryFilter, destination: value });
  };

  const handleReset = () => {
    setSearchTerm("");
    setCategoryFilter("");
    setDestinationFilter("");
    router.replace(pathname, { scroll: false });
  };

  const hasActiveFilters = !!(searchTerm || categoryFilter || destinationFilter);
  const favoritesSet = new Set(favoriteIds);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
          Explora experiencias
        </h1>
        <p className="mt-1 text-zinc-500 dark:text-zinc-400">
          {filtered.length} de {all.length} experiencias disponibles
        </p>
      </div>

      {/* Search & Filters */}
      <div className="mb-8 space-y-4">
        <SearchBar value={searchTerm} onChange={handleSearchChange} />
        <FilterBar
          category={categoryFilter}
          destination={destinationFilter}
          onCategoryChange={handleCategoryChange}
          onDestinationChange={handleDestinationChange}
          onReset={handleReset}
          hasActiveFilters={hasActiveFilters}
        />
      </div>

      {/* Grid */}
      <ExperienceGrid
        experiences={filtered}
        favorites={favoritesSet}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
}

export default function ExperiencesPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <div className="mb-4 text-4xl animate-pulse">🌍</div>
          <p className="text-zinc-500 dark:text-zinc-400">Cargando experiencias...</p>
        </div>
      </div>
    }>
      <ExperiencesContent />
    </Suspense>
  );
}