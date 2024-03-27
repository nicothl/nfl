"use client";

import { IngredientType, RecipeType } from "@/db/schema";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type RecipeProps = {
  isEditable: boolean;
  ingredients?: IngredientType[];
} & RecipeType;

export default function Recipe({
  id,
  name,
  duration,
  isEditable,
}: RecipeProps) {
  const [newName, setNewName] = useState(name);
  const [newDuration, setNewDuration] = useState(duration);
  const router = useRouter();

  async function handleDelete() {
    await fetch("/api/recipe", {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
      headers: { "Content-Type": "application/json" },
    });
    router.refresh();
  }

  async function handleEdit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await fetch("/api/recipe", {
      method: "PUT",
      body: JSON.stringify({ id: id, name: newName, duration: newDuration }),
      headers: { "Content-Type": "application/json" },
    });
  }

  return (
    <div className="p-8 bg-blue-400 w-fit border border-black border-2 rounded-lg">
      {isEditable ? (
        <form onSubmit={handleEdit}>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            placeholder="Recipe Name"
            value={newName}
            onChange={(e) => setNewName(e.currentTarget.value)}
          />
          <label htmlFor="duration"></label>
          <input
            type="number"
            name="duration"
            placeholder="Recipe Duration"
            value={newDuration}
            onChange={(e) => setNewDuration(e.currentTarget.value)}
          />
          <button onClick={() => handleEdit}>Speichern</button>
        </form>
      ) : (
        <Link href={`/recipes/${id}`}>
          <h1>Name: {name}</h1>
          <p>Dauer: {duration}</p>
        </Link>
      )}
      <button
        className="border border-black p-4 hover:bg-blue-500"
        onClick={handleDelete}
      >
        Rezept löschen
      </button>
    </div>
  );
}
