"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
  const { id, title, description, destination, category, price, rating, imageUrl } =
    experience;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5">
      {/* Image */}
      <Link href={`/experiences/${id}`} className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Rating badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-zinc-800 backdrop-blur-sm">
          <span className="text-amber-500">★</span>
          {rating}
        </div>
        {/* Category chip */}
        <div className="absolute top-3 right-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium capitalize text-zinc-700 backdrop-blur-sm">
          {category}
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <Link href={`/experiences/${id}`}>
              <h3 className="text-base font-semibold text-zinc-900 truncate hover:text-rose-600 transition-colors">
                {title}
              </h3>
            </Link>
            <p className="mt-0.5 text-xs text-zinc-500 truncate">{destination}</p>
          </div>
          <button
            onClick={() => onToggleFavorite(id)}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            className="shrink-0 flex items-center justify-center h-8 w-8 rounded-full hover:bg-zinc-100 transition-colors"
          >
            <Heart
              className={`h-5 w-5 transition-colors ${
                isFavorite
                  ? "fill-rose-500 text-rose-500"
                  : "text-zinc-400 hover:text-rose-400"
              }`}
            />
          </button>
        </div>

        <p className="mt-2 text-xs leading-relaxed text-zinc-600 line-clamp-2">
          {description}
        </p>

        <div className="mt-auto pt-3 flex items-center justify-between border-t border-zinc-100">
          <span className="text-sm font-bold text-zinc-900">
            ${price}
            <span className="text-xs font-normal text-zinc-500"> / person</span>
          </span>
          <Link
            href={`/experiences/${id}`}
            className="text-xs font-medium text-rose-600 hover:text-rose-700 transition-colors"
          >
            View details →
          </Link>
        </div>
      </div>
    </div>
  );
}