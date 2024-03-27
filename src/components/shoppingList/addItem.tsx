"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AddShoppingItem() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await fetch("/api/shoppingList", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        amount,
      }),
    });
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
        onChange={(e) => setAmount(e.currentTarget.valueAsNumber)}
        className="p-2 bg-gray-300 hover:bg-gray-200 rounded-lg"
      />
      <button className="hover:bg-gray-500 p-2 rounded-lg">
        Zur Einkaufsliste hinzufügen
      </button>
    </form>
  );
}
