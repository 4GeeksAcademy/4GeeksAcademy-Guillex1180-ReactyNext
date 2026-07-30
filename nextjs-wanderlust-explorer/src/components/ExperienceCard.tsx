"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Star, MapPin } from "lucide-react";
import type { Experience } from "@/data/experiences";

interface Props {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export default function ExperienceCard({
  experience,
  isFavorite,
  onToggleFavorite,
}: Props) {
  const { id, title, imageUrl, category, destination, price, rating } =
    experience;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      {/* Image */}
      <Link
        href={`/experiences/${id}`}
        className="relative aspect-[4/3] overflow-hidden"
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Category badge */}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-800 backdrop-blur-sm dark:bg-zinc-900/90 dark:text-zinc-200">
          {category}
        </span>
        {/* Favorite button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggleFavorite(id);
          }}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-colors hover:bg-white dark:bg-zinc-900/80 dark:hover:bg-zinc-900"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={`h-4 w-4 transition-colors ${
              isFavorite
                ? "fill-red-500 text-red-500"
                : "text-zinc-600 dark:text-zinc-400"
            }`}
          />
        </button>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <Link href={`/experiences/${id}`}>
          <h3 className="text-lg font-semibold leading-tight text-zinc-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
            {title}
          </h3>
        </Link>

        <div className="mt-2 flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400">
          <MapPin className="h-3.5 w-3.5" />
          <span>{destination}</span>
        </div>

        <div className="mt-2 flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              {rating}
            </span>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4">
          <div>
            <span className="text-lg font-bold text-zinc-900 dark:text-white">
              ${price}
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              /persona
            </span>
          </div>
          <Link
            href={`/experiences/${id}`}
            className="rounded-full bg-emerald-600 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
}