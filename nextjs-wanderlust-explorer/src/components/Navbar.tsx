"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Heart, User } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/experiences", label: "Explore", icon: Compass },
    { href: "/favorites", label: "Favorites", icon: Heart },
    { href: "/profile", label: "Profile", icon: User },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-zinc-900">
          <Compass className="h-6 w-6 text-rose-500" />
          <span>
            Wanderlust<span className="text-rose-500">Labs</span>
          </span>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-1">
          {links.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-rose-50 text-rose-600"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}