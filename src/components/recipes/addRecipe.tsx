"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AddRecipe() {
  const [recipeName, setRecipeName] = useState("");
  const [recipeDuration, setRecipeDuration] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    e.preventDefault();
    await fetch("/api/recipe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: recipeName, duration: recipeDuration }),
    });
    setRecipeName("");
    setRecipeDuration("");
    setIsLoading(false);
    router.refresh();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-2 bg-gray-400 rounded-lg w-fit border border-black border-2 flex gap-4"
    >
      <label htmlFor="name"></label>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={recipeName}
        onChange={(e) => setRecipeName(e.currentTarget.value)}
        className="p-2 bg-gray-300 hover:bg-gray-200 rounded-lg"
      />
      <label htmlFor="duration"></label>
      <input
        type="number"
        name="duration"
        placeholder="Dauer"
        value={recipeDuration}
        onChange={(e) => setRecipeDuration(e.currentTarget.value)}
        className="p-2 bg-gray-300 hover:bg-gray-200 rounded-lg"
      />
      <button className="hover:bg-gray-500 p-2 rounded-lg" disabled={isLoading}>
        {isLoading ? "Rezept wird hinzugefuegt..." : "Rezept hinzufügen"}
      </button>
    </form>
  );
}
