"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Star,
  DollarSign,
  Heart,
} from "lucide-react";
import { experiences } from "@/data/experiences";
import { useFavorites } from "@/hooks/useFavorites";
import type { Experience } from "@/data/experiences";

export default function ExperienceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [experience, setExperience] = useState<Experience | null>(null);

  const id = params.id as string;

  useEffect(() => {
    const found = experiences.find((exp) => exp.id === id);
    setExperience(found ?? null);
    if (found) {
      document.title = `${found.title} — Wanderlust Labs`;
    }
  }, [id]);

  if (!experience) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center">
        <div className="mb-4 text-6xl">🗺️</div>
        <h2 className="text-xl font-semibold text-zinc-700 dark:text-zinc-300">
          Experiencia no encontrada
        </h2>
        <p className="mt-1 text-zinc-500 dark:text-zinc-400">
          La experiencia que buscas no existe o ha sido eliminada.
        </p>
        <Link
          href="/experiences"
          className="mt-6 flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a experiencias
        </Link>
      </div>
    );
  }

  const fav = isFavorite(experience.id);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="mb-6 flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver
      </button>

      {/* Hero image */}
      <div className="relative mb-8 aspect-[2/1] overflow-hidden rounded-2xl">
        <Image
          src={experience.imageUrl}
          alt={experience.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Category badge */}
        <span className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-zinc-800 backdrop-blur-sm dark:bg-zinc-900/90 dark:text-zinc-200">
          {experience.category}
        </span>

        {/* Favorite button */}
        <button
          onClick={() => toggleFavorite(experience.id)}
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-colors hover:bg-white dark:bg-zinc-900/80 dark:hover:bg-zinc-900"
          aria-label={fav ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={`h-5 w-5 ${
              fav ? "fill-red-500 text-red-500" : "text-zinc-600 dark:text-zinc-400"
            }`}
          />
        </button>

        {/* Title overlay */}
        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-3xl font-bold text-white drop-shadow-lg sm:text-4xl">
            {experience.title}
          </h1>
          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-white/80">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {experience.destination}
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              {experience.rating}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Description */}
        <div className="lg:col-span-2">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-white">
            Acerca de esta experiencia
          </h2>
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
            {experience.description}
          </p>
        </div>

        {/* Sidebar card */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-4">
              <span className="text-3xl font-bold text-zinc-900 dark:text-white">
                ${experience.price}
              </span>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                /persona
              </span>
            </div>

            <div className="mb-6 space-y-3 text-sm">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-2 dark:border-zinc-800">
                <span className="text-zinc-500 dark:text-zinc-400">Destino</span>
                <span className="font-medium text-zinc-900 dark:text-white">
                  {experience.destination}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 dark:text-zinc-400">Rating</span>
                <span className="flex items-center gap-1 font-medium text-zinc-900 dark:text-white">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  {experience.rating}
                </span>
              </div>
            </div>

            <Link
              href="/experiences"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              <DollarSign className="h-4 w-4" />
              Reservar ahora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}