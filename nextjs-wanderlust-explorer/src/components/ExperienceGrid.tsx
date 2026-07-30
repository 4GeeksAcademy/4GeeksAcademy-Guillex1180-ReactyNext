"use client";

import type { Experience } from "@/data/experiences";
import ExperienceCard from "./ExperienceCard";

interface Props {
  experiences: Experience[];
  favorites: Set<string>;
  onToggleFavorite: (id: string) => void;
  emptyMessage?: string;
}

export default function ExperienceGrid({
  experiences,
  favorites,
  onToggleFavorite,
  emptyMessage = "No se encontraron experiencias.",
}: Props) {
  if (experiences.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="mb-4 text-6xl">🔍</div>
        <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300">
          {emptyMessage}
        </p>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          Intenta ajustar los filtros o el término de búsqueda.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {experiences.map((exp) => (
        <ExperienceCard
          key={exp.id}
          experience={exp}
          isFavorite={favorites.has(exp.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}