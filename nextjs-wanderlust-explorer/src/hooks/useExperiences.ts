"use client";

import { useMemo, useState } from "react";
import { experiences as allExperiences, type Experience } from "@/data/experiences";

export function useExperiences() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [destinationFilter, setDestinationFilter] = useState("");

  const filtered = useMemo(() => {
    let result = [...allExperiences];

    if (searchTerm) {
      const regex = new RegExp(searchTerm, "i");
      result = result.filter((exp) => regex.test(exp.title));
    }

    if (categoryFilter) {
      result = result.filter((exp) => exp.category === categoryFilter);
    }

    if (destinationFilter) {
      result = result.filter((exp) => exp.destination === destinationFilter);
    }

    return result;
  }, [searchTerm, categoryFilter, destinationFilter]);

  const getExperienceById = (id: string): Experience | undefined =>
    allExperiences.find((exp) => exp.id === id);

  return {
    all: allExperiences,
    filtered,
    searchTerm,
    setSearchTerm,
    categoryFilter,
    setCategoryFilter,
    destinationFilter,
    setDestinationFilter,
    getExperienceById,
  };
}