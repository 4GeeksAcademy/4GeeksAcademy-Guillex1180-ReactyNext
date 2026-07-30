"use client";

import { useExperiences } from "@/hooks/useExperiences";

const CATEGORIES = [
  { value: "", label: "All" },
  { value: "Adventure", label: "Adventure" },
  { value: "Culture", label: "Culture" },
  { value: "Food", label: "Food" },
  { value: "Wellness", label: "Wellness" },
  { value: "Nature", label: "Nature" },
];

const DESTINATIONS = [
  { value: "", label: "All destinations" },
  { value: "Argentina", label: "Argentina" },
  { value: "Australia", label: "Australia" },
  { value: "Brasil", label: "Brasil" },
  { value: "Camboya", label: "Camboya" },
  { value: "Canadá", label: "Canadá" },
  { value: "Chile", label: "Chile" },
  { value: "China", label: "China" },
  { value: "Colombia", label: "Colombia" },
  { value: "Corea del Sur", label: "Corea del Sur" },
  { value: "Costa Rica", label: "Costa Rica" },
  { value: "Croacia", label: "Croacia" },
  { value: "Cuba", label: "Cuba" },
  { value: "Ecuador", label: "Ecuador" },
  { value: "EE.UU.", label: "EE.UU." },
  { value: "Egipto", label: "Egipto" },
  { value: "Emiratos Árabes", label: "Emiratos Árabes" },
  { value: "Escocia", label: "Escocia" },
  { value: "Eslovenia", label: "Eslovenia" },
  { value: "España", label: "España" },
  { value: "Filipinas", label: "Filipinas" },
  { value: "Finlandia", label: "Finlandia" },
  { value: "Francia", label: "Francia" },
  { value: "Grecia", label: "Grecia" },
  { value: "India", label: "India" },
  { value: "Indonesia", label: "Indonesia" },
  { value: "Irlanda", label: "Irlanda" },
  { value: "Islandia", label: "Islandia" },
  { value: "Israel", label: "Israel" },
  { value: "Italia", label: "Italia" },
  { value: "Japón", label: "Japón" },
  { value: "Jordania", label: "Jordania" },
  { value: "Marruecos", label: "Marruecos" },
  { value: "México", label: "México" },
  { value: "Micronesia", label: "Micronesia" },
  { value: "Nepal", label: "Nepal" },
  { value: "Noruega", label: "Noruega" },
  { value: "Nueva Zelanda", label: "Nueva Zelanda" },
  { value: "Países Bajos", label: "Países Bajos" },
  { value: "Perú", label: "Perú" },
  { value: "Portugal", label: "Portugal" },
  { value: "Reino Unido", label: "Reino Unido" },
  { value: "Ruanda", label: "Ruanda" },
  { value: "Senegal", label: "Senegal" },
  { value: "Suiza", label: "Suiza" },
  { value: "Tailandia", label: "Tailandia" },
  { value: "Tanzania", label: "Tanzania" },
  { value: "Turquía", label: "Turquía" },
  { value: "Vietnam", label: "Vietnam" },
];

export default function FilterBar() {
  const { filters, setFilter } = useExperiences();

  const currentCategory = filters.category;
  const currentDestination = filters.destination;

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Category chips */}
      <div className="flex flex-wrap items-center gap-2">
        {CATEGORIES.map((cat) => {
          const isActive = currentCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => setFilter("category", cat.value)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                isActive
                  ? "border-rose-500 bg-rose-500 text-white shadow-sm"
                  : "border-zinc-200 bg-white text-zinc-700 hover:border-rose-200 hover:text-rose-600"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Destination dropdown */}
      <div className="flex items-center gap-2">
        <label
          htmlFor="destination-filter"
          className="text-xs font-medium text-zinc-500"
        >
          Destination:
        </label>
        <select
          id="destination-filter"
          value={currentDestination}
          onChange={(e) => setFilter("destination", e.target.value)}
          className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700 outline-none transition-all focus:border-rose-300 focus:ring-2 focus:ring-rose-100"
        >
          {DESTINATIONS.map((dest) => (
            <option key={dest.value} value={dest.value}>
              {dest.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}