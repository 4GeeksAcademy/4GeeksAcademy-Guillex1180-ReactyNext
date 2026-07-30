"use client";

import Link from "next/link";
import { User, Heart, Compass, Mail, Settings } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";

export default function ProfilePage() {
  const { favoriteIds, isLoaded } = useFavorites();

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-zinc-900 sm:text-3xl">Profile</h1>

      {/* Profile card */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
        {/* Banner */}
        <div className="h-24 bg-gradient-to-r from-rose-400 to-amber-400" />

        {/* Avatar & info */}
        <div className="px-6 pb-6">
          <div className="-mt-10 flex items-end gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-zinc-100 shadow-sm">
              <User className="h-10 w-10 text-zinc-400" />
            </div>
            <div className="pb-1">
              <h2 className="text-lg font-bold text-zinc-900">Traveler</h2>
              <p className="flex items-center gap-1 text-sm text-zinc-500">
                <Mail className="h-3.5 w-3.5" />
                traveler@wanderlust-labs.com
              </p>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 border-t border-zinc-100">
          <Link
            href="/favorites"
            className="flex flex-col items-center gap-1 border-r border-zinc-100 py-6 transition-colors hover:bg-rose-50"
          >
            <Heart className="h-5 w-5 text-rose-400" />
            <span className="text-2xl font-bold text-zinc-900">
              {isLoaded ? favoriteIds.length : "..."}
            </span>
            <span className="text-xs text-zinc-500">Saved</span>
          </Link>
          <Link
            href="/experiences"
            className="flex flex-col items-center gap-1 py-6 transition-colors hover:bg-amber-50"
          >
            <Compass className="h-5 w-5 text-amber-400" />
            <span className="text-2xl font-bold text-zinc-900">100</span>
            <span className="text-xs text-zinc-500">Experiences</span>
          </Link>
        </div>
      </div>

      {/* Quick links */}
      <div className="mt-6 space-y-2">
        <Link
          href="/favorites"
          className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 text-sm font-medium text-zinc-700 transition-all hover:border-rose-200 hover:bg-rose-50 hover:text-rose-700"
        >
          <Heart className="h-5 w-5 text-rose-400" />
          View Saved Experiences
          <span className="ml-auto text-xs text-zinc-400">
            {isLoaded ? favoriteIds.length : "..."} items
          </span>
        </Link>
        <Link
          href="/experiences"
          className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 text-sm font-medium text-zinc-700 transition-all hover:border-amber-200 hover:bg-amber-50 hover:text-amber-700"
        >
          <Compass className="h-5 w-5 text-amber-400" />
          Browse All Experiences
        </Link>
        <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 text-sm font-medium text-zinc-400">
          <Settings className="h-5 w-5 text-zinc-300" />
          Settings
          <span className="ml-auto text-xs text-zinc-300">Coming soon</span>
        </div>
      </div>
    </div>
  );
}