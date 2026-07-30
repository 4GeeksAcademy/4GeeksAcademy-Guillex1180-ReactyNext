import type { Experience } from "@/data/experiences";
import ExperienceCard from "./ExperienceCard";

interface Props {
  experiences: Experience[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export default function ExperienceGrid({
  experiences,
  favorites,
  onToggleFavorite,
}: Props) {
  if (experiences.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-lg font-semibold text-zinc-800">
          No experiences found
        </h3>
        <p className="mt-1 text-sm text-zinc-500">
          Try adjusting your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {experiences.map((exp) => (
        <ExperienceCard
          key={exp.id}
          experience={exp}
          isFavorite={favorites.includes(exp.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}