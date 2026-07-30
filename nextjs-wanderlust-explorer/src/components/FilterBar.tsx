"use client";

import { categories, destinations } from "@/data/experiences";
import { Filter, X } from "lucide-react";

interface Props {
  category: string;
  destination: string;
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
  onReset: () => void;
  hasActiveFilters: boolean;
}

export default function FilterBar({
  category,
  destination,
  onCategoryChange,
  onDestinationChange,
  onReset,
  hasActiveFilters,
}: Props) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Filter className="h-4 w-4 text-zinc-400" />

      {/* Category filter */}
      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-700 transition-colors focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:focus:border-emerald-400"
      >
        <option value="">Todas las categorías</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Destination filter */}
      <select
        value={destination}
        onChange={(e) => onDestinationChange(e.target.value)}
        className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-700 transition-colors focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:focus:border-emerald-400"
      >
        <option value="">Todos los destinos</option>
        {destinations.map((dest) => (
          <option key={dest} value={dest}>
            {dest}
          </option>
        ))}
      </select>

      {/* Reset button */}
      {hasActiveFilters && (
        <button
          onClick={onReset}
          className="flex items-center gap-1 rounded-lg bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
        >
          <X className="h-3.5 w-3.5" />
          Limpiar filtros
        </button>
      )}
    </div>
  );
}