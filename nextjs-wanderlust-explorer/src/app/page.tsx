import Link from "next/link";
import { Compass, ArrowRight, Heart, Star, Globe, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-4 text-center">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-amber-50" />

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-rose-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-amber-100/60 blur-3xl" />

        <div className="relative z-10 max-w-3xl">
          {/* Badge */}
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-1.5 text-sm font-medium text-rose-700">
            <Sparkles className="h-4 w-4" />
            Discover 100+ handpicked experiences
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Explore the World{" "}
            <span className="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent">
              Differently
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
            Wanderlust Labs curates unforgettable travel experiences — from
            glacier trekking in Patagonia to cooking classes in Tuscany. Your
            next adventure starts here.
          </p>

          {/* Stats */}
          <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 text-zinc-500">
              <Globe className="h-4 w-4 text-rose-400" />
              <span>50+ destinations</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-500">
              <Star className="h-4 w-4 text-amber-400" />
              <span>4.7 avg rating</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-500">
              <Compass className="h-4 w-4 text-rose-400" />
              <span>100 experiences</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/experiences"
              className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-rose-200 transition-all hover:bg-rose-600 hover:shadow-xl hover:shadow-rose-200 active:scale-[0.98]"
            >
              Explore Experiences
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/favorites"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-8 py-3.5 text-base font-semibold text-zinc-700 shadow-sm transition-all hover:border-zinc-300 hover:bg-zinc-50 hover:shadow-md"
            >
              View Saved
              <Heart className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-50 to-transparent" />
      </section>
    </div>
  );
}
