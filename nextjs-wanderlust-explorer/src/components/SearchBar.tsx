"use client";

import { Search, X } from "lucide-react";
import { useState, useEffect, useTransition, useCallback } from "react";
import { useExperiences } from "@/hooks/useExperiences";

export default function SearchBar() {
  const { filters, setFilter } = useExperiences();
  const [isPending, startTransition] = useTransition();

  const currentSearch = filters.search;
  const [inputValue, setInputValue] = useState(currentSearch);

  // Sync input when URL changes externally (e.g. browser back/forward)
  useEffect(() => {
    setInputValue(currentSearch);
  }, [currentSearch]);

  const updateSearch = useCallback(
    (term: string) => {
      startTransition(() => {
        setFilter("search", term);
      });
    },
    [setFilter],
  );

  const clearSearch = useCallback(() => {
    setInputValue("");
    updateSearch("");
  }, [updateSearch]);

  return (
    <div className="relative w-full max-w-md">
      <Search
        className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 ${
          isPending ? "text-rose-400" : "text-zinc-400"
        }`}
      />
      <input
        type="text"
        placeholder="Search experiences..."
        value={inputValue}
        onChange={(e) => {
          const val = e.target.value;
          setInputValue(val);
          updateSearch(val);
        }}
        className="w-full rounded-full border border-zinc-200 bg-white py-2.5 pl-10 pr-10 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm outline-none transition-all focus:border-rose-300 focus:ring-2 focus:ring-rose-100"
      />
      {inputValue && (
        <button
          onClick={clearSearch}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}