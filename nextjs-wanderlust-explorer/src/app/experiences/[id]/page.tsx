"use client";

import { useEffect } from "react";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Heart, MapPin, Star, Tag } from "lucide-react";
import { experiences } from "@/data/experiences";
import { useFavorites } from "@/hooks/useFavorites";

export default function ExperienceDetailPage() {
  const params = useParams<{ id: string }>();
  const { isFavorite, toggleFavorite } = useFavorites();

  const experience = experiences.find((exp) => exp.id === params.id);

  if (!experience) {
    notFound();
  }

  const fav = isFavorite(experience.id);

  // ── Update document title dynamically ───────────────────────────
  useEffect(() => {
    document.title = `${experience.title} — Wanderlust Labs`;
    return () => {
      document.title = "Wanderlust Labs — Explorer";
    };
  }, [experience.title]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Back button */}
      <Link
        href="/experiences"
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-rose-600"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to experiences
      </Link>

      {/* Main image */}
      <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl">
        <Image
          src={experience.imageUrl}
          alt={experience.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 896px"
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left column — details */}
        <div className="lg:col-span-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
                {experience.title}
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-zinc-400" />
                  {experience.destination}
                </span>
                <span className="flex items-center gap-1">
                  <Tag className="h-4 w-4 text-zinc-400" />
                  <span className="capitalize">{experience.category}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-amber-400" />
                  {experience.rating} rating
                </span>
              </div>
            </div>

            <button
              onClick={() => toggleFavorite(experience.id)}
              aria-label={fav ? "Remove from favorites" : "Add to favorites"}
              className="shrink-0 flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium transition-all hover:bg-zinc-50"
            >
              <Heart
                className={`h-5 w-5 ${
                  fav ? "fill-rose-500 text-rose-500" : "text-zinc-400"
                }`}
              />
              {fav ? "Saved" : "Save"}
            </button>
          </div>

          <p className="mt-6 text-base leading-relaxed text-zinc-700">
            {experience.description}
          </p>
        </div>

        {/* Right column — price card */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="text-center">
              <span className="text-3xl font-bold text-zinc-900">
                ${experience.price}
              </span>
              <span className="text-sm text-zinc-500"> / person</span>
            </div>

            <div className="mt-4 flex items-center justify-center gap-1 text-sm text-zinc-600">
              <Star className="h-4 w-4 text-amber-400" />
              <span className="font-semibold">{experience.rating}</span>
              <span className="text-zinc-400">· Excellent</span>
            </div>

            <button
              onClick={() => toggleFavorite(experience.id)}
              className={`mt-6 flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-all ${
                fav
                  ? "border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100"
                  : "bg-rose-500 text-white shadow-sm hover:bg-rose-600"
              }`}
            >
              <Heart className={`h-4 w-4 ${fav ? "fill-rose-500" : ""}`} />
              {fav ? "Remove from Saved" : "Save Experience"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}