"use client";

import { useFavorites } from "@/hooks/useFavorites";
import { User, Mail, Heart, MapPin, Compass } from "lucide-react";

export default function ProfilePage() {
  const { totalFavorites } = useFavorites();

  const user = {
    name: "Alex Wanderlust",
    email: "alex@wanderlustlabs.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=10b981",
    location: "Bogotá, Colombia",
    memberSince: "Enero 2025",
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      {/* Profile card */}
      <div className="mb-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        {/* Cover */}
        <div className="h-32 bg-gradient-to-r from-emerald-400 to-emerald-600" />

        <div className="relative px-6 pb-6">
          {/* Avatar */}
          <div className="relative -mt-16 mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-emerald-100 shadow-lg dark:border-zinc-900">
            <img
              src={user.avatar}
              alt={user.name}
              className="h-full w-full object-cover"
            />
          </div>

          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            {user.name}
          </h2>

          <div className="mt-2 space-y-1.5 text-sm text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              {user.email}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {user.location}
            </div>
            <div className="flex items-center gap-2">
              <Compass className="h-4 w-4" />
              Miembro desde {user.memberSince}
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-colors hover:border-emerald-200 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-800">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-950">
            <Heart className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          </div>
          <p className="text-2xl font-bold text-zinc-900 dark:text-white">
            {totalFavorites}
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Favoritos
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-colors hover:border-blue-200 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-800">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-950">
            <Compass className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <p className="text-2xl font-bold text-zinc-900 dark:text-white">12</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Viajes realizados</p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-colors hover:border-amber-200 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-amber-800">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-950">
            <MapPin className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          </div>
          <p className="text-2xl font-bold text-zinc-900 dark:text-white">8</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Países visitados</p>
        </div>
      </div>

      {/* Favorite destinations */}
      <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">
          Destinos favoritos
        </h3>
        <div className="flex flex-wrap gap-2">
          {["Japón", "Italia", "Tailandia", "Islandia", "Perú", "Francia"].map(
            (dest) => (
              <span
                key={dest}
                className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {dest}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}