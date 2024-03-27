"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

type AddIngredientProps = {
  recipeId: number;
};

export default function AddIngredient({ recipeId }: AddIngredientProps) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [unitOfMeasurement, setUnitOfMeasurement] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await fetch("/api/ingredient", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        amount,
        unitOfMeasurement,
        recipeId,
      }),
    });
    router.refresh();
    setName("");
    setAmount("");
    setUnitOfMeasurement("");
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
        placeholder="Rezept Name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        className="p-2 bg-gray-300 hover:bg-gray-200 rounded-lg"
      />
      <label htmlFor="amount"></label>
      <input
        type="number"
        name="amount"
        placeholder="Menge"
        value={amount}
        onChange={(e) => setAmount(e.currentTarget.value)}
        className="p-2 bg-gray-300 hover:bg-gray-200 rounded-lg"
      />
      <label htmlFor="unitOfMeasurement"></label>
      <input
        type="text"
        name="unitOfMeasurement"
        placeholder="Maßeinheit"
        value={unitOfMeasurement}
        onChange={(e) => setUnitOfMeasurement(e.currentTarget.value)}
        className="p-2 bg-gray-300 hover:bg-gray-200 rounded-lg"
      />
      <button className="hover:bg-gray-500 p-2 rounded-lg">
        Add new Ingredient
      </button>
    </form>
  );
}
